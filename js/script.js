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

});
