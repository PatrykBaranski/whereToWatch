import {
  API_TITLE_URL,
  API_GET_OPTIONS,
  API_SEARCH_URL,
  NUMBER_OF_RESULTS_PER_PAGE,
} from "./config";
import { AJAX } from "./helpers";
export const state = {
  movie: {},
  search: {
    results: [],
    resultsPerPage: [],
    page: 1,
    numberOfPages: 0,
  },
  watchlist: [],
  country: {},
};
const createMovieObject = function (data) {
  const [movieData, countryData] = data;
  return {
    netflixId: movieData.netflix_id,
    img: movieData.large_image,
    releaseDate: movieData.year,
    synopsis: movieData.synopsis,
    title: movieData.title,
    titleType: movieData.title_type,
    runtime: movieData.runtime,
    ageRating: movieData.maturity_label,
    countryList: countryData.results,
  };
};
export const loadMovie = async function (id) {
  try {
    const moviedata = AJAX(
      `${API_TITLE_URL}details?netflix_id=${id}`,
      API_GET_OPTIONS
    );
    const countryData = AJAX(
      `${API_TITLE_URL}countries?netflix_id=${id}`,
      API_GET_OPTIONS
    );
    const data = await Promise.all([moviedata, countryData]);
    state.movie = createMovieObject(data);
  } catch (err) {
    throw err;
  }
};
export const loadCountry = function (countryName) {
  const [countrData] = state.movie.countryList.filter(
    (el) => el.country.trim() === countryName.trim()
  );
  state.country = countrData;
};
export const loadSearch = async function (query) {
  try {
    state.search.page = 1;
    const { results } = await AJAX(
      `${API_SEARCH_URL}%22${query.replaceAll(" ", "%20")}%22'`,
      API_GET_OPTIONS
    );
    if (!results)
      throw new Error(
        "Sorry we didn't find nothing for this query. Pleas try again"
      );
    state.search.results = results;
  } catch (err) {
    throw err;
  }
};
export const loadResults = function (page) {
  state.search.page = page;
  if (!state.search.results) return;
  state.search.numberOfPages = Math.ceil(
    state.search.results.length / NUMBER_OF_RESULTS_PER_PAGE
  );
  state.search.resultsPerPage = state.search.results.slice(
    page * NUMBER_OF_RESULTS_PER_PAGE - NUMBER_OF_RESULTS_PER_PAGE,
    page * NUMBER_OF_RESULTS_PER_PAGE
  );
};
export const loadWatchlist = function () {
  if (state.watchlist.includes(state.movie)) return;
  state.watchlist.push(state.movie);
};
