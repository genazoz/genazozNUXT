<template>
  <div class="projects-list-page">
    <div class="projects-tags">
      <div class="projects-tags__container card-filters">
        <div class="tag hide-ball is-active" data-filter-value="all" data-filter-show-all="true">
          <span>Все</span>
        </div>
        <div
          class="tag hide-ball" :data-filter-value="item.name"
          v-for="(item, index) in $store.state.categories"
          :key="index"
        >
          <span>{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="projects-list filter-values">
      <div class="projects-list__container">
        <div class="genazoz-plate projects-list__genazoz-plate" data-filter-subject-value="[]">
<!--          <img class="genazoz-plate__crown" src="~/assets/img/crown.gif" />-->
          <div class="genazoz-plate__img-wrapper">
            <img src="~/assets/img/memoji.png" alt="memoji" />
            <img src="~/assets/img/emoji.png" alt="emoji" />
          </div>
<!--          <span class="genazoz-plate__highlighted">@genazozulya</span>-->
          <div class="flexCol">
            <h1 class="title_desktop">
              <span>{{ $t("home.titleDesktop") }}</span>
            </h1>
            <h1 class="title_smartphone">
              <span class="white-space-pre">{{ $t("home.titleMobile") }}</span>
            </h1>
            <p>{{ $t("home.text") }}</p>
          </div>
        </div>
        <nuxt-link
          :to="localePath('/project/' + item.src)"
          v-for="(item, index) in $store.state.allProjects"
          :key="index"
          class="projects-list__item-wrapper"
          :data-filter-subject-value='`[`+[...item.filter.split(",")].map(item => `"`+item+`"`)+`]`'
        >
          <div class="projects-list__item hide-ball" data-active>
            <img
              class="projects-list__background"
              :src="require(`~/assets/img/projects/${item.src}.webp`)"
            />
            <div class="projects-list__item-info">
              <h5>{{ item.name }}</h5>
              <p v-if="$i18n.locale == 'ru'">{{ item.RUdescription }}</p>
              <p v-if="$i18n.locale == 'en'">{{ item.ENdescription }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "swiper-slider",
  async fetch() {
    const T = this;

    const projects =
      (await firebase.database().ref(`/projects`).once("value")).val() || {};

    const sortedProjects = Object.entries(projects).map(([key, value]) => value).sort((prev,next) => prev.ids - next.ids);

    T.setProjects(sortedProjects);

    const categories =
      (await firebase.database().ref(`/categories`).once("value")).val() || {};
    T.setCategories(
      Object.keys(categories).map((key) => ({
        ...categories[key],
        id: key,
      }))
    );
  },
  fetchOnServer: true,
  methods: {
    setProjects(name) {
      this.$store.commit("setProjects", {
        projects: name,
      });
    },
    setCategories(name) {
      this.$store.commit("setCategories", {
        categories: name,
      });
    },

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
  mounted() {
    const T = this;
    T.addEventToEls(".projects-list__item-wrapper", "mouseenter", function () {
      TweenMax.to(
        document.querySelectorAll(".projects-list__item-wrapper"),
        0.3,
        {
          opacity: 0.3,
        }
      );
      TweenMax.to(this, 0.3, {
        opacity: 1,
      });
    });
    T.addEventToEls(".projects-list__item-wrapper", "mouseleave", function (e) {
      TweenMax.to(
        document.querySelectorAll(".projects-list__item-wrapper"),
        0.3,
        {
          opacity: 1,
        }
      );
    });

    function on(elSelector, eventName, selector, fn) {
      var element = document.querySelector(elSelector);

      element.addEventListener(eventName, function (event) {
        var possibleTargets = element.querySelectorAll(selector);
        var target = event.target;

        for (var i = 0, l = possibleTargets.length; i < l; i++) {
          var el = target;
          var p = possibleTargets[i];

          while (el && el !== element) {
            if (el === p) {
              return fn.call(p, event);
            }

            el = el.parentNode;
          }
        }
      });
    }

    class Filter {
      /**
       * Data.
       * @param data.filter {Element} - Filter element
       *
       * Filter dataset.
       * {Array.<string>} [data-filter-value]
       * {String} [data-filter-show-all] - for example `reset`
       *
       * Filter classes.
       * .card-filters && .card-filters--selected
       * .filter-toggle && .is-active
       * .filter-card__nested-selects
       */


      constructor(data) {
        this.value = {};
        this.filterElem = data.filter;

        this.filterShowAll = Array.from(this.filterElem.querySelectorAll(`[data-filter-show-all]`));
        this.filterSelectsList = Array.from(this.filterElem.querySelectorAll(`[data-filter-value]:not([data-filter-radio])`));
        this.filterSelectsRadioList = Array.from(this.filterElem.querySelectorAll(`[data-filter-value][data-filter-radio]`));

        this.activeToggleClass = `is-active`;

        this.filterValue = [];
      }

      init() {
        let T = this;
        on(`html`, 'click', "[data-filter-value]", this.filter.bind(this))
        on(`html`, `click`, `[data-filter-show-all]`, this.reset.bind(this));
      }

      filter(evt) {
        let filterValue = evt.target.dataset.filterValue ? evt.target.dataset.filterValue : evt.target.closest('[data-filter-value]').dataset.filterValue;
        this.toggleInList(filterValue, this.filterValue);

        this.filterValue.length ? this.apply(false) : this.reset()
      }

      select(evt) {
        this.reset()

        let filterValue = evt.target.dataset.filterValue ? evt.target.dataset.filterValue : evt.target.closest('[data-filter-value]').dataset.filterValue;

        this.toggleInList(filterValue, this.filterValue);

        this.filterValue.length ? this.apply(false) : this.reset()
      }

      reset() {
        this.filterValue = [];

        this.apply(true);
      }

      toggleInList(value, subject, action) {
        if (!value || !subject) {
          return;
        }

        const defaultAction = subject.includes(value) ? `delete` : `add`;
        action = action || defaultAction;

        switch (action) {
          case `add`:
            subject.push(value);
            break;

          case `delete`:
            if (subject.indexOf(value) !== -1) {
              subject.splice(subject.indexOf(value), 1);
            }
            break;
        }
      }

      setStyles(reset) {
        let buttons = Array.from(this.filterElem.querySelectorAll(`[data-filter-value]:not([data-filter-radio])`)).length ? Array.from(this.filterElem.querySelectorAll(`[data-filter-value]:not([data-filter-radio])`)) : this.filterSelectsRadioList;

        buttons.forEach((filterElem) => {
          if (this.filterValue.includes(filterElem.dataset.filterValue)) {
            filterElem.classList.add(this.activeToggleClass);
          } else {
            filterElem.classList.remove(this.activeToggleClass);
            if(reset && filterElem.dataset.filterShowAll){
              filterElem.classList.add(this.activeToggleClass);
            }
          }
        });

        // Need to find "nested selects" again after render
        // const nestedSelectsContainer = this.filterElem.querySelector(`.filter-card__nested-selects-container`);
        // this.nestedSelectsList = Array.from(nestedSelectsContainer.querySelectorAll(`[data-filter-value]`));
        //
        // this.nestedSelectsList.forEach((nestedSelect) => {
        //   if (this.filterValue.includes(nestedSelect.dataset.filterValue)) {
        //     nestedSelect.classList.add(this.activeToggleClass);
        //
        //   } else {
        //     nestedSelect.classList.remove(this.activeToggleClass);
        //   }
        // });

        if (this.filterValue.length) {
          this.filterElem.classList.add(`card-filters--selected`);
        } else {
          this.filterElem.classList.remove(`card-filters--selected`);
        }
      }

      apply(reset) {

        this.setStyles(reset)

        this.value['filter'] = this.filterValue;

        document.querySelectorAll(`[data-filter-subject-value]`).forEach((filterSubject) => {
          let isSubjectFits = true;

          let filter = () => {

            if (!this.value || !this.value.filter || !this.value.filter.length) {
              return;
            }

            const subjectValues = JSON.parse(filterSubject.dataset.filterSubjectValue);
            const subjectIsNotSrict = filterSubject.dataset.filterSubjectNotStrict;

            if (subjectIsNotSrict) {
              isSubjectFits = false;

              this.value.filter.forEach((filterValue) => {
                if (subjectValues.includes(filterValue)) {
                  isSubjectFits = true;
                }
              });

              return;
            }

            isSubjectFits = false;

            if (subjectValues) {
              subjectValues.forEach((subjectValue) => {
                if (this.value.filter.includes(subjectValue)) {
                  isSubjectFits = true;
                }
              });
            }
          };


          filter();


          if (!isSubjectFits) {
            filterSubject.classList.add(`filter-value-not-fit`);
          } else {
            filterSubject.classList.remove(`filter-value-not-fit`);
          }
        });
      }
    }

    const filterElem = document.querySelector(`.card-filters`);
    const targetElem = document.querySelector(`.filter-values`);

    if (filterElem && targetElem) {
      const filter = new Filter({
        filter: filterElem,
        target: targetElem
      });
      setTimeout(function () {
        filter.init();
      }, 700)
    }
  },
};
</script>
