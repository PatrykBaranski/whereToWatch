export const AJAX = async function (url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message, response.status);
    return data;
  } catch (err) {
    throw err;
  }
};
export const timout = function (sec) {
  return new Promise(function (_, rejcect) {
    setTimeout(function () {
      rejcect(new Error(`Request took to long. Timeout after ${sec} seconds`));
    }, sec * 1000);
  });
};
