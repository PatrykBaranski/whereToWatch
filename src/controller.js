import * as model from "./model.js";
import movieView from "./view/movieView.js";
import searchView from "./view/searchView.js";
import resultsView from "./view/resultsView";
import paginationView from "./view/paginationView.js";
import countryView from "./view/countryView.js";
import watchlistView from "./view/watchlistView.js";
const controlMovie = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id || !isFinite(id)) return;
    resultsView.update(model.state.search.resultsPerPage);
    watchlistView.update(model.state.watchlist);
    movieView.renderSpiner();
    await model.loadMovie(id);
    movieView.render(model.state.movie);
  } catch (err) {
    movieView.renderError("Sorry, We didn't find any movie with this ID");
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
    resultsView.renderError("Sorry, we couldn't find anything for this query");
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
const controlWatchlist = function () {
  if (!model.state.movie.bookmarked) model.addToWatchlist(model.state.movie);
  else model.removeFromWatchlist(model.state.movie.netflixId);
  movieView.render(model.state.movie);
  watchlistView.render(model.state.watchlist);
  if (!model.state.watchlist[0]) {
    watchlistView.addPlaceholder();
  }
};
const renderBookmark = function () {
  if (!model.state.watchlist[0]) return;
  watchlistView.render(model.state.watchlist);
};
const init = function () {
  renderBookmark();
  movieView.addHandlerRender(controlMovie);
  searchView.addHandlerSearch(controlSearch);
  paginationView.addHandlerPagination(controlPagination);
  countryView.addHandlerRender(controlCountry);
  countryView.handlerClick();
  watchlistView.addHandlerClick();
  movieView.addHandlerBtnWatchlist(controlWatchlist);
};
init();
