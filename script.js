  let secaoAtual = 0;

  function mudarSecao(direcao) {
    const slides = document.querySelector('.slides');
    const secoes = document.querySelectorAll('.slides section');
    const total = secoes.length;

    secaoAtual += direcao;
    if (secaoAtual < 0) secaoAtual = total - 1;
    if (secaoAtual >= total) secaoAtual = 0;

    const deslocamento = -secaoAtual * 100;
    slides.style.transform = `translateX(${deslocamento}%)`;
  }