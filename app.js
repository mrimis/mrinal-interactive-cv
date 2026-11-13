(() => {
  const TRACKS = { g: "Genomics", m: "Machine learning", e: "Software" };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Thread stripes on entries ---------- */
  const entries = [...document.querySelectorAll("[data-t]")];
  const cssVar = { g: "var(--g)", m: "var(--m)", e: "var(--e)" };

  entries.forEach((el) => {
    const tracks = el.dataset.t.split(" ").filter((t) => TRACKS[t]);
    const step = 100 / tracks.length;
    const stops = tracks.map((t, i) => `${cssVar[t]} ${i * step}% ${(i + 1) * step}%`).join(", ");
    const stripe = document.createElement("span");
    stripe.className = "stripe";
    stripe.setAttribute("aria-hidden", "true");
    stripe.style.background = `linear-gradient(180deg, ${stops})`;
    const text = document.createElement("span");
    text.className = "sr-only";
    text.textContent = `Threads: ${tracks.map((t) => TRACKS[t]).join(", ")}.`;
    el.prepend(stripe, text);
  });

  /* ---------- Career genome browser ---------- */
  // Coordinates are years. A year label marks the start of that year.
  const today = new Date();
  const NOW = today.getFullYear() + today.getMonth() / 12;
  const DOMAIN = [2007.6, Math.ceil(NOW) + 0.7];

  // kind: band | role | project | pub | award.  ref = id of the full entry further down the page.
  const FEATURES = [
    { id: "b-btech", kind: "band", s: 2008, e: 2012.5, label: "B.Tech, VIT", tone: "a",
      title: "B.Tech in Bioinformatics", sub: "Vellore Institute of Technology, India. Graduated 2012", href: "#credentials" },
    { id: "b-ms", kind: "band", s: 2012.5, e: 2015.5, label: "M.S., Turku", tone: "b",
      title: "M.S. in Bioinformatics", sub: "University of Turku, Finland. Graduated 2015", href: "#credentials" },
    { id: "b-phd", kind: "band", s: 2015.5, e: 2022, label: "Ph.D., University of Florida", tone: "a",
      title: "Ph.D. in Biology", sub: "University of Florida, Gainesville, FL. Graduated 2021", href: "#credentials" },
    { id: "b-nu", kind: "band", s: 2022.1, e: NOW, label: "Northwestern University", tone: "b",
      title: "Northwestern University", sub: "Feinberg School of Medicine. Perera Lab, Department of Pharmacology. 2022 to present", href: "#experience" },

    { id: "r-vit", kind: "role", lane: 0, s: 2010, e: 2011, label: "Summer trainee, VIT", t: "g", ref: "r-vit" },
    { id: "r-vtt", kind: "role", lane: 1, s: 2012, e: 2015, label: "VTT Finland trainee", t: "m", ref: "r-vtt" },
    { id: "r-phd", kind: "role", lane: 0, s: 2015.5, e: 2022, label: "Ph.D. candidate, computational biology", t: "g", ref: "r-phd" },
    { id: "r-ta", kind: "role", lane: 1, s: 2015.5, e: 2022, label: "Graduate teaching assistant", t: "g", ref: "r-ta" },
    { id: "r-nu", kind: "role", lane: 0, s: 2022.1, e: NOW, label: "Bioinformatics Analyst", t: "g m", ref: "r-nu" },

    { id: "p-bioportal", kind: "project", lane: 0, s: NOW - 2.4, e: NOW, label: "Perera Lab BioPortal", t: "e", ref: "p-bioportal" },
    { id: "p-alagem", kind: "project", lane: 1, s: NOW - 2.4, e: NOW, label: "ALA_GEM", t: "g m", ref: "p-alagem" },
    { id: "p-ai", kind: "project", lane: 2, s: NOW - 2.4, e: NOW, label: "Ancestry-aware AI system", t: "g m", ref: "p-ai" },

    { id: "pub-2011", kind: "pub", x: 2011.5, label: "BMC Bioinformatics", t: "g", ref: "pub-2011" },
    { id: "pub-2013", kind: "pub", x: 2013.5, label: "Egypt. J. Med. Hum. Genet.", t: "g", ref: "pub-2013" },
    { id: "pub-2016", kind: "pub", x: 2016.5, label: "J. Phylogenet. Evol. Biol.", t: "g", ref: "pub-2016" },
    { id: "pub-2018", kind: "pub", x: 2018.5, label: "Heredity", t: "g", ref: "pub-2018" },
    { id: "pub-2019", kind: "pub", x: 2019.5, label: "Microbial Ecology", t: "g", ref: "pub-2019" },
    { id: "pub-2021", kind: "pub", x: 2021.5, label: "Molecular Ecology", t: "g", ref: "pub-2021" },
    { id: "pub-2025", kind: "pub", x: 2025.07, label: "bioRxiv", t: "g", ref: "pub-2025" },
    { id: "pub-2024", kind: "pub", x: 2024.5, label: "Pac. Symp. Biocomput.", t: "g m", ref: "pub-2024" },
    { id: "pub-2023a", kind: "pub", x: 2023.28, label: "AJHG", t: "g", ref: "pub-2023a" },
    { id: "pub-2023b", kind: "pub", x: 2023.72, label: "Clin. Pharmacol. Ther.", t: "g", ref: "pub-2023b" },

    { id: "a-2011", kind: "award", x: 2011.5, label: "Best Poster Award",
      title: "Best Poster Award", sub: "International Society for Computational Biology, 2011", href: "#credentials" },
    { id: "a-2013", kind: "award", x: 2013.5, label: "Travel Fellowship",
      title: "Travel Fellowship Award", sub: "Swiss Institute of Bioinformatics, 2013", href: "#credentials" },
    { id: "a-2015", kind: "award", x: 2015.5, label: "Grinter Fellowship",
      title: "Grinter Fellowship", sub: "University of Florida, 2015", href: "#credentials" },
  ];
  const KIND = { band: "Education and employer", role: "Role", project: "Current project", pub: "Publication", award: "Award" };
  const byFeature = new Map(FEATURES.map((f) => [f.id, f]));

  const stage = document.querySelector("[data-stage]");
  const svgEl = document.querySelector("[data-tracks]");
  const inspector = document.querySelector("[data-inspector]");
  const locus = document.querySelector("[data-locus]");

  let view = [...DOMAIN];
  let selected = "r-nu";
  let W = 0;
  let raf = 0;

  // Vertical layout of the tracks.
  const L = {
    axis: 16, ideoY: 30, ideoH: 26,
    rolesName: 84, rolesY: 92, roleH: 24, roleGap: 6,
    projName: 172, projY: 180, projH: 20, projGap: 6,
    pubName: 276, pubTop: 300, pubBase: 332,
    awardName: 360, awardY: 382,
    thrName: 414, thrY: 424, thrH: 7, thrGap: 5,
    H: 466,
  };

  const X = (v) => ((v - view[0]) / (view[1] - view[0])) * W;
  const textW = (s, px) => s.length * px * 0.56 + 4;
  const tags = (f) => (f.t ? f.t.split(" ") : []);

  function clampView(a, b) {
    let span = Math.max(1.6, Math.min(DOMAIN[1] - DOMAIN[0], b - a));
    let start = a;
    if (start < DOMAIN[0]) start = DOMAIN[0];
    if (start + span > DOMAIN[1]) start = DOMAIN[1] - span;
    return [start, start + span];
  }

  function bar(f, y, h, rx) {
    // One colored slice per thread, stacked like a painted chromosome segment.
    const x0 = X(f.s);
    const x1 = X(f.e);
    const w = Math.max(3, x1 - x0);
    const ts = tags(f);
    const clip = `c-${f.id}`;
    let out = `<clipPath id="${clip}"><rect x="${x0}" y="${y}" width="${w}" height="${h}" rx="${rx}"/></clipPath>`;
    out += `<g clip-path="url(#${clip})"${f.kind === "project" ? ' mask="url(#fade)"' : ""}>`;
    ts.forEach((t, i) => {
      out += `<rect class="c-${t}" x="${x0}" y="${y + (i * h) / ts.length}" width="${w}" height="${h / ts.length + 0.5}"/>`;
    });
    out += "</g>";
    out += `<rect class="f-ring" x="${x0 - 3}" y="${y - 3}" width="${w + 6}" height="${h + 6}" rx="${rx + 3}"/>`;
    // Label inside when it fits, otherwise beside the bar.
    const tw = textW(f.label, 12);
    const visL = Math.max(x0, 0);
    const visR = Math.min(x1, W);
    const mid = y + h / 2 + 4.2;
    if (f.kind !== "project" && visR - visL > tw + 14) {
      out += `<text class="f-lab on-light" x="${visL + 9}" y="${mid}">${esc(f.label)}</text>`;
    } else if (f.kind === "project") {
      out += x0 - 8 - tw > 0
        ? `<text class="f-lab out" x="${x0 - 8}" y="${mid}" text-anchor="end">${esc(f.label)}</text>`
        : `<text class="f-lab on-light" x="${visR - 9}" y="${mid}" text-anchor="end">${esc(f.label)}</text>`;
    } else {
      // Beside the bar, if nothing else in the same lane is in the way.
      const blocked = FEATURES.some((o) => o.kind === "role" && o.lane === f.lane && o.s >= f.e && X(o.s) < x1 + tw + 14);
      if (!blocked && x1 + tw + 8 < W) out += `<text class="f-lab out" x="${x1 + 7}" y="${mid}">${esc(f.label)}</text>`;
    }
    return out;
  }

  function wrap(f, inner) {
    const lens = document.body.dataset.lens;
    const dim = lens && f.t && !tags(f).includes(lens);
    const name = `${KIND[f.kind]}: ${f.title || f.label}`;
    return `<g class="f${f.id === selected ? " is-sel" : ""}${dim ? " is-dim" : ""}" data-f="${f.id}" tabindex="0" role="button" aria-label="${esc(name)}" aria-pressed="${f.id === selected}"><title>${esc(f.title || f.label)}</title>${inner}</g>`;
  }

  function render() {
    W = stage.clientWidth;
    if (!W) return;
    const ppy = W / (view[1] - view[0]);
    let out = `<defs><linearGradient id="fadeG" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.5" stop-color="#fff" stop-opacity="1"/></linearGradient><mask id="fade" maskContentUnits="objectBoundingBox"><rect width="1" height="1" fill="url(#fadeG)"/></mask></defs>`;

    // Ruler
    const every = ppy < 20 ? 5 : ppy < 40 ? 2 : 1;
    for (let y = Math.ceil(view[0]); y <= view[1]; y += 1) {
      const x = X(y);
      out += `<line class="t-grid" x1="${x}" x2="${x}" y1="20" y2="${L.H}"/>`;
      if (y % every === 0) out += `<text class="t-year" x="${x + 4}" y="${L.axis}">${y}</text>`;
    }
    const xn = X(NOW);
    out += `<line class="t-now" x1="${xn}" x2="${xn}" y1="22" y2="${L.H}"/><text class="t-year" x="${xn - 5}" y="${L.H - 3}" text-anchor="end">today</text>`;

    // Ideogram: one chromosome, banded by where I studied and worked.
    out += `<clipPath id="ideo"><rect x="${X(2008)}" y="${L.ideoY}" width="${X(NOW) - X(2008)}" height="${L.ideoH}" rx="${L.ideoH / 2}"/></clipPath>`;
    FEATURES.filter((f) => f.kind === "band").forEach((f) => {
      const x0 = X(f.s);
      const w = X(f.e) - x0;
      let inner = `<g clip-path="url(#ideo)"><rect class="c-band-${f.tone}" x="${x0}" y="${L.ideoY}" width="${w}" height="${L.ideoH}"/></g>`;
      inner += `<rect class="f-ring" x="${x0 + 1}" y="${L.ideoY - 3}" width="${Math.max(2, w - 2)}" height="${L.ideoH + 6}" rx="6"/>`;
      const visL = Math.max(x0, 0);
      const visR = Math.min(x0 + w, W);
      if (visR - visL > textW(f.label, 12) + 20) {
        inner += `<text class="f-lab" x="${visL + 12}" y="${L.ideoY + L.ideoH / 2 + 4.2}">${esc(f.label)}</text>`;
      }
      out += wrap(f, inner);
    });

    // Roles and projects
    FEATURES.filter((f) => f.kind === "role").forEach((f) => {
      out += wrap(f, bar(f, L.rolesY + f.lane * (L.roleH + L.roleGap), L.roleH, 6));
    });
    FEATURES.filter((f) => f.kind === "project").forEach((f) => {
      out += wrap(f, bar(f, L.projY + f.lane * (L.projH + L.projGap), L.projH, 5));
    });

    // Publications as lollipops
    out += `<line class="t-grid" x1="0" x2="${W}" y1="${L.pubBase}" y2="${L.pubBase}" style="stroke:rgba(255,255,255,.22)"/>`;
    const pubs = FEATURES.filter((f) => f.kind === "pub").sort((a, b) => a.x - b.x);
    pubs.forEach((f, i) => {
      const x = X(f.x);
      let inner = `<line x1="${x}" x2="${x}" y1="${L.pubTop + 7}" y2="${L.pubBase}" stroke="#7d95ff" stroke-width="2"/>`;
      inner += `<circle class="c-g" cx="${x}" cy="${L.pubTop}" r="7.5"/>`;
      inner += `<circle class="f-ring" cx="${x}" cy="${L.pubTop}" r="11.5"/>`;
      inner += `<rect x="${x - 13}" y="${L.pubTop - 13}" width="26" height="${L.pubBase - L.pubTop + 14}" fill="transparent"/>`;
      // A journal label is drawn only when it fits before the next lollipop.
      const room = i + 1 < pubs.length ? (pubs[i + 1].x - f.x) * ppy - 30 : Infinity;
      if (ppy > 105 && f.label.length * 6.8 < room) inner += `<text class="f-lab out" x="${x + 13}" y="${L.pubTop + 4}">${esc(f.label)}</text>`;
      out += wrap(f, inner);
    });

    // Awards as diamonds
    FEATURES.filter((f) => f.kind === "award").forEach((f) => {
      const x = X(f.x);
      const y = L.awardY;
      let inner = `<path class="c-award" d="M${x} ${y - 8}L${x + 8} ${y}L${x} ${y + 8}L${x - 8} ${y}Z"/>`;
      inner += `<path class="f-ring" d="M${x} ${y - 13}L${x + 13} ${y}L${x} ${y + 13}L${x - 13} ${y}Z"/>`;
      inner += `<rect x="${x - 13}" y="${y - 13}" width="26" height="26" fill="transparent"/>`;
      if (ppy > 70) inner += `<text class="f-lab out" x="${x + 15}" y="${y + 4}">${esc(f.label)}</text>`;
      out += wrap(f, inner);
    });

    // Threads: where each kind of work shows up, derived from the features above.
    const lens = document.body.dataset.lens;
    Object.keys(TRACKS).forEach((t, i) => {
      const y = L.thrY + i * (L.thrH + L.thrGap);
      const op = lens && lens !== t ? 0.16 : 1;
      FEATURES.filter((f) => (f.kind === "role" || f.kind === "project") && tags(f).includes(t)).forEach((f) => {
        const x0 = X(f.s);
        out += `<rect class="c-${t}" x="${x0}" y="${y}" width="${Math.max(3, X(f.e) - x0)}" height="${L.thrH}" rx="3.5" opacity="${op}"${f.kind === "project" ? ' mask="url(#fade)"' : ""}/>`;
      });
    });

    // Track names last, so they stay readable over anything that pans under them.
    [["Roles", L.rolesName], ["Current projects", L.projName], ["Publications", L.pubName], ["Awards", L.awardName], ["Threads of work", L.thrName]].forEach(([n, y]) => {
      out += `<text class="t-name" x="10" y="${y}">${n}</text>`;
    });

    svgEl.setAttribute("height", L.H);
    svgEl.setAttribute("viewBox", `0 0 ${W} ${L.H}`);
    svgEl.innerHTML = out;
    if (locus) locus.textContent = `career:${Math.max(2008, Math.floor(view[0] + 0.5))}-${Math.min(today.getFullYear(), Math.floor(view[1]))}`;
  }

  function setView(a, b, animate) {
    const target = clampView(a, b);
    cancelAnimationFrame(raf);
    if (!animate || reduceMotion) {
      view = target;
      render();
      return;
    }
    const from = [...view];
    const t0 = performance.now();
    const dur = 420;
    const tick = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      view = [from[0] + (target[0] - from[0]) * e, from[1] + (target[1] - from[1]) * e];
      render();
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }

  function inspect(id) {
    const f = byFeature.get(id);
    if (!f || !inspector) return;
    let title = f.title;
    let sub = f.sub || "";
    let body = "";
    let links = "";
    let href = f.href;
    const src = f.ref && document.getElementById(f.ref);
    if (src) {
      title = src.querySelector("h3").innerHTML;
      const subEl = src.querySelector(".sub");
      const when = src.querySelector(".when");
      sub = [when && when.textContent, subEl && subEl.innerHTML].filter(Boolean).join(". ");
      const p = [...src.querySelectorAll("p")].find((el) => !el.className);
      body = p ? p.innerHTML : "";
      const l = src.querySelector(".links");
      links = l ? l.innerHTML : "";
      href = `#${f.ref}`;
    }
    const chips = tags(f).map((t) => `<span><i style="background:var(--${t})"></i>${TRACKS[t]}</span>`).join("");
    inspector.innerHTML =
      `<p class="kind">${KIND[f.kind]}</p><h2>${title}</h2>` +
      (sub ? `<p class="sub">${sub}</p>` : "") +
      (body ? `<p class="body">${body}</p>` : "") +
      (chips ? `<p class="chips">${chips}</p>` : "") +
      `<p class="more"><a href="${href}">${src ? "Read the full entry" : "See it in the CV"}</a>${links}</p>`;
  }

  function select(id, refocus) {
    selected = id;
    render();
    inspect(id);
    if (refocus) {
      const node = svgEl.querySelector(`[data-f="${id}"]`);
      if (node) node.focus({ preventScroll: true });
    }
  }

  if (stage && svgEl) {
    const presets = {
      all: () => DOMAIN,
      phd: () => [2014.9, 2022.6],
      nu: () => [2021.4, DOMAIN[1]],
    };
    document.querySelectorAll("[data-view]").forEach((b) => {
      b.addEventListener("click", () => setView(...presets[b.dataset.view](), true));
    });
    document.querySelectorAll("[data-nav]").forEach((b) => {
      b.addEventListener("click", () => {
        const span = view[1] - view[0];
        const mid = (view[0] + view[1]) / 2;
        const act = b.dataset.nav;
        if (act === "left") setView(view[0] - span * 0.3, view[1] - span * 0.3, true);
        if (act === "right") setView(view[0] + span * 0.3, view[1] + span * 0.3, true);
        if (act === "in") setView(mid - span * 0.3, mid + span * 0.3, true);
        if (act === "out") setView(mid - span * 0.8, mid + span * 0.8, true);
      });
    });

    // Drag to pan. A press that does not move is a click on a feature.
    let drag = null;
    svgEl.addEventListener("pointerdown", (ev) => {
      if (ev.button) return;
      cancelAnimationFrame(raf);
      drag = { x: ev.clientX, view: [...view], moved: false, hit: ev.target.closest("[data-f]") };
    });
    window.addEventListener("pointermove", (ev) => {
      if (!drag) return;
      const dx = ev.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) < 5) return;
      drag.moved = true;
      svgEl.classList.add("is-drag");
      const dy = (dx / W) * (drag.view[1] - drag.view[0]);
      view = clampView(drag.view[0] - dy, drag.view[1] - dy);
      render();
    });
    const end = () => {
      if (!drag) return;
      const d = drag;
      drag = null;
      svgEl.classList.remove("is-drag");
      if (!d.moved && d.hit) select(d.hit.dataset.f, true);
    };
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", () => {
      drag = null;
      svgEl.classList.remove("is-drag");
    });
    svgEl.addEventListener("keydown", (ev) => {
      const hit = ev.target.closest && ev.target.closest("[data-f]");
      if (hit && (ev.key === "Enter" || ev.key === " ")) {
        ev.preventDefault();
        select(hit.dataset.f, true);
      }
    });

    // The floating highlight bar is only needed once the browser has scrolled away.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([hit]) => document.body.classList.toggle("gb-in-view", hit.isIntersecting), { rootMargin: "-80px 0px 0px 0px" }).observe(stage);
    }

    if ("ResizeObserver" in window) new ResizeObserver(() => render()).observe(stage);
    else window.addEventListener("resize", render);

    // Opening move: start on today and pull back to the whole career.
    const narrow = stage.clientWidth < 620;
    const home = narrow ? [2014.6, DOMAIN[1]] : DOMAIN;
    if (narrow) presets.all = () => DOMAIN;
    inspect(selected);
    if (reduceMotion) {
      setView(...home, false);
    } else {
      view = clampView(NOW - 2.2, DOMAIN[1]);
      render();
      window.setTimeout(() => {
        const from = [...view];
        const t0 = performance.now();
        const tick = (now) => {
          const k = Math.min(1, (now - t0) / 1100);
          const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
          view = [from[0] + (home[0] - from[0]) * e, from[1] + (home[1] - from[1]) * e];
          render();
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }, 350);
    }
  }

  /* ---------- Lens ---------- */
  const lensButtons = [...document.querySelectorAll("[data-lens]")];
  const status = document.querySelector("[data-lens-status]");

  function setLens(next) {
    const lens = TRACKS[next] ? next : "";
    if (lens) document.body.dataset.lens = lens;
    else delete document.body.dataset.lens;
    let shown = 0;
    entries.forEach((el) => {
      const on = !lens || el.dataset.t.split(" ").includes(lens);
      el.classList.toggle("is-off", !on);
      if (on) shown += 1;
    });
    lensButtons.forEach((b) => {
      if (b.dataset.lens) b.setAttribute("aria-pressed", String(b.dataset.lens === lens));
    });
    const bar = document.querySelector("[data-lens-bar]");
    if (bar) {
      bar.hidden = !lens;
      bar.dataset.lens = lens;
      bar.querySelector("[data-lens-bar-text]").textContent = lens
        ? `Highlighting ${TRACKS[lens]}: ${shown} of ${entries.length} entries`
        : "";
    }
    if (status) {
      status.textContent = lens
        ? `Highlighting ${TRACKS[lens]}. ${shown} of ${entries.length} entries match.`
        : "Showing everything.";
    }
    if (svgEl && W) render();
  }

  lensButtons.forEach((b) => {
    b.addEventListener("click", () => {
      const want = b.dataset.lens;
      setLens(document.body.dataset.lens === want ? "" : want);
    });
  });

  /* ---------- Nav: current section ---------- */
  const navLinks = [...document.querySelectorAll(".nav a")];
  const byId = new Map(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (hits) => {
        hits.forEach((hit) => {
          if (!hit.isIntersecting) return;
          navLinks.forEach((a) => a.removeAttribute("aria-current"));
          const link = byId.get(hit.target.id);
          if (link) link.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );
    byId.forEach((_, id) => {
      const target = document.getElementById(id);
      if (target) io.observe(target);
    });
  }

  // Old links used #projects and #home. Send them somewhere sensible.
  const legacy = { projects: "work", home: "top" };
  const hash = window.location.hash.slice(1);
  if (legacy[hash]) {
    const target = document.getElementById(legacy[hash]);
    if (target) target.scrollIntoView();
  }
})();
