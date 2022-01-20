<template>
  <section class="home" location="home" style="height: 100vh">
    <div class="container-grid">
      <div class="container-grid-vertical">
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
        <div class="vertical-line-grid"></div>
      </div>
      <div class="container-grid-horizontal">
        <div class="horizontal-line-grid"></div>
        <div class="horizontal-line-grid"></div>
        <div class="horizontal-line-grid"></div>
        <div class="horizontal-line-grid"></div>
        <div class="horizontal-line-grid"></div>
        <div class="horizontal-line-grid"></div>
        <div class="horizontal-line-grid"></div>
      </div>
    </div>
<!--     <SwiperSlider />-->
    <ProjectsList />
  </section>
</template>
<script>
import SwiperSlider from "@/components/SwiperSlider";
import ProjectsList from "@/components/ProjectsList";
import { mapGetters } from "vuex";

export default {
  name: "mainPage",
  components: { SwiperSlider },
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

      swiper.on("touchMove", function (e) {
        let ball = document.querySelector("#magic-cursor");

        ball.classList.add("touch");
      });
      if (T.$store.state.project)
        swiper.slideTo(parseInt(T.$store.state.project.ids), 0);
    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();
  },
};
</script>
