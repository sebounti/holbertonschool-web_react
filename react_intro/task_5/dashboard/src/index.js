import "./style.css"; // Exemple d'importation de style

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Bonjour le monde";
  return element;
}

document.body.appendChild(component());
