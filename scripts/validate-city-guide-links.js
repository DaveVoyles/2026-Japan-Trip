#!/usr/bin/env node

const fs = require("fs");

const dataFiles = [
  "data/days.json",
  "data/routes.json",
  "data/bookings.json",
  "data/city-guide-anchors.json",
];

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

function isTermBoundary(text, index, length) {
  const wordChar = /[\p{L}\p{N}_-]/u;
  const previous = text[index - 1];
  const next = text[index + length];
  return (!previous || !wordChar.test(previous)) && (!next || !wordChar.test(next));
}

function anchorTerms(anchors) {
  return Object.entries(anchors).flatMap(([id, entry]) => {
    const name = typeof entry === "string" ? entry : entry.name;
    const aliases = typeof entry === "string" ? [] : entry.aliases || [];
    const suppressedBy = typeof entry === "string" ? [] : entry.suppressedBy || [];
    return [name, ...aliases].map((term) => ({
      id,
      term,
      lowerTerm: term.toLocaleLowerCase(),
      suppressedBy,
    }));
  });
}

function collectDayText(day) {
  const fields = [
    day.morning,
    day.daytime,
    day.night,
    day.brief?.today,
    day.brief?.next,
    day.brief?.backup,
    day.brief?.ops,
    ...(day.details || []),
  ];
  (day.timeline || []).forEach((entry) => {
    if (!entry.url) fields.push(entry.activity);
  });
  return fields.filter((value) => typeof value === "string").join("\n");
}

function termExists(text, link) {
  const lowerText = text.toLocaleLowerCase();
  let index = lowerText.indexOf(link.lowerTerm);
  while (index !== -1) {
    if (isTermBoundary(text, index, link.term.length)) return true;
    index = lowerText.indexOf(link.lowerTerm, index + 1);
  }
  return false;
}

function findNextLink(text, links, linkedIds, presentIds) {
  const lowerText = text.toLocaleLowerCase();
  let bestMatch = null;

  links.forEach((link) => {
    if (linkedIds.has(link.id)) return;
    if (link.suppressedBy.some((id) => presentIds.has(id))) return;

    let index = lowerText.indexOf(link.lowerTerm);
    while (index !== -1) {
      if (isTermBoundary(text, index, link.term.length)) {
        if (
          !bestMatch ||
          index < bestMatch.index ||
          (index === bestMatch.index && link.term.length > bestMatch.link.term.length)
        ) {
          bestMatch = { index, link };
        }
        break;
      }
      index = lowerText.indexOf(link.lowerTerm, index + 1);
    }
  });

  return bestMatch;
}

function validateDayRendering(days, links) {
  const suppressedBroadHits = [];

  days.forEach((day) => {
    const presentIds = new Set(
      links.filter((link) => termExists(collectDayText(day), link)).map((link) => link.id),
    );
    const linkedIds = new Set();
    const counts = {};

    function renderText(text, url) {
      if (typeof text !== "string" || url) return;
      let remaining = text;
      while (remaining) {
        const match = findNextLink(remaining, links, linkedIds, presentIds);
        if (!match) break;
        linkedIds.add(match.link.id);
        counts[match.link.id] = (counts[match.link.id] || 0) + 1;
        remaining = remaining.slice(match.index + match.link.term.length);
      }
    }

    const brief = day.brief || {};
    [
      brief.today,
      brief.next,
      brief.backup,
      brief.ops,
      day.morning,
      day.daytime,
      day.night,
      ...(day.details || []),
    ].forEach((value) => renderText(value));
    (day.timeline || []).forEach((entry) => renderText(entry.activity, entry.url));

    const duplicates = Object.entries(counts).filter(([, count]) => count > 1);
    if (duplicates.length) {
      throw new Error(`${day.dayLabel} rendered duplicate city-guide links: ${JSON.stringify(duplicates)}`);
    }

    links
      .filter((link) => link.suppressedBy.length && presentIds.has(link.id))
      .forEach((link) => {
        if (link.suppressedBy.some((id) => presentIds.has(id)) && counts[link.id]) {
          suppressedBroadHits.push(`${day.dayLabel}:${link.id}`);
        }
      });
  });

  if (suppressedBroadHits.length) {
    throw new Error(`Broad anchors were not suppressed: ${suppressedBroadHits.join(", ")}`);
  }
}

function validateRouteAndBookingCoverage(routes, bookings, links) {
  const routeMatches = routes.flatMap((route) =>
    (route.segments || []).flatMap((segment) =>
      (segment.stops || []).filter((stop) =>
        links.some((link) => termExists([stop.label, stop.area, stop.summary].filter(Boolean).join("\n"), link)),
      ),
    ),
  );
  const bookingItems = Object.values(bookings).flat();
  const bookingMatches = bookingItems.filter((booking) =>
    links.some((link) =>
      termExists(
        [
          booking.name,
          booking.dates,
          ...Object.values(booking.details || {}).filter((value) => typeof value === "string"),
        ]
          .filter(Boolean)
          .join("\n"),
        link,
      ),
    ),
  );

  if (!routeMatches.length) throw new Error("No route stops match city-guide anchors.");
  if (!bookingMatches.length) throw new Error("No booking rows match city-guide anchors.");
}

function main() {
  dataFiles.forEach(readJson);

  const anchors = readJson("data/city-guide-anchors.json");
  const days = readJson("data/days.json");
  const routes = readJson("data/routes.json");
  const bookings = readJson("data/bookings.json");
  const cityGuideHtml = fs.readFileSync("city-guide.html", "utf8");
  const ids = [...cityGuideHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const links = anchorTerms(anchors).sort((a, b) => b.term.length - a.term.length);

  const missingIds = Object.keys(anchors).filter((id) => !ids.includes(id));
  if (missingIds.length) throw new Error(`Missing city-guide ids: ${missingIds.join(", ")}`);

  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) throw new Error(`Duplicate HTML ids: ${[...new Set(duplicateIds)].join(", ")}`);

  const duplicateTerms = links.filter(
    (link, index) => links.findIndex((other) => other.lowerTerm === link.lowerTerm) !== index,
  );
  if (duplicateTerms.length) {
    throw new Error(`Duplicate city-guide terms: ${[...new Set(duplicateTerms.map((link) => link.term))].join(", ")}`);
  }

  validateDayRendering(days, links);
  validateRouteAndBookingCoverage(routes, bookings, links);

  console.log(
    `City-guide link validation OK: ${Object.keys(anchors).length} anchors, ${links.length} terms/aliases`,
  );
}

main();
