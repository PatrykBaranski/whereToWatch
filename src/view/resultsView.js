import View from "./view";
class ResultView extends View {
  _parentEl = document.querySelector(".results");
  _genrateMarkup() {
    return this._data.map((el) => this._generatePreview(el)).join("");
  }
  _generatePreview(el) {
    const id = +window.location.hash.slice(1);
    console.log(id);
    return `<li class="previev">
    <a class="previev-link ${
      id === el.netflix_id ? "previev-link--active" : "xd"
    }" href="#${el.netflix_id}">
      <div class="previev-poster-container">
        <img
          class="previev-poster"
          src="${el.poster}"
          alt="${el.title}"
        />
      </div>
      <div class="previev-info">
        <h3 class="">${el.title}</h3>
        <p>${el.year}</p>
        <p>${
          el.title_type === "movie"
            ? `${(el.runtime / 60).toFixed(2)} min`
            : "--"
        }</p>
        <p>${el.rating > 0 ? `${(+el.rating).toFixed(2)} / 5 ` : " -- "}</p>
      </div>
    </a> 
  </li>`;
  }
}
export default new ResultView();
