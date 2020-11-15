<template>
  <div>
    <audio
      id="backgr-audio"
      src="@/assets/audio/Nto - Trauma.mp3"
      controls="false"
      loop
    ></audio>
    <audio
      id="buttons-audio"
      src="@/assets/audio/btnClick.mp3"
      controls="false"
    ></audio>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      BGAudioActive: 0,
    };
  },
  computed: mapGetters({
    worksMode: "worksMode",
    volume: "volume",
    lang: "lang",
    windowSize: "windowSize",
  }),
  mounted() {
    const T = this;

    /*--------------------------------------------------
      Добавление звука для кнопок - Adding sound for buttons
    ---------------------------------------------------*/
    T.addEventToEls("[btnSoundOn]", "click", T.clickSound);

    /*--------------------------------------------------
        BGAudio animation
        Анимация кнопки включения / выключения фоновой музыки
    ---------------------------------------------------*/
    document.querySelector(".BGAudio").addEventListener("click", () => {
      T.$store.commit("getWindowSize");
      if (T.windowSize === "PC") {
        T.BGAudioClick();
      }
    });

    T.$store.commit("getVolume");
    var nub = document.querySelector(".slider__nub"),
      lineLeft = document.querySelector(".slider__line_left"),
      lineRight = document.querySelector(".slider__line_right"),
      slider = document.querySelector(".slider"),
      sliderWrapper = document.querySelector(".slider-wrapper"),
      leftLineWidth = parseInt(T.volume * 100),
      rightLineWidth = 100 - leftLineWidth - 8;
    lineLeft.style.width = leftLineWidth + "%";
    lineRight.style.width = rightLineWidth + "%";
    nub.style.left = leftLineWidth + "%";

    slider.addEventListener("mousedown", function (event) {
      document
        .querySelector(".flexRow_BGAudio")
        .removeEventListener("mouseleave", BGAudioMouseleave);

      function mouseMove(event) {
        const { left, width } = slider.getBoundingClientRect();
        let x = event.pageX - left;
        if (x < 0) {
          x = 0;
        }
        if (x > width) {
          x = width;
        }

        let vol = x / width,
          audio = document.getElementById("backgr-audio");
        T.$store.commit("setVolume", vol);
        if (audio) audio.volume = T.volume;

        leftLineWidth = parseInt(vol * 100);
        rightLineWidth = 100 - leftLineWidth - 2;

        nub.style.left = leftLineWidth + "%";
        lineLeft.style.width = "calc(" + leftLineWidth + "% - 7px)";
        lineRight.style.width = "calc(" + rightLineWidth + "% - 6px)";
      }

      mouseMove(event);

      document.getElementById("ball").classList.add("hide");

      const { left } = slider.getBoundingClientRect();
      let x = event.pageX - left;

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener(
        "mouseup",
        function (event) {
          document.getElementById("ball").classList.remove("hide");
          document.removeEventListener("mousemove", mouseMove);

          let BGAudioFlexRow = document.querySelector(".flexRow_BGAudio"),
            myNodeList = document.querySelectorAll(":hover"),
            hovered = 0;

          BGAudioFlexRow.addEventListener("mouseleave", BGAudioMouseleave);

          myNodeList.forEach(function (x) {
            if (x.classList.contains("flexRow_BGAudio")) {
              hovered = 1;
            }
          });
          if (hovered === 0) BGAudioMouseleave();
          T.$store.commit("setCookie", {
            name: "volume",
            value: T.$store.state.volume,
            time: 1000000,
          });
        },
        { once: true }
      );
    });

    document
      .querySelector(".flexRow_BGAudio")
      .addEventListener("mouseenter", function () {
        TweenMax.to(sliderWrapper, 0.3, {
          css: { y: 0 },
        });
        TweenMax.set(sliderWrapper, {
          pointerEvents: "all",
        });
      });

    document
      .querySelector(".flexRow_BGAudio")
      .addEventListener("mouseleave", BGAudioMouseleave);
    function BGAudioMouseleave() {
      TweenMax.to(sliderWrapper, 0.3, {
        css: { y: -(window.innerHeight * 0.1 + 100) },
      });
      TweenMax.set(sliderWrapper, {
        pointerEvents: "none",
      });
    }
  },
  methods: {
    /*--------------------------------------------------
      Включение/выключение фоновой музыки
    ---------------------------------------------------*/
    BGAudioClick() {
      let T = this;
      if (T.windowSize === "PC") {
        T.toggleBackgrSoundBTN();
      } else return 0;
    },

    toggleBackgrSoundBTN() {
      let T = this,
        BGAudio = document.querySelector(".BGAudio"),
        audio = null;
      BGAudio.classList.toggle("active");
      switch (~~T.BGAudioActive) {
        case 0:
          audio = document.getElementById("backgr-audio");
          audio.volume = T.volume;
          audio.play();
          break;
        case 1:
          if (!document.querySelector("#backgr-audio")) {
            console.log(
              'ОШИБКА / Тэг <audio> не создан, но кнопка ".BGAudio" активна'
            );
            return 0;
          }
          audio = document.getElementById("backgr-audio");
          audio.pause();
          break;
      }
      T.memberBGAudioMode();
    },

    memberBGAudioMode() {
      let T = this;
      T.BGAudioActive = document
        .querySelector(".BGAudio")
        .classList.contains("active");
    },
    /*--------------------------------------------------
      Проигрывание звука клика кнопок - Play buttons audio
    ---------------------------------------------------*/
    clickSound() {
      const T = this;
      if (T.BGAudioActive || T.windowSize === "smartphone") return 0;
      let mySound = document.getElementById("buttons-audio");

      T.$store.commit("getVolume");
      mySound.volume = T.volume;
      mySound.play();
    },

    /*--------------------------------------------------
      Добавление обработчика события элементам
    ---------------------------------------------------*/
    addEventToEls(elsAttr, evnt, func) {
      let els = document.querySelectorAll(elsAttr);
      els.forEach(function (x) {
        if (x.addEventListener) {
          x.addEventListener(evnt, func, false);
        } else if (x.attachEvent) {
          x.attachEvent("on" + evnt, function () {
            func.apply(x);
          });
        } else {
          x["on" + evnt] = func;
        }
      });
    },
  },
};
</script>