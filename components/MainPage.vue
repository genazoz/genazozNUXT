<template>
  <section class="home" location="home" style="height: 100vh">
    <SwiperSlider />
  </section>
</template>
<script>
import BezierEasing from "bezier-easing/dist/bezier-easing.min";
import SwiperSlider from "@/components/SwiperSlider";
import { mapGetters } from "vuex";

export default {
  name: "mainPage",
  data: function () {
    return {
      curSlide: null,
    };
  },
  components: { SwiperSlider },
  computed: mapGetters({
    windowSize: "windowSize",
  }),
  methods: {},
  mounted() {
    /*--------------------------------------------------
        Общие настройки - Vars
    ---------------------------------------------------*/
    const T = this,
      // breakpoint where swiper will be destroyed
      breakpoint = window.matchMedia("(max-width: 1001px)");

    let elements,
      currentPageX = null,
      swiper;

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const breakpointChecker = function () {
      // if small viewport
      if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (swiper !== undefined) swiper.destroy(true, true);

        // or/and do nothing
        return;

        // else if a larger viewport
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
        let ball = document.querySelector("#magic-cursor");

        ball.classList.add("touch");
      });
      if (T.$store.state.project)
        swiper.slideTo(parseInt(T.$store.state.project.ids), 0);
    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
  },
  created() {
    const T = this;
    T.$nuxt.$on("check-grid-pos", () => {
      T.checkGridPos();
    });
  },
};
</script>
