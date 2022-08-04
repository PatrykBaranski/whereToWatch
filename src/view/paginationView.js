import View from "./view";
class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _genrateMarkup() {
    console.log(this._data.numberOfPages);
    if (this._data.numberOfPages === 1) return "";
    else if (this._data.page === 1) {
      return `
      <button data-page="${
        this._data.page - 1
      }"class="btn--prev hidden"><span class="fa-solid fa-arrow-left"></span></button>
      <div class="btn--page-container">${this._genreatePageButtonsMarkup()}</div>
        <button data-page= "${
          this._data.page + 1
        }"class="btn--next"> <span class="fa-solid fa-arrow-right"></span></button>
        `;
    } else if (this._data.page === this._data.numberOfPages) {
      return `
         <button data-page="${
           this._data.page - 1
         }"class="btn--prev"><span class="fa-solid fa-arrow-left"></span></button>
         <div class="btn--page-container">${this._genreatePageButtonsMarkup()}</div>
         <button data-page="${
           this._data.page - 1
         }"class="btn--prev hidden"><span class="fa-solid fa-arrow-left"></span></button>`;
    } else {
      return `
        <button data-page="${
          this._data.page - 1
        }"class="btn--prev"><span class="fa-solid fa-arrow-left"></span></button>
        <div class="btn--page-container">${this._genreatePageButtonsMarkup()}</div>
        <button data-page="${
          this._data.page + 1
        }"class="btn--next"> <span class="fa-solid fa-arrow-right"></span></button>
        `;
    }
  }
  addHandlerPagination(handler) {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      const btn = e.target.closest("button");
      console.log(btn);
      btn.classList.add("btn--page--active");
      this._data.page = +btn.dataset.page;
      handler();
    });
  }
  _genreatePageButtonsMarkup() {
    const markup = [];
    if (this._data.numberOfPages < 5) {
      for (let i = 1; i <= this._data.numberOfPages; i++) {
        markup.push(`<button data-page="${i}" class="btn--page">${i}</button>`);
      }
    } else {
      markup.push(`
      <button data-page="${this._data.page}" class="btn--page">${
        this._data.page
      }</button>
      <button data-page="${this._data.page + 1}" class="btn--page">${
        this._data.page + 1
      }</button>
      <button data-page="${this._data.page + 2}" class="btn--page">${
        this._data.page + 2
      }</button>
      <span>...</span>
      <button data-page="${this._data.numberOfPages}" class="btn--page">${
        this._data.numberOfPages
      }</button>
      `);
    }
    return markup.join(" ");
  }
}
export default new PaginationView();
