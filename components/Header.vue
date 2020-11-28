<template>
  <header>
    <div class="flexRow">
      <div :class="{ 'magic-parallax': $store.state.windowSize === 'PC' }">
        <div
          class="icon-wrapper icon icon-wrapper_logotip"
          tip__position="1"
          tip__title="Логотип"
          tip__text="При нажатии вы попадете на главную"
          btnSoundOn
        >
          <div class="magic-parallax__scale-unset">
            <div class="header__toggle-el header__toggle-el_main-logotip">
              <nuxt-link
                class="logo router-link"
                goto="home"
                :to="localePath('/')"
                exact
                btnSoundOn
              >
                <div class="genazozulya">g</div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hide-ball header__toggle-el header__toggle-el_about-contact">
      <nuxt-link
        :to="localePath('/')"
        @click.prevent="closeBtn(event)"
        exact
        class="close-btn"
        btnSoundOn
      >
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
    <div class="flexRow">
      <div :class="{ 'magic-parallax': $store.state.windowSize == 'PC' }">
        <div
          class="icon-wrapper icon icon_language"
          tip__position="2"
          tip__title="Язык"
          tip__text="Нажав на эту кнопку, вы можете переключить язык"
        >
          <div class="magic-parallax__scale-unset">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import BezierEasing from "bezier-easing/dist/bezier-easing.min";
import LangSwitcher from "@/components/LangSwitcher";

export default {
  // head () {
  //   return { title: this.$t('home.title') }
  // },
  computed: mapGetters({
    windowSize: "windowSize",
  }),
  components: { LangSwitcher },
  methods: {
    closeBtn(event) {
      var ifr = document.querySelector(".elasticman");
      if (ifr.src != "") {
        event.preventDefault();
      }
    },
  },
  mounted() {
    const T = this;

    let elements, btnRotateInterval;
    $nuxt.$emit(
      "add-event-els",
      ".arrow-button--left .arrow-button__border svg:last-child",
      "animationend",
      function () {
        let parent = this.closest(".header__toggle-el_about-contact");
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
      ".header__toggle-el_about-contact",
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
      ".header__toggle-el_about-contact",
      "mouseleave",
      function () {
        let parent = this.querySelector(".arrow-button--left");
        let el = this.querySelector(".arrow-button__border svg:last-child ");
        let _this = this;
        TweenMax.set(_this, {
          css: { pointerEvents: "none" },
        });
        btnRotateInterval = window.setInterval(function () {
          if (el.classList.contains("disactive")) {
            document
              .querySelector(".arrow-button__border svg:last-child ")
              .classList.remove("animationend");
            document
              .querySelector(".arrow-button__border svg:last-child ")
              .classList.add("animationend");
            TweenMax.set(parent, {
              css: { pointerEvents: "all" },
            });
            clearInterval(btnRotateInterval);
            return 0;
          }
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
  },
  updated() {
    TweenMax.set(document.querySelector(".arrow-button--left"), {
      css: { pointerEvents: "all" },
    });
  },
};
</script>
