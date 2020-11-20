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
      document.querySelectorAll('.on-menu-active').forEach(function(x){
        x.classList.add('active');
      })
      TweenMax.to(".on-menu-active", 0.5, {
        css: { opacity: 1 },
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
      TweenMax.to(".on-menu-active", 0.5, {
        css: { opacity: 0 },
      });
      setTimeout(function(){
        
      document.querySelectorAll('.on-menu-active').forEach(function(x){
        x.classList.remove('active');
      })
      },500)
    }
    togglePage(location, goto) {
      if (location === goto) {
        this.sectionScaleUp();
        this.closeMenu();
      }
    }
    sectionScaleDown() {
      this.scaled = true;
      TweenMax.to(".text-lower-main", 0.5, {
        transform: "translateY(0px)",
      });
      TweenMax.to(".home", 0.1, {
        opacity: 0.65,
        overflow: "hidden",
        filter: "blur(" + 205 + "px)",
        pointerEvents: "none",
      });
    }
    sectionScaleUp() {
      this.scaled = false;
      TweenMax.to(".text-lower-main", 0.5, {
        transform: "translateY(100px)",
      });
      TweenMax.to(".home", 0.1, {
        opacity: 1,
        overflow: 'visible',
        filter: "blur(" + 0 + "px)",
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