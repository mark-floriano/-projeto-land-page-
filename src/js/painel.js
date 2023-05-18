const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0;

function esconderImagems() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
};

function mostrarImagens() { imagensPainel[imagemAtual].classList.add('mostrar') };

setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === imagensPainel.length - 1) {
        return;
    }

    imagemAtual++;

    esconderImagems()
    mostrarImagens()
});

setaVoltar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagems();
    mostrarImagens()
});









