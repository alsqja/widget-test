(function () {
  const MyPopupWidget = {
    init({ targetId }) {
      const target = document.getElementById(targetId);
      if (!target) {
        console.error(
          `[MyPopupWidget] Element with ID '${targetId}' not found.`
        );
        return;
      }

      if (getComputedStyle(target).position === "static") {
        target.style.position = "relative";
      }

      const popup = document.createElement("div");
      popup.innerText = "임베디드 테스트용 입니다";
      popup.style.cssText = `
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 10px;
        background: white;
        border: 1px solid #ccc;
        padding: 10px 14px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: none;
        z-index: 9999;
        white-space: nowrap;
      `;
      target.appendChild(popup);

      target.addEventListener("click", (e) => {
        e.stopPropagation();
        popup.style.display = popup.style.display === "none" ? "block" : "none";
      });

      document.addEventListener("click", () => {
        popup.style.display = "none";
      });
    },
  };

  window.MyPopupWidget = MyPopupWidget;
})();
