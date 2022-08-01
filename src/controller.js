import * as model from "./model.js";
import movieView from "./view/movieView.js";
import searchView from "./view/searchView.js";
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
const controlSearch = async function () {
  if (!searchView.query) return;
  await model.loadSearch(searchView.query);
  console.log(model.state.search.results);
};
const init = function () {
  movieView.addHandlerRender(controlMovie);
  searchView.addHandlerSearch(controlSearch);
};
init();
