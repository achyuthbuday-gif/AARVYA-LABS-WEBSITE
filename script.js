/* =========================================================
   AARVYA LABS — SCRIPT
   Edit the CONFIG object below to update pricing, contact
   details, social links and portfolio entries.
   ========================================================= */

const CONFIG = {
  company: {
    name: "Aarvya Labs",
    email: "hello@aarvyalabs.com",
    whatsapp: "919000000000", // digits only, country code first, no + or spaces
  },
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  // Update prices here — they populate the pricing section automatically.
  pricing: [
    {
      tier: "Starter",
      price: "₹999+",
      best: "Individuals / very small businesses",
      features: [
        "1-page website",
        "Responsive design",
        "Basic sections",
        "WhatsApp/call CTA",
        "Basic animations",
        "Deployment",
      ],
      featured: false,
    },
    {
      tier: "Business",
      price: "₹3,999+",
      best: "Small businesses",
      features: [
        "Multi-section website",
        "Custom design",
        "Responsive design",
        "Contact/WhatsApp",
        "Basic SEO",
        "Animations",
        "Deployment",
      ],
      featured: false,
    },
    {
      tier: "Professional",
      price: "₹7,999+",
      best: "Growing businesses",
      features: [
        "Premium UI/UX",
        "Multiple pages",
        "Advanced interactions",
        "SEO setup",
        "Lead/contact forms",
        "Performance optimization",
        "Deployment",
      ],
      featured: true,
    },
    {
      tier: "Premium",
      price: "₹12,999+",
      best: "Businesses wanting a stronger digital presence",
      features: [
        "Custom visual system",
        "Advanced animations",
        "Multiple pages",
        "Advanced forms",
        "Booking/enquiry integrations",
        "SEO",
        "Performance optimization",
        "Priority customization",
      ],
      featured: false,
    },
    {
      tier: "Custom",
      price: "₹15,000+",
      best: "Web apps, AI integrations, SaaS, dashboards, e-commerce",
      features: [
        "Scoped to requirements",
        "Web applications",
        "AI integrations",
        "SaaS builds",
        "Dashboards",
        "E-commerce",
      ],
      featured: false,
      cta: "Let's discuss",
    },
  ],
  // Add / edit portfolio concepts here. Replace `url` with a live
  // GitHub Pages demo link when ready — cards link out automatically.
  projects: [
    {
      category: "Healthcare",
      title: "Meridian Health",
      description: "A calm, trust-building site for a multi-specialty clinic.",
      letter: "H",
      url: "#",
    },
    {
      category: "Dental",
      title: "Dental Studio",
      description: "Bright, precise design built around patient confidence.",
      letter: "D",
      url: "#",
    },
    {
      category: "Fitness",
      title: "VO2Max Physiotherapy",
      description: "Rehab and fitness studio site with a performance-driven feel.",
      letter: "F",
      url: "#",
    },
    {
      category: "Café",
      title: "Nomad Coffee Co.",
      description: "Warm, editorial layout built for a neighbourhood café.",
      letter: "C",
      url: "#",
    },
    {
      category: "Restaurant",
      title: "Ember & Salt",
      description: "Moody, image-led design for a fine-dining concept.",
      letter: "R",
      url: "#",
    },
    {
      category: "Salon",
      title: "Studio Lumen",
      description: "Elegant booking-first site for a modern hair studio.",
      letter: "S",
      url: "#",
    },
    {
      category: "Education",
      title: "Northbridge Academy",
      description: "Structured, credible site for an education institution.",
      letter: "E",
      url: "#",
    },
    {
      category: "Real Estate",
      title: "Aster Properties",
      description: "Listing-forward design tuned for high-value browsing.",
      letter: "P",
      url: "#",
    },
  ],
};

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initMobileMenu();
  initReveal();
  renderPricing();
  renderWork();
  initForm();
  initCursor();
  wireFooterSocial();
});

/* =========================================================
   THEME (dark default, saved in localStorage)
   ========================================================= */
function initTheme() {
  const stored = localStorage.getItem("aarvya-theme");
  const theme = stored || "dark";
  document.body.setAttribute("data-theme", theme);

  const toggles = [document.getElementById("themeToggle"), document.getElementById("themeToggleMobile")].filter(Boolean);
  toggles.forEach((btn) => {
    btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    btn.addEventListener("click", () => {
      const current = document.body.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", next);
      localStorage.setItem("aarvya-theme", next);
      toggles.forEach((b) => b.setAttribute("aria-pressed", next === "light" ? "true" : "false"));
    });
  });
}

/* =========================================================
   NAV — shrink on scroll
   ========================================================= */
function initNav() {
  const nav = document.getElementById("nav");
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* =========================================================
   MOBILE MENU
   ========================================================= */
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  const openMenu = () => {
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  toggle.addEventListener("click", () => {
    toggle.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
  });
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 0.06}s`;
    observer.observe(el);
  });
}

/* =========================================================
   RENDER: PRICING
   ========================================================= */
function renderPricing() {
  const grid = document.getElementById("pricingGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.pricing
    .map(
      (p, i) => `
    <div class="price-card reveal${p.featured ? " is-featured" : ""}" style="transition-delay:${i * 0.05}s">
      <span class="price-tier">${p.tier}</span>
      <span class="price-figure">${p.price}</span>
      <p class="price-best">${p.best}</p>
      <ul class="price-features">
        ${p.features.map((f) => `<li>${f}</li>`).join("")}
      </ul>
      <a href="#contact" class="btn ${p.featured ? "btn-primary" : "btn-ghost"}">${p.cta || "Start a Project"}</a>
    </div>`
    )
    .join("");
  // Re-observe newly injected reveal items
  initReveal();
}

/* =========================================================
   RENDER: WORK / CONCEPTS
   ========================================================= */
function renderWork() {
  const grid = document.getElementById("workGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.projects
    .map(
      (proj, i) => `
    <a class="work-card reveal" href="${proj.url}" target="${proj.url === "#" ? "_self" : "_blank"}" rel="noopener" style="transition-delay:${(i % 3) * 0.06}s">
      <div class="work-card-visual" data-letter="${proj.letter}">
        <span class="work-card-tag">Concept</span>
      </div>
      <div class="work-card-body">
        <span class="work-card-cat">${proj.category}</span>
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <span class="work-card-link">View Concept →</span>
      </div>
    </a>`
    )
    .join("");
  initReveal();
}

/* =========================================================
   MULTI-STEP CONTACT FORM
   ========================================================= */
function initForm() {
  const form = document.getElementById("projectForm");
  if (!form) return;

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const total = steps.length;
  let current = 1;

  const progressFill = document.getElementById("formProgressFill");
  const stepLabel = document.getElementById("formStepLabel");
  const backBtn = document.getElementById("formBack");
  const nextBtn = document.getElementById("formNext");
  const submitBtn = document.getElementById("formSubmit");
  const successEl = document.getElementById("formSuccess");
  const failEl = document.getElementById("formFail");

  const data = { need: "", budget: "" };

  // Option chip selection (steps 3 & 4)
  form.querySelectorAll(".option-grid").forEach((group) => {
    const field = group.dataset.field;
    group.querySelectorAll(".option-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        group.querySelectorAll(".option-chip").forEach((c) => c.classList.remove("is-selected"));
        chip.classList.add("is-selected");
        data[field] = chip.dataset.value;
        clearError(field === "need" ? "err-need" : "err-budget");
      });
    });
  });

  function showStep(n) {
    steps.forEach((s) => (s.hidden = Number(s.dataset.step) !== n));
    stepLabel.textContent = `Step ${n} of ${total}`;
    progressFill.style.width = `${(n / total) * 100}%`;
    backBtn.hidden = n === 1;
    nextBtn.hidden = n === total;
    submitBtn.hidden = n !== total;
  }

  function clearError(id) {
    const el = document.getElementById(id);
    if (el) el.textContent = "";
    const input = form.querySelector(`[name="${id.replace("err-f", "").toLowerCase()}"]`);
  }

  function setError(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message;
  }

  function validateStep(n) {
    if (n === 1) {
      const val = document.getElementById("fName").value.trim();
      document.getElementById("fName").classList.toggle("is-invalid", !val);
      if (!val) return setError("err-fName", "Please tell us your name."), false;
      setError("err-fName", "");
      return true;
    }
    if (n === 2) {
      const val = document.getElementById("fBusiness").value.trim();
      document.getElementById("fBusiness").classList.toggle("is-invalid", !val);
      if (!val) return setError("err-fBusiness", "Please add your business name."), false;
      setError("err-fBusiness", "");
      return true;
    }
    if (n === 3) {
      if (!data.need) return setError("err-need", "Please choose one option."), false;
      setError("err-need", "");
      return true;
    }
    if (n === 4) {
      if (!data.budget) return setError("err-budget", "Please choose a budget range."), false;
      setError("err-budget", "");
      return true;
    }
    if (n === 5) {
      const val = document.getElementById("fDescription").value.trim();
      document.getElementById("fDescription").classList.toggle("is-invalid", !val);
      if (!val) return setError("err-fDescription", "A short description helps us a lot."), false;
      setError("err-fDescription", "");
      return true;
    }
    if (n === 6) {
      const emailEl = document.getElementById("fEmail");
      const val = emailEl.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      emailEl.classList.toggle("is-invalid", !valid);
      if (!valid) return setError("err-fEmail", "Please enter a valid email address."), false;
      setError("err-fEmail", "");
      return true;
    }
    return true;
  }

  nextBtn.addEventListener("click", () => {
    if (!validateStep(current)) return;
    current = Math.min(current + 1, total);
    showStep(current);
  });

  backBtn.addEventListener("click", () => {
    current = Math.max(current - 1, 1);
    showStep(current);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateStep(current)) return;

    submitBtn.disabled = true;
    submitBtn.classList.add("is-loading");

    // DEMO MODE — no backend connected yet.
    // To go live, replace this block with a real request, e.g.:
    //
    // fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //   body: JSON.stringify(payload),
    // }).then(...).catch(...)
    //
    // or an EmailJS call, or your own API endpoint.

    const payload = {
      name: document.getElementById("fName").value.trim(),
      business: document.getElementById("fBusiness").value.trim(),
      need: data.need,
      budget: data.budget,
      description: document.getElementById("fDescription").value.trim(),
      email: document.getElementById("fEmail").value.trim(),
      whatsapp: document.getElementById("fWhatsapp").value.trim(),
    };

    setTimeout(() => {
      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;

      const ok = true; // demo mode always succeeds; a real integration would check response.ok
      form.querySelectorAll(".form-step, .form-nav, .form-progress, .form-step-label").forEach((el) => (el.style.display = "none"));

      if (ok) {
        successEl.hidden = false;
        console.log("Project inquiry (demo):", payload);
      } else {
        failEl.hidden = false;
      }
    }, 1100);
  });

  showStep(current);
}

/* =========================================================
   OPTIONAL DESKTOP CURSOR
   ========================================================= */
function initCursor() {
  if (window.matchMedia("(hover: none)").matches) return;
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);
  window.addEventListener(
    "mousemove",
    (e) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    },
    { passive: true }
  );
}

/* =========================================================
   FOOTER SOCIAL LINKS FROM CONFIG
   ========================================================= */
function wireFooterSocial() {
  const social = document.querySelector(".footer-social");
  if (!social) return;
  const ig = social.querySelector('a[href*="instagram"]');
  const li = social.querySelector('a[href*="linkedin"]');
  const em = social.querySelector('a[href^="mailto"]');
  if (ig) ig.href = CONFIG.social.instagram;
  if (li) li.href = CONFIG.social.linkedin;
  if (em) em.href = `mailto:${CONFIG.company.email}`;
}
