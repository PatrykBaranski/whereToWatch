import View from "./view";
class CountryView extends View {
  _parentEl = document.querySelector(".country-info");
  _countryContainer = document.querySelector(".country-info-container");
  _overlay = document.querySelector(".overlay");
  addHandlerRender(handler) {
    ["hashchange"].forEach((ev) => window.addEventListener(ev, handler));
  }
  handlerClick() {
    [this._countryContainer, this._overlay].forEach((el) => {
      el.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        const overlay = e.target.closest(".overlay");
        if (!btn && !overlay) return;
        const index = window.location.hash.indexOf("/");
        history.replaceState(
          null,
          null,
          window.location.pathname + "#" + window.location.hash.slice(1, index)
        );
        this.toggleHidden();
      });
    });
  }
  toggleHidden() {
    [this._countryContainer, this._overlay].forEach((el) =>
      el.classList.toggle("hidden")
    );
  }
  _genrateMarkup() {
    return `<h3 class="country-name">${this._data.country}</h3>
    <div class="basic-info">
   ${
     this._data.season_detail
       ? `<span>Seasons:</span><p class="seasons-deatails"> ${this._data.season_detail}</p>`
       : ""
   }
    <span>Audio:</span><p class="audio">${this._data.audio}</p>
    <span>Subtitles:</span><p class="subtitles">${this._data.subtitle}</p>
  </div>`;
  }
}
export default new CountryView();
