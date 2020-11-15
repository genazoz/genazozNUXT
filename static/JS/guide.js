
/*--------------------------------------------------
    Класс интерактивных подсказок - Interactive guide class
---------------------------------------------------*/
class interactiveGuide {
    /* Конструктор/ Constructor */
    constructor() {
        var t = this;
        t.opened = false;
        t.currentTip = null;
        t.counterTip = null;
        t.tipsAmount = null;
        t.projectsMode = null;
        t.tips = null;
        t.tipEl = null;
        t.tipTop = null;
        t.tipLeft = null;
        t.tipWidth = null;
        t.tipHeight = null;
        t.tipMode = null;
        t.tipDiv = null;
        t.before = null;
        t.menu = null;
        t.titleWpr = null;
        t.titleTxt = null;
        t.circleTop = null;
        t.vircleLeft = null;
        t.prevBtn = null;
        t.nextBtn = null;
        t.speed = null;
        t.menu = null;
        t.projectsMode = null;
    }

    initVariables() {
        let t = this;
        t.currentTip = 1;
        t.counterTip = 1;
        t.speed = 0;
        t.tipEl = document.querySelector(
        '[tip__position="' + this.currentTip + '"]'
        );
        t.tipDiv = document.querySelector(".guide-tip");
        t.before = document.querySelector(".guide-cover .before");
        t.tips = document.querySelectorAll("[tip__position]");
        t.menu = menu;
        let results = document.cookie.match("(^|;) ?worksMode=([^;]*)(;|$)");
        if(results){
            t.projectsMode = results[2];
        }
        t.prevBtn = document.querySelector(".guide-tip__prev-btn");
        t.nextBtn = document.querySelector(".guide-tip__next-btn");
        t.titleWpr = document.querySelector(".guide-tip__title");
        t.titleTxt = document.querySelector(".guide-tip__text");
        t.opened = true;
        t.curTipDiv = document.querySelector(".guide-tip__selected-tip");
        t.allTipsDiv = document.querySelector(".guide-tip__all-tip");
    }

    /* Включает гайд / Start guide */
    startGuide() {
        let t = this;

        /* Присваивает переменным начальные настройки и DOM элементы */
        t.initVariables();

        /* Удаляет недоступные на странице подсказки */
        t.removeUnTips();

        /* Получает ближайшую подсказку и ее данные */
        t.getNextTip();

        /* Меняет положение блока с подсказкой  */
        t.moveTip();

        /* Меняет положение выделения подсказки */
        t.moveCircle();

        t.showGuide();
    }

    removeUnTips() {
        let t = this;
        t.tips.forEach(function (x) {
        let num = parseInt(x.getAttribute("tip__position"));
        let contactPage = document.querySelector(".contact-form-container"),
            aboutPage = document.querySelector(".about-section");
        switch (num) {
            case 1:
            case 6:
            if (aboutPage || contactPage) {
                removeFromTipsway(x);
            } else {
                addToTipsway(x);
            }
            break;
            case 2:
            case 3:
            case 4:
            if (t.menu.scaled === true || t.projectsMode == 2 || contactPage) {
                removeFromTipsway(x);
            } else if (x.getAttribute("tip__hidden")) {
                addToTipsway(x);
            }
            break;
            case 9:
            if (t.menu.scaled === true || contactPage || aboutPage) {
                removeFromTipsway(x);
            } else if (x.getAttribute("tip__hidden")) {
                addToTipsway(x);
            }
            break;
        }
        function removeFromTipsway(x) {
            x.setAttribute("tip__hidden", "hidden");
        }
        function addToTipsway(x) {
            if (x.getAttribute("tip__hidden")) x.removeAttribute("tip__hidden");
        }
        });

        t.tipsAmount = document.querySelectorAll(
        "[tip__position]:not([tip__hidden = 'hidden'])"
        ).length;

        t.allTipsDiv.innerHTML = t.tipsAmount;
    }

    showGuide() {
        let t = this;
        TweenMax.set(".guide-cover", {
        pointerEvents: "all",
        });
        TweenMax.to(".guide-cover", t.speed, {
        opacity: 1,
        });
        TweenMax.to(".guide-cover .before .border", t.speed, {
        borderColor: "rgba(0, 0, 0, 0.9)",
        });
        TweenMax.to(".guide-cover .before", t.speed, {
        border: "1.5px solid #f2ca00",
        });
    }

    hideGuide() {
        let t = this;
        TweenMax.set(".guide-cover", {
        pointerEvents: "none",
        });
        TweenMax.to(".guide-cover", 0.4, {
        opacity: 0,
        });
        TweenMax.to(".guide-cover .before .border", 0.4, {
        borderColor: "rgba(0, 0, 0, 0)",
        });
    }

    moveTip() {
        let t = this,
        { top } = t.tipEl.getBoundingClientRect(),
        { left } = t.tipEl.getBoundingClientRect();

        if (top < t.tipDiv.offsetHeight + 30) {
        t.tipTop = top + t.tipEl.offsetHeight + 10;
        } else {
        t.tipTop = top - (t.tipDiv.offsetHeight + 10);
        }
        if (left < t.tipDiv.offsetWidth + 30) {
        t.tipLeft = left + t.tipEl.offsetWidth + 10;
        } else {
        t.tipLeft = left - (t.tipDiv.offsetWidth + 10);
        }

        t.circleLeft = left;
        t.circleTop = top;
        t.tipWidth = t.tipEl.offsetWidth + 20;
        t.tipHeight = t.tipEl.offsetHeight + 20;

        TweenMax.to(".guide-tip", t.speed, {
        x: t.tipLeft,
        y: t.tipTop,
        });
    }

    moveCircle() {
        let t = this,
        w = window.innerWidth,
        h = window.innerHeight,
        width = (w + h) * 2 + t.tipWidth,
        height = (w + h) * 2 + t.tipHeight;
        TweenMax.to(".guide-cover .before .border", t.speed, {
        width: width,
        height: height,
        });
        TweenMax.to(".guide-cover .before", t.speed, {
        top: t.circleTop - 10,
        left: t.circleLeft - 10,
        width: t.tipWidth,
        height: t.tipHeight,
        });
    }

    changeTipHTML() {
        let t = this;
        if (t.counterTip !== 1) {
        t.prevBtn.classList.add("active");
        } else {
        t.prevBtn.classList.remove("active");
        }
        t.tipMode = t.tipEl.getAttribute("tip__mode");
        t.before.setAttribute("tip__mode", t.tipMode);
        t.titleWpr.innerHTML = t.tipEl.getAttribute("tip__title");
        t.titleTxt.innerHTML = t.tipEl.getAttribute("tip__text");
        t.curTipDiv.innerHTML = t.counterTip;
    }

    getNextTip() {
        let t = this;

        // Проходимся по всем элементам (доступным и недоступным), чтобы получить номер первой доступной подсказки
        while (!t.tipEl || t.tipEl.getAttribute("tip__hidden") === "hidden") {
        t.currentTip++;
        t.tipEl = document.querySelector(
            '[tip__position="' + t.currentTip + '"]'
        );

        if (t.currentTip > t.tips.length) {
            t.closeGuide();
            return 0;
        }
        }

        /* Меняет заголовок и текст в подсказке на текущие, переключает мод обводки (Круг, квадрат) */
        t.changeTipHTML();

        return 1;
    }

    getPrevTip() {
        let t = this;

        // Проходимся по всем элементам (доступным и недоступным), от конечных к начальным чтобы получить номер первой доступной подсказки
        while (!t.tipEl || t.tipEl.getAttribute("tip__hidden") === "hidden") {
        t.currentTip--;
        t.tipEl = document.querySelector(
            '[tip__position="' + t.currentTip + '"]'
        );
        if (t.currentTip < 0) {
            t.currentTip = 1;
            t.counterTip = 1;
            t.tipEl = document.querySelector(
            '[tip__position="' + t.currentTip + '"]'
            );
            return 0;
        }
        }

        t.changeTipHTML();

        return 1;
    }

    /* Переходит к следующей подсказке / Go to next tip */
    goNextTip() {
        let t = this;
        t.currentTip++;
        t.counterTip++;
        t.tipEl = document.querySelector('[tip__position="' + t.currentTip + '"]');
        t.speed = 0.35;

        if (!t.getNextTip()) return 0;
        t.moveTip();
        t.moveCircle();
    }

    /* Переходит к предыдущей подсказке / Go to prev tip */
    goPrevTip() {
        let t = this;

        if (t.counterTip === 1) return 0;

        t.currentTip--;
        t.counterTip--;
        t.tipEl = document.querySelector('[tip__position="' + t.currentTip + '"]');

        /*Получает ближайшую доступную подсказку и ее данные и переносит их в интерактивную DOM посказку*/
        if (!t.getPrevTip()) return 0;
        t.moveTip();
        t.moveCircle();
    }

    /* Выключает гайд / Close guide */
    closeGuide() {
        let t = this;
        t.opened = false;
        t.prevBtn.classList.remove("active");
        t.hideGuide();
    }
}

const guide = new interactiveGuide();