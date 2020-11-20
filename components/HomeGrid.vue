<template>
  <div class="home-grid">
    <!-- lazy-background="~/assets/img/projects/desktop/gridmode/genazozBG.webp" -->
    <div class="home-grid__title-wrapper">
      <div class="before"></div>
      <h2>{{ $t("home.T1") }}</h2>
      <p>{{ $t("home.T2") }}</p>
    </div>
    <div class="wrapper">
      <div class="overflow-y-scroll">
        <div class="projects-main-wrapper">
          <div class="projects-wrapper">
            <div class="custom-scrollbar">
              <div class="custom-scrollbar__line1"></div>
              <div class="custom-scrollbar__circle"></div>
              <div class="custom-scrollbar__line2"></div>
            </div>
            <div
              v-for="item in projects"
              :key="item.name"
              :active="item.active"
              class="project-item"
            >
              <nuxt-link
                to="/project"
                class="router-link mouseScale"
                goto="/project"
                btnSoundOn
              >
                <img
                  class="img-grid"
                  :src="
                    require(`~/assets/img/projects/desktop/gridmode/${item.img_grid}.webp`)
                  "
                />
                <div class="flexRow">
                  <div class="flexCol">
                    <h4 :id="['T' + item.translate]">
                      <div class="project-item__price">{{ item.price }}</div>
                      <span>{{ item.gridname }}</span>
                    </h4>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
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
  async mounted() {
    const T = this;
  },
};
</script>
