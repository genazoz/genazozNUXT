/*--------------------------------------------------
  Класс главного меню - Main menu class
---------------------------------------------------*/
class mainMenu {
    constructor() {
      this.menuOpened = false;
      this.scaled = false;
    }
    openMenu() {
      this.menuOpened = true;
      let elements = document.querySelectorAll(".menu");
      elements.forEach(function (x) {
        x.classList.add("active");
      });
      elements = document.querySelectorAll(".menu-toggle, .flexRow_ring .arrow-button");
      elements.forEach(function (x) {
        x.classList.add("active");
      });
      elements = document.querySelectorAll(".menu .text");
      elements.forEach(function (x) {
        x.style.display = "block";
      });
      elements = document.querySelectorAll(".menu .line-wrapper");
      elements.forEach(function (x) {
        x.classList.add("active");
      });
    }
    closeMenu() {
      this.menuOpened = false;
      let elements = document.querySelectorAll(
        ".menu, .menu-toggle, .menu .line-wrapper, .flexRow_ring .arrow-button"
      );
      elements.forEach(function (x) {
        x.classList.remove("active");
      });
    }
    togglePage(location, goto) {
      if (location === goto) {
        this.sectionScaleUp();
        this.closeMenu();
      }
    }
    sectionScaleDown() {
      this.scaled = true;
      TweenMax.to(document.querySelectorAll(".logotip"), 0.5, {
        css: { opacity: 1 },
      });
      TweenMax.to(".main-wrapper-home__menu-transition", 0.1, {
        scale: 0.75,
        x: 0,
        opacity: 0.8,
        webkitFilter: "blur(" + 205 + "px)",
        overflow: "hidden",
        pointerEvents: "none",
      });
    }
    sectionScaleUp() {
      this.scaled = false;
      TweenMax.to(".main-wrapper-home__menu-transition", 0.1, {
        scale: 1,
        x: 0,
        opacity: 1,
        overflow: 'visible',
        webkitFilter: "blur(" + 0 + "px)",
        pointerEvents: "all",
      });
    }
    pageHide(section) {
      let mX = -window.innerWidth * 1.3;
      if (section) {
        TweenMax.to("section." + section, 0.1, {
          scale: 0.7,
          opacity: 0.3,
          webkitFilter: "blur(" + 0 + "px)",
        });
        TweenMax.to("section." + section, 0.1, {
          x: mX,
          opacity: 1,
        });
      } else {
        TweenMax.to("section", 0.1, {
          scale: 0.7,
          opacity: 0.3,
          webkitFilter: "blur(" + 0 + "px)",
        });
        TweenMax.to("section", 0.1, {
          x: mX,
          opacity: 1,
        }).delay(0.1);
      }
    }
    isOpened() {
      return this.menuOpened === true ? true : false;
    }
  }
  const menu = new mainMenu();