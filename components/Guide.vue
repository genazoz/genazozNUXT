<template>
  <div class="guide-cover">
    <div class="before">
      <div class="border"></div>
    </div>
    <div class="guide-tip">
      <div class="flexRow_title">
        <h3 class="guide-tip__title"></h3>
        <button class="guide-tip__close-btn hide-ball" btnSoundOn>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 298.667 298.667"
            style="enable-background: new 0 0 298.667 298.667"
            xml:space="preserve"
          >
            <g>
              <g>
                <polygon
                  points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   "
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <p class="guide-tip__text"></p>
      <div class="guide-tip__count">
        <span class="guide-tip__selected-tip"></span> из
        <span class="guide-tip__all-tip"></span>
      </div>
    </div>
    <div class="guide__flexRow_fixed">
      <div class="flexRow">
        <button class="guide-tip__prev-btn hide-ball" btnSoundOn>Назад</button>
        <button class="guide-tip__next-btn hide-ball" btnSoundOn>Далее</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const T = this;

    /*--------------------------------------------------
      Работа с интерактивными подсказками - Work with interact guide
    ---------------------------------------------------*/
    document.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (guide.opened) {
        if (event.keyCode === 13) {
          guide.goNextTip();
        }
        if (event.keyCode === 32) {
          guide.goPrevTip();
        }
      }
    });
    document
      .querySelector(".guide-tip__next-btn")
      .addEventListener("click", function () {
        guide.goNextTip();
      });

    document
      .querySelector(".guide-tip__prev-btn")
      .addEventListener("click", function () {
        guide.goPrevTip();
      });

    document
      .querySelector('.icon-wrapper_question[tip__title="Подсказки"]')
      .addEventListener("click", function () {
        guide.startGuide();
      });

    document
      .querySelector(".guide-tip__close-btn")
      .addEventListener("click", function () {
        guide.closeGuide();
      });
  },
};
</script>
