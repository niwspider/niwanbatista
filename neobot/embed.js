window.addEventListener("DOMContentLoaded", () => {
  // Carrega o CSS do chatbot
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "/neobot/style.css";
  document.head.appendChild(style);

  // Carrega o HTML do chatbot
  fetch("/neobot/index.html")
    .then(res => res.text())
    .then(html => {
      const container = document.createElement("div");
      container.innerHTML = html;
      document.body.appendChild(container);

      // Carrega Emoji Picker
      const emojiScript = document.createElement("script");
      emojiScript.src = "https://cdn.jsdelivr.net/npm/emoji-mart@latest/dist/browser.js";
      emojiScript.defer = true;
      document.body.appendChild(emojiScript);

      emojiScript.onload = () => {
        // Só depois do emoji carregar, carregamos o script funcional
        const script = document.createElement("script");
        script.src = "/neobot/script.js";
        script.defer = true;
        document.body.appendChild(script);
      };
    });
});
