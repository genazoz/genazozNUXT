<template>
  <section class="home" location="home" style="height: 100vh">
    <span class="main-wrapper-home">
      <span class="main-wrapper-home__menu-transition">
        <div class="blur"></div>
        <HomeGrid />
        <span class="main-wrapper-home__swiper-transform">
          <SwiperSlider />
        </span>
        <div class="swiper-scrollbar"></div>
      </span>
    </span>
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
    customScrollbarMove(_this) {
      let T = _this;
      if (T.scrollTop > 5) {
        TweenMax.to(
          ".home-grid__title-wrapper h2, .home-grid__title-wrapper p, header",
          0.3,
          {
            opacity: "0",
          }
        );
        TweenMax.to(".home-grid__title-wrapper .before", 0.3, {
          opacity: "1",
        });
        TweenMax.to(".home-grid__title-wrapper h2", 0.3, {
          marginTop: "-25",
        });
      } else {
        TweenMax.to(".home-grid__title-wrapper p, header", 0.3, {
          opacity: "1",
        });
        TweenMax.to(".home-grid__title-wrapper .before", 0.3, {
          opacity: "0",
        });
        TweenMax.to(".home-grid__title-wrapper h2", 0.3, {
          marginTop: "0",
          opacity: 1,
        });
      }

      // let perc = (T.scrollTop / (T.scrollHeight - T.clientHeight)) * 100;
      // document.querySelector(".custom-scrollbar__line1").style.height =
      //   perc + "%";
      // document.querySelectorAll(".project-item").forEach(function (x) {
      //   let top =
      //       document
      //         .querySelector(".custom-scrollbar__line1")
      //         .getBoundingClientRect().top +
      //       document.querySelector(".custom-scrollbar__line1").offsetHeight,
      //     xTop = x.getBoundingClientRect().top;
      //   if (xTop + x.offsetHeight / 2 - 6 < top) {
      //     x.setAttribute("active", "");
      //   } else {
      //     x.removeAttribute("active");
      //   }
      // });
    },
    startHomeGrid() {
      const T = this;
      let elements;
      setTimeout(function () {
        elements = document
          .querySelector(".home-grid")
          .setAttribute("active", "");
        T.$emit("check-grid-pos");
      }, 400);
      TweenMax.to(document.querySelectorAll(".logotip"), 0.5, {
        css: { opacity: 0 },
      });
    },
    animatePage() {
      const T = this;
      let elements;
      T.$store.commit("getWorksMode");
      TweenMax.set(".main-wrapper-home__swiper-transform", {
        top: -45,
      });
      if (T.worksMode == 2) {
        T.$nextTick(function () {
          T.startHomeGrid();
        });
        TweenMax.set(".main-wrapper-home .swiper-container", {
          css: { opacity: 1, pointerEvents: "all" },
        });
        TweenMax.set(".main-wrapper-home__swiper-transform", {
          opacity: 0.65,
          overflow: "hidden",
          filter: "blur(" + 205 + "px)",
          pointerEvents: "none",
        });
        document.querySelector(".custom-scrollbar").classList.add("active");
      } else if (T.worksMode == 1) {
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
      }
      TweenMax.to(document.querySelectorAll(".icon-wrapper_mode"), 0.4, {
        css: { opacity: "1" },
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
      sectionHome = document.querySelector("section.home"),
      worksModeBTN = document.querySelector(".icon-wrapper_mode"),
      ovYscroll = document.querySelector(".home-grid .overflow-y-scroll");

    let elements,
      swiper = new Swiper(".swiper-container", {
        observer: true,
        observeParents: true,
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
      }),
      currentPageX = null;

    /*--------------------------------------------------
        Анимация при загрузке главной страницы
    --------------------------------------------------*/
    T.animatePage();
    T.checkGridPos();
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
      // TweenMax.to(".main-wrapper-home__swiper-transform", 0.9, {
      //   scale: 0.4,
      //   top: -40,
      //   ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      // });
      // TweenMax.to(".swiper-slide .change-size-wrapper", 0.9, {
      //   width: "100%",
      //   height: "108%",
      //   ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      // });
      TweenMax.to(".main-wrapper-home .swiper-slide .background", 0.8, {
        opacity: 1,
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
    });
    swiper.on("touchEnd", function () {
      let ball = document.querySelector("#magic-cursor");
      ball.classList.remove("touch");

      // TweenMax.to("section.home", 0, {
      //   pointerEvents: "none",
      // });
      // TweenMax.set(".swiper-slide .background", {
      //   x: "unset",
      // });
      // setTimeout(function () {
      //   TweenMax.to(".main-wrapper-home", 1, {
      //     scale: 1,
      //     delay: 0.3,
      //     ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      //   });
      //   TweenMax.to(".swiper-slide .change-size-wrapper", 0.9, {
      //     width: "100%",
      //     height: "100%",
      //     delay: 0.3,
      //     ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      //   });
      //   TweenMax.to(".main-wrapper-home .swiper-slide .background", 1, {
      //     opacity: 0.47,
      //     delay: 0.7,
      //   });
      //   TweenMax.to(
      //     ".main-wrapper-home .swiper-slide:not(.swiper-slide-active)",
      //     1,
      //     {
      //       scale: 0.8,
      //       delay: 0.2,
      //       ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      //     }
      //   );
      //   TweenMax.to("section.home", 1, {
      //     top: 0,
      //     delay: 0.3,
      //     ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      //   });
      //   TweenMax.to(".icon-wrapper_mode", 0.5, {
      //     opacity: 1,
      //     pointerEvents: "all",
      //     delay: 0.3,
      //     ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      //   });
      //   document.querySelector(".light-content").classList.remove("scale-up");
      //   TweenMax.to("section.home", 0, {
      //     pointerEvents: "all",
      //     delay: 1,
      //   });
      // }, 50);
    });

    swiper.on("touchMove", function (e) {
      let n = window.pageYOffset || document.documentElement.scrollTop,
        ball = document.querySelector("#magic-cursor");

      ball.classList.add("touch");
      T.$store.commit("setE", { x: e.pageX, y: e.pageY - n });
      currentPageX = e.pageX;
    });
    ovYscroll.addEventListener("scroll", T.checkGridPos);
    ovYscroll.addEventListener("scroll", function () {
      T.customScrollbarMove(this);
    });
    worksModeBTN.addEventListener("mouseenter", function () {
      TweenMax.to(document.querySelector(".main-wrapper-home"), 0.1, {
        css: { opacity: 0.6 },
      });
    });
    worksModeBTN.addEventListener("mouseleave", function () {
      TweenMax.to(document.querySelectorAll(".main-wrapper-home"), 0.1, {
        css: { opacity: 1 },
      });
    });

    /*--------------------------------------------------
        Смена высоты свайпер контейнера и секций для нормального
        отображения на телефонах и планшетах в сафари
    ---------------------------------------------------*/
    T.$store.commit("getWindowSize");
    if (T.windowSize === "smartphone") {
      sectionHome.style.height = window.innerHeight + "px";
    } else {
      sectionHome.style.height = "100vh";
    }
    window.onresize = () => {
      T.$store.commit("getWindowSize");
      if (T.windowSize === "smartphone") {
        sectionHome.style.height = window.innerHeight + "px";
      } else {
        sectionHome.style.height = "100vh";
      }
    };
  },
  created() {
    const T = this;

    T.$nuxt.$on("check-grid-pos", () => {
      T.checkGridPos();
    });
  },
};
</script>
