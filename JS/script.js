const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
  containerEl.innerHTML = `
      <div class="xcord">
        <div class="cord">${event.clientX}</div>
        <div class="cordtext">X Coordinate</div>
      </div>

      <div class="ycord">
        <div class="cord">${event.clientY}</div>
        <div class="cordtext">Y Coordinate</div>
      </div>
  `;
});