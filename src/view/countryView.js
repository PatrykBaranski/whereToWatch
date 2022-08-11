import View from "./view";
class CountryView extends View {
  _parentEl = document.querySelector(".country-info");
  _genrateMarkup() {
    return `<h3 class="country-name">Argentina</h3>
    <div class="basic-info">
    <span>Seasons:</span><p class="seasons-deatails"> S1:7,S2:13,S3:13,S4:13,S5:16</p>
    <span>Audio:</span><p class="audio"> English [Original],Spanish,Brazilian Portuguese,English - Audio Description</p>
    <span>Subtitles:</span><p class="subtitles">Subtitles: Spanish,Brazilian Portuguese,English</p>
  </div>`;
  }
}
