/* ==========================================================================
   Portfolio interactions
   ========================================================================== */

$(document).ready(function() {
  var didResize = false;

  var bumpIt = function() {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  };

  bumpIt();
  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  $("#main").fitVids();
  $(".sticky").Stickyfill();

  var stickySideBar = function() {
    var authorButton = $(".author__urls-wrapper button");
    var show = authorButton.length === 0 ? $(window).width() > 1024 : !authorButton.is(":visible");

    if (show) {
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();
  $(window).resize(stickySideBar);

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast");
    $(this).toggleClass("open");
    $(this).attr("aria-expanded", $(this).hasClass("open") ? "true" : "false");
  });

  // Theme
  var themeToggle = $("[data-theme-toggle]");
  var setTheme = function(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    themeToggle.attr("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };

  themeToggle.on("click", function() {
    var current = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current === "dark" ? "light" : "dark");
  });

  // Reading progress and back to top
  var progressBar = $("[data-scroll-progress]");
  var backToTop = $("[data-back-to-top]");
  var updateScrollUI = function() {
    var scrollTop = $(window).scrollTop();
    var scrollable = $(document).height() - $(window).height();
    var progress = scrollable > 0 ? Math.min(100, (scrollTop / scrollable) * 100) : 0;
    progressBar.css("transform", "scaleX(" + progress / 100 + ")");
    backToTop.toggleClass("is-visible", scrollTop > 700);
    $("[data-site-header]").toggleClass("is-scrolled", scrollTop > 20);
  };

  updateScrollUI();
  $(window).on("scroll", updateScrollUI);
  backToTop.on("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Research atlas
  var activateResearchTheme = function(id) {
    $("[data-research-node]").each(function() {
      var active = $(this).data("research-node") === id;
      $(this).toggleClass("is-active", active).attr("aria-pressed", active ? "true" : "false");
    });
    $("[data-research-line]").each(function() {
      $(this).toggleClass("is-active", $(this).data("research-line") === id);
    });
    $("[data-research-panel]").each(function() {
      var active = $(this).data("research-panel") === id;
      $(this).toggleClass("is-active", active).prop("hidden", !active);
    });
  };

  $("[data-research-node]").on("click focus", function() {
    activateResearchTheme($(this).data("research-node"));
  });

  // Project filtering
  $("[data-project-filter]").on("click", function() {
    var filter = $(this).data("project-filter");
    $("[data-project-filter]").removeClass("is-active").attr("aria-pressed", "false");
    $(this).addClass("is-active").attr("aria-pressed", "true");
    $("[data-project-card]").each(function() {
      $(this).toggleClass("is-hidden", filter !== "all" && $(this).data("theme") !== filter);
    });
  });

  // Publication explorer
  var publicationCards = $("[data-publication-card]");
  var filterState = {
    scope: "all",
    year: "all",
    status: "all",
    role: "all",
    topic: "all",
    query: ""
  };

  var populatePublicationYears = function() {
    var years = [];
    publicationCards.each(function() {
      var year = String($(this).data("year"));
      if (years.indexOf(year) === -1) {
        years.push(year);
      }
    });
    years.sort(function(a, b) { return Number(b) - Number(a); });
    var select = $("[data-year-filter]");
    years.forEach(function(year) {
      select.append($("<option>", { value: year, text: year }));
    });
  };

  var updatePublicationUrl = function() {
    if (!window.history || !window.history.replaceState || !publicationCards.length) {
      return;
    }
    var params = new URLSearchParams();
    Object.keys(filterState).forEach(function(key) {
      if (filterState[key] && filterState[key] !== "all") {
        params.set(key, filterState[key]);
      }
    });
    var queryString = params.toString();
    window.history.replaceState({}, "", window.location.pathname + (queryString ? "?" + queryString : ""));
  };

  var updatePublicationFilter = function() {
    var visible = 0;
    publicationCards.each(function() {
      var card = $(this);
      var haystack = (card.text() + " " + card.data("tags")).toLowerCase();
      var matches =
        (filterState.scope === "all" || String(card.data("selected")) === "true") &&
        (filterState.year === "all" || String(card.data("year")) === filterState.year) &&
        (filterState.status === "all" || card.data("status") === filterState.status) &&
        (filterState.role === "all" || card.data("role") === filterState.role) &&
        (filterState.topic === "all" || String(card.data("tags")).toLowerCase().indexOf(filterState.topic) !== -1) &&
        (!filterState.query || haystack.indexOf(filterState.query) !== -1);

      card.toggleClass("is-hidden", !matches);
      if (matches) {
        visible += 1;
      }
    });
    $("[data-filter-result]").text(visible + " research item" + (visible === 1 ? "" : "s") + " shown");
    updatePublicationUrl();
  };

  var setScope = function(scope) {
    filterState.scope = scope;
    $("[data-scope-filter]").each(function() {
      var active = $(this).data("scope-filter") === scope;
      $(this).toggleClass("is-active", active).attr("aria-pressed", active ? "true" : "false");
    });
  };

  if (publicationCards.length) {
    populatePublicationYears();
    var params = new URLSearchParams(window.location.search);
    ["scope", "year", "status", "role", "topic", "query"].forEach(function(key) {
      if (params.get(key)) {
        filterState[key] = params.get(key);
      }
    });
    setScope(filterState.scope);
    $("[data-year-filter]").val(filterState.year);
    $("[data-status-select]").val(filterState.status);
    $("[data-role-filter]").val(filterState.role);
    $("[data-topic-filter]").val(filterState.topic);
    $("[data-publication-search]").val(filterState.query);
    updatePublicationFilter();
  }

  $("[data-scope-filter]").on("click", function() {
    setScope($(this).data("scope-filter"));
    updatePublicationFilter();
  });
  $("[data-year-filter]").on("change", function() {
    filterState.year = $(this).val();
    updatePublicationFilter();
  });
  $("[data-status-select]").on("change", function() {
    filterState.status = $(this).val();
    updatePublicationFilter();
  });
  $("[data-role-filter]").on("change", function() {
    filterState.role = $(this).val();
    updatePublicationFilter();
  });
  $("[data-topic-filter]").on("change", function() {
    filterState.topic = $(this).val();
    updatePublicationFilter();
  });
  $("[data-publication-search]").on("input", function() {
    filterState.query = $(this).val().trim().toLowerCase();
    updatePublicationFilter();
  });
  $("[data-filter-reset]").on("click", function() {
    filterState = { scope: "all", year: "all", status: "all", role: "all", topic: "all", query: "" };
    setScope("all");
    $("[data-year-filter], [data-status-select], [data-role-filter], [data-topic-filter]").val("all");
    $("[data-publication-search]").val("");
    updatePublicationFilter();
  });

  // Copyable citations
  $("[data-copy-bibtex]").on("click", function() {
    var button = $(this);
    var bibtex = button.attr("data-copy-bibtex");
    if (navigator.clipboard && bibtex) {
      navigator.clipboard.writeText(bibtex).then(function() {
        var original = button.text();
        button.text("Copied");
        setTimeout(function() { button.text(original); }, 1600);
      });
    }
  });

  // Lightweight reveal; content remains visible without JavaScript.
  var revealTargets = document.querySelectorAll(".home-section, .project-case, .publication-card, .repository-card");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach(function(target) { target.classList.add("reveal-ready"); });
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealTargets.forEach(function(target) { revealObserver.observe(target); });
  }

  $("a[href*='#']").smoothScroll({ offset: -90 });

  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");
  $(".image-popup").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 300,
    mainClass: "mfp-zoom-in",
    closeOnContentClick: true,
    midClick: true
  });
});
