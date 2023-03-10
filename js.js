async function listCursos() {
  let resultado = await fetch("http://127.0.0.1:5000/cursos");
  const datos = await resultado.json();
  const cursos = datos.cursos;

  const nTBody = document.querySelector("#tableBody");
  while (nTBody.hasChildNodes()) nTBody.removeChild(nTBody.lastChild);

  for (var i in datos.cursos) {
    const nTr = document.createElement("tr");
    nTBody.append(nTr);

    const nTd = document.createElement("td");
    nTr.appendChild(nTd);
    nTd.appendChild(document.createTextNode(`${datos.cursos[i].codigo}`));

    const nTdcreditos = document.createElement("td");
    nTr.appendChild(nTdcreditos);
    nTdcreditos.appendChild(
      document.createTextNode(`${datos.cursos[i].creditos}`)
    );

    const nTdnombre = document.createElement("td");
    nTr.appendChild(nTdnombre);
    nTdnombre.appendChild(document.createTextNode(`${datos.cursos[i].nombre}`));

    const nTdeliminar = document.createElement("td");
    nTr.appendChild(nTdeliminar);

    const nButEliminar = document.createElement("button");
    nTdeliminar.appendChild(nButEliminar);
    nButEliminar.setAttribute("value", `${datos.cursos[i].codigo}`);
    nButEliminar.appendChild(document.createTextNode("Eliminar"));
    nButEliminar.addEventListener("click", eliminarCurso);
  }
}
window.addEventListener("load", function () {
  listCursos();
});

async function eliminarCurso(e) {
  const codigoCurso = e.target.value;
  console.log(codigoCurso);
  const resultado = await fetch(`http://127.0.0.1:5000/cursos/${codigoCurso}`, {
    method: "delete",
    headers: {
      Accept: "application/json",
    },
  });
  const datos = await resultado.json();
  listCursos();
}
