import { API_GET_OPTIONS } from "./config";
import { API_URL } from "./config";
import { AJAX } from "./helpers";
export const loadMovie = async function (id = "70143836") {
  try {
    const data = await AJAX(`${API_URL}${id}`, API_GET_OPTIONS);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
