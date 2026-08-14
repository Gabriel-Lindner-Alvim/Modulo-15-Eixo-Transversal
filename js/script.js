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

});
