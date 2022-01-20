<template>
  <div>
<!--    <iframe class="elasticman"> </iframe>-->

    <MagicCursor @add-event-to-els="addEventToEls" />
    <Header />
    <HeaderMobile />
    <MainPage />
    <nuxt />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

/*--------------------------------------------------
  Импорт компонентов - Import components
---------------------------------------------------*/
import MagicCursor from "@/components/MagicCursor";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import MainPage from "@/components/MainPage";
import Footer from "@/components/Footer";

export default {
  components: {
    MagicCursor,
    Header,
    HeaderMobile,
    MainPage,
    Footer,
  },
  mounted() {
    const T = this;

    setTimeout(() => {
      TweenMax.to("body", 0.6, {
        opacity: 1,
      });
    }, 500);
    T.addEventToEls(
      "footer .flexRow:nth-last-child(1) .magic-parallax, .elastic-close-btn",
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

          document.querySelector(".home").style.opacity = "1";
        } else {
          document.querySelector(".home").style.opacity = "0";
          document.querySelector("header").classList.toggle("elasticm");
          document.querySelector("footer").classList.add("davidli");
          setTimeout(function () {
            ifr.style.opacity = "1";
            ifr.src =
              "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html";
            document.getElementById("magic-cursor").classList.add("disactive");
            ifr.style.pointerEvents = "all";
          }, 300);
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
  },
  created() {
    const T = this;

    T.$nuxt.$on("add-event-els", function (elsAttr, evnt, func) {
      T.addEventToEls(elsAttr, evnt, func);
    });
  },
};
</script>
