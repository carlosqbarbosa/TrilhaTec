const soma = (a, b) => a + b;

const subtracao = (a, b) => a - b;

const calculadora = (a, b, operacao) => {
    let resultado;

    switch (operacao) {
        case "+":
            resultado = soma(a, b);
            break;

        case "-":
            resultado = subtracao(a, b);
            break;

        default:
            return "Operação inválida";
    }

    const mensagem = resultado >= 0 ? "Resultado positivo" : "Resultado negativo";

    return `Resultado: ${resultado}\n${mensagem}`;
};

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 15, "-"));