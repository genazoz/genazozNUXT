<template>
  <header>
    <svg style="position: fixed; pointer-events: none">
      <defs>
        <filter id="filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
            result="filter"
          />
          <feComposite in="SourceGraphic" in2="filter" operator="atop" />
        </filter>
      </defs>
    </svg>
    <div class="menu_mobile header__toggle-el_main">
      <div class="menu_mobile__cover"></div>
      <div class="menu__spans-wrapper">
        <span class="menu__span-wrapper"><span class="menu__span"></span></span
        ><span class="menu__span-wrapper"><span class="menu__span"></span></span
        ><span class="menu__span-wrapper"><span class="menu__span"></span></span
        ><span class="menu__span-wrapper"><span class="menu__span"></span></span
        ><span class="menu__span-wrapper"><span class="menu__span"></span></span
        ><span class="menu__span-wrapper"><span class="menu__span"></span></span
        ><span class="menu__span-wrapper"><span class="menu__span"></span></span
        ><span class="menu__span-wrapper"><span class="menu__span"></span></span
        ><span class="menu__span-wrapper"
          ><span class="menu__span"></span
        ></span>
      </div>
    </div>
    <div class="header__toggle-el header__toggle-el_main">
      <div class="flexRow_ring" hidden-loading>
        <svg
          class="border"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="33" cy="33" r="32"></circle>
        </svg>
        <div class="ring-btn hide-ball" btnSoundOn>
          <div class="menu-toggle">
            <div class="hamburger">
              <span></span>
              <span></span>
            </div>
            <div class="cross">
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            class="ring-btn__tip"
            tip__position="1"
            tip__title="Меню"
            tip__text="Нажав на эту кнопку, вы <br>попадете в главное меню сайта"
          ></div>
        </div>
      </div>
    </div>
    <div class="flexRow_BGAudio hide-ball">
      <div
        hidden-loading
        class="icon-wrapper BGAudio"
        tip__position="6"
        tip__title="Аудио"
        tip__text="Нажав на эту кнопку, включится фоновая музыка"
      >
        <div class="play ui-btn">
          <svg data-v-3e5ac452="" width="14" height="17" fill="none">
            <path
              data-v-3e5ac452=""
              d="M1.2 1.87975L12.6 8.46155L1.2 15.0433L1.2 1.87975Z"
              stroke="white"
              stroke-width="1.4"
              style="opacity: 0.3"
            ></path>
            <path
              path2
              data-v-3e5ac452=""
              d="M1.2 1.87975L12.6 8.46155L1.2 15.0433L1.2 1.87975Z"
              stroke="white"
              stroke-width="1.4"
              stroke-dasharray="40"
            ></path>
          </svg>
        </div>
        <div class="liquid-wrapper">
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
        </div>
      </div>
      <div class="slider-wrapper">
        <div class="slider">
          <div class="slider__line slider__line_left"></div>
          <div class="slider__nub"></div>
          <div class="slider__line slider__line_right"></div>
        </div>
      </div>
    </div>
    <div class="header__toggle-el header__toggle-el_about-contact">
      <nuxt-link to="/" class="close-about-contact-btn hide-ball" btnSoundOn>
        <button class="arrow-button arrow-button--left" style="opacity: 1">
          <span class="arrow-button__border">
            <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle cx="33" cy="33" r="32"></circle>
            </svg>
            <svg
              class="start"
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="33" cy="33" r="32"></circle>
            </svg>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.4 29.4"
            class="arrow-button__picto"
          >
            <path
              fill="none"
              d="M0 14.7h50.4M35.7 29.4l14.7-14.7L35.7 0"
            ></path>
          </svg>
        </button>
      </nuxt-link>
    </div>
    <div class="nav_mobile">
      <nuxt-link to="/" goto="home" class="router-link">Главная</nuxt-link>
      <a class="about-show-button" data-translate-key="">О нас</a>
      <nuxt-link to="contact" goto="contact" class="router-link"
        >Заказать сайт</nuxt-link
      >
      <div class="socials-wrapper">
        <a href="https://vk.com/genazozulya" target="blank"
          ><i class="fab fa-vk"></i
        ></a>
        <a href="https://www.instagram.com/genazoz/?hl=ru" target="blank"
          ><i class="fab fa-instagram"></i
        ></a>
        <a href="https://dribbble.com/apolllo" target="blank"
          ><i class="fab fa-dribbble"></i
        ></a>
      </div>
    </div>
    <div class="logotip" load>
      <div
        class="header__toggle-el header__toggle-el_main header__toggle-el_main-logotip"
      >
        <nuxt-link class="logo router-link" goto="home" to="/" btnSoundOn>
          <div class="genazozulya"><span>by</span> genazozulya</div>
        </nuxt-link>
      </div>
    </div>
    <div class="flexRow">
      <div
        hidden-loading
        class="icon-wrapper icon-wrapper_question hide-ball"
        tip__position="7"
        tip__title="Подсказки"
        tip__text="Нажав на эту кнопку, вы сможете увидеть подсказки еще раз"
        btnSoundOn
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          fill="white"
          width="14px"
          height="14px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <circle cx="256" cy="478.609" r="33.391" />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256,0c-81.626,0-148.035,66.409-148.035,148.035h66.783c0-44.802,36.45-81.252,81.252-81.252s81.252,36.45,81.252,81.252    c0,21.703-8.452,42.108-23.798,57.453c-20.054,20.053-79.536,75.12-80.135,75.675l-10.711,9.913v120.751h66.783v-91.59    c18.43-17.132,55.505-51.747,71.285-67.525c27.961-27.96,43.359-65.135,43.359-104.676C404.035,66.409,337.627,0,256,0z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <div class="text" data-translate-key="T19">Подсказки</div>
      </div>
      <div
        class="hide-ball icon-wrapper icon_language"
        tip__position="8"
        tip__title="Язык"
        tip__text="Нажав на эту кнопку, вы можете переключить язык"
        hidden-loading
        btnSoundOn
      >
        Ru
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import BezierEasing from "bezier-easing/dist/bezier-easing.min";

export default {
  computed: mapGetters({
    worksMode: "worksMode",
    volume: "volume",
    windowSize: "windowSize",
  }),
  mounted() {
    const T = this;

    let elements, btnRotateInterval;

    setTimeout(function () {
      if (T.$store.getters.windowSize === "PC") {
        document.querySelector(".logotip").removeAttribute("load");
        document.querySelector(".logotip").setAttribute("active", "");
      }
    }, 200);
    setTimeout(function () {
      if (T.$store.getters.windowSize === "PC") {
        elements = document.querySelectorAll("[hidden-loading]");
        elements.forEach(function (x) {
          x.classList.add("show-hidden-loading");
        });
      }
    }, 1200);

    $nuxt.$emit(
      "add-event-els",
      ".arrow-button--left .arrow-button__border svg:last-child",
      "animationend",
      function () {
        let parent = this.closest(".arrow-button--left");
        this.classList.add("animationend");
        if (this.classList.contains("disactive")) {
          TweenMax.set(parent, {
            css: { pointerEvents: "all" },
          });
        }
      }
    );
    $nuxt.$emit(
      "add-event-els",
      ".arrow-button--left",
      "mouseenter",
      function () {
        let el = this.querySelector(".arrow-button__border svg:last-child ");
        if (
          el.classList.contains("animationend") ||
          el.classList.contains("start")
        ) {
          el.classList.remove("animationend", "start");
        } else {
          return 0;
        }
        if (btnRotateInterval) clearInterval(btnRotateInterval);
        el.classList.add("active");
        el.classList.remove("disactive");
      }
    );
    $nuxt.$emit(
      "add-event-els",
      ".arrow-button--left",
      "mouseleave",
      function () {
        let el = this.querySelector(".arrow-button__border svg:last-child ");
        let _this = this;
        TweenMax.set(_this, {
          css: { pointerEvents: "none" },
        });
        btnRotateInterval = window.setInterval(function () {
          if (!$nuxt.$route.name == "about") {
            clearInterval(btnRotateInterval);
          }
          if (el.classList.contains("animationend")) {
            el.classList.remove("animationend");
          } else {
            return 0;
          }
          TweenMax.set(el, {
            css: {
              transform: "rotate(-90deg)",
            },
          });
          el.classList.remove("active");
          el.classList.add("disactive");
          clearInterval(btnRotateInterval);
        });
      }
    );
    $nuxt.$emit(
      "add-event-els",
      ".header__toggle-el_main .ring-btn",
      "mouseenter",
      function () {
        TweenMax.to(
          this.closest(".flexRow_ring").querySelector(".border"),
          1.5,
          {
            transform: "rotate(-90deg)",
            strokeDashoffset: 0,
            ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
          }
        );
      }
    );
    $nuxt.$emit(
      "add-event-els",
      ".header__toggle-el_main .ring-btn",
      "mouseleave",
      function () {
        TweenMax.to(
          this.closest(".flexRow_ring").querySelector(".border"),
          1.5,
          {
            transform: "rotate(90deg)",
            strokeDashoffset: "-207.34512px",
            ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
          }
        );
      }
    );
  },
};
</script>
