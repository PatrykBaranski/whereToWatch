import View from "./view";
import { previewMarkup } from "../helpers";
class WatchlistView extends View {
  _parentEl = document.querySelector(".watchlist-items");
  addHandlerClick() {
    console.log(this._parentEl);
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-watchlist");
      if (!e.target.closest(".watchlist"))
        this._parentEl.classList.add("hidden");
      if (btn) this._parentEl.classList.toggle("hidden");
    });
  }
  _genrateMarkup() {
    const id = window.location.hash.slice(1);
    console.log(this._data);
    return this._data
      .map((el) => {
        console.log(el);
        return `
        <li class="watchlist-item">
            <a class="previev-link ${
              id === el.netflixId ? "previev-link--active" : ""
            }" href="#${el.netflixId}">
            <div class="previev-poster-container">
                <img
                class="previev-poster"
                src="${el.img}"
                alt="poster of the movie: ex machina"
                />
            </div>
            <div class="previev-info">
                <h3 class="">${el.title}</h3>
                <p>${el.releaseDate}</p>
                <p>${el.titleType}</p>
            </div>
            </a> 
      </li>`;
      })
      .join(" ");
  }
}
export default new WatchlistView();
