const AUDIENCE_DATA = {
  ninos: {
    title: "Niños · Estructura con sentido",
    img: "assets/img/comenzar-a-practicar-sipalki-chaiu-do-kwan-2.jpeg",
    alt: "Niños entrenando Sipalki Chaiu Do Kwan",
    points: [
      "Coordinación motriz, equilibrio y actividad física saludable",
      "Aprender a escuchar, esperar, intentar de nuevo y respetar",
      "Límites claros y pertenencia a una comunidad real"
    ]
  },
  jovenes: {
    title: "Jóvenes · Carácter y defensa",
    img: "assets/img/comenzar-a-practicar-sipalki-chaiu-do-kwan-4.jpg",
    alt: "Jóvenes en clase de Sipalki Chaiu Do Kwan",
    points: [
      "Preparación física integral y tolerancia a la frustración",
      "Defensa personal progresiva y Kickboxing SCDK",
      "Continuidad de procesos en equipo e identidad marcial"
    ]
  },
  adultos: {
    title: "Adultos · Desde cero y a tu ritmo",
    img: "assets/img/comenzar-a-practicar-sipalki-chaiu-do-kwan-6.jpeg",
    alt: "Adultos practicando Sipalki Chaiu Do Kwan",
    points: [
      "Fuerza, movilidad, resistencia y reducción del estrés",
      "Defensa personal aplicable sin requerir experiencia previa",
      "Progresión paso a paso adaptada a tu estado actual"
    ]
  }
};

const LEVELS_DATA = [
  {
    code: "NIVEL 1",
    name: "Iniciado",
    subtitle: "Primer contacto y bases del sistema",
    slug: "programa-tecnico-nivel-1",
    summary:
      "Primer contacto con el sistema. Incorpora bases técnicas, físicas y formativas que estructuran la práctica del Sipalki Chaiu Do Kwan.",
    objetivos: [
      "Incorporar posturas y desplazamientos fundamentales",
      "Aprender técnicas básicas de manos y piernas",
      "Introducir nociones elementales de defensa personal",
      "Incorporar normas de respeto, cuidado y disciplina"
    ],
    contenidos: [
      "Posturas fundamentales, equilibrio y alineación",
      "Avance, retroceso y desplazamientos laterales",
      "Golpes básicos de manos, patadas y bloqueos simples",
      "Zafe y control inicial ante agarres elementales"
    ],
    conducta:
      "Respeto por el instructor y compañeros, cuidado del propio cuerpo y actitud de aprendizaje."
  },
  {
    code: "NIVEL 2",
    name: "Practicante en Recorrido",
    subtitle: "Consolidación e indumentaria oficial",
    slug: "programa-tecnico-nivel-2-practicante-en-recorrido-del-sistema",
    summary:
      "El alumno forma parte activa del proceso de aprendizaje. Consolida bases técnicas, amplía combinaciones y accede a la indumentaria oficial.",
    objetivos: [
      "Consolidar la estructura técnica básica de manos y piernas",
      "Desarrollar combinaciones simples de ataque y defensa",
      "Iniciar aplicación controlada con ejercicios de oposición",
      "Ampliar respuestas ante distintos tipos de agarres"
    ],
    contenidos: [
      "Perfeccionamiento y continuidad del golpeo básico",
      "Encadenamiento de ataque y defensa en combate controlado",
      "Desplazamientos aplicados al intercambio",
      "Prácticas guiadas de oposición y liberación de agarres"
    ],
    conducta:
      "Responsabilidad técnica, cuidado del compañero en ejercicios de oposición y compromiso con la continuidad."
  },
  {
    code: "NIVEL 3",
    name: "Nivel Avanzado",
    subtitle: "Lógica táctica e implementos iniciales",
    slug: "programa-tecnico-nivel-3-nivel-avanzado",
    summary:
      "Dominio técnico para aplicar el repertorio del sistema en situaciones dinámicas de combate y comprensión táctica de distancia y ritmo.",
    objetivos: [
      "Dominar combinaciones avanzadas de manos, piernas y desplazamientos",
      "Aplicar técnicas en situaciones dinámicas de combate",
      "Comprender distancia, ritmo y oportunidad de aplicación",
      "Consolidar la autonomía técnica del practicante"
    ],
    contenidos: [
      "Combinaciones avanzadas con continuidad ofensiva y defensiva",
      "Movimientos circulares, ángulos y control del espacio",
      "Defensa personal aplicada ante ataques diversos",
      "Introducción a bastones como extensión de las técnicas de manos"
    ],
    conducta:
      "Control emocional en prácticas de mayor exigencia y compromiso activo con los valores del sistema."
  },
  {
    code: "NIVEL 4",
    name: "Practicante Integrado",
    subtitle: "Integración plena y armas tradicionales",
    slug: "programa-tecnico-nivel-4-practicante-integrado-al-sistema",
    summary:
      "Integración plena de recursos técnicos y tácticos. Comienza a asumir un rol activo colaborando en el desarrollo del grupo.",
    objetivos: [
      "Articular golpeo, desplazamientos y control del oponente",
      "Gestionar distancia, ritmo y ángulos con criterio táctico",
      "Integrar transiciones: golpeo, agarre, derribo y recuperación",
      "Acompañar a practicantes de niveles iniciales"
    ],
    contenidos: [
      "Combinaciones complejas y continuidad ofensiva en sparring",
      "Gestión táctica del espacio y ángulos de ataque/defensa",
      "Transiciones completas dentro del combate dinámico",
      "Bastones cortos, bastón largo y machetes como extensión manual"
    ],
    conducta:
      "Actitud de colaboración en el grupo, autocontrol en combate y cuidado de quienes inician su recorrido."
  },
  {
    code: "NIVEL 5",
    name: "Referente Técnico",
    subtitle: "Madurez técnica y orientación grupal",
    slug: "programa-tecnico-nivel-5-referente-tecnico",
    summary:
      "Madurez técnica para representar el sistema dentro de la práctica, orientar entrenamientos y acompañar a niveles iniciales e intermedios.",
    objetivos: [
      "Consolidar los principios biomecánicos y tácticos del sistema",
      "Responder espontáneamente ante imprevistos en combate",
      "Integrar todas las fases del combate como proceso único",
      "Orientar técnicamente el entrenamiento grupal"
    ],
    contenidos: [
      "Coherencia biomecánica de cuerpo completo",
      "Adaptación espontánea ante cambios de distancia y contraataques",
      "Lectura táctica del oponente y gestión del ritmo",
      "Continuidad entre golpeo, agarre, derribo y control"
    ],
    conducta:
      "Ejemplo en la transmisión técnica, equilibrio emocional y compromiso con la continuidad del sistema."
  },
  {
    code: "NIVEL DAN",
    name: "Recorrido a la Maestría",
    subtitle: "Enseñanza, investigación y conducción",
    slug: "programa-tecnico-nivel-dan-recorrido-a-la-maestria",
    summary:
      "Inicio del Recorrido a la Maestría. Comprensión profunda del sistema y responsabilidad en su enseñanza, investigación y conducción institucional.",
    objetivos: [
      "Consolidar la comprensión integral técnica, táctica y formativa",
      "Desarrollar capacidad pedagógica para formar practicantes e instructores",
      "Analizar variantes y evolución biomecánica del combate",
      "Sostener y expandir la estructura institucional SCDK"
    ],
    contenidos: [
      "Análisis técnico y biomecánico avanzado del sistema",
      "Didáctica, planificación de clases y metodología de enseñanza",
      "Conducción de prácticas y formación de instructores",
      "Aplicación avanzada de bastones cortos, bastón largo y machetes"
    ],
    conducta:
      "Representación ejemplar de los valores SCDK dentro y fuera del espacio de práctica."
  }
];

let ALL_POSTS = [];
let activeCategory = "Todas";
let searchQuery = "";
let showAllPosts = false;

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInlineMd(text) {
  let out = escapeHtml(text);
  // Images
  out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />');
  // Links
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  // Autolinks <https://...>
  out = out.replace(/&lt;(https?:\/\/[^&]+)&gt;/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  // Bold & italic
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

function markdownToHtml(md) {
  const lines = md.split(/\r?\n/);
  const html = [];
  let inList = false;
  let inQuote = false;

  const closeList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };
  const closeQuote = () => {
    if (inQuote) {
      html.push("</blockquote>");
      inQuote = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      closeList();
      closeQuote();
      continue;
    }
    if (line === "---" || line === "***") {
      closeList();
      closeQuote();
      html.push("<hr />");
      continue;
    }
    if (line.startsWith(">")) {
      closeList();
      if (!inQuote) {
        html.push("<blockquote>");
        inQuote = true;
      }
      html.push(`<p>${formatInlineMd(line.slice(1).trim())}</p>`);
      continue;
    } else {
      closeQuote();
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      closeList();
      const lvl = headingMatch[1].length;
      html.push(`<h${lvl}>${formatInlineMd(headingMatch[2])}</h${lvl}>`);
      continue;
    }

    const listMatch = line.match(/^(?:[-*•]|\d+\.)\s+(.+)$/);
    if (listMatch) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${formatInlineMd(listMatch[1])}</li>`);
      continue;
    } else {
      closeList();
    }

    html.push(`<p>${formatInlineMd(line)}</p>`);
  }
  closeList();
  closeQuote();
  return html.join("\n");
}

function renderAudience(key) {
  const item = AUDIENCE_DATA[key];
  const panel = document.getElementById("audiencePanel");
  if (!item || !panel) return;
  panel.innerHTML = `
    <img src="${item.img}" alt="${escapeHtml(item.alt)}" loading="lazy" />
    <div>
      <h4>${escapeHtml(item.title)}</h4>
      <ul>${item.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}</ul>
    </div>
  `;
}

function initAudienceTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      renderAudience(btn.dataset.audience);
    });
  });
  renderAudience("ninos");
}

function renderLevelDetail(idx) {
  const lv = LEVELS_DATA[idx];
  const detail = document.getElementById("levelsDetail");
  if (!lv || !detail) return;
  detail.innerHTML = `
    <div class="level-detail-head">
      <div>
        <span class="mono-tag" style="color: var(--crimson);">${lv.code}</span>
        <h3>${escapeHtml(lv.name)}</h3>
      </div>
      <button type="button" class="btn btn-ink js-open-post" data-slug="${lv.slug}">
        Leer documento completo →
      </button>
    </div>
    <p class="lead-p">${escapeHtml(lv.summary)}</p>
    <div class="level-columns">
      <div class="level-box">
        <h4>Objetivos del nivel</h4>
        <ul>${lv.objetivos.map((o) => `<li>${escapeHtml(o)}</li>`).join("")}</ul>
      </div>
      <div class="level-box">
        <h4>Contenidos principales</h4>
        <ul>${lv.contenidos.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="level-conduct">
      <strong>Formación de conducta:</strong> ${escapeHtml(lv.conducta)}
    </div>
  `;
}

function initLevelsStepper() {
  const nav = document.getElementById("levelsNav");
  if (!nav) return;
  nav.innerHTML = LEVELS_DATA.map(
    (lv, i) => `
    <button type="button" class="level-tab ${i === 0 ? "is-active" : ""}" data-idx="${i}" role="tab" aria-selected="${i === 0}">
      <span class="level-code">${lv.code}</span>
      <span>
        <strong>${escapeHtml(lv.name)}</strong>
        <small>${escapeHtml(lv.subtitle)}</small>
      </span>
    </button>
  `
  ).join("");

  nav.addEventListener("click", (e) => {
    const btn = e.target.closest(".level-tab");
    if (!btn) return;
    nav.querySelectorAll(".level-tab").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    renderLevelDetail(Number(btn.dataset.idx));
  });

  renderLevelDetail(0);
}

function renderFilterPills() {
  const wrap = document.getElementById("filterPills");
  if (!wrap) return;
  const counts = { Todas: ALL_POSTS.length };
  for (const p of ALL_POSTS) {
    counts[p.categoria] = (counts[p.categoria] || 0) + 1;
  }
  const cats = Object.keys(counts);
  wrap.innerHTML = cats
    .map(
      (cat) => `
    <button type="button" class="pill-btn ${cat === activeCategory ? "is-active" : ""}" data-cat="${escapeHtml(cat)}">
      ${escapeHtml(cat)} (${counts[cat]})
    </button>
  `
    )
    .join("");
}

function renderPostsGrid() {
  const grid = document.getElementById("postsGrid");
  const moreWrap = document.getElementById("archiveMoreWrap");
  const toggleBtn = document.getElementById("toggleAllPosts");
  if (!grid) return;

  const q = searchQuery.trim().toLowerCase();
  const filtered = ALL_POSTS.filter((p) => {
    const catOk = activeCategory === "Todas" || p.categoria === activeCategory;
    if (!catOk) return false;
    if (!q) return true;
    return (
      p.titulo.toLowerCase().includes(q) ||
      p.resumen.toLowerCase().includes(q) ||
      p.contenido_md.toLowerCase().includes(q)
    );
  });

  const limit = showAllPosts || q || activeCategory !== "Todas" ? filtered.length : 6;
  const visible = filtered.slice(0, limit);

  if (!visible.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;color:var(--light-muted);">No se encontraron publicaciones para “${escapeHtml(searchQuery)}”.</p>`;
  } else {
    grid.innerHTML = visible
      .map(
        (p) => `
      <article class="post-card">
        <div class="post-meta">
          <span>${escapeHtml(p.categoria)}</span>
          <span>${escapeHtml(p.fecha)}</span>
        </div>
        <h3>${escapeHtml(p.titulo)}</h3>
        <p>${escapeHtml(p.resumen)}</p>
        <button type="button" class="card-link js-open-post" data-slug="${escapeHtml(p.slug)}">
          Leer publicación completa →
        </button>
      </article>
    `
      )
      .join("");
  }

  if (moreWrap && toggleBtn) {
    if (filtered.length <= 6 || q || activeCategory !== "Todas") {
      moreWrap.style.display = "none";
    } else {
      moreWrap.style.display = "block";
      toggleBtn.textContent = showAllPosts
        ? "Mostrar menos publicaciones"
        : `Ver todas las publicaciones (${filtered.length})`;
    }
  }
}

function openPostBySlug(slug) {
  const post = ALL_POSTS.find((p) => p.slug === slug);
  const modal = document.getElementById("postModal");
  if (!modal) return;

  if (!post) {
    document.getElementById("modalCategory").textContent = "AVISO";
    document.getElementById("modalDate").textContent = "";
    document.getElementById("modalTitle").textContent = "Publicación no encontrada";
    document.getElementById("modalBody").innerHTML =
      "<p>No se pudo cargar esta publicación. Verificá que el archivo <code>data/posts.js</code> esté disponible.</p>";
    document.getElementById("modalOriginalUrl").href = "https://scdkprogramanacional.blogspot.com/";
  } else {
    document.getElementById("modalCategory").textContent = post.categoria.toUpperCase();
    document.getElementById("modalDate").textContent = post.fecha;
    document.getElementById("modalTitle").textContent = post.titulo;
    document.getElementById("modalBody").innerHTML = markdownToHtml(post.contenido_md);
    document.getElementById("modalOriginalUrl").href = post.url_original || "#";
  }

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("mobileStickyBar")?.classList.add("is-hidden");
  modal.querySelector(".modal-scroll").scrollTop = 0;
}

function closeModals() {
  for (const id of ["postModal", "lightboxModal"]) {
    const el = document.getElementById(id);
    if (el && !el.hidden) {
      el.hidden = true;
      el.setAttribute("aria-hidden", "true");
    }
  }
  document.body.style.overflow = "";
  document.getElementById("mobileStickyBar")?.classList.remove("is-hidden");
}

function initModalsAndGallery() {
  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest(".js-open-post");
    if (openBtn) {
      openPostBySlug(openBtn.dataset.slug);
      return;
    }

    const galBtn = e.target.closest(".gallery-item");
    if (galBtn) {
      const lb = document.getElementById("lightboxModal");
      document.getElementById("lightboxImg").src = galBtn.dataset.img;
      document.getElementById("lightboxImg").alt = galBtn.dataset.caption || "Imagen SCDK";
      document.getElementById("lightboxCaption").textContent = galBtn.dataset.caption || "";
      lb.hidden = false;
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      document.getElementById("mobileStickyBar")?.classList.add("is-hidden");
    }
  });

  document.getElementById("modalClose")?.addEventListener("click", closeModals);
  document.getElementById("lightboxClose")?.addEventListener("click", closeModals);

  for (const id of ["postModal", "lightboxModal"]) {
    document.getElementById(id)?.addEventListener("click", (e) => {
      if (e.target.id === id) closeModals();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const drawer = document.getElementById("mobileDrawer");
  if (!toggle || !drawer) return;
  const closeDrawer = () => {
    drawer.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = drawer.hidden;
    drawer.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  });
  drawer.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeDrawer);
  });
  document.addEventListener("click", (e) => {
    if (!drawer.hidden && !drawer.contains(e.target) && !toggle.contains(e.target)) {
      closeDrawer();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !drawer.hidden) closeDrawer();
  });
}

function initWaBuilder() {
  const form = document.getElementById("waBuilder");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("waName").value.trim();
    const age = document.getElementById("waAge").value.trim();
    const city = document.getElementById("waCity").value.trim();
    const exp = document.getElementById("waExp").value;
    const msg = `Hola SCDK, quiero consultar para comenzar.\n• Nombre: ${name}\n• Edad: ${age} años\n• Localidad: ${city}\n• Experiencia: ${exp}`;
    window.open(`https://wa.me/5491141872918?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  });
}

function initArchive() {
  try {
    const data = window.SCDK_DATA;
    if (!data) {
      throw new Error("No se encontró window.SCDK_DATA");
    }
    ALL_POSTS = data.posts || [];
    renderFilterPills();
    renderPostsGrid();

    document.getElementById("modalBody")?.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.includes("scdkprogramanacional.blogspot.com/")) {
        const cleanHref = href.replace(/\/$/, "");
        const match = ALL_POSTS.find(
          (p) => p.url_original && p.url_original.replace(/\/$/, "") === cleanHref
        );
        if (match) {
          e.preventDefault();
          openPostBySlug(match.slug);
        }
      }
    });

    document.getElementById("filterPills")?.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;
      activeCategory = btn.dataset.cat;
      renderFilterPills();
      renderPostsGrid();
    });

    document.getElementById("postSearch")?.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderPostsGrid();
    });

    document.getElementById("toggleAllPosts")?.addEventListener("click", () => {
      showAllPosts = !showAllPosts;
      renderPostsGrid();
    });
  } catch (err) {
    console.error("Error cargando publicaciones:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initAudienceTabs();
  initLevelsStepper();
  initModalsAndGallery();
  initWaBuilder();
  initArchive();
});
