const pages = [
  ["index.html", "Accueil"],
  ["projets.html", "Projets"],
  ["cv.html", "CV"],
  ["contact.html", "Contact"]
];
const pageActuelle = location.pathname.split("/").pop() || "index.html";

const liens = pages.map(([href, nom]) =>
  `<li><a href="${href}"${href === pageActuelle ? ' aria-current="page"' : ""}>${nom}</a></li>`
).join("");

document.querySelector(".entete").innerHTML = `
  <a href="index.html" class="logo">Lilou Tibbaut.</a>
  <nav class="menu" aria-label="Menu principal"><ul>${liens}</ul></nav>`;

document.querySelector(".footer").innerHTML = `
  <div>
    <p>Lilou Tibbaut 2026</p>
  </div>
  <ul class="footer-liens">
    <li><a href="https://github.com/liloutbbt" target="_blank" rel="noopener">GitHub ↗</a></li>
    <li><a href="https://www.linkedin.com/in/lilou-tibbaut-952040192/" target="_blank" rel="noopener">LinkedIn ↗</a></li>
    <li><a href="#haut">Retour en haut ↑</a></li>
  </ul>`;

const etoiles = Array.from({ length: 20 }, (_, i) =>
  `<img src="assets/stars/etoile${i % 5 + 1}.png" alt="" class="etoile">`
).join("");
document.querySelectorAll(".separateur").forEach(s => s.innerHTML = etoiles);