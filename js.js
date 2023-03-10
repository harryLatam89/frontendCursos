async function listCursos() {
  let response = await fetch("http://127.0.0.1:5000/cursos");
  const cursos = await response.json();
  var table = document.getElementById("lista-cursos");
  for (var i in cursos.cursos) {
    var row = `<tr>
           <td class="centered">${cursos.cursos[i].codigo}</td>
           <td class="centered">${cursos.cursos[i].creditos}</td>
           <td class="centered">${cursos.cursos[i].nombre}</td>
           <td class="centered"><button class="btndelete">DELETE</button><button>ACTULIZAR</button></td>
           
    </tr>`;

    table.innerHTML += row;
  }
}

window.addEventListener("load", function () {
  listCursos();
});
