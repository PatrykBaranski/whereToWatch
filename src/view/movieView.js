import { findFlagUrlByCountryName } from "country-flags-svg";
class MovieView {
  _parentEl = document.querySelector(".movie");
  _data;
  render(data) {
    this._clear();
    this._data = data;
    this._parentEl.insertAdjacentHTML("afterbegin", this._genrateMarkup());
  }
  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  _genrateMarkup() {
    return `<div class="movie-poster-container">
    <img
      src="${this._data.img}"
      alt="poster of the movie: ${this._data.title}"
    />
  </div>
  <div class="movie-info-container">
    <div class="movie-title-container">
      <p class="subheading video-type">${this._data.titleType.toUpperCase()}</p>
      <h2 class="movie-title">${this._data.title}</h2>
    </div>
    <p class="movie-synopsis">
      ${this._data.synopsis}
    </p>
    <div class="basic-info">
      <span>Release date:</span>
      <p class="release-date">${this._data.releaseDate}</p>
      <span>IMBD rating:</span>
      <p class="imbd-rating">7.7</p>
      <span>Runtime:</span>
      <p class="runtime">${
        this._data.titleType === "movie"
          ? this._data.runtime
          : "No info about leghnt of tv series"
      }</p>
    </div>
    </div>
    <div class="country-list-container">
      <h3>
        ${this._data.titleType[0].toUpperCase()}${this._data.titleType.slice(
      1
    )} is available on <span>Netflix</span> in this countries:
      </h3>
      <ul class="country-list">
        ${this._data.countryList
          .map((el) => this._generateCountryListMarkup(el.country.trim()))
          .join("")}
      </ul>
    </div>`;
  }
  _generateCountryListMarkup(country) {
    return `<li class="country"><a href="#"><img alt="flag of country: ${country}" src="${findFlagUrlByCountryName(
      country
    )}"></a></li>`;
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
}
export default new MovieView();
