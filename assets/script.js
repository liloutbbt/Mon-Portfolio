const textes = {
  fr: { accueil: "Accueil", projets: "Projets", menu: "Menu principal", haut: "Retour en haut ↑", autreLangue: "English version" },
  en: { accueil: "Home", projets: "Projects", menu: "Main menu", haut: "Back to top ↑", autreLangue: "Version française" }
};

const pageActuelle = location.pathname.split("/").pop() || "index.html";

const drapeauAnglais = `
  <svg viewBox="0 0 60 30" width="30" height="15" aria-hidden="true" focusable="false">
    <clipPath id="uk-s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <clipPath id="uk-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    <g clip-path="url(#uk-s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-t)" stroke="#C8102E" stroke-width="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
    </g>
  </svg>`;
const drapeauFrancais = `
  <svg viewBox="0 0 3 2" width="30" height="20" aria-hidden="true" focusable="false">
    <rect width="1" height="2" fill="#002654"/>
    <rect x="1" width="1" height="2" fill="#fff"/>
    <rect x="2" width="1" height="2" fill="#CE1126"/>
  </svg>`;

function langueDeDepart() {
  try {
    const choix = localStorage.getItem("langue");
    if (choix === "fr" || choix === "en") return choix;
  } catch {}
  return (navigator.language || "").startsWith("en") ? "en" : "fr";
}

let langue = langueDeDepart();

function afficherEntete() {
  const t = textes[langue];
  const pages = [
    ["index.html", t.accueil],
    ["projets.html", t.projets],
    ["cv.html", "CV"],
    ["contact.html", "Contact"]
  ];

  const liens = pages.map(([href, nom]) =>
    `<li><a href="${href}"${href === pageActuelle ? ' aria-current="page"' : ""}>${nom}</a></li>`
  ).join("");

  const boutonLangue = `
    <li>
      <button type="button" class="langue" lang="${langue === "fr" ? "en" : "fr"}"
              aria-label="${t.autreLangue}" title="${t.autreLangue}">
        ${langue === "fr" ? drapeauAnglais : drapeauFrancais}
      </button>
    </li>`;

  document.querySelector(".entete").innerHTML = `
    <a href="index.html" class="logo">Lilou Tibbaut.</a>
    <nav class="menu" aria-label="${t.menu}"><ul>${liens}${boutonLangue}</ul></nav>`;
}

function afficherFooter() {
  document.querySelector(".footer").innerHTML = `
    <div>
      <p>Lilou Tibbaut 2026</p>
    </div>
    <ul class="footer-liens">
      <li><a href="https://github.com/liloutbbt" target="_blank" rel="noopener">GitHub ↗</a></li>
      <li><a href="https://www.linkedin.com/in/lilou-tibbaut-952040192/" target="_blank" rel="noopener">LinkedIn ↗</a></li>
      <li><a href="#haut">${textes[langue].haut}</a></li>
    </ul>`;
}

const textesFrancais = new WeakMap();

function traduire(element, propriete, cle) {
  if (!textesFrancais.has(element)) textesFrancais.set(element, {});
  const sauvegarde = textesFrancais.get(element);
  if (!(propriete in sauvegarde)) sauvegarde[propriete] = element[propriete];

  element[propriete] = langue === "en" && anglais[cle] ? anglais[cle] : sauvegarde[propriete];
}

function traduirePage() {
  document.querySelectorAll("[data-i18n]").forEach(el => traduire(el, "innerHTML", el.dataset.i18n));
  document.querySelectorAll("[data-i18n-alt]").forEach(el => traduire(el, "alt", el.dataset.i18nAlt));
  document.querySelectorAll("[data-i18n-content]").forEach(el => traduire(el, "content", el.dataset.i18nContent));
}

function appliquerLangue() {
  document.documentElement.lang = langue;
  afficherEntete();
  afficherFooter();
  traduirePage();
}

document.addEventListener("click", e => {
  if (!e.target.closest(".langue")) return;
  langue = langue === "fr" ? "en" : "fr";
  try {
    localStorage.setItem("langue", langue);
  } catch {}
  appliquerLangue();
  // le menu est recréé : on remet le focus sur le bouton pour la navigation au clavier
  document.querySelector(".langue").focus();
});

const etoiles = Array.from({ length: 20 }, (_, i) =>
  `<img src="assets/stars/etoile${i % 5 + 1}.png" alt="" class="etoile">`
).join("");
document.querySelectorAll(".separateur").forEach(s => s.innerHTML = etoiles);

appliquerLangue();