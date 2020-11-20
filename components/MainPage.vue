<template>
  <section class="home" location="home" style="height: 100vh">
    <SwiperSlider />
    <div class="swiper-scrollbar"></div>
  </section>
</template>
<script>
import BezierEasing from "bezier-easing/dist/bezier-easing.min";
import HomeGrid from "@/components/HomeGrid";
import SwiperSlider from "@/components/SwiperSlider";
import { mapGetters } from "vuex";

export default {
  name: "mainPage",
  data: function () {
    return {
      curSlide: null,
    };
  },
  components: { HomeGrid, SwiperSlider },
  computed: mapGetters({
    worksMode: "worksMode",
    volume: "volume",
    lang: "lang",
    windowSize: "windowSize",
  }),
  methods: {
    checkGridPos() {
      let T = this,
        elements;
      var el = document.querySelectorAll(".projects-main-wrapper"),
        winTop = window.pageYOffset,
        winBottom = window.pageYOffset + window.innerHeight,
        winHeight = window.innerHeight;
      el.forEach((el) => {
        let elTop = el.getBoundingClientRect().top,
          elBottom = parseInt(el.clientHeight) + el.getBoundingClientRect().top,
          elHeight = parseInt(el.clientHeight);
        el.classList.remove("active");
        let line = winTop + winHeight / 2;
        if (line >= elTop && line <= elBottom) {
          el.classList.add("active");
        }
      });
    },
    animatePage() {
      const T = this;
      let elements;
      TweenMax.set(".main-wrapper-home__swiper-transform", {
        top: -45,
      });
      TweenMax.to(".main-wrapper-home .swiper-container", 0.4, {
        css: { opacity: 1, pointerEvents: "all" },
        delay: 0.7,
      });
      TweenMax.to(".main-wrapper-home .swiper-scrollbar", 0.4, {
        css: { opacity: 0.85, pointerEvents: "all" },
        delay: 0.7,
      });
      TweenMax.to(".text-lower-main", 0.5, {
        transform: "translateY(100px)",
      });
      if (
        document
          .querySelector("#magic-cursor")
          .classList.contains("show-loader")
      )
        T.$emit("cursor-loading");
    },
  },
  mounted() {
    /*--------------------------------------------------
        Общие настройки - Vars
    ---------------------------------------------------*/
    const T = this,
      sectionHome = document.querySelector("section.home");

    let elements,
      currentPageX = null;

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia("(max-width: 598px)");

    // keep track of swiper instances to destroy later
    let swiper;

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const breakpointChecker = function () {
      // if larger viewport and multi-row layout needed
      if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (swiper !== undefined) swiper.destroy(true, true);

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
      } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();
      }
    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const enableSwiper = function () {
      swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        mousewheel: true,
        keyboard: true,
        speed: 1100,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
      swiper.on("transitionStart", function () {
        TweenMax.set(".main-wrapper-home .swiper-slide", {
          scale: 1,
        });
      });
      swiper.on("touchStart", function (e) {
        TweenMax.to(".main-wrapper-home .swiper-slide", 0.9, {
          scale: 1,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
        TweenMax.to(".main-wrapper-home .swiper-slide .background", 0.8, {
          opacity: 1,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
      });
      swiper.on("touchEnd", function () {});

      swiper.on("touchMove", function (e) {
        let // n = window.pageYOffset || document.documentElement.scrollTop,
          ball = document.querySelector("#magic-cursor");

        ball.classList.add("touch");
        // T.$store.commit("setE", { x: e.pageX, y: e.pageY - n });
        // currentPageX = e.pageX;
      });
    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();

    /*--------------------------------------------------
        Анимация при загрузке главной страницы
    --------------------------------------------------*/
    T.animatePage();
    T.checkGridPos();
  },
  created() {
    const T = this;

    T.$nuxt.$on("check-grid-pos", () => {
      T.checkGridPos();
    });
  },
};
</script>
