let lateralMenuVisible = false;

function toggleLateralMenu() {
  let hmtlElement = document.getElementById("lateralmenu");

  if (!lateralMenuVisible) {
    hmtlElement.style.left = "0";
  } else {
    hmtlElement.style.left = "-250px";
  }

  lateralMenuVisible = !lateralMenuVisible;
}

// Quitar placeholder sin esperar a escribir ningún caracter.
function quitarPlaceholder(event) {
  let elementoHTML = event.target;
  elementoHTML.placeholder = "";
}

// Devolver el placeholder si quitamos el foco y no hay datos
function ponerPlaceholderNombre(event) {
  let elementoHTML = event.target;
  elementoHTML.placeholder = "Ari Gold";
}

// Devolver el placeholder si quitamos el foco y no hay datos
function ponerPlaceholderEmail(event) {
  let elementoHTML = event.target;
  elementoHTML.placeholder = "arigold@mga.com";
}
