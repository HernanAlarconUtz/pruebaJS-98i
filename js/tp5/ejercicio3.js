const $botonAgregar = document.getElementById("botonAgregar");
const $inputTarea = document.getElementById("tareaInput");
const $listaTareas = document.getElementById("tareasLista");

$botonAgregar.addEventListener("click", (event) => {
  event.preventDefault();

  const tarea = $inputTarea.value.trim();
  if (tarea != "") {
    const itemLista = document.createElement("li");
    itemLista.className =
      "list-group-item d-flex justify-content-between align-items-center";
    itemLista.textContent = tarea;

    const botonBorrar = document.createElement("button");
    botonBorrar.className = "btn btn-danger btn-sm";
    botonBorrar.textContent = "Eliminar";
    botonBorrar.addEventListener("click", () => {
      $listaTareas.removeChild(itemLista);
    });

    itemLista.appendChild(botonBorrar);
    $listaTareas.appendChild(itemLista);
    $inputTarea.value = "";
  } else {
    alert('Por favor ingrese una tarea válida.');
  }
});
