import View from "./view";
class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _genrateMarkup() {
    const btnPrev = `
    <button data-page="${this._data.page - 1}"class="btn--prev">
      <span class="fa-solid fa-arrow-left"></span>
      PREV
    </button>`;
    const btnNext = `<button data-page="${
      this._data.page + 1
    }"class="btn--next">NEXT <span class="fa-solid fa-arrow-right"></span></button>`;
    if (this._data.numberOfPages === 1) return "";
    else if (this._data.page === 1) {
      return btnNext;
    } else if (this._data.page === this._data.numberOfPages) {
      return btnPrev;
    } else {
      return `${btnPrev}${btnNext}`;
    }
  }
  addHandlerPagination(handler) {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      const btn = e.target.closest("button");
      if (!btn) return;
      this._data.page = +btn.dataset.page;
      handler();
    });
  }
}
export default new PaginationView();
