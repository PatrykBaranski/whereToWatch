export default class View {
  _data;
  render(data) {
    this._clear();
    this._data = data;
    this._parentEl.insertAdjacentHTML("afterbegin", this._genrateMarkup());
  }
  renderSpiner() {
    this._clear();
    this._parentEl.insertAdjacentHTML(
      "afterbegin",
      this._genrateSpinerMarkup()
    );
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
  _genrateSpinerMarkup() {
    return `
  <div class="spinner"> 
      <span>Loading</span>
      <div class="spinner-element spinner-element--red"></div>
      <div class="spinner-element spinner-element--gray"></div>
  </div>`;
  }
}
