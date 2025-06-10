(function () {
  const { useState } = React;
  const { motion } = window.framerMotion;

  function App() {
    const [stage, setStage] = useState(0);
    const maxClicks = 10;

    const handleClick = () => {
      if (stage < maxClicks) {
        setStage(stage + 1);
      }
    };

    const piggySrc = stage === maxClicks
      ? "https://cdn-icons-png.flaticon.com/512/2323/2323661.png"
      : "https://raw.githubusercontent.com/alex2237/piggy-stages/main/piggy" + stage + ".png";

    return React.createElement("div", { style: { textAlign: "center" } },
      stage === 0 && React.createElement("div", null,
        React.createElement("h1", null, "Ярослав, поздравляем со свадьбой!"),
        React.createElement("p", null, "Пусть жизнь в роли мужа будет сказкой! Счастливой совместной жизни и процветания вашей семье.\nТвои любящие коллеги из ШАГАЙ ДОМА ⚡️"),
        React.createElement("button", { className: "button", onClick: () => setStage(1) }, "К подарочку 🎁")
      ),
      stage > 0 && stage < maxClicks + 1 && React.createElement("div", null,
        React.createElement("p", null, "Нажимай на свинку, чтобы она отдала тебе подарок"),
        React.createElement("img", {
          src: piggySrc,
          className: "piggy",
          onClick: handleClick
        })
      ),
      stage === maxClicks && React.createElement("div", null,
        React.createElement("h2", null, "🎉 Ура! Подарок готов!"),
        React.createElement("p", null, "Отсканируй QR-код, чтобы забрать подарок"),
        React.createElement("img", {
          src: "https://sbpqr.nspk.ru/QRGenerator/images/qr_example.png",
          className: "qr"
        })
      ),
      stage === maxClicks && React.createElement("div", { className: "messages" },
        React.createElement("h3", null, "Поздравления от команды 💌"),
        React.createElement("p", null, "• Ты лучший! Удачи в семейной жизни — Катя 🙌"),
        React.createElement("p", null, "• С любовью и теплом! — Ирина 💐"),
        React.createElement("p", null, "• Пусть в доме всегда будет мир — Саша ☀️")
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
})();
