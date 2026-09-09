// Caso 1: Nomenclatura, indentação e espaçamento

// Código com problemas

let x = 10;
let y = 20;

function calc(a, b) {
    if (a > b) {
        return a + b;
    } else {
        return a * b;
    }
}

console.log(calc(x, y));


// Código sem problemas

const primeiroNumero = 10;
const segundoNumero = 20;

function calcularResultado(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1 + numero2;
    } else {
        return numero1 * numero2;
    }
}

console.log(calcularResultado(primeiroNumero, segundoNumero));


// Caso 2: Aninhamento excessivo

// Código com problemas

const idadeCaso2 = 20;
const possuiDocumentoCaso2 = true;
const possuiIngressoCaso2 = true;

if (idadeCaso2 >= 18) {
    if (possuiDocumentoCaso2) {
        if (possuiIngressoCaso2) {
            console.log("Entrada permitida");
        } else {
            console.log("Você precisa de um ingresso");
        }
    } else {
        console.log("Você precisa apresentar um documento");
    }
} else {
    console.log("Você precisa ser maior de idade");
}


// Código sem problemas

const idadeCorrigida = 20;
const possuiDocumentoCorrigido = true;
const possuiIngressoCorrigido = true;

if (idadeCorrigida < 18) {
    console.log("Você precisa ser maior de idade");
} else if (!possuiDocumentoCorrigido) {
    console.log("Você precisa apresentar um documento");
} else if (!possuiIngressoCorrigido) {
    console.log("Você precisa de um ingresso");
} else {
    console.log("Entrada permitida");
}