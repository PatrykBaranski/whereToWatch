import { TIMEOUT_SEC } from "./config";

const timout = function (sec) {
  return new Promise(function (_, rejcect) {
    setTimeout(function () {
      rejcect(new Error(`Request took to long. Timeout after ${sec} seconds`));
    }, sec * 1000);
  });
};
export const AJAX = async function (url, options) {
  try {
    const response = await Promise.race([
      fetch(url, options),
      timout(TIMEOUT_SEC),
    ]);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message, response.status);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const previewMarkup = function (el) {
  const id = +window.location.hash.slice(1);
  return `<li class="previev">
    <a class="previev-link ${
      id === el.netflix_id ? "previev-link--active" : ""
    }" href="#${el.netflix_id}">
      <div class="previev-poster-container">
        <img
          class="previev-poster"
          src="${el.poster}"
          alt="${el.title}"
        />
      </div>
      <div class="previev-info">
        <h3 class="">${el.title}</h3>
        <p>${el.year} |</p>
        <p>${
          el.title_type === "movie"
            ? `${(el.runtime / 60).toFixed(2)} min |`
            : "-- |"
        }</p>
        <p>${el.rating > 0 ? `${(+el.rating).toFixed(2)} / 5 ` : " -- "}</p>
      </div>
    </a> 
  </li>`;
};
