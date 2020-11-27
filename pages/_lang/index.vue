<template></template>
<script>
import BezierEasing from "bezier-easing/dist/bezier-easing.min";

export default {
  name: "home",
  data: function () {
    return {};
  },
  components: {},
  methods: {},
  props: [],
  mounted() {
    const T = this;

    TweenMax.to(".M-project", 0.1, {
      y: "100%",
      ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
    });
    TweenMax.to("header", 0.1, {
      opacity: 1,
      pointerEvents: "all",
    });
    TweenMax.to(".home", 0.1, {
      opacity: 1,
      pointerEvents: "all",
    });

    /*--------------------------------------------------
        Анимация загрузки страницы
    ---------------------------------------------------*/
    if (document.querySelector("header").getAttribute("about-contact"))
      document.querySelector(".close-about-contact-btn").click();
    document.querySelector("header").removeAttribute("about-contact");
    if (document.querySelector(".about-section")) {
      TweenMax.to(".about-section", 0.5, {
        css: { opacity: 0 },
      });
      TweenMax.set(".about-section", {
        pointerEvents: "none",
      });
    }
    if (!document.querySelector(".contact-form-container")) return 0;
    document.querySelector(".contact-form-container").removeAttribute("active");
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
  },
  updated() {},
  beforeUnmount() {},
};
</script>

