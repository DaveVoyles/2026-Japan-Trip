(function () {
  var THEME_KEY = "trip-theme-mode";
  var SCHEME_KEY = "trip-theme-scheme";

  var schemeRegistry = {
    nd: { label: "Notre Dame" },
    jhu: { label: "Johns Hopkins" },
    jets: { label: "NY Jets" },
  };

  function parseQuery() {
    var params = new URLSearchParams(window.location.search);
    return {
      theme: params.get("theme") || params.get("clawpilotTheme"),
      scheme: params.get("scheme"),
    };
  }

  function getPreferredTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function getThemeFromStorage() {
    return localStorage.getItem(THEME_KEY);
  }

  function getSchemeFromStorage() {
    return localStorage.getItem(SCHEME_KEY);
  }

  function normalizeTheme(theme) {
    return theme === "dark" ? "dark" : "light";
  }

  function normalizeScheme(scheme) {
    return schemeRegistry[scheme] ? scheme : "nd";
  }

  function applyTheme(theme, persist) {
    var value = normalizeTheme(theme);
    document.documentElement.setAttribute("data-theme", value);
    if (persist !== false) {
      localStorage.setItem(THEME_KEY, value);
    }
    updateControlState();
    return value;
  }

  function applyScheme(scheme, persist) {
    var value = normalizeScheme(scheme);
    document.documentElement.setAttribute("data-scheme", value);
    if (persist !== false) {
      localStorage.setItem(SCHEME_KEY, value);
    }
    updateControlState();
    return value;
  }

  function cycleScheme() {
    var keys = Object.keys(schemeRegistry);
    var current = normalizeScheme(
      document.documentElement.getAttribute("data-scheme") || "nd",
    );
    var idx = keys.indexOf(current);
    var next = keys[(idx + 1) % keys.length];
    return applyScheme(next, true);
  }

  function toggleTheme() {
    var current = normalizeTheme(
      document.documentElement.getAttribute("data-theme") || "light",
    );
    var next = current === "dark" ? "light" : "dark";
    return applyTheme(next, true);
  }

  function bindControls() {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (el) {
      el.addEventListener("click", function () {
        toggleTheme();
      });
    });

    document.querySelectorAll("[data-scheme-cycle]").forEach(function (el) {
      el.addEventListener("click", function () {
        cycleScheme();
      });
    });

    document.querySelectorAll("[data-scheme-set]").forEach(function (el) {
      el.addEventListener("click", function () {
        applyScheme(el.getAttribute("data-scheme-set"), true);
      });
    });

    updateControlState();
  }

  function updateControlState() {
    var theme = normalizeTheme(
      document.documentElement.getAttribute("data-theme") || "light",
    );
    var scheme = normalizeScheme(
      document.documentElement.getAttribute("data-scheme") || "nd",
    );
    var label = schemeRegistry[scheme].label;

    document.querySelectorAll("[data-theme-icon]").forEach(function (el) {
      el.textContent = theme === "dark" ? "☀️" : "🌙";
    });

    document.querySelectorAll("[data-scheme-label]").forEach(function (el) {
      el.textContent = label;
    });
  }

  (function init() {
    var query = parseQuery();
    var initialTheme = normalizeTheme(
      query.theme || getThemeFromStorage() || getPreferredTheme(),
    );
    var initialScheme = normalizeScheme(
      query.scheme || getSchemeFromStorage() || "nd",
    );

    applyTheme(initialTheme, false);
    applyScheme(initialScheme, false);

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", bindControls);
    } else {
      bindControls();
    }
  })();

  window.TripTheme = {
    applyTheme: applyTheme,
    toggleTheme: toggleTheme,
    applyScheme: applyScheme,
    cycleScheme: cycleScheme,
    schemes: Object.keys(schemeRegistry),
  };
})();
