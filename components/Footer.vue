<template>
  <footer>
    <div class="flexRow hide-ball"></div>
    <div class="text text-lower-main hide-ball">
      <p>© <span>2017</span>-<span>2020</span> · Saint-Petersburg · Russia</p>
    </div>
    <div class="flexRow">
      <div class="magic-parallax on-menu-active">
        <div
          class="icon-wrapper icon icon_fullscreen"
          @click="setFullscreen()"
          tip__position="6"
          tip__title="На весь экран"
          tip__text="Нажав на эту кнопку, вы перейдете в полноэкранный режим"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="14px"
            height="14px"
            enable-background="new 0 0 482.239 482.239"
            viewBox="0 0 482.239 482.239"
          >
            <path
              d="m0 17.223v120.56h34.446v-103.337h103.337v-34.446h-120.56c-9.52 0-17.223 7.703-17.223 17.223z"
            />
            <path
              d="m465.016 0h-120.56v34.446h103.337v103.337h34.446v-120.56c0-9.52-7.703-17.223-17.223-17.223z"
            />
            <path
              d="m447.793 447.793h-103.337v34.446h120.56c9.52 0 17.223-7.703 17.223-17.223v-120.56h-34.446z"
            />
            <path
              d="m34.446 344.456h-34.446v120.56c0 9.52 7.703 17.223 17.223 17.223h120.56v-34.446h-103.337z"
            />
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    /*--------------------------------------------------
      Режим "На весь экран"
    ---------------------------------------------------*/
    setFullscreen() {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        var el = document.documentElement,
          rfs =
            el.requestFullscreen ||
            el.webkitRequestFullScreen ||
            el.mozRequestFullScreen ||
            el.msRequestFullscreen;
        rfs.call(el);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
};
</script>