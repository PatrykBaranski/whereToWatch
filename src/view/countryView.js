import View from "./view";
class CountryView extends View {
  _parentEl = document.querySelector(".country-info");
  _countryContainer = document.querySelector(".country-info-container");
  _overlay = document.querySelector(".overlay");
  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  handlerClick() {}
  toggleHidden() {
    [this._countryContainer, this._overlay].forEach((el) =>
      el.classList.toggle("hidden")
    );
  }
  _genrateMarkup() {
    return `<h3 class="country-name">${this._data.country}</h3>
    <div class="basic-info">
   ${
     this._data.seasons
       ? `<span>Seasons:</span><p class="seasons-deatails"> ${this._data.seasons}</p>`
       : ""
   }
    <span>Audio:</span><p class="audio">${this._data.audio}</p>
    <span>Subtitles:</span><p class="subtitles">${this._data.subtitle}</p>
  </div>`;
  }
}
export default new CountryView();
