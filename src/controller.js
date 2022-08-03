import * as model from "./model.js";
import movieView from "./view/movieView.js";
import searchView from "./view/searchView.js";
import resultsView from "./view/resultsView";
import paginationView from "./view/paginationView.js";
const controlMovie = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    movieView.renderSpiner();
    await model.loadMovie(id);
    movieView.render(model.state.movie);
  } catch (err) {
    console.error(err);
  }
};
const controlSearch = async function () {
  if (!searchView.query) return;
  resultsView.renderSpiner();
  paginationView.render(model.state.search);
  await model.loadSearch(searchView.query, model.state.search.page);
  resultsView.render(model.state.search.results);
};
const init = function () {
  movieView.addHandlerRender(controlMovie);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerPagination(controlSearch);
};
init();
