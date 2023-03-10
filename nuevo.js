const form = document.getElementById("frmNuevo");

form.addEventListener("submit", function (event) {
  window.location.href = "./index.html";
  event.preventDefault();
  let cursoFormData = new FormData(form);
  var jsoncurso = {};

  cursoFormData.forEach(function (value, key) {
    jsoncurso[key] = value;
  });

  var jsonfile = JSON.stringify(jsoncurso);
  console.log(jsonfile);

  const asyncPostCall = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/cursos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonfile,
      });
      const data = await response.json();
      // enter you logic when the fetch is successful
      console.log(data);
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)

      console.log(error);
    }
  };

  asyncPostCall();
});
