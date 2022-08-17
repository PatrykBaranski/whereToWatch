import View from "./view";
class SearchView extends View {
  _parenEl = document.querySelector(".search-form");
  _movieEl = document.querySelector(".movie");
  query;
  addHandlerSearch(handler) {
    this._parenEl.addEventListener("submit", (e) => {
      e.preventDefault();
      this._movieEl.classList.remove("active");
      this.query = document.querySelector(".search-field").value;
      document.querySelector(".search-field").value = "";
      handler();
    });
  }
}

export default new SearchView();
