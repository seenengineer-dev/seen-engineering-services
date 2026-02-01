document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- LANGUAGE DATA ---------------- */
  const i18n = {
    en: {
      cta_header: "Contact",
      pill: "Professional Engineering • Québec & Canada",
      h1: "Engineering with Vision.",
      lead: "SEEN Engineering Services provides clear, code-compliant and constructible engineering solutions with a strong focus on electrical systems and power distribution.",
      card_title: "What we do",
      card_li1: "Electrical engineering consulting & design",
      card_li2: "Power distribution & service entrance studies",
      card_li3: "Single-line diagrams & technical deliverables",
      card_li4: "Utility coordination (Hydro-Québec)",
      card_li5: "Engineering support for contractors & owners",
      contact_h2: "Contact",
      contact_p: "Contact us using the form below.",
      f_name: "Name",
      f_email: "Email",
      f_project_type: "Project type",
      f_province: "Province",
      f_select_one: "Select one",
      opt_electrical: "Electrical engineering",
      opt_power: "Power distribution / Service entrance",
      opt_utility: "Utility coordination (Hydro-Québec)",
      opt_contractor: "Contractor support",
      opt_other: "Other",
      f_msg: "Message",
      f_submit: "Send",
      sending: "Sending...",
      sent: "Message sent. Redirecting..."
    },
    fr: {
      cta_header: "Nous joindre",
      pill: "Génie professionnel • Québec & Canada",
      h1: "L’ingénierie avec vision.",
      lead: "SEEN Engineering Services offre des solutions d’ingénierie claires, conformes aux codes et constructibles, avec un fort accent sur les systèmes électriques et la distribution de puissance.",
      card_title: "Ce que nous faisons",
      card_li1: "Conseil et conception en génie électrique",
      card_li2: "Distribution & études d’entrée de service",
      card_li3: "Schémas unifilaires & livrables techniques",
      card_li4: "Coordination utilités (Hydro-Québec)",
      card_li5: "Support d’ingénierie pour entrepreneurs et clients",
      contact_h2: "Nous joindre",
      contact_p: "Contactez-nous via le formulaire ci-dessous.",
      f_name: "Nom",
      f_email: "Courriel",
      f_project_type: "Type de projet",
      f_province: "Province",
      f_select_one: "Choisir",
      opt_electrical: "Génie électrique",
      opt_power: "Distribution / entrée de service",
      opt_utility: "Coordination utilités (Hydro-Québec)",
      opt_contractor: "Support entrepreneur",
      opt_other: "Autre",
      f_msg: "Message",
      f_submit: "Envoyer",
      sending: "Envoi en cours...",
      sent: "Message envoyé. Redirection..."
    }
  };

  let lang = "en";
  const toggleBtn = document.getElementById("langToggle");

  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });
    toggleBtn.textContent = lang === "en" ? "FR" : "EN";
  }

  toggleBtn.addEventListener("click", () => {
    lang = lang === "en" ? "fr" : "en";
    applyI18n();
  });

  applyI18n();

  /* ---------------- FORM LOGIC ---------------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    // Always clear form on page load (back navigation included)
    form.reset();

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      status.style.display = "block";
      status.textContent = i18n[lang].sending;

      const name = form.querySelector('[name="name"]').value.trim();
      const type = document.getElementById("projectType").value;
      const province = document.getElementById("province").value;

      document.getElementById("subjectField").value =
        `SEEN Inquiry | ${type} | ${province} | ${name || "Client"}`;

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });

        if (res.ok) {
          form.reset(); // CLEAR BEFORE REDIRECT
          status.textContent = i18n[lang].sent;
          window.location.href =
            "https://seenengineer-dev.github.io/seen-engineering-services/thanks.html";
        } else {
          status.textContent = "Error. Please try again.";
        }
      } catch {
        status.textContent = "Network error. Please try again.";
      }
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
});
