// function dimeTuNombre() {
//   let nombre = prompt("introduce tu nombre");
//   return `Hola ${nombre}`;
// }

function cambiarNombre() {
  let nombre = prompt("Dime tu nombre");

  const saludoDiv = document.getElementById("saludo");
  saludoDiv.textContent = `Hola ${nombre}`;
}
