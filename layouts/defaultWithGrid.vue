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

    // var Q = {};
    // var container = document.querySelector(".overflow-y-scroll");

    // Q.Y = 0;
    // function scroll(e) {
    //   e.preventDefault();
    //   Q.Y -= e.deltaY * 1.6;
    //   // console.log(Q.Y);

    //   var bottom =
    //     -(container.scrollHeight - container.scrollTop) +
    //     (window.innerHeight - 50);
    //   // console.log(bottom);
    //   if (bottom > Q.Y) {
    //     Q.Y = bottom;
    //   }
    //   if (Q.Y > 0) {
    //     Q.Y = 0;
    //   }

    //   TweenMax.to(container, 1.4, {
    //     y: Q.Y,
    //     overwrite: "auto",
    //   });
    // }
    // window.addEventListener("wheel", scroll, { passive: false });

    setTimeout(function () {
      T.$store.commit("changeAppLoaded", { val: 1 });
    }, 2000);

    /*--------------------------------------------------
      Работа с главным меню (PC) - Work with main menu (PC)
    ---------------------------------------------------*/

    document.querySelector(".ring-btn").addEventListener("click", () => {
      if (T.$store.getters.windowSize === "PC") {
        if (menu.menuOpened === true) {
          menu.closeMenu();
          menu.sectionScaleUp();
          // if (!document.querySelector("header").getAttribute("about-contact"))
          //   TweenMax.set(".btn-mode-wrapper", {
          //     pointerEvents: "none",
          //   });
        } else {
          menu.openMenu();
          menu.sectionScaleDown();

          // TweenMax.set(".btn-mode-wrapper", {
          //   pointerEvents: "all",
          // });
        }
      }
    });

    /*--------------------------------------------------
      Настройка отображения пунктов меню
    ---------------------------------------------------*/
    setTimeout(animateActiveNav(), 1000);

    function animateActiveNav() {
      let elements = document.querySelectorAll(".right-side-nav .link");
      elements.forEach(function (x) {
        x.style.color = "#777";
        x.style.opacity = ".45";
      });
      elements = document.querySelectorAll(".right-side-nav .nuxt-link-active");
      elements.forEach(function (x) {
        x.style.color = "white";
        x.style.opacity = "1";
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
          x.style.color = "#777";
          x.style.opacity = ".45";
        });
        x.style.color = "white";
        x.style.opacity = "1";
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
          x.style.opacity = ".45";
        });

        elements = document.querySelectorAll(
          ".right-side-nav .nuxt-link-exact-active"
        );
        elements.forEach(function (x) {
          x.style.color = "white";
          x.style.opacity = "1";
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

          menu.sectionScaleDown();
          setTimeout(function () {
            menu.openMenu();
          }, 100);
        } else {
          document.querySelector("header").removeAttribute("about-contact");
          document
            .querySelector(".contact-form-container")
            .removeAttribute("active");
        }

        if (!document.querySelector(".about-section")) return 0;
        TweenMax.to(".about-section", 0.5, {
          css: { opacity: 0 },
        });
        TweenMax.set(".about-section", {
          pointerEvents: "none",
        });
      });
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
