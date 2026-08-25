const form = document.querySelector('#form');
const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');

const nomeSalvo = document.querySelector('#nomeSalvo');
const sobrenomeSalvo = document.querySelector('#sobrenomeSalvo');

function carregarDados() {
  nomeSalvo.textContent = localStorage.getItem('nome') || '';
  sobrenomeSalvo.textContent = localStorage.getItem('sobrenome') || '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  localStorage.setItem('nome', nome.value);
  localStorage.setItem('sobrenome', sobrenome.value);

  carregarDados();

  alert('Informações salvas com sucesso!');
});

window.addEventListener('storage', (event) => {
  if (event.key === 'nome' || event.key === 'sobrenome') {
    carregarDados();
    alert('Informações salvas com sucesso!');
  }
});

carregarDados();