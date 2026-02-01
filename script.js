const i18n = {
  en: {
    cta_header: "Contact",
    pill: "Professional Engineering • Québec & Canada",
    h1: "Engineering with Vision.",
    lead: "SEEN Engineering Services provides clear, code-compliant and constructible engineering solutions with a strong focus on electrical systems and power distribution.",
    cta_primary: "Explore Services",
    cta_secondary: "Contact",

    trust1_title: "Bilingual",
    trust1_text: "FR/EN deliverables",
    trust2_title: "Compliant",
    trust2_text: "Code-driven engineering",
    trust3_title: "Practical",
    trust3_text: "Buildable designs",

    card_title: "What we do",
    card_li1: "Electrical engineering consulting & design",
    card_li2: "Power distribution & service entrance studies",
    card_li3: "Single-line diagrams & technical deliverables",
    card_li4: "Utility coordination (Hydro-Québec)",
    card_li5: "Engineering support for contractors & owners",
    legal_label: "Legal",
    legal_text: "SEEN Engineering Services Inc. • Operating in Québec as SEEN Services d’ingénierie",

    services_h2: "Services",
    services_p: "Clear scope, clean deliverables, and code-compliant engineering.",
    s1_h3: "Electrical Engineering",
    s1_p: "Design, calculations and documentation.",
    s2_h3: "Power Distribution",
    s2_p: "Service entrance, distribution and metering strategy.",
    s3_h3: "Utility Coordination",
    s3_p: "Hydro-Québec requests and technical follow-ups.",

    contact_h2: "Contact",
    contact_p: "Contact us using the form below.",

    f_name: "Name",
    f_email: "Email",
    f_company: "Company (optional)",
    f_phone: "Phone (optional)",
    f_project_type: "Project type",
    f_province: "Province / Territory",
    f_select_one: "Select one",
    f_msg: "Message",
    f_files: "Attach files (PDF, drawings, images)",
    f_files_hint: "Tip: If uploads don’t work on your Formspree plan, remove this field and email attachments directly.",
    f_submit: "Send",

    opt_electrical: "Electrical engineering",
    opt_power: "Power distribution / Service entrance",
    opt_utility: "Utility coordination (Hydro-Québec)",
    opt_contractor: "Contractor support",
    opt_other: "Other",

    contact_alt_label: "Alternative",
    contact_alt_email: "Or email us directly: seen.engineer@gmail.com",

    thanks_h2: "Thank you",
    thanks_p: "Your message has been sent successfully. We will get back to you shortly.",
    thanks_btn: "Back to home",

    footer_sub: "Engineering with Vision",
    footer_legal: "Operating in Québec as SEEN Services d’ingénierie"
  },

  fr: {
    cta_header: "Nous joindre",
    pill: "Génie professionnel • Québec & Canada",
    h1: "L’ingénierie avec vision.",
    lead: "SEEN Engineering Services offre des solutions d’ingénierie claires, conformes aux codes et constructibles, avec un fort accent sur les systèmes électriques et la distribution de puissance.",
    cta_primary: "Voir les services",
    cta_secondary: "Nous joindre",

    trust1_title: "Bilingue",
    trust1_text: "Livrables FR/EN",
    trust2_title: "Conforme",
    trust2_text: "Approche axée sur les codes",
    trust3_title: "Pratique",
    trust3_text: "Designs constructibles",

    card_title: "Ce que nous faisons",
    card_li1: "Conseil et conception en génie électrique",
    card_li2: "Distribution & études d’entrée de service",
    card_li3: "Schémas unifilaires & livrables techniques",
    card_li4: "Coordination utilités (Hydro-Québec)",
    card_li5: "Support d’ingénierie pour entrepreneurs et clients",
    legal_label: "Légal",
    legal_text: "SEEN Engineering Services Inc. • Exerçant au Québec sous le nom SEEN Services d’ingénierie",

    services_h2: "Services",
    services_p: "Une portée claire, des livrables propres et une ingénierie conforme.",
    s1_h3: "Génie électrique",
    s1_p: "Conception, calculs et documentation.",
    s2_h3: "Distribution de puissance",
    s2_p: "Entrée de service, distribution et stratégie de mesurage.",
    s3_h3: "Coordination utilités",
    s3_p: "Demandes Hydro-Québec et suivis techniques.",

    contact_h2: "Nous joindre",
    contact_p: "Contactez-nous via le formulaire ci-dessous.",

    f_name: "Nom",
    f_email: "Courriel",
    f_company: "Entreprise (optionnel)",
    f_phone: "Téléphone (optionnel)",
    f_project_type: "Type de projet",
    f_province: "Province / territoire",
    f_select_one: "Choisir",
    f_msg: "Message",
    f_files: "Joindre des fichiers (PDF, plans, images)",
    f_files_hint: "Astuce : si le téléversement ne fonctionne pas avec votre forfait Formspree, retirez ce champ et envoyez les fichiers par courriel.",
    f_submit: "Envoyer",

    opt_electrical: "Génie électrique",
    opt_power: "Distribution / entrée de service",
    opt_utility: "Coordination utilités (Hydro-Québec)",
    opt_contractor: "Support entrepreneur",
    opt_other: "Autre",

    contact_alt_label: "Alternative",
    contact_alt_email: "Ou écrivez-nous directement : seen.engineer@gmail.com",

    thanks_h2: "Merci",
    thanks_p: "Votre message a été envoyé avec succès. Nous vous répondrons sous peu.",
    thanks_btn: "Retour à l’accueil",

    footer_sub: "Engineering with Vision",
    footer_legal: "Exerçant au Québec sous le nom SEEN Services d’ingénierie"
  }
};

let lang = "en";
const toggleBtn = document.getElementById("langToggle");

function applyI18n() {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  if (toggleBtn) toggleBtn.textContent = (lang === "en") ? "FR" : "EN";
}

function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

// Subject formatting: "SEEN Inquiry | <Type> | <Province> | <Company or Name>"
function initSubjectFormatting() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", () => {
    const name = (form.querySelector('input[name="name"]')?.value || "").trim();
    const company = (form.querySelector('input[name="company"]')?.value || "").trim();
    const projectType = (document.getElementById("projectType")?.value || "").trim();
    const province = (document.getElementById("province")?.value || "").trim();
    const who = company || name || "Client";

    const subject = `SEEN Inquiry | ${projectType || "General"} | ${province || "NA"} | ${who}`;
    const subjectField = document.getElementById("subjectField");
    if (subjectField) subjectField.value = subject;
  });
}

function initLanguageToggle() {
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    lang = (lang === "en") ? "fr" : "en";
    applyI18n();
  });
}

// Boot
initYear();
initLanguageToggle();
initSubjectFormatting();
applyI18n();
