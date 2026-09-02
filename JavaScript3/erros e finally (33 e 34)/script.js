const numero = -9;

try {
  if (numero < 0) {
    const erro = new Error("Não é possível calcular a raiz quadrada de um número negativo.");
    erro.name = "NumeroNegativoError";
    throw erro;
  }

  const resultado = Math.sqrt(numero);

  console.log(`A raiz quadrada de ${numero} é ${resultado}`);

} catch (erro) {

  if (erro instanceof Error) {
    console.log(`${erro.name}: ${erro.message}`);
  } else {
    console.log("Ocorreu um erro inesperado.");
  }
}