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
    $("[data-research-cluster]").each(function() {
      var active = $(this).data("research-cluster") === id;
      $(this).toggleClass("is-active", active).toggleClass("is-muted", !active);
    });
    $("[data-research-token]").each(function() {
      $(this).toggleClass("is-active", $(this).data("research-token") === id);
    });
    $("[data-research-panel]").each(function() {
      var active = $(this).data("research-panel") === id;
      $(this).toggleClass("is-active", active).prop("hidden", !active);
    });
    $("[data-research-panel='" + id + "'] [data-research-paper-rail]").scrollTop(0);
    var details = $("[data-research-details]")[0];
    var compactLayout = window.matchMedia && window.matchMedia("(max-width: 72rem)").matches;
    if (details && compactLayout) {
      window.requestAnimationFrame(function() {
        var bounds = details.getBoundingClientRect();
        if (bounds.top < 0 || bounds.top > window.innerHeight) {
          details.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  };

  $("[data-research-node]").on("click focus", function() {
    activateResearchTheme($(this).data("research-node"));
  });

  $("[data-research-token]").on("click", function() {
    activateResearchTheme($(this).data("research-token"));
  });

  var fieldSurface = $("[data-research-field-pan]");
  var researchCloud = $("[data-research-cloud]");
  var fieldDrag = null;
  var endFieldDrag = function() {
    if (!fieldDrag) {
      return;
    }
    fieldDrag = null;
    fieldSurface.removeClass("is-dragging");
    researchCloud.removeClass("is-dragging");
  };

  fieldSurface.on("pointerdown", function(event) {
    if (!researchCloud.length || event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    fieldDrag = {
      startX: event.clientX,
      startY: event.clientY,
      panX: parseFloat(researchCloud.css("--field-pan-x")) || 0,
      panY: parseFloat(researchCloud.css("--field-pan-y")) || 0
    };
    fieldSurface.addClass("is-dragging");
    researchCloud.addClass("is-dragging");
    if (this.setPointerCapture) {
      this.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
  });

  fieldSurface.on("pointermove", function(event) {
    if (!fieldDrag) {
      return;
    }
    var panX = Math.max(-72, Math.min(72, fieldDrag.panX + event.clientX - fieldDrag.startX));
    var panY = Math.max(-58, Math.min(58, fieldDrag.panY + event.clientY - fieldDrag.startY));
    researchCloud[0].style.setProperty("--field-pan-x", panX + "px");
    researchCloud[0].style.setProperty("--field-pan-y", panY + "px");
  });

  fieldSurface.on("pointerup pointercancel pointerleave", endFieldDrag);

  // Project filtering
  $("[data-project-filter]").on("click", function() {
    var filter = $(this).data("project-filter");
    $("[data-project-filter]").removeClass("is-active").attr("aria-pressed", "false");
    $(this).addClass("is-active").attr("aria-pressed", "true");
    $("[data-project-card]").each(function() {
      $(this).toggleClass("is-hidden", filter !== "all" && $(this).data("theme") !== filter);
    });
  });

  // Live Scholar and GitHub snapshot
  var liveSnapshotUrl = "https://raw.githubusercontent.com/924973292/924973292.github.io/google-scholar-stats/google_scholar_crawler/results/live_snapshot.json";
  var liveSnapshotPromise = null;
  var loadLiveSnapshot = function() {
    if (!liveSnapshotPromise) {
      if (!window.fetch) {
        liveSnapshotPromise = Promise.reject(new Error("Fetch is unavailable"));
      } else {
        liveSnapshotPromise = window.fetch(liveSnapshotUrl + "?v=" + Date.now(), {
          cache: "no-store"
        }).then(function(response) {
          if (!response.ok) {
            throw new Error("Live snapshot request failed");
          }
          return response.json();
        });
      }
    }
    return liveSnapshotPromise;
  };

  var formatLiveDate = function(value) {
    if (!value) {
      return "";
    }
    var normalized = String(value).replace(" ", "T").replace(/(\.\d{3})\d+/, "$1");
    var date = new Date(normalized);
    if (isNaN(date.getTime())) {
      return "";
    }
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  var updateLiveMetrics = function(snapshot) {
    var scholar = snapshot.scholar || {};
    var github = snapshot.github || {};
    var metricValues = {
      "citations": scholar.citations,
      "github-stars": github.available === false && !Number(github.stars) ? null : github.stars
    };
    Object.keys(metricValues).forEach(function(key) {
      if (metricValues[key] === undefined || metricValues[key] === null) {
        return;
      }
      $("[data-live-metric='" + key + "']").text(
        Number(metricValues[key]).toLocaleString("en-US")
      );
    });
    if (scholar.source_updated) {
      $("[data-live-meta='citations']").text(
        "Google Scholar · " + formatLiveDate(scholar.source_updated)
      );
    }
    if (github.updated) {
      $("[data-live-meta='github-stars']").text(
        "GitHub REST API · " + formatLiveDate(github.updated)
      );
    }
  };

  var refreshGithubStarsLive = function() {
    if (!$("[data-live-metric='github-stars']").length || !window.fetch) {
      return Promise.resolve();
    }
    var page = 1;
    var totalStars = 0;
    var fetchPage = function() {
      return window.fetch(
        "https://api.github.com/users/924973292/repos?type=all&per_page=100&page=" + page,
        { cache: "no-store" }
      ).then(function(response) {
        if (!response.ok) {
          throw new Error("GitHub repository request failed");
        }
        return response.json();
      }).then(function(repositories) {
        repositories.forEach(function(repository) {
          totalStars += Number(repository.stargazers_count || 0);
        });
        if (repositories.length === 100) {
          page += 1;
          return fetchPage();
        }
        $("[data-live-metric='github-stars']").text(totalStars.toLocaleString("en-US"));
        $("[data-live-meta='github-stars']").text("GitHub REST API · now");
      });
    };
    return fetchPage();
  };

  if ($("[data-live-metric]").length || $("[data-live-publications]").length) {
    loadLiveSnapshot().then(function(snapshot) {
      updateLiveMetrics(snapshot);
      return refreshGithubStarsLive().catch(function() {
        return undefined;
      });
    }).catch(function() {
      $("[data-live-publication-count]").text("Live snapshot unavailable");
    });
  }

  // Publication explorer
  var publicationCards = $("[data-publication-card]");
  var publicationList = $("[data-publication-list]");
  var filterState = {
    scope: "all",
    year: "all",
    status: "all",
    role: "all",
    area: "all",
    type: "all",
    query: "",
    sort: "newest"
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

  var collectionMatches = function(card) {
    var collection = filterState.scope;
    if (collection === "selected" && String(card.data("selected")) !== "true") {
      return false;
    }
    if (collection === "lead" &&
      ["first-author", "co-first-author"].indexOf(card.data("role")) === -1) {
      return false;
    }
    if (collection === "peer-reviewed" && card.data("status") !== "published") {
      return false;
    }
    if (collection === "non-final" && card.data("status") !== "ongoing") {
      return false;
    }
    return true;
  };

  var sortPublicationCards = function() {
    if (!publicationList.length) {
      return;
    }
    var cards = publicationCards.get().sort(function(first, second) {
      var firstTitle = $(first).find(".publication-card__title").text().trim().toLowerCase();
      var secondTitle = $(second).find(".publication-card__title").text().trim().toLowerCase();
      var firstYear = Number($(first).data("year"));
      var secondYear = Number($(second).data("year"));
      if (filterState.sort === "title") {
        return firstTitle.localeCompare(secondTitle);
      }
      if (filterState.sort === "title-desc") {
        return secondTitle.localeCompare(firstTitle);
      }
      return filterState.sort === "oldest" ? firstYear - secondYear : secondYear - firstYear;
    });
    publicationList.children("[data-publication-card]").detach();
    publicationList.find("[data-generated-year]").remove();
    var lastYear = null;
    cards.forEach(function(card) {
      var year = String($(card).data("year"));
      if (filterState.sort === "newest" || filterState.sort === "oldest") {
        if (year !== lastYear) {
          publicationList.append(
            $("<h2>", {
              class: "publication-year-heading",
              "data-generated-year": "true",
              text: year
            })
          );
          lastYear = year;
        }
      }
      publicationList.append(card);
    });
  };

  var updatePublicationYearHeadings = function() {
    publicationList.find("[data-generated-year]").each(function() {
      var heading = $(this);
      var visible = false;
      var next = heading.next();
      while (next.length && !next.is("[data-generated-year]")) {
        if (!next.hasClass("is-hidden")) {
          visible = true;
          break;
        }
        next = next.next();
      }
      heading.toggleClass("is-hidden", !visible);
    });
  };

  var updatePublicationFilter = function() {
    var visible = 0;
    publicationCards.each(function() {
      var card = $(this);
      var haystack = (card.text() + " " + card.data("tags")).toLowerCase();
      var matches =
        collectionMatches(card) &&
        (filterState.year === "all" || String(card.data("year")) === filterState.year) &&
        (filterState.status === "all" || card.data("status") === filterState.status) &&
        (filterState.role === "all" || card.data("role") === filterState.role) &&
        (filterState.area === "all" || card.data("area") === filterState.area) &&
        (filterState.type === "all" || card.data("type") === filterState.type) &&
        (!filterState.query || haystack.indexOf(filterState.query) !== -1);

      card.toggleClass("is-hidden", !matches);
      if (matches) {
        visible += 1;
      }
    });
    sortPublicationCards();
    updatePublicationYearHeadings();
    $("[data-filter-result]").text(visible + " research item" + (visible === 1 ? "" : "s") + " shown");
    $("[data-publication-filter-summary]").text(
      filterState.sort === "title" || filterState.sort === "title-desc"
        ? "Sorted alphabetically · status shown explicitly"
        : (filterState.sort === "oldest" ? "Oldest first · status shown explicitly" : "Newest first · status shown explicitly")
    );
    var activeFilters = [];
    if (filterState.scope !== "all") {
      activeFilters.push(filterState.scope === "lead" ? "First / co-first" : filterState.scope.replace("-", " "));
    }
    if (filterState.year !== "all") { activeFilters.push(filterState.year); }
    if (filterState.status !== "all") { activeFilters.push(filterState.status); }
    if (filterState.role !== "all") { activeFilters.push(filterState.role.replace("-", " ")); }
    if (filterState.type !== "all") { activeFilters.push(filterState.type.replace("-", " ")); }
    if (filterState.area !== "all") {
      var areaLabel = $("[data-area-filter] option[value='" + filterState.area + "']").text();
      activeFilters.push(areaLabel || filterState.area);
    }
    if (filterState.query) { activeFilters.push("search: " + filterState.query); }
    $("[data-active-filter-summary]").text(
      activeFilters.length ? "Active filters · " + activeFilters.join(" · ") : "Showing the complete verified record"
    );
    updatePublicationUrl();
  };

  var setScope = function(scope) {
    filterState.scope = scope;
    $("[data-scope-filter]").each(function() {
      var active = $(this).data("scope-filter") === scope;
      $(this).toggleClass("is-active", active).attr("aria-pressed", active ? "true" : "false");
    });
  };

  var setArea = function(area) {
    filterState.area = area;
    $("[data-area-filter]").val(area);
    $("[data-area-filter-button]").each(function() {
      var active = $(this).data("area-filter-button") === area;
      $(this).toggleClass("is-active", active).attr("aria-pressed", active ? "true" : "false");
    });
  };

  var setPublicationQueryState = function() {
    var params = new URLSearchParams(window.location.search);
    ["scope", "year", "status", "role", "area", "type", "query", "sort"].forEach(function(key) {
      if (params.get(key)) {
        filterState[key] = params.get(key);
      }
    });
  };

  if (publicationCards.length) {
    populatePublicationYears();
    setPublicationQueryState();
    setScope(filterState.scope);
    setArea(filterState.area);
    $("[data-year-filter]").val(filterState.year);
    $("[data-status-select]").val(filterState.status);
    $("[data-role-filter]").val(filterState.role);
    $("[data-type-filter]").val(filterState.type);
    $("[data-area-filter]").val(filterState.area);
    $("[data-publication-search]").val(filterState.query);
    $("[data-publication-sort]").val(filterState.sort);
    updatePublicationFilter();
  }

  $("[data-scope-filter]").on("click", function() {
    setScope($(this).data("scope-filter"));
    updatePublicationFilter();
  });
  $("[data-area-filter-button]").on("click", function() {
    setArea($(this).data("area-filter-button"));
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
  $("[data-type-filter]").on("change", function() {
    filterState.type = $(this).val();
    updatePublicationFilter();
  });
  $("[data-area-filter]").on("change", function() {
    setArea($(this).val());
    updatePublicationFilter();
  });
  $("[data-publication-search]").on("input", function() {
    filterState.query = $(this).val().trim().toLowerCase();
    updatePublicationFilter();
  });
  $("[data-publication-sort]").on("change", function() {
    filterState.sort = $(this).val();
    updatePublicationFilter();
  });
  $("[data-filter-reset]").on("click", function() {
    filterState = { scope: "all", year: "all", status: "all", role: "all", area: "all", type: "all", query: "", sort: "newest" };
    setScope("all");
    setArea("all");
    $("[data-year-filter], [data-status-select], [data-role-filter], [data-type-filter]").val("all");
    $("[data-publication-search]").val("");
    $("[data-publication-sort]").val("newest");
    updatePublicationFilter();
  });

  // Populate citations and uncurated records from the live Scholar snapshot.
  var escapeHtml = function(value) {
    return $("<div>").text(value || "").html();
  };
  var renderLivePublications = function(snapshot) {
    var liveScholar = snapshot.scholar || {};
    var livePublications = liveScholar.publications || [];
    var curatedIds = {};
    publicationCards.each(function() {
      var scholarId = $(this).data("scholar-id");
      if (scholarId) {
        curatedIds[scholarId] = true;
      }
    });
    livePublications.forEach(function(publication) {
      if (publication.id) {
        var citationNodes = $("[data-scholar-id='" + publication.id + "'] [data-live-citations]");
        citationNodes.text((publication.citations || 0) + " Scholar citations").prop("hidden", false);
        if (curatedIds[publication.id]) {
          return;
        }
      }
      if (!publication.title || !$("[data-live-publication-list]").length) {
        return;
      }
      var item = $("<article>", { class: "live-publication-item" });
      item.html(
        "<div><span class=\"micro-label\">Scholar-indexed · " +
        escapeHtml(publication.year || "Undated") +
        "</span><h3>" + escapeHtml(publication.title) + "</h3><p>" +
        escapeHtml(publication.authors || "Author list pending verification") +
        "</p></div><div><strong>" + escapeHtml(String(publication.citations || 0)) +
        "</strong><span>citations</span><a href=\"" + escapeHtml(publication.url) +
        "\" target=\"_blank\" rel=\"noopener noreferrer\">Scholar ↗</a></div>"
      );
      $("[data-live-publication-list]").append(item);
    });
    var newCount = $("[data-live-publication-list] .live-publication-item").length;
    $("[data-live-publication-count]").text(
      newCount ? newCount + " new record" + (newCount === 1 ? "" : "s") : "No new records"
    );
  };

  if ($("[data-live-publications]").length) {
    loadLiveSnapshot().then(renderLivePublications).catch(function() {
      $("[data-live-publication-count]").text("Live snapshot unavailable");
    });
  }

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
