<template>
  <div class="menu">
    <nav class="right-side-nav">
      <div class="line-wrapper">
        <div class="line"></div>
      </div>
      <nuxt-link
        to="/"
        goto="home"
        class="nav-hover nav-hover_home link router-link"
        data-translate-key="T20"
        btnSoundOn
        >{{ $t("menu.home") }}</nuxt-link
      >
      <nuxt-link
        to="/about"
        class="link router-link about-show-button"
        data-translate-key="T21"
        btnSoundOn
      >
        {{ $t("menu.about") }}
      </nuxt-link>
      <nuxt-link
        to="/contact"
        class="link router-link contact-show-btn"
        data-translate-key="T22"
        btnSoundOn
      >
        {{ $t("menu.contact") }}
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    const T = this;
  },
  methods: {},
};
</script>
