import { API_URL, API_GET_OPTIONS } from "./config";
import { AJAX } from "./helpers";
export const state = {
  movie: {},
};
const createMovieObject = function (data) {
  return {
    netflixId: data[0].netflix_id,
    img: data[0].large_image,
    releaseDate: data[0].year,
    synopsis: data[0].synopsis,
    title: data[0].title,
    titleType: data[0].title_type,
    runtime: data[0].runtime,
    countryList: data[1].results,
  };
};
export const loadMovie = async function (id) {
  try {
    const moviedata = AJAX(
      `${API_URL}details?netflix_id=${id}`,
      API_GET_OPTIONS
    );
    const countryData = AJAX(
      `${API_URL}countries?netflix_id=${id}`,
      API_GET_OPTIONS
    );
    const data = await Promise.all([moviedata, countryData]);
    state.movie = createMovieObject(data);
    console.log(state.movie);
  } catch (err) {
    throw err;
  }
};
