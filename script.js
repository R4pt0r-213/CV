const lines = [
  "$ whoami",
  "Naji Hassain – Étudiant à l'IG2I (Centrale Lille)",
  "",
  "$ cat contact.txt",
  "📧 najihassain@email.com",
  "📱 07 83 97 80 35",
  "🌐 github.com/R4pt0r-213 | www.linkedin.com/in/naji-hassain-011a2a294",
  "",
  "$ cat objectif.txt",
  `> Recherche d'un contrat d'apprentissage
> Envie d’apprendre à mettre en pratique mes connaissances
> Envie de découvrir de nouveaux outils
> Envie de progresser dans un environnement professionnel`,
  "",
  "$ cat langues.txt",
  `Français : langue maternelle
Anglais : niveau B2
Arabe : niveau C1`,
  "",
  "$ ls -R Formations/", 
  `Formations/
└── [2023-2024] IG2I CentraleLille : Ingénierie Informatique/Industrielle
└── [2022-2024] CPGE MPSI - Lycée Robespierre Arras`,
  "",
  "$ ls -R Compétences/",
  `Compétences/
└── Langages/
    C  html/css  js  php  sql  java  bash  ReactJs
└── Outils/
    github  figma  simulink  ltspice`,
  "",
  "$ ls -R Projets/",
  `Projets/
└── Perso/
    > Site de location de drones (en cours)
    > Serrure connectée avec Arduino
    > Labyrinthe jouable sur LED 8x8
    > Site vitrine cabinet dentaire fictif
└── Académiques/
    > Site complet pour un cabinet dentaire
    > Site de quizz
    > Jeu Avalam en ligne
    > Buggy télécommandé`,
  ""
];

const terminal = document.getElementById("terminal");

let lineIndex = 0;

function typeCommandLine(line, callback) {
  const container = document.createElement("div");
  container.className = "command";
  terminal.appendChild(container);

  let charIndex = 0;
  function typeChar() {
    if (charIndex < line.length) {
      container.textContent += line[charIndex];
      charIndex++;
      setTimeout(typeChar, 30); // vitesse de frappe
    } else {
      callback();
    }
  }
  typeChar();
}

function showOutputLine(line, callback) {
  const output = document.createElement("div");
  output.className = "output";
  output.textContent = line;
  terminal.appendChild(output);
  setTimeout(callback, 300); // petit délai après affichage instantané
}

function displayNextLine() {
  if (lineIndex < lines.length) {
    const line = lines[lineIndex];
    if (line.startsWith("$")) {
      typeCommandLine(line, () => {
        lineIndex++;
        setTimeout(displayNextLine, 300); // délai entre lignes
      });
    } else {
      showOutputLine(line, () => {
        lineIndex++;
        displayNextLine();
      });
    }
  }
}

displayNextLine();
