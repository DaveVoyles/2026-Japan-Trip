(() => {
  const body = document.body;
  if (!body || document.getElementById("site-nav")) {
    return;
  }

  const root = body.getAttribute("data-nav-root") || ".";
  const rootUrl = new URL(`${root}/`, window.location.href);
  const rootAsset = (path) => new URL(path, rootUrl).toString();
  const links = [
    { name: "Home", href: "index.html" },
    { name: "Apps", href: "essential-apps.html" },
    { name: "City Guide", href: "city-guide.html" },
    { name: "Transit", href: "transit-guide.html" },
    { name: "Phrases", href: "phrases.html" },
    { name: "Print", href: "print-itinerary.html" },
    { name: "Packing", href: "packing-list.html" },
    { name: "Bookings", href: "bookings-status.html" },
    { name: "Buy", href: "buy.html" },
  ];
  const githubUrl = "https://github.com/DaveVoyles/2026-Japan-Trip-site/tree/main";

  const ensureMeta = (name, content) => {
    if (document.head.querySelector(`meta[name="${name}"]`)) {
      return;
    }
    const meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;
    document.head.append(meta);
  };

  const ensurePwaMetadata = () => {
    if (!document.head.querySelector('link[rel="manifest"]')) {
      const manifest = document.createElement("link");
      manifest.rel = "manifest";
      manifest.href = rootAsset("manifest.webmanifest");
      document.head.append(manifest);
    }
    ensureMeta("theme-color", "#b11f4b");
    ensureMeta("apple-mobile-web-app-capable", "yes");
    ensureMeta("apple-mobile-web-app-title", "Japan 2026");
  };

  const registerOfflineCache = () => {
    const canRegister =
      "serviceWorker" in navigator &&
      (window.location.protocol === "https:" ||
        window.location.hostname === "localhost");

    if (!canRegister) {
      return;
    }

    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(rootAsset("sw.js?v=20260519a"))
        .catch((error) =>
          console.warn("Offline cache registration failed", error),
        );
    });
  };

  ensurePwaMetadata();
  registerOfflineCache();

  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.id = "site-nav";
  nav.setAttribute("aria-label", "Site navigation");

  const mainTarget = document.querySelector("main, .wrap, .guide");
  if (mainTarget) {
    if (!mainTarget.id) {
      mainTarget.id = "main-content";
    }
    if (!mainTarget.hasAttribute("tabindex")) {
      mainTarget.setAttribute("tabindex", "-1");
    }
  }

  const skipLink = document.createElement("a");
  skipLink.className = "skip-link";
  skipLink.href = mainTarget ? `#${mainTarget.id}` : "#site-nav";
  skipLink.textContent = mainTarget
    ? "Skip to main content"
    : "Skip to navigation";

  const currentPath = window.location.pathname;
  const linksHtml = links
    .map((link) => {
      const normalizedHref = link.href.replace(/^\.\//, "/");
      const current =
        currentPath.endsWith(normalizedHref.replace(/^\//, "")) ||
        currentPath.endsWith(normalizedHref);
      const ariaCurrent = current ? ' aria-current="page"' : "";
      return `<li><a href="${rootAsset(link.href)}"${ariaCurrent}>${link.name}</a></li>`;
    })
    .join("");
  const controlsHtml = `
    <li>
      <button class="site-nav__control" type="button" data-scheme-cycle>
        Palette: <span data-scheme-label>Notre Dame</span>
      </button>
    </li>
    <li>
      <button class="site-nav__control" type="button" data-theme-toggle>
        Light/Dark <span data-theme-icon>🌙</span>
      </button>
    </li>
    <li>
      <a href="${githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
    </li>
  `;

  nav.innerHTML = `
    <div class="site-nav__inner">
      <div class="site-nav__brand">Japan Trip 2026</div>
      <div class="site-nav__freshness" title="Reload once on Wi-Fi after itinerary changes so offline pages are current.">Updated May 23</div>
      <button class="site-nav__toggle" type="button" aria-expanded="false" aria-controls="site-nav-links">
        Menu
      </button>
      <ul class="site-nav__links" id="site-nav-links">${linksHtml}${controlsHtml}</ul>
    </div>
  `;

  body.insertBefore(skipLink, body.firstChild);
  body.insertBefore(nav, skipLink.nextSibling);

  const toggle = nav.querySelector(".site-nav__toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }
})();
