const form = document.querySelector("form");

const table = document.querySelector("table");

const position = document.querySelector("#position");

let id = 1;

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const nome = document.querySelector("#nome").value;

  const sobrenome = document.querySelector("#sobrenome").value;

  const linha = document.createElement("tr");

  linha.id = `linha_${id}`;

  const tdId = document.createElement("td");

  tdId.textContent = id;

  const tdNome = document.createElement("td");

  tdNome.textContent = `${nome} ${sobrenome}`;

  const tdEmail = document.createElement("td");

  tdEmail.textContent = `${nome.toLowerCase()}@tulio.com`;

  const tdAcao = document.createElement("td");

  const botao = document.createElement("button");

  botao.textContent = "delete";

  botao.id = `delete_${id}`;

  botao.classList.add("delete");

  botao.addEventListener("click", function () {
    linha.remove();
  });

  tdAcao.append(botao);

  linha.append(tdId, tdNome, tdEmail, tdAcao);

  const ultimaLinha = table.querySelector("tr:last-child");

  if (position.value === "cima") {
    ultimaLinha.before(linha);
  } else {
    ultimaLinha.after(linha);
  }

  id++;

  form.reset();
});