// app.js
(function(){
  const maxClicks = 10;
  let stage = 0;
  let shaking = false;
  const app = document.getElementById('app');

  function render(){
    app.innerHTML = '';

    // Стартовый экран
    if(stage === 0){
      const h1 = document.createElement('h1');
      h1.textContent = 'Ярослав, поздравляем со свадьбой!';
      const p = document.createElement('p');
      p.textContent = 'Пусть жизнь в роли мужа будет сказкой!';
      const btn = document.createElement('button');
      btn.className = 'button';
      btn.textContent = 'К подарочку 🎁';
      btn.onclick = () => { stage = 1; render(); };
      app.append(h1, p, btn);
      return;
    }

    // Эффект клика по свинке (1..9)
    if(stage < maxClicks){
      const p = document.createElement('p');
      p.textContent = 'Нажимай на свинку, чтобы она отдала тебе подарок';
      const container = document.createElement('div');
      container.className = 'piggy-container';

      // Изображение свинки из локального файла
      const img = document.createElement('img');
      img.src = 'piggy.png';
      img.alt = 'копилка-свинка';
      img.className = shaking ? 'piggy shake' : 'piggy';
      img.onclick = () => {
        shaking = true;
        setTimeout(() => { shaking = false; render(); }, 200);
        stage++;
      };
      container.append(img);

      // Линии-трещины
      for(let i = 0; i < stage; i++){
        const line = document.createElement('div');
        line.className = 'crack-line';
        const angle = Math.random() * 60 - 30;     // угол
        const offset = Math.random() * 40 - 20;    // смещение по X
        line.style.transform = `translateX(${offset}px) rotate(${angle}deg)`;
        line.style.opacity = 0.2 + i * (0.6 / maxClicks);
        container.append(line);
      }

      app.append(p, container);
      return;
    }

    // Финальный экран (stage >= maxClicks)
    const h2 = document.createElement('h2');
    h2.textContent = '🎉 Ура! Подарок готов!';
    const p2 = document.createElement('p');
    p2.textContent = 'Отсканируй QR-код, чтобы забрать подарок';
    const qr = document.createElement('img');
    qr.src = 'https://sbpqr.nspk.ru/QRGenerator/images/qr_example.png';
    qr.alt = 'QR-код';
    qr.className = 'qr';

    const msgs = document.createElement('div');
    msgs.className = 'messages';
    msgs.innerHTML = `
      <h3>Поздравления от команды 💌</h3>
      <p>• Ты лучший! Удачи в семейной жизни — Катя 🙌</p>
      <p>• С любовью и теплом! — Ирина 💐</p>
      <p>• Пусть в доме всегда будет мир — Саша ☀️</p>
    `;

    app.append(h2, p2, qr, msgs);
  }

  // Начинаем рендерить
  render();
})();
