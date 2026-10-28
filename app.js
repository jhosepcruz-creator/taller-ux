const formNota = document.getElementById("form-nota");
const mensaje = document.getElementById("mensaje-estado");
const listaNotas = document.getElementById("lista-notas");
const btnCancelar = document.getElementById("btn-cancelar");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

formNota.addEventListener("submit", function (e) {
  e.preventDefault();
  formNota.classList.add("validado");

  // Prevención de notas vacías
  if (!formNota.checkValidity()) {
    mostrarMensaje("Error: Completa el título y el contenido antes de guardar.", "error");
    formNota.querySelector("input:invalid, textarea:invalid").focus();
    return;
  }

  const titulo = document.getElementById("titulo-nota").value;
  const contenido = document.getElementById("contenido-nota").value;

  const li = document.createElement("li");
  li.className = "item-nota";
  li.innerHTML = `
    <div>
      <h3>${titulo}</h3>
      <p>${contenido}</p>
    </div>
    <button class="boton-eliminar" aria-label="Eliminar nota ${titulo}">Eliminar</button>
  `;

  // Evento de eliminación con confirmación (Control y libertad)
  li.querySelector(".boton-eliminar").addEventListener("click", function () {
    if (confirm(`¿Estás seguro de que deseas eliminar la nota "${titulo}"?`)) {
      li.remove();
      mostrarMensaje("Nota eliminada correctamente.", "info");
    }
  });

  listaNotas.appendChild(li);
  formNota.reset();
  formNota.classList.remove("validado");
  mostrarMensaje("¡Nota agregada con éxito!", "exito");
});

btnCancelar.addEventListener("click", function () {
  formNota.reset();
  formNota.classList.remove("validado");
  mostrarMensaje("Campos limpiados.", "info");
});