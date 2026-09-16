const nome = 'Nala';
const idade = 3;

function verificar() {
  const resultado = document.getElementById('resultado');

  if (idade >= 18) {
    resultado.textContent = `Olá, ${nome}! Você é maior de idade.`;
  } else {
    resultado.textContent = `Olá, ${nome}! Você é menor de idade.`;
  }
}