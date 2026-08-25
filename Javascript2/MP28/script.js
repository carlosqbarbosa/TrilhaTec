const noticias = document.querySelectorAll('.noticias');
const botaoEsquerda = document.getElementById('botao-esquerda');
const botaoDireita = document.getElementById('botao-direita');

let bannerAtual = 0;

function atualizarBanner() {
    noticias.forEach((noticia, index) => {
        noticia.setAttribute(
            'active',
            index === bannerAtual ? 'true' : 'false'
        );
    });

    botaoEsquerda.disabled = bannerAtual === 0;
    botaoDireita.disabled = bannerAtual === noticias.length - 1;
}

function proximoBanner() {
    if (bannerAtual < noticias.length - 1) {
        bannerAtual++;
        atualizarBanner();
    }
}

function bannerAnterior() {
    if (bannerAtual > 0) {
        bannerAtual--;
        atualizarBanner();
    }
}

botaoDireita.addEventListener('click', proximoBanner);

botaoEsquerda.addEventListener('click', bannerAnterior);

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'd') {
        proximoBanner();
    }

    if (event.key.toLowerCase() === 'a') {
        bannerAnterior();
    }
});

atualizarBanner();