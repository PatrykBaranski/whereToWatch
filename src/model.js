import {
  API_TITLE_URL,
  API_GET_OPTIONS,
  API_TITLE_URL,
  API_SEARCH_URL,
} from "./config";
import { AJAX } from "./helpers";
export const state = {
  movie: {},
  search: { results: [] },
};
const createMovieObject = function (data) {
  return {
    netflixId: data[0].netflix_id,
    img: data[0].large_image,
    releaseDate: data[0].year,
    synopsis: data[0].synopsis,
    title: data[0].title,
    titleType: data[0].title_type,
    runtime: data[0].runtime / 60,
    countryList: data[1].results,
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
export const loadSearch = async function (query) {
  try {
    const { results } = await AJAX(
      `${API_SEARCH_URL}%22${query.replaceAll(" ", "%20")}%22'`,
      API_GET_OPTIONS
    );
    state.search.results = results;
  } catch (err) {}
};
