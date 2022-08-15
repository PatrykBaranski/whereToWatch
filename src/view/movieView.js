import { findFlagUrlByCountryName } from "country-flags-svg";
import View from "./view";
class MovieView extends View {
  _parentEl = document.querySelector(".movie");
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
      <span>Age Rating </span>
      <p class="age-rating">${this._data.ageRating}</p>
    </div>
    <div class="container-btn-watchlist">
    <button class="btn-small btn-addWatchlist"><span class="fa-solid fa-eye"></span> I want to see</button>
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
    return `<li class="country"><a href="#${
      this._data.netflixId
    }/${country}"><img alt="flag of country: ${country}" src="${findFlagUrlByCountryName(
      country
    )}"></a></li>`;
  }
}
export default new MovieView();
