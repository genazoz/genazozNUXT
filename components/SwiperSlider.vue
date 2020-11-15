<template>
  <div class="swiper-container">
    <div
      class="swiper-wrapper"
      tip__position="2"
      tip__title="Проекты"
      tip__text="Чтобы перейти к проекту, нажмите на него. Чтобы посмотреть весь список проектов, проскрольте колесом мыши, либо мышью перетащите проекты влево."
      tip__mode="square"
    >
      <div
        v-for="(item, index) in projects"
        :key="item.name"
        class="swiper-slide"
      >
        <div class="change-size-wrapper">
          <div class="background-wrapper">
            <div class="in-background-wrapper">
              <img
                class="background parallax-bg"
                data-swiper-parallax="9%"
                :src="
                  require(`~/assets/img/projects/desktop/${item.img_list}.webp`)
                "
              />
            </div>
          </div>
        </div>
        <div
          class="slide-title router-link"
          :data-number="index + 1"
          btnSoundOn
        >
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- <div
    id="external-caption"
    tip__position="4"
    tip__title="Описание проекта"
    tip__text=""
    tip__mode="square"
  >
    <p
      v-for="(item, index) in project"
      :key="item.name"
      class="slide-caption"
      :data-slide-caption="'0' + (index + 1)"
      :active="item.active"
    >
      {{ item.description }}
    </p>
  </div> -->
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
    };
  },
};
</script>

