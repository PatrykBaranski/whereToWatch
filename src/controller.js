import * as model from "./model.js";
import movieView from "./view/movieView.js";
const controlMovie = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    await model.loadMovie(id);
    movieView.render(model.state.movie);
  } catch (err) {
    console.error(err);
  }
};
const init = function () {
  movieView.addHandlerRender(controlMovie);
};
init();
