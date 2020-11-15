<template>
  <div>
    <Audio />
    <MagicCursor
      @cursor-loading="cursorLoading"
      @add-event-to-els="addEventToEls"
    />
    <Menu @cursor-loading="cursorLoading" />
    <Guide />
    <Header />
    <MainPage @cursor-loading="cursorLoading" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import BezierEasing from "bezier-easing/dist/bezier-easing.min";

/*--------------------------------------------------
  Импорт компонентов - Import components
---------------------------------------------------*/
import MagicCursor from "@/components/MagicCursor";
import Menu from "@/components/Menu";
import Guide from "@/components/Guide";
import Header from "@/components/Header";
import MainPage from "@/components/MainPage";
import Footer from "@/components/Footer";

export default {
  components: {
    MagicCursor,
    Menu,
    Header,
    MainPage,
    Footer,
    Guide,
  },
  computed: mapGetters({
    worksMode: "worksMode",
    volume: "volume",
    windowSize: "windowSize",
  }),
  mounted() {
    const T = this;

    T.initCursorHover();

    var Q = {};
    var container = document.querySelector(".overflow-y-scroll");

    Q.Y = 0;
    function scroll(e) {
      e.preventDefault();
      Q.Y -= e.deltaY * 1.6;
      // console.log(Q.Y);

      var bottom =
        -(container.scrollHeight - container.scrollTop) +
        (window.innerHeight - 50);
      // console.log(bottom);
      if (bottom > Q.Y) {
        Q.Y = bottom;
      }
      if (Q.Y > 0) {
        Q.Y = 0;
      }

      TweenMax.to(container, 1.2, {
        y: Q.Y,
        ease: new Ease(BezierEasing(0.9, 0.1, 0.4, 0.9)),
        overwrite: "auto",
      });
    }
    window.addEventListener("wheel", scroll, { passive: false });

    window.addEventListener("load", () => {
      setTimeout(function () {
        T.$store.commit("changeAppLoaded", { val: 1 });
      }, 2000);
    });

    /*--------------------------------------------------
      Работа с главным меню (PC) - Work with main menu (PC)
    ---------------------------------------------------*/

    document.querySelector(".ring-btn").addEventListener("click", () => {
      if (T.$store.getters.windowSize === "PC") {
        if (menu.menuOpened === true) {
          menu.closeMenu();
          menu.sectionScaleUp();
          if (!document.querySelector("header").getAttribute("about-contact"))
            TweenMax.to(
              "#counter-wrap,.icon-wrapper_mode,#external-caption,.swiper-wrapper .swiper-slide .slide-title",
              0.5,
              {
                css: { opacity: 1 },
                delay: 1,
              }
            );
        } else {
          menu.openMenu();
          menu.sectionScaleDown();

          TweenMax.to(
            "#counter-wrap,.icon-wrapper_mode,#external-caption,.swiper-wrapper .swiper-slide .slide-title",
            0.5,
            {
              css: { opacity: 0 },
            }
          );
        }
      }
    });

    document.querySelector(".menu_mobile").addEventListener("click", () => {
      if (menu.menuOpened === true) {
        menu.menuOpened = false;
        menu.sectionScaleUp();
        if (
          document.querySelectorAll("section").getAttribute("location") ===
          "reviews"
        ) {
          TweenMax.to(".flexRow_reviews-page", 0.1, {
            scale: 1,
            opacity: 1,
          });
        }
      } else {
        menu.menuOpened = true;
        menu.sectionScaleDown();
        if (
          document.querySelectorAll("section").getAttribute("location") ===
          "reviews"
        ) {
          TweenMax.to(".flexRow_reviews-page", 0.1, {
            scale: 0.7,
            opacity: 0,
          });
        }
      }
    });

    /*--------------------------------------------------
      Настройка отображения пунктов меню
    ---------------------------------------------------*/
    window.onload = function () {
      setTimeout(animateActiveNav(), 1000);
    };

    function animateActiveNav() {
      let elements = document.querySelectorAll(".right-side-nav .link");
      elements.forEach(function (x) {
        x.style.color = "#777";
      });
      elements = document.querySelectorAll(".right-side-nav .nuxt-link-active");
      elements.forEach(function (x) {
        x.style.color = "white";
      });

      elements = document.querySelectorAll(".right-side-nav .nuxt-link-active");
      elements.forEach(function (x) {
        let children = x.closest(".right-side-nav").querySelectorAll(".link"),
          amountEls = children.length,
          index = Array.from(document.querySelectorAll(".link")).indexOf(x),
          curEl = parseInt(`${index}`) + 1,
          percent = (100 / amountEls) * curEl,
          line = document.querySelector(".right-side-nav .line");
        line.style.height = percent + "%";
      });
    }

    elements = document.querySelectorAll(".right-side-nav .link");
    elements.forEach(function (x) {
      x.addEventListener("click", function () {
        let location = document
            .querySelector("section")
            .getAttribute("location"),
          goto = this.getAttribute("goto");
        menu.togglePage(location, goto);
      });
    });

    let elements = document.querySelectorAll(".right-side-nav .link");
    elements.forEach(function (x) {
      x.addEventListener("mouseenter", function () {
        elements = document.querySelectorAll(".link");
        elements.forEach(function (x) {
          x.setAttribute("style", "color: #777");
        });
        x.setAttribute("style", "color: white");
        let children = x.closest(".right-side-nav").querySelectorAll(".link"),
          amountEls = children.length,
          index = Array.from(document.querySelectorAll(".link")).indexOf(x),
          curEl = parseInt(`${index}`) + 1,
          percent = (100 / amountEls) * curEl,
          line = document.querySelector(".right-side-nav .line");
        line.style.height = percent + "%";
      });
    });

    elements = document.querySelectorAll(".right-side-nav .link");
    elements.forEach(function (x) {
      x.addEventListener("mouseleave", function () {
        elements = document.querySelectorAll(".right-side-nav .link");
        elements.forEach(function (x) {
          x.style.color = "#777";
        });

        elements = document.querySelectorAll(
          ".right-side-nav .nuxt-link-exact-active"
        );
        elements.forEach(function (x) {
          x.style.color = "white";
        });

        let children = document.querySelectorAll(".right-side-nav .link"),
          amountEls = children.length,
          index = Array.from(document.querySelectorAll(".link")).indexOf(
            document.querySelector(".right-side-nav .nuxt-link-exact-active")
          ),
          curEl = parseInt(`${index}`) + 1,
          percent = (100 / amountEls) * curEl,
          line = document.querySelector(".right-side-nav .line");
        line.style.height = percent + "%";
      });
    });

    document
      .querySelector(".close-about-contact-btn")
      .addEventListener("click", () => {
        if (T.$store.getters.windowSize === "PC") {
          animateActiveNav();
          TweenMax.to(".avatar-wrapper, .contact-form__flexCol", 0.4, {
            css: { marginTop: 150 },
          });
          TweenMax.to(
            ".contact-form__input-wrapper, .contact-form__button-socials",
            0.4,
            {
              css: { marginTop: -55 },
            }
          );
          TweenMax.to(".contact-form-container", 0.4, {
            backgroundColor: "rgba(0,0,0,0)",
          });
          TweenMax.to(".contact-form-container", 1, {
            css: { pointerEvents: "none" },
            delay: 1,
          });
          document.querySelector("header").removeAttribute("about-contact");

          // elements = document.querySelectorAll(".genazozulya3");
          // elements.forEach(function (x) {
          //   x.setAttribute("style", "opacity: 0;");
          // });
          menu.sectionScaleDown();
          setTimeout(function () {
            menu.openMenu();
          }, 100);
        } else {
          document.querySelector("header").removeAttribute("about-contact");
          document
            .querySelector(".contact-form-container")
            .removeAttribute("active");
          document.querySelector(".menu_mobile").click();
        }

        if (!document.querySelector(".about-section")) return 0;
        TweenMax.to(".about-section", 0.5, {
          css: { opacity: 0 },
        });
        TweenMax.set(".about-section", {
          pointerEvents: "none",
        });
      });

    /*--------------------------------------------------
        Главное меню на (smartphone) - Main menu (smartphone)
    ---------------------------------------------------*/
    elements = document.querySelectorAll(".menu_mobile, .nav_mobile a");
    elements.forEach(function (x) {
      x.addEventListener("click", function () {
        checkNavActive();
      });
    });

    function checkNavActive() {
      let nav = document.querySelector(".nav_mobile"),
        menu = document.querySelector(".menu_mobile"),
        cover = document.querySelector(".menu_mobile__cover"),
        section = document.querySelector("section");
      if (!nav.getAttribute("active")) {
        section.setAttribute("scale", "");
        nav.setAttribute("active", "1");
        cover.setAttribute("active", "");
        document.querySelectorAll(".menu .text").show();
      } else {
        section.removeAttribute("scale");
        nav.removeAttribute("active");
        cover.removeAttribute("active");
      }
    }
  },
  methods: {
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

    /*--------------------------------------------------
      Анимация загрузки у курсора
    ---------------------------------------------------*/
    cursorLoading() {
      let cursorLoad = document.querySelector("#magic-cursor");

      document.querySelector("#magic-cursor").classList.add("show-loader");
      setTimeout(function () {
        cursorLoad.classList.remove("show-loader");
      }, 600);
    },

    initCursorHover() {
      setTimeout(() => {
        let elements;
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
      }, 1000);
    },
  },
  created() {
    const T = this;

    T.$nuxt.$on("init-cursor-hover", () => {
      T.initCursorHover();
    });
    T.$nuxt.$on("add-event-els", function (elsAttr, evnt, func) {
      T.addEventToEls(elsAttr, evnt, func);
    });
  },
};
</script>
