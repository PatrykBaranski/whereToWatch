import View from "./view";
class ResultView extends View {
  _parentEl = document.querySelector(".results");
  _genrateMarkup() {
    return this._data
      .map(
        (el) => ` 
    <li class="previev">
    <a class="previev-link" href="#${el.netflix_id}">
      <div class="previev-poster-container">
        <img
          class="previev-poster"
          src="${el.poster}"
          alt="poster of the movie: ex machina"
        />
      </div>
      <div class="previev-info">
        <h3 class="">${el.title}</h3>
        <p>${el.year}</p>
        <p>${el.rating > 0 ? `${(+el.rating).toFixed(2)} / 5 ` : ""}</p>
        <p>${(el.runtime / 60).toFixed(2)} min</p>
      </div>
    </a> 
  </li>`
      )
      .join("");
  }
}
export default new ResultView();
