const idade = "vinte";

try {
  if (typeof idade !== "number") {
    throw new Error("A idade precisa ser um número.");
  }

  console.log(`Idade: ${idade}`);
} catch (erro) {
  console.log("Erro: " + erro.message);
}