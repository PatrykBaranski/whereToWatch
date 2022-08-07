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
  update(data) {
    this._data = data;
    const newMarkup = this._genrateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll("*"));
    const curElements = Array.from(this._parentEl.querySelectorAll("*"));
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
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
