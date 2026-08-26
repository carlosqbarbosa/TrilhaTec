const noticias = document.querySelectorAll(".noticias");
const botaoEsquerda = document.getElementById("botao-esquerda");
const botaoDireita = document.getElementById("botao-direita");

let atual = 0;

function mostrarBanner(indice) {
    noticias[atual].setAttribute("active", "false");

    atual = indice;

    noticias[atual].setAttribute("active", "true");
}

botaoDireita.addEventListener("click", function () {
    if (atual === noticias.length - 1) {
        mostrarBanner(0);
    } else {
        mostrarBanner(atual + 1);
    }
});

botaoEsquerda.addEventListener("click", function () {
    if (atual === 0) {
        mostrarBanner(noticias.length - 1);
    } else {
        mostrarBanner(atual - 1);
    }
});