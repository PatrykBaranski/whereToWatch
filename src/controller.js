import * as model from "./model.js";
import movieView from "./view/movieView.js";
import searchView from "./view/searchView.js";
import resultsView from "./view/resultsView";
import paginationView from "./view/paginationView.js";
import countryView from "./view/countryView.js";
const controlMovie = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id || !isFinite(id)) return;
    resultsView.update(model.state.search.resultsPerPage);
    movieView.renderSpiner();
    await model.loadMovie(id);
    movieView.render(model.state.movie);
    console.log(model.state.movie);
  } catch (err) {
    console.log(err);
  }
};
const controlSearch = async function () {
  try {
    if (!searchView.query) return;
    resultsView.renderSpiner();
    await model.loadSearch(searchView.query);
    model.loadResults(model.state.search.page);
    resultsView.render(model.state.search.resultsPerPage);
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = function () {
  model.loadResults(model.state.search.page);
  resultsView.render(model.state.search.resultsPerPage);
  paginationView.render(model.state.search);
};
const controlCountry = function () {
  const id = window.location.hash.slice(1);
  if (!id || isFinite(id)) return;
  const indexOfSymbol = id.indexOf("/");
  const countryName = id.slice(indexOfSymbol + 1).replaceAll("%20", " ");
  model.loadCountry(countryName);
  countryView.toggleHidden();
  countryView.render(model.state.country);
};
const init = function () {
  movieView.addHandlerRender(controlMovie);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerPagination(controlPagination);
  countryView.addHandlerRender(controlCountry);
};
init();
