<template>
  <main class="M-project-wrapper" background="">
    <div class="M M-project">
      <section class="M-project__section M-project__section_preview">
        <div class="M-project__preview-img-wrapper">
          <img
            class="M-project__preview-img"
            :src="
              require(`~/assets/img/projects/${$store.state.project.src}.webp`)
            "
            alt="selected-project"
          />
        </div>
      </section>
      <section class="M-project__section M-project__section_info">
        <div class="M-project__img-wrapper">
          <img
            :src="
              require(`~/assets/img/projects/logo/${$store.state.project.src}.png`)
            "
            alt="project-logo"
          />
        </div>
        <div class="M-project__flexCol-info flexCol">
          <a
            v-if="$store.state.project.srcDesign"
            :href="
              require(`~/assets/img/projects/desktop/design/${$store.state.project.srcDesign}.webp`)
            "
            target="_blank"
          >
            <section class="mockup-macbook">
              <div class="image-wrap">
                <img
                  src="https://svgshare.com/i/P70.svg"
                  class="mockup-generator__device"
                />
                <div class="mockup-macbook__image">
                  <img
                    :src="
                      require(`~/assets/img/projects/desktop/design/${$store.state.project.src}.png`)
                    "
                    alt="project-logo"
                  />
                </div>
              </div>
              <div class="mockup-macbook__bg"></div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-105 0 512 512.00002"
              >
                <path
                  d="m150.601562 0c-83.042968 0-150.601562 67.558594-150.601562 150.601562v210.796876c0 83.042968 67.558594 150.601562 150.601562 150.601562 83.042969 0 150.601563-67.558594 150.601563-150.601562v-210.796876c0-83.042968-67.558594-150.601562-150.601563-150.601562zm119.882813 361.398438c0 66.101562-53.78125 119.882812-119.882813 119.882812-66.101562 0-119.882812-53.78125-119.882812-119.882812v-210.796876c0-66.101562 53.78125-119.882812 119.882812-119.882812 66.101563 0 119.882813 53.78125 119.882813 119.882812zm0 0"
                />
                <path
                  d="m150.605469 101.851562c-8.484375 0-15.359375 6.875-15.359375 15.359376v70.695312c0 8.480469 6.875 15.359375 15.359375 15.359375 8.480469 0 15.359375-6.878906 15.359375-15.359375v-70.695312c0-8.484376-6.875-15.359376-15.359375-15.359376zm0 0"
                />
              </svg>
            </section>

            <div
              class="M-project__about flexRow"
              v-if="
                $store.state.project.ENabout_a || $store.state.project.RUabout_a
              "
            >
              <div class="flexCol">
                <!-- <h5 class="M-project__title">{{ $t("project.aboutTitle") }}</h5> -->
                <p v-if="$i18n.locale == 'ru'">
                  {{ $store.state.project.RUabout_a }}
                </p>
                <p v-if="$i18n.locale == 'en'">
                  {{ $store.state.project.ENabout_a }}
                </p>
              </div>
            </div>
          </a>
          <div class="flexCol M-project__flexCol">
            <div class="M-project__main-info flexRow">
              <div class="flexCol">
                <h5 class="M-project__title">{{ $t("project.roleTitle") }}</h5>
                <p v-if="$i18n.locale == 'ru'">
                  {{ $store.state.project.RUrole }}
                </p>
                <p v-if="$i18n.locale == 'en'">
                  {{ $store.state.project.ENrole }}
                </p>
              </div>
              <div class="flexCol">
                <h5 class="M-project__title">
                  {{ $t("project.categoryTitle") }}
                </h5>
                <p v-if="$i18n.locale == 'ru'">
                  {{ $store.state.project.RUcategory }}
                </p>
                <p v-if="$i18n.locale == 'en'">
                  {{ $store.state.project.ENcategory }}
                </p>
              </div>
              <div class="flexCol">
                <h5 class="M-project__title">{{ $t("project.yearTitle") }}</h5>
                <p>{{ $store.state.project.year }}</p>
              </div>
              <div class="flexCol">
                <h5 class="M-project__title">
                  {{ $t("project.websiteTitle") }}
                </h5>
                <a
                  v-if="
                    $store.state.project.website &&
                    $store.state.project.website != '-'
                  "
                  :href="$store.state.project.website"
                  target="_blank"
                  >{{ $store.state.project.websiteTitle }}</a
                >
                <p v-else>
                  {{ $store.state.project.websiteTitle }}
                </p>
              </div>
              <div class="flexCol">
                <h5 class="M-project__title">
                  {{ $t("project.timelineTitle") }}
                </h5>
                <p>
                  {{ $store.state.project.timeline }}
                </p>
              </div>
              <div class="flexCol">
                <h5 class="M-project__title">
                  {{ $t("project.adaptiveTitle") }}
                </h5>
                <p v-if="$i18n.locale == 'ru'">
                  {{ $store.state.project.RUadaptive }}
                </p>
                <p v-if="$i18n.locale == 'en'">
                  {{ $store.state.project.ENadaptive }}
                </p>
              </div>
              <div class="flexCol">
                <h5 class="M-project__title">
                  {{ $t("project.technologyTitle") }}
                </h5>
                <p class="white-space-pre">
                  <span>{{ $store.state.project.technology }} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nuxt-link
        class="M-project__close-btn-wrapper hide-ball"
        event=""
        @click.native="closeBtn(), (event) => event.preventDefault()"
        :to="localePath('/')"
        exact
      >
        <button class="M-project__close-btn" style="opacity: 1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.4 29.4"
            class="arrow-button__picto"
          >
            <path
              fill="none"
              d="M0 14.7h50.4M35.7 29.4l14.7-14.7L35.7 0"
            ></path>
          </svg>
        </button>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import firebase from "firebase/app";
import BezierEasing from "bezier-easing/dist/bezier-easing.min";

export default {
  name: "project",
  middleware() {},
  asyncData() {},
  fetch() {},
  created() {
    const T = this;
    function getValue(object, key) {
      var result;
      return (
        object.some(function (k) {
          if (k.src === key) {
            result = k;
            return true;
          }
          if (
            object[k] &&
            typeof object[k] === "object" &&
            (result = getValue(object[k], key))
          ) {
            return true;
          }
        }) && result
      );
    }
    this.$store.commit("setProject", {
      project: getValue(this.$store.state.allProjects, this.$route.params.id),
    });
  },
  mounted() {
    const T = this;

    $nuxt.$emit("init-cursor-hover");
    TweenMax.to(".home", 0.1, {
      pointerEvents: "none",
    });
    TweenMax.to(".M-project-wrapper", 0.4, {
      marginTop: "0",
      ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
    });
    TweenMax.to("header", 0.1, {
      pointerEvents: "none",
    });
    document
      .querySelector(".M-project-wrapper")
      .addEventListener("click", function (event) {
        if (event.target.classList.contains("M-project-wrapper")) {
          T.$router.push("/");
        }
      });
  },
  methods: {
    closeBtn: function () {
      const T = this;

      TweenMax.to(".M-project-wrapper", 0.4, {
        marginTop: "-100vh",
        ease: new Ease(BezierEasing(0.77, 0, 0.175, 1)),
      });
      setTimeout(function () {
        T.$router.push("/");
      }, 500);
    },
  },
  beforeDestroy() {},
};
</script>

<style>
</style>