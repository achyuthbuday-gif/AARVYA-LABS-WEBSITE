/* =========================================================
   AARVYA LABS — SCRIPT
   Edit CONFIG below to update pricing, contact details,
   social links and portfolio entries.
   ========================================================= */

const CONFIG = {
  company: {
    name: "Aarvya Labs",
    email: "aarvyalabs@gmail.com",
    phoneDisplay: "+91 98443 25466",
    phoneE164: "919844325466", // digits only, country code first — used for tel:/wa.me links
  },
  social: {
    instagram: "https://instagram.com/aarvyalabs",
    linkedin: "https://www.linkedin.com/in/achyuth-uday-61a513319",
    github: "https://github.com/achyuthbuday-gif",
  },
  formspreeEndpoint: "https://formspree.io/f/xnpawqyo",

  pricing: [
    {
      tier: "Starter", price: "₹999+", best: "For simple online presence.",
      features: ["1-page website", "Responsive design", "Basic sections", "Contact/WhatsApp CTA", "Basic interactions", "Deployment"],
      featured: false,
    },
    {
      tier: "Business", price: "₹3,999+", best: "For small businesses.",
      features: ["Custom website", "Responsive design", "Multiple sections", "Contact/WhatsApp", "Basic SEO", "Animations", "Deployment"],
      featured: false,
    },
    {
      tier: "Professional", price: "₹7,999+", best: "For growing businesses.",
      features: ["Premium UI/UX", "Multiple pages", "Advanced interactions", "Forms", "SEO setup", "Performance optimization", "Deployment"],
      featured: true,
    },
    {
      tier: "Premium", price: "₹12,999+", best: "For a stronger digital presence.",
      features: ["Custom visual system", "Multiple pages", "Advanced interactions", "Advanced enquiry/booking", "SEO", "Performance optimization", "Priority customization"],
      featured: false,
    },
    {
      tier: "Custom", price: "₹15,000+", best: "Web apps, AI, SaaS, e-commerce.",
      features: ["Scoped to requirements", "Web applications", "AI integrations", "SaaS builds", "E-commerce", "Complex requirements"],
      featured: false, cta: "Let's discuss",
    },
  ],

  // 3–4 polished concept projects. Set `url` to a live link when ready;
  // leaving it as "" shows a clearly labelled "Coming soon" state instead of a dead link.
  projects: [
    {
      category: "Healthcare / Clinic",
      title: "Meridian Health",
      description: "A calm, trust-building site for a multi-specialty clinic.",
      icon: "health",
      url: "",
    },
    {
      category: "Dental",
      title: "Dental Studio",
      description: "Bright, precise design built around patient confidence.",
      icon: "dental",
      url: "",
    },
    {
      category: "Fitness / Gym",
      title: "VO2Max Physiotherapy",
      description: "Rehab and fitness studio site with a performance-driven feel.",
      icon: "fitness",
      url: "",
    },
    {
      category: "Restaurant / Café",
      title: "Ember & Salt",
      description: "Moody, image-led design for a fine-dining concept.",
      icon: "cafe",
      url: "",
    },
  ],
};

const ICONS = {
  health: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"/></svg>',
  dental: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3c-2.5 0-4.5 1.6-4.5 4.2 0 2.8 1 4 1.4 7.3.2 1.7.6 3 1.4 3 1 0 1-2.4 1.2-4 .1-1 .3-1.6.5-1.6s.4.6.5 1.6c.2 1.6.2 4 1.2 4 .8 0 1.2-1.3 1.4-3 .4-3.3 1.4-4.5 1.4-7.3C16.5 4.6 14.5 3 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  fitness: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 12h2M19 12h2M6 8v8M18 8v8M6 12h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="square"/></svg>',
  cafe: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17" stroke="currentColor" stroke-width="1.6"/><path d="M8 3.5c0 1-1 1-1 2s1 1 1 2M12 3.5c0 1-1 1-1 2s1 1 1 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
};

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initScrollSpy();
  initMobileMenu();
  initReveal();
  initBuildFrameCaption();
  renderPricing();
  renderWork();
  initForm();
  wireContactAlternatives();
});

/* =========================================================
   THEME — saved preference, else system preference, else dark
   ========================================================= */
function initTheme() {
  const stored = localStorage.getItem("aarvya-theme");
  let theme = stored;
  if (!theme) {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
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
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* =========================================================
   SCROLL-SPY — highlight the current section in the nav
   ========================================================= */
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-links a"));
  if (!links.length || !("IntersectionObserver" in window)) return;
  const map = new Map();
  links.forEach((link) => {
    const id = link.getAttribute("href").replace("#", "");
    const section = document.getElementById(id);
    if (section) map.set(section, link);
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map.get(entry.target);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  map.forEach((_, section) => observer.observe(section));
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

  toggle.addEventListener("click", () => (toggle.classList.contains("is-open") ? closeMenu() : openMenu()));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
  });
}

/* =========================================================
   SCROLL REVEAL — section headers / hero only, not every card
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
  items.forEach((el) => {
    if (!el.classList.contains("is-visible")) observer.observe(el);
  });
}

/* =========================================================
   HERO BUILD-FRAME — cycles the Idea/Design/Build/Launch caption
   in step with the panel's own build-in animation, then stays put.
   ========================================================= */
function initBuildFrameCaption() {
  const stages = document.querySelectorAll(".bf-stage");
  if (!stages.length) return;
  const timings = [300, 750, 1350, 2000]; // ms — matches CSS animation-delays
  timings.forEach((t, i) => {
    setTimeout(() => stages[i] && stages[i].classList.add("is-active"), t);
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
      (p) => `
    <div class="price-card${p.featured ? " is-featured" : ""}">
      ${p.featured ? '<span class="price-card-tag">Recommended</span>' : ""}
      <span class="price-tier">${p.tier}</span>
      <span class="price-figure">${p.price}</span>
      <p class="price-best">${p.best}</p>
      <ul class="price-features">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      <a href="#contact" class="btn ${p.featured ? "btn-primary" : "btn-ghost"}">${p.cta || "Start a Project"}</a>
    </div>`
    )
    .join("");
}

/* =========================================================
   RENDER: SELECTED WORK
   ========================================================= */
function renderWork() {
  const grid = document.getElementById("workGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.projects
    .map((proj) => {
      const live = Boolean(proj.url);
      const tag = "Concept";
      const linkLabel = live ? "View Concept →" : "Coming soon";
      const icon = ICONS[proj.icon] || "";
      const Tag = live ? "a" : "div";
      const hrefAttr = live ? `href="${proj.url}" target="_blank" rel="noopener"` : "";
      return `
      <${Tag} class="work-card${live ? "" : " is-disabled"}" ${hrefAttr}>
        <div class="work-card-visual">
          <span class="work-card-tag">${tag}</span>
          <span class="work-card-icon">${icon}</span>
        </div>
        <div class="work-card-body">
          <span class="work-card-cat">${proj.category}</span>
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <span class="work-card-link">${linkLabel}</span>
        </div>
      </${Tag}>`;
    })
    .join("");
}

/* =========================================================
   MULTI-STEP CONTACT FORM — real Formspree submission via fetch
   ========================================================= */
function initForm() {
  const form = document.getElementById("projectForm");
  if (!form) return;

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const total = steps.length;
  let current = 1;
  let isSubmitting = false;

  const progressFill = document.getElementById("formProgressFill");
  const stepLabel = document.getElementById("formStepLabel");
  const backBtn = document.getElementById("formBack");
  const nextBtn = document.getElementById("formNext");
  const submitBtn = document.getElementById("formSubmit");
  const successEl = document.getElementById("formSuccess");
  const failEl = document.getElementById("formFail");

  const data = { industry: "", projectType: "", budget: "" };

  form.querySelectorAll(".option-grid").forEach((group) => {
    const field = group.dataset.field;
    group.querySelectorAll(".option-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        group.querySelectorAll(".option-chip").forEach((c) => c.classList.remove("is-selected"));
        chip.classList.add("is-selected");
        data[field] = chip.dataset.value;
        const hiddenId = field === "industry" ? "fIndustry" : field === "projectType" ? "fProjectType" : "fBudget";
        const hiddenInput = document.getElementById(hiddenId);
        if (hiddenInput) hiddenInput.value = chip.dataset.value;
        setError(`err-${field}`, "");
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
    if (n === 3) {
      const emailEl = document.getElementById("fEmail");
      const val = emailEl.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      emailEl.classList.toggle("is-invalid", !valid);
      if (!valid) return setError("err-fEmail", "Please enter a valid email address."), false;
      setError("err-fEmail", "");
      return true;
    }
    if (n === 6) {
      if (!data.projectType) return setError("err-projectType", "Please choose what you need."), false;
      setError("err-projectType", "");
      return true;
    }
    if (n === 8) {
      const val = document.getElementById("fDescription").value.trim();
      document.getElementById("fDescription").classList.toggle("is-invalid", !val);
      if (!val) return setError("err-fDescription", "A short description helps us a lot."), false;
      setError("err-fDescription", "");
      return true;
    }
    return true; // steps 2 (business), 4 (phone), 5 (industry), 7 (budget) are optional
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

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // prevent double submission
    if (!validateStep(current)) return;

    isSubmitting = true;
    submitBtn.disabled = true;
    submitBtn.classList.add("is-loading");
    failEl.hidden = true;

    const formData = new FormData(form);

    try {
      const response = await fetch(CONFIG.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        form.querySelectorAll(".form-step, .form-nav, .form-progress, .form-step-label").forEach((el) => (el.style.display = "none"));
        successEl.hidden = false;
      } else {
        failEl.hidden = false;
      }
    } catch (err) {
      // Network error — never fake success
      failEl.hidden = false;
    } finally {
      isSubmitting = false;
      submitBtn.disabled = false;
      submitBtn.classList.remove("is-loading");
    }
  });

  showStep(current);
}

/* =========================================================
   CONTACT ALTERNATIVES + FOOTER — wired from CONFIG
   ========================================================= */
function wireContactAlternatives() {
  const wa = document.getElementById("altWhatsapp");
  const call = document.getElementById("altCall");
  const email = document.getElementById("altEmail");
  const ig = document.getElementById("altInstagram");
  const li = document.getElementById("altLinkedin");

  if (wa) wa.href = `https://wa.me/${CONFIG.company.phoneE164}`;
  if (call) call.href = `tel:+${CONFIG.company.phoneE164}`;
  if (email) email.href = `mailto:${CONFIG.company.email}`;
  if (ig) ig.href = CONFIG.social.instagram;
  if (li) li.href = CONFIG.social.linkedin;

  document.querySelectorAll(".footer-social a").forEach((a) => {
    const text = a.textContent.trim().toLowerCase();
    if (text === "instagram") a.href = CONFIG.social.instagram;
    if (text === "linkedin") a.href = CONFIG.social.linkedin;
    if (text === "github") a.href = CONFIG.social.github;
    if (text === "email") a.href = `mailto:${CONFIG.company.email}`;
    if (text.startsWith("+91")) a.href = `tel:+${CONFIG.company.phoneE164}`;
  });
}
