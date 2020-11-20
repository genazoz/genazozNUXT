<template>
  <div id="magic-cursor" class="light-content">
    <div id="ball">
      <svg
        class="before"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        version="1.1"
        fill="white"
        x="0"
        y="0"
        viewBox="0 0 306 306"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <g
          transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,306.00001525878906,306)"
        >
          <g xmlns="http://www.w3.org/2000/svg">
            <g id="chevron-right">
              <polygon
                points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   "
                style=""
              />
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
          <g xmlns="http://www.w3.org/2000/svg"></g>
        </g>
      </svg>
      <svg
        class="after"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        fill="white"
        viewBox="0 0 306 306"
        style="enable-background: new 0 0 306 306"
        xml:space="preserve"
      >
        <g>
          <g id="chevron-right">
            <polygon
              points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153   "
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
      <div id="diagram"></div>
      <div id="ball-loader"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: mapGetters({
    worksMode: "worksMode",
    volume: "volume",
    lang: "lang",
    windowSize: "windowSize",
  }),
  mounted() {
    const T = this;
    let elements;

    /*--------------------------------------------------
      Работа с "магическими" элементами - Work with "magic" elements
    ---------------------------------------------------*/

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

    setTimeout(function () {
      if (T.$store.getters.windowSize === "PC") {
        if (
          document
            .querySelector("#magic-cursor")
            .classList.contains("show-loader")
        )
          T.$emit("cursor-loading");
      }
    }, 1000);

    var n = 0.5,
      o = !1,
      cursorBall = document.getElementById("ball");
    TweenMax.set(cursorBall, {
      xPercent: -50,
      yPercent: -50,
    });
    document.addEventListener("mousemove", function (t) {
      let n = window.pageYOffset || document.documentElement.scrollTop;
      T.$store.commit("setE", { x: t.pageX, y: t.pageY - n });

      let ball = document.querySelector("#magic-cursor");
      if (ball.classList.contains("touch")) {
        ball.classList.remove("touch");
      }
    });

    TweenMax.ticker.addEventListener("tick", function () {
      o ||
        (T.$store.commit("plusT", {
          x: (T.$store.state.e.x - T.$store.state.t.x) * n,
          y: (T.$store.state.e.y - T.$store.state.t.y) * n,
        }),
        TweenMax.set(cursorBall, {
          x: T.$store.state.t.x,
          y: T.$store.state.t.y,
        }));
    });

    T.$emit("add-event-to-els", ".magic-parallax", "mouseenter", function (e) {
      TweenMax.to(this, 0.3, {
        scale: 2,
      });
      TweenMax.to(cursorBall, 0.3, {
        scale: 2,
        borderWidth: "1px",
        opacity: 0.2,
      });
      TweenMax.to(e.target.querySelector("svg"), 0.3, {
        scale: 0.6,
      });
      o = !0;
    });

    T.$emit("add-event-to-els", ".magic-parallax", "mouseleave", function (e) {
      TweenMax.to(this, 0.3, {
        scale: 1,
      });
      TweenMax.to(cursorBall, 0.3, {
        scale: 1,
        borderWidth: "2px",
        opacity: 1,
      });
      TweenMax.to(e.target.querySelector("svg"), 0.3, {
        scale: 1,
        x: 0,
        y: 0,
      });
      TweenMax.to(e.target.querySelector(".icon"), 0.3, {
        scale: 1,
        x: 0,
        y: 0,
      });
      o = !1;
    });

    T.$emit("add-event-to-els", ".magic-parallax", "mousemove", function (e) {
      let n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
      (n = e),
        (o = 2),
        (i = this.getBoundingClientRect()),
        (l = n.pageX - i.left),
        (r = n.pageY - i.top),
        (d = window.pageYOffset || document.documentElement.scrollTop),
        T.$store.commit("changeT", {
          x: i.left + i.width / 2 + (l - i.width / 2) / o,
          y: i.top + i.height / 2 + (r - i.height / 2 - d) / o,
        }),
        TweenMax.to(cursorBall, 0.3, {
          x: T.$store.state.t.x,
          y: T.$store.state.t.y,
        }),
        (s = e),
        (p = c = this),
        (h = c.querySelectorAll(".icon")),
        (x = 20),
        (u = p.getBoundingClientRect()),
        (w = s.pageX - u.left),
        (f = s.pageY - u.top),
        (m = window.pageYOffset || document.documentElement.scrollTop),
        TweenMax.to(h, 0.3, {
          x: ((w - u.width / 2) / u.width) * x,
          y: ((f - u.height / 2 - m) / u.height) * x,
          ease: Power2.easeOut,
        });
    });
  },
};
</script>
