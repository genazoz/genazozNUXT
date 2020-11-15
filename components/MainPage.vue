<template>
  <section class="home" location="home" style="height: 100vh">
    <span class="btn-mode-wrapper hide-ball">
      <div
        class="header__toggle-el_main icon-wrapper icon-wrapper_mode"
        @click="changeWorksMode"
        btnSoundOn
        tip__position="9"
        tip__title="Режим показа"
        tip__text="Нажав на эту кнопку, вы переключите режим отображения проектов"
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xml:space="preserve"
          style="display: block"
        >
          <path
            d="M509.188,247.269C504.617,240.883,394.661,91,255.999,91S7.382,240.883,2.812,247.27c-3.75,5.215-3.75,12.246,0,17.461
			C7.382,271.117,117.338,421,255.999,421s248.617-149.883,253.188-156.27C512.938,259.515,512.938,252.484,509.188,247.269z
			 M255.999,361c-57.891,0-105-47.109-105-105s47.109-105,105-105s105,47.109,105,105S313.891,361,255.999,361z"
          ></path>
          <path
            d="M255.999,211c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45
			C301,231.186,280.814,211,255.999,211z"
          ></path>
        </svg>
      </div>
    </span>

    <span class="main-wrapper-home">
      <span class="main-wrapper-home__menu-transition">
        <div class="blur"></div>
        <HomeGrid />
        <SwiperSlider />
      </span>
    </span>
    <div id="counter-wrap" :data-hover="11">
      <div
        class="counter-wrapper"
        tip__position="3"
        tip__title="Кол-во проектов"
        tip__text="Текущий проект - Количество проектов"
        tip__mode="square"
      >
        <span v-for="n in 11" :key="n" :data-slide-count="n" deactive>{{
          String(n).padStart(2, 0)
        }}</span>
        <label></label>
      </div>
    </div>
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
    slideChange() {
      let T = this;
      T.$store.commit("getWindowSize");
      if (T.windowSize === "smartphone") return 0;
      let _this = document.querySelector(".swiper-slide-active .slide-title");
      let num = parseInt(_this.getAttribute("data-number"));
      T.curSlide = parseInt(_this.getAttribute("data-number"));

      let elements = document.querySelectorAll("#counter-wrap span");
      elements.forEach(function (x) {
        x.setAttribute("deactive", "");
        x.removeAttribute("active");
      });
      elements = document.querySelectorAll(
        '#counter-wrap span[data-slide-count="' + T.curSlide + '"]'
      );
      elements.forEach(function (x) {
        x.setAttribute("active", "");
        x.removeAttribute("deactive");
      });
      elements = document.querySelectorAll(".slide-caption");
      elements.forEach(function (x) {
        x.removeAttribute("active");
      });
      // document
      //   .querySelector(
      //     '.slide-caption[data-slide-caption="' + T.curSlide + '"]'
      //   )
      //   .setAttribute("active", "");
    },
    changeWorksMode() {
      let T = this,
        elements,
        swiperContainer = document.querySelector(".swiper-container"),
        counterWrap = document.querySelector("#counter-wrap"),
        // externalCaption = document.querySelector("#external-caption"),
        sectionHome = document.querySelector("section.home"),
        counterWrapSpan = document.querySelectorAll("#counter-wrap span"),
        slideTitle = document.querySelectorAll(
          ".swiper-wrapper .swiper-slide .slide-title"
        );
      TweenMax.set(
        "section, .swiper-container, .home-grid .project-item, .icon-wrapper_mode",
        {
          css: {
            pointerEvents: "none",
          },
        }
      );
      if (T.worksMode == 1) {
        document.querySelector(".custom-scrollbar").classList.add("active");
        T.$store.commit("setCookie", {
          name: "worksMode",
          value: 2,
          time: 1000000,
        });

        TweenMax.to(document.querySelectorAll(".logotip"), 0, {
          css: { opacity: 0 },
        });
        TweenMax.to(counterWrap, 0.5, {
          css: { opacity: 0 },
        });
        // TweenMax.to(externalCaption, 0.5, { css: { opacity: 0 } });
        TweenMax.to(slideTitle, 0.5, { css: { opacity: 0 } });
        TweenMax.to(".main-wrapper-home .swiper-slide .background", 0.5, {
          css: { opacity: 0.17 },
        });
        setTimeout(function () {
          document.querySelector(".home-grid").setAttribute("active", "");
          T.checkProjectsGridPosition();
        }, 700);
      } else {
        // document.querySelector(".custom-scrollbar").classList.remove("active");

        T.$store.commit("setCookie", {
          name: "worksMode",
          value: 1,
          time: 1000000,
        });
        elements = document.querySelectorAll(".home-grid .project-item");
        elements.forEach(function (x) {
          x.style.transition = ".8s all";
        });
        elements = document.querySelectorAll(".home-grid, .custom-scrollbar");
        elements.forEach(function (x) {
          x.removeAttribute("active");
        });
        setTimeout(function () {
          TweenMax.to(swiperContainer, 0.4, {
            css: { opacity: 1, pointerEvents: "all", x: 0, y: 0, z: 0 },
          });
          TweenMax.to(counterWrap, 0.5, { css: { opacity: 1 } });
          TweenMax.to(slideTitle, 0.5, { css: { opacity: 1 } });
          // TweenMax.to(externalCaption, 0.5, { css: { opacity: 1 } });
          TweenMax.to(document.querySelectorAll(".logotip"), 0.5, {
            css: { opacity: 1 },
          });
          TweenMax.to(".main-wrapper-home .swiper-slide .background", 0.5, {
            css: { opacity: 0.47 },
          });
        }, 700);
      }
      setTimeout(function () {
        T.$store.commit("getWorksMode");
        if (T.worksMode == 1) {
          TweenMax.set("section, .swiper-container, .icon-wrapper_mode", {
            css: {
              pointerEvents: "all",
            },
          });
        } else {
          TweenMax.set(
            "section, .swiper-container, .home-grid .project-item, .icon-wrapper_mode",
            {
              css: {
                pointerEvents: "all",
              },
            }
          );
        }
      }, 1000);
    },
    checkProjectsGridPosition() {
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
    startHomeGrid() {
      const T = this;
      let elements;
      setTimeout(function () {
        elements = document
          .querySelector(".home-grid")
          .setAttribute("active", "");
        setTimeout(function () {
          elements = document.querySelectorAll(".home-grid .project-item");
          elements.forEach(function (x) {
            x.style.transition = "0s all";
          });
        }, 1000);
        T.$emit("check-grid-pos");
      }, 400);
      TweenMax.to(document.querySelectorAll(".logotip"), 0.5, {
        css: { opacity: 0 },
      });
    },
  },
  mounted() {
    const T = this;
    let elements, swiper;
    T.checkProjectsGridPosition();
    swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      direction: "horizontal",
      resistanceRatio: 0.6,
      slidesPerView: 1,
      longSwipes: true,
      longSwipesRatio: 0.6,
      touchRatio: 6,
      spaceBetween: 0,
      parallax: true,
      speed: 900,
    });
    document.addEventListener("touchmove mousemove", function (e) {
      var currentY = e.originalEvent.touches
        ? e.originalEvent.touches[0].pageY
        : e.pageY;
      var currentX = e.originalEvent.touches
        ? e.originalEvent.touches[0].pageX
        : e.pageX;
      console.log(currentX);
      //do your stuff
    });
    swiper.on("touchStart", function (e) {
      TweenMax.to(".main-wrapper-home .swiper-slide", 0.9, {
        scale: 1,
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
      TweenMax.to(".icon-wrapper_mode", 0.7, {
        opacity: 0,
        pointerEvents: "none",
      });
      TweenMax.to(".main-wrapper-home", 0.9, {
        scale: 0.55,
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
      TweenMax.to("section.home", 0.9, {
        top: -45,
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
      TweenMax.to(".swiper-slide .background-wrapper", 0.94, {
        scale: 1.95,
        y: 82,
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
      TweenMax.to(".swiper-slide .change-size-wrapper", 0.9, {
        width: "97%",
        height: "96.5%",
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
      TweenMax.to(".main-wrapper-home .swiper-slide .background", 0.8, {
        opacity: 0.6,
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
      TweenMax.to(".main-wrapper-home .slide-title", 0.4, {
        opacity: 0,
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
      // TweenMax.to("#external-caption", 0.4, {
      //   opacity: 0,
      //   ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      // });
    });
    swiper.on("touchEnd", function () {
      let ball = document.querySelector(".light-content.scale-up");
      if (ball) {
        ball.classList.remove("scale-up_left");

        ball.classList.remove("scale-up_right");
      }

      TweenMax.to("section.home", 0, {
        pointerEvents: "none",
      });
      TweenMax.set(".swiper-slide .background", {
        x: "unset",
      });
      setTimeout(function () {
        TweenMax.to(".main-wrapper-home", 1, {
          scale: 1,
          delay: 0.3,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
        TweenMax.to(".main-wrapper-home .slide-title", 1, {
          opacity: 1,
          delay: 0.7,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
        TweenMax.to(".swiper-slide .background-wrapper", 0.96, {
          scale: 1,
          y: 0,
          delay: 0.3,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
        TweenMax.to(".swiper-slide .change-size-wrapper", 0.9, {
          width: "100%",
          height: "100%",
          delay: 0.3,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
        TweenMax.to(".main-wrapper-home .swiper-slide .background", 1, {
          opacity: 0.47,
          delay: 0.7,
        });
        TweenMax.to(
          ".main-wrapper-home .swiper-slide:not(.swiper-slide-active)",
          1,
          {
            scale: 0.8,
            delay: 0.2,
            ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
          }
        );
        TweenMax.to(".main-wrapper-home .slide-title span", 0.3, {
          scale: 1,
          delay: 1,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
        // TweenMax.to("#external-caption", 0.3, {
        //   opacity: 1,
        //   delay: 1,
        //   ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        // });
        TweenMax.to("section.home", 1, {
          top: 0,
          delay: 0.3,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
        TweenMax.to(".icon-wrapper_mode", 0.5, {
          opacity: 1,
          pointerEvents: "all",
          delay: 0.3,
          ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
        });
        document.querySelector(".light-content").classList.remove("scale-up");
        TweenMax.to("section.home", 0, {
          pointerEvents: "all",
          delay: 1,
        });
      }, 50);

      setTimeout(function () {
        T.slideChange();
      }, 200);
    });
    swiper.on("touchMove", function (e) {
      let n = window.pageYOffset || document.documentElement.scrollTop;

      T.$store.commit("setE", { x: e.pageX, y: e.pageY - n });
      if (!document.querySelector(".light-content.scale-up"))
        document.querySelector(".light-content").classList.add("scale-up");
      let ball = document.querySelector(".light-content.scale-up");
      if (currentPageX < T.$store.state.e.x) {
        ball.classList.add("scale-up_right");
        ball.classList.remove("scale-up_left");
      } else if (currentPageX > T.$store.state.e.x) {
        ball.classList.remove("scale-up_right");
        ball.classList.add("scale-up_left");
      }
      currentPageX = e.pageX;
    });

    // var swiper = new Swiper(".swiper-container", {
    //   slidesPerView: "1",
    //   direction: "horizontal",
    //   resistanceRatio: 0.4,
    //   slidesPerView: 1,
    //   longSwipes: true,
    //   longSwipesRatio: 0.4,
    //   touchRatio: 4,
    //   parallax: true,
    //   speed: 900,
    // });

    var currentPageX = null;

    TweenMax.to(
      ".main-wrapper-home .swiper-slide:not(.swiper-slide-active)",
      1,
      {
        scale: 0.8,
        delay: 0.2,
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      }
    );

    document
      .querySelector(".overflow-y-scroll")
      .addEventListener("scroll", T.checkProjectsGridPosition);

    /*--------------------------------------------------
        Общие настройки - Vars
    ---------------------------------------------------*/

    var swiperContainer = document.querySelector(".swiper-container"),
      counterWrap = document.querySelector("#counter-wrap"),
      // externalCaption = document.querySelector("#external-caption"),
      sectionHome = document.querySelector("section.home"),
      counterWrapSpan = document.querySelectorAll("#counter-wrap span"),
      slideTitle = document.querySelectorAll(
        ".swiper-wrapper .swiper-slide .slide-title"
      );

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

    /*--------------------------------------------------
        Анимация при загрузке главной страницы
    --------------------------------------------------*/

    setTimeout(animatePage, 1500);
    function animatePage() {
      elements = document.querySelectorAll(".hide-ball");
      elements.forEach(function (x) {
        x.addEventListener("mouseenter", function () {
          TweenMax.to("#ball", 0.15, {
            borderWidth: "1px",
            scale: 2,
            opacity: 0,
          });
        });
        x.addEventListener("mouseleave", function () {
          TweenMax.to("#ball", 0.25, {
            borderWidth: "2px",
            scale: 1,
            opacity: 1,
          });
        });
      });

      elements = document.querySelectorAll(".link, .mouseScale");
      elements.forEach(function (x) {
        x.addEventListener("mouseenter", function () {
          TweenMax.to("#ball", 0.2, {
            borderWidth: "0px",
            scale: 3,
            backgroundColor: "rgba(127, 127, 127, 1)",
            opacity: 0.15,
          });
        });
        x.addEventListener("mouseleave", function () {
          TweenMax.to("#ball", 0.3, {
            borderWidth: "2px",
            scale: 1,
            backgroundColor: "rgba(127, 127, 127, 0)",
            opacity: 1,
          });
        });
      });

      TweenMax.to("section.home", 0.1, {
        x: 0,
        scale: 0.7,
      });
      TweenMax.to("section.home", 0.1, {
        scale: 1,
      }).delay(1);
      TweenMax.to("section.home", 0.1, {
        background: "#000",
      }).delay(2);
      TweenMax.to("section.home", 0.1, {
        pointerEvents: "all",
      }).delay(2);
      setTimeout(function () {
        T.$store.commit("getWorksMode");
        if (T.worksMode == 2) {
          T.$nextTick(function () {
            T.startHomeGrid();
            // lazyLoadInstance.update();
          });
          TweenMax.to(".main-wrapper-home .swiper-slide .background", 0.5, {
            css: { opacity: 0.17 },
          });
          document.querySelector(".custom-scrollbar").classList.add("active");
        } else if (T.worksMode == 1) {
          TweenMax.to(".main-wrapper-home .swiper-slide .background", 0.5, {
            css: { opacity: 0.47 },
          });
          TweenMax.to(counterWrap, 1, {
            css: { opacity: 1 },
            delay: 0.3,
          });
          // TweenMax.to(externalCaption, 1, {
          //   css: { opacity: 1 },
          //   delay: 0.3,
          // });
          TweenMax.to(slideTitle, 1, {
            css: { opacity: 1 },
            delay: 0.3,
          });
        }
        TweenMax.to(document.querySelectorAll(".menu__span"), 0.4, {
          css: { background: "white" },
        });
        elements = document.querySelectorAll("nav a");
        elements.forEach(function (x) {
          x.removeAttribute("afterBlack");
        });
        TweenMax.to(document.querySelectorAll(".icon-wrapper_mode"), 0.4, {
          css: { opacity: "1" },
        });
        if (
          document
            .querySelector("#magic-cursor")
            .classList.contains("show-loader")
        )
          T.$emit("cursor-loading");
      }, 1400);
      TweenMax.to(document.querySelectorAll(".ball"), 0.4, {
        css: { filter: "brightness(1)" },
      });
      TweenMax.to(document.querySelectorAll(".logo"), 0.4, {
        css: { color: "white" },
      });
      TweenMax.to(document.querySelectorAll(".BGAudio span"), 0.4, {
        css: { background: "white" },
      });
    }

    document
      .querySelector("#counter-wrap span:first-child")
      .removeAttribute("deactive");

    const worksModeBTN = document.querySelector(".icon-wrapper_mode");
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
    document
      .querySelector(".play.ui-btn")
      .addEventListener("mouseenter", function () {
        TweenMax.to(document.querySelectorAll(".ui-btn [path2]"), 1, {
          css: { strokeDashoffset: "0" },
          ease: new Ease(BezierEasing(0.9, 0.1, 0.4, 0.9)),
        });
      });
    document
      .querySelector(".play.ui-btn")
      .addEventListener("mouseleave", function () {
        TweenMax.to(document.querySelectorAll(".ui-btn [path2]"), 1, {
          css: { strokeDashoffset: "40" },
          ease: new Ease(BezierEasing(0.9, 0.1, 0.4, 0.9)),
        });
      });
    document
      .querySelector(".home-grid .overflow-y-scroll")
      .addEventListener("scroll", customScrollbarMove);

    const customScrollbar = document.querySelector(".custom-scrollbar");
    function customScrollbarMove(event) {
      if (this.scrollTop > 5) {
        TweenMax.to(".home-grid__title-wrapper p, .btn-mode-wrapper", 0.3, {
          opacity: "0",
        });
        TweenMax.to(".home-grid__title-wrapper .before", 0.3, {
          opacity: "1",
        });
        TweenMax.to(".home-grid__title-wrapper h2", 0.3, {
          marginTop: "-25",
          opacity: 0,
        });
      } else {
        TweenMax.to(".home-grid__title-wrapper p, .btn-mode-wrapper", 0.3, {
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
      let percent1 =
          (this.scrollTop / (this.scrollHeight - this.clientHeight)) * 100,
        percent2 = 100 - percent1;
      document.querySelector(".custom-scrollbar__line1").style.height =
        percent1 + "%";
      document.querySelector(".custom-scrollbar__line2").style.height =
        percent2 + "%";
      document.querySelectorAll(".project-item").forEach(function (x) {
        let line2Top = document
            .querySelector(".custom-scrollbar__line2")
            .getBoundingClientRect().top,
          xTop = x.getBoundingClientRect().top;
        if (xTop + x.offsetHeight / 2 - 6 < line2Top) {
          x.setAttribute("active", "");
        } else {
          x.removeAttribute("active");
        }
      });
    }
    customScrollbar.addEventListener("mousedown", function (event) {
      function customScrollbarDrag(event) {
        let line1 = document.querySelector(".custom-scrollbar__line1");
        let line2 = document.querySelector(".custom-scrollbar__line2");
        let circle = document.querySelector(".custom-scrollbar__circle");
        const height =
          line1.getBoundingClientRect().height +
          line2.getBoundingClientRect().height +
          circle.getBoundingClientRect().height;
        const { top } = document
          .querySelector(".custom-scrollbar__line1")
          .getBoundingClientRect();
        let y = event.pageY - top;
        if (y < 0) {
          y = 0;
        }
        if (y > height) {
          y = height;
        }

        let scrollTop = y / height;

        let percent1 = parseInt(scrollTop * 100),
          percent2 = 100 - percent1;

        let ovScroll = document.querySelector(".home-grid .overflow-y-scroll"),
          ovScrollTop =
            ((ovScroll.scrollHeight - ovScroll.clientHeight) / 100) * percent1;
        ovScroll.scrollTop = ovScrollTop;
      }

      document.addEventListener("mousemove", customScrollbarDrag);
      document.addEventListener(
        "mouseup",
        function (event) {
          document.removeEventListener("mousemove", customScrollbarDrag);
        },
        { once: true }
      );
    });
  },
  updated() {
    // this.initSlider();
  },
};
</script>
