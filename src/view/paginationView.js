import View from "./view";
class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _genrateMarkup() {
    console.log(this._data.numberOfPages);
    if (this._data.numberOfPages === 1) return "";
    else if (this._data.page === 1) {
      return `
        <button data-page= "${this._data.page + 1}"class="btn--next">${
        this._data.page + 1
      } <span class="fa-solid fa-arrow-right"></span></button>
        `;
    } else if (this._data.page === this._data.numberOfPages) {
      return `
         <button data-page="${
           this._data.page - 1
         }"class="btn--prev"><span class="fa-solid fa-arrow-left"></span> ${
        this._data.page - 1
      }</button>`;
    } else {
      return `
        <button data-page="${
          this._data.page - 1
        }"class="btn--prev"><span class="fa-solid fa-arrow-left"></span> ${
        this._data.page - 1
      }</button>
        <button data-page="${this._data.page + 1}"class="btn--next">${
        this._data.page + 1
      } <span class="fa-solid fa-arrow-right"></span></button>
        `;
    }
  }
  addHandlerPagination(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      this._data.page = +btn.dataset.page;
      handler();
    });
  }
}
export default new PaginationView();
