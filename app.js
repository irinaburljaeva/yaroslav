// app.js
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const maxClicks = 10;
  let stage = 0;
  let shaking = false;

  function render() {
    app.innerHTML = '';

    // 1. Стартовый экран
    if (stage === 0) {
      const h1 = document.createElement('h1');
      h1.textContent = 'Ярослав, поздравляем со свадьбой!';
      const p = document.createElement('p');
      p.textContent = 'Пусть жизнь в роли мужа будет сказкой!';
      const btn = document.createElement('button');
      btn.className = 'button';
      btn.textContent = 'К подарочку 🎁';
      btn.onclick = () => {
        stage = 1;
        render();
      };
      app.append(h1, p, btn);
      return;
    }

    // 2. Экран кликов по свинке (1…9)
    if (stage < maxClicks) {
      const p = document.createElement('p');
      p.textContent = 'Нажимай на свинку, чтобы она отдала тебе подарок';

      const container = document.createElement('div');
      container.className = 'piggy-container';

      // Свинка из локального файла
      const img = document.createElement('img');
      img.src = 'piggy.png';
      img.alt = 'копилка-свинка';
      img.className = 'piggy' + (shaking ? ' shake' : '');
      img.onclick = () => {
        // увелич
