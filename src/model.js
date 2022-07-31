import { API_URL, API_GET_OPTIONS } from "./config";
import { AJAX } from "./helpers";
export const state = {
  movie: {},
};
const createMovieObject = function (data) {
  return {
    netflixId: data.netflix_id,
    img: data.large_image,
    releaseDate: data.year,
    synopsis: data.synopsis,
    title: data.title,
    titleType: data.title_type,
    runtime: data.runtime,
  };
};
export const loadMovie = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}`, API_GET_OPTIONS);
    state.movie = createMovieObject(data);
  } catch (err) {
    throw err;
  }
};
