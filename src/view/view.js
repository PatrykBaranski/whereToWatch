export default class View {
  _data;
  render(data) {
    this._clear();
    this._data = data;
    this._parentEl.insertAdjacentHTML("afterbegin", this._genrateMarkup());
  }
  _clear() {
    this._parentEl.innerHTML = "";
  }
}
