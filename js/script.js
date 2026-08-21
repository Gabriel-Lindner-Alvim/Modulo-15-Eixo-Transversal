document.addEventListener('DOMContentLoaded', () => {

  /* Card giratório (flip card): clique alterna o flip (delegação em document) */
  document.addEventListener('click', (ev) => {
    const card = ev.target.closest('.thecard');
    if (card) {
      card.classList.toggle('flipped');
    }
  }, { passive: true });

  /* Acessibilidade: Enter/Espaço também alternam o flip quando o card está focado */
  document.addEventListener('keydown', (ev) => {
    if (ev.key !== 'Enter' && ev.key !== ' ') return;
    const card = ev.target.closest('.thecard');
    if (!card) return;
    ev.preventDefault();
    card.classList.toggle('flipped');
  }, { passive: false });

  /* Tabs "Ideia principal / Desenvolvimento / Conclusão": passar o mouse fixa a aba até passar em outra */
  const ativarParagrafoTab = (tab) => {
    const grupo = tab.closest('.paragrafo-tabs');
    if (!grupo || tab.classList.contains('paragrafo-tab-ativo')) return;
    grupo.querySelectorAll('.paragrafo-tab-ativo').forEach((el) => el.classList.remove('paragrafo-tab-ativo'));
    tab.classList.add('paragrafo-tab-ativo');
  };

  document.addEventListener('mouseover', (ev) => {
    const tab = ev.target.closest('.paragrafo-tab');
    if (tab) ativarParagrafoTab(tab);
  }, { passive: true });

  document.addEventListener('focusin', (ev) => {
    const tab = ev.target.closest('.paragrafo-tab');
    if (tab) ativarParagrafoTab(tab);
  });

  /* Carousel de itens (setas + caixa): seta esquerda volta, direita avança; desabilitam nas extremidades */
  document.querySelectorAll('.carousel-etica').forEach((carousel) => {
    const itens = [...carousel.querySelectorAll('.carousel-etica-item')];
    const btnPrev = carousel.querySelector('.carousel-seta-prev');
    const btnNext = carousel.querySelector('.carousel-seta-next');
    let indice = 0;

    const atualizarBotao = (btn) => {
      const img = btn.querySelector('img');
      img.src = btn.disabled ? btn.dataset.inativa : btn.dataset.ativa;
    };

    const atualizarCarousel = () => {
      itens.forEach((item, i) => item.classList.toggle('ativo', i === indice));
      btnPrev.disabled = indice === 0;
      btnNext.disabled = indice === itens.length - 1;
      atualizarBotao(btnPrev);
      atualizarBotao(btnNext);
    };

    btnPrev.addEventListener('click', () => {
      if (indice === 0) return;
      indice -= 1;
      atualizarCarousel();
    });

    btnNext.addEventListener('click', () => {
      if (indice === itens.length - 1) return;
      indice += 1;
      atualizarCarousel();
    });

    atualizarCarousel();
  });

});
