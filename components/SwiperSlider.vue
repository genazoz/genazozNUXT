<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="father-info">
          <div class="father-info__img-wrapper">
            <img src="~/assets/img/memoji.png" alt="memoji" />
            <img src="~/assets/img/emoji.png" alt="emoji" />
          </div>
          <div class="flexCol">
            <h1 class="title_desktop">
              <span class="white-space-pre">{{ $t("home.titleDesktop") }}</span>
            </h1>
            <h1 class="title_smartphone">
              <span class="white-space-pre">{{ $t("home.titleMobile") }}</span>
            </h1>
            <p>{{ $t("home.text") }}</p>
          </div>
        </div>
      </div>
      <!-- 
        :to="$i18n.path('project')"

       -->
      <nuxt-link
        :to="localePath('/project/' + item.src)"
        v-for="item in $store.state.allProjects"
        :key="item.name"
        class="swiper-slide"
      >
        <img
          class="background"
          :src="require(`~/assets/img/projects/${item.src}.webp`)"
        />

        <div class="swiper-slide__lower-info">
          <h5>{{ item.name }}</h5>
          <p v-if="$i18n.locale == 'ru'">{{ item.RUdescription }}</p>
          <p v-if="$i18n.locale == 'en'">{{ item.ENdescription }}</p>
        </div>
      </nuxt-link>
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
    T.setProjects(
      Object.keys(projects).map((key) => ({
        ...projects[key],
        id: key,
      }))
    );
  },
  fetchOnServer: true,
  data() {
    return {
      visible: 1,
    };
  },
  mounted() {
    const T = this;
  },
  methods: {
    setProjects(name) {
      this.$store.commit("setProjects", {
        projects: name,
      });
    },
  },
};
</script>

