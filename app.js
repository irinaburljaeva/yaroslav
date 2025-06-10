(function () {
  const { useState } = React;

  function App() {
    const [stage, setStage] = useState(0);
    const maxClicks = 10;
    const [shaking, setShaking] = useState(false);

    const handleClick = () => {
      if (stage < maxClicks) {
        setShaking(true);
        setTimeout(() => setShaking(false), 200);
        setStage(stage + 1);
      }
    };

    // создаём массив img.crack в зависимости от stage
    const cracks = [];
    for (let i = 1; i < stage; i++) {
      cracks.push(
        React.createElement("img", {
          key: i,
          src: "https://i.imgur.com/s5XU6vw.png",  // единая картинка трещины
          className: "crack",
          style: { opacity: 0.1 + i * 0.08 }
        })
      );
    }

    // финальное состояние: свинка разбита
    if (stage >= maxClicks) {
      return React.createElement("div", null,
        React.createElement("h2", null, "🎉 Ура! Подарок готов!"),
        React.createElement("p", null, "Отсканируй QR-код, чтобы забрать подарок"),
        React.createElement("img", {
          src: "https://sbpqr.nspk.ru/QRGenerator/images/qr_example.png",
          className: "qr"
        }),
        React.createElement("div", { className: "messages" },
          React.createElement("h3", null, "Поздравления от команды 💌"),
          React.createElement("p", null, "• Ты лучший! Удачи в семейной жизни — Катя 🙌"),
          React.createElement("p", null, "• С любовью и теплом! — Ирина 💐"),
          React.createElement("p", null, "• Пусть в доме всегда будет мир — Саша ☀️")
        )
      );
    }

    // начальное состояние (stage 0)
    if (stage === 0) {
      return React.createElement("div", null,
        React.createElement("h1", null, "Ярослав, поздравляем со свадьбой!"),
        React.createElement("p", null, "Пусть жизнь в роли мужа будет сказкой!"),
        React.createElement("button", {
          className: "button",
          onClick: () => setStage(1)
        }, "К подарочку 🎁")
      );
    }

    // промежуточное состояние (1..9)
    return React.createElement("div", null,
      React.createElement("p", null, "Нажимай на свинку, чтобы она отдала тебе подарок"),
      React.createElement("div", { className: "piggy-container" },
        React.createElement("img", {
          src: "https://cdn-icons-png.flaticon.com/512/2323/2323661.png",
          className: "piggy " + (shaking ? "shake" : ""),
          onClick: handleClick
        }),
        ...cracks
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root"))
    .render(React.createElement(App));
})();
