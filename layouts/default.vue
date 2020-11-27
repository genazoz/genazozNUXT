<template>
  <div>
    <iframe class="elasticman"> </iframe>

    <MagicCursor
      @cursor-loading="cursorLoading"
      @add-event-to-els="addEventToEls"
    />
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
import Guide from "@/components/Guide";
import Header from "@/components/Header";
import MainPage from "@/components/MainPage";
import Footer from "@/components/Footer";

export default {
  components: {
    MagicCursor,
    Header,
    MainPage,
    Footer,
    Guide,
  },
  computed: mapGetters({
    windowSize: "windowSize",
  }),
  mounted() {
    const T = this;

    let width = window.innerWidth;
    T.$store.commit("getWindowSize", { width: width });

    T.initCursorHover();

    document.querySelector(".close-btn").addEventListener("click", (event) => {
      document.querySelector("header").removeAttribute("about-contact");
      TweenMax.to(".text-lower-main", 0.5, {
        transform: "translateY(100px)",
      });
      TweenMax.to(".home", 0.1, {
        opacity: 1,
        overflow: "visible",
        filter: "blur(" + 0 + "px)",
        pointerEvents: "all",
      });
    });
    T.addEventToEls(
      "footer .flexRow:nth-last-child(1) .magic-parallax, .header__toggle-el_about-contact, .close-btn",
      "click",
      function (event) {
        var ifr = document.querySelector(".elasticman");
        if (
          event.target.classList.contains("header__toggle-el_about-contact") ||
          (event.target.classList.contains("close-btn") && ifr.src == "")
        )
          return 0;

        if (ifr.src != "") {
          ifr.removeAttribute("src");
          ifr.style.opacity = "0";
          ifr.style.pointerEvents = "none";
          document.getElementById("magic-cursor").classList.remove("disactive");
          document.querySelector("footer").classList.remove("davidli");
          document.querySelector("header").classList.toggle("elasticm");
          document.querySelector("footer").classList.toggle("elasticm");
          document
            .querySelector("header")
            .classList.toggle("elasticm-show-close");

          TweenMax.to(".home", 0.3, {
            opacity: 1,
          });
        } else {
          TweenMax.to(".home", 0.3, {
            opacity: 0,
          });
          document.querySelector("header").classList.toggle("elasticm");
          document.querySelector("footer").classList.add("davidli");
          setTimeout(function () {
            ifr.style.opacity = "1";
            ifr.src =
              "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html";
            document.getElementById("magic-cursor").classList.add("disactive");
            ifr.style.pointerEvents = "all";
          }, 300);
          setTimeout(function () {
            document
              .querySelector("header")
              .classList.toggle("elasticm-show-close");
          }, 3000);
        }
      }
    );
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
    },
  },
  updated() {},
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
