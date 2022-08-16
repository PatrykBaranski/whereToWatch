import View from "./view";
import { previewMarkup } from "../helpers";
class ResultView extends View {
  _parentEl = document.querySelector(".results");
  _genrateMarkup() {
    return this._data.map((el) => previewMarkup(el)).join("");
  }
}
export default new ResultView();
