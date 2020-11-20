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

            <nuxt-link to="/contact" class="hide-ball" btnSoundOn>
              {{ $t("home.button") }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-for="item in projects" :key="item.name" class="swiper-slide">
        <img
          class="background parallax-bg"
          data-swiper-parallax="9%"
          :src="
            require(`~/assets/img/projects/desktop/gridmode/${item.img_list}.webp`)
          "
        />
        <div class="swiper-slide__lower-info">
          <h5>{{ item.name }}</h5>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "swiper-slider",
  async fetch() {
    const projects =
      (await firebase.database().ref(`/projects`).once("value")).val() || {};
    this.projects = Object.keys(projects).map((key) => ({
      ...projects[key],
      id: key,
    }));
  },
  fetchOnServer: true,
  data() {
    return {
      projects: [],
      visible: 1,
    };
  },
};
</script>

