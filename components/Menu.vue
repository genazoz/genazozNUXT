<template>
  <div class="menu">
    <nav class="right-side-nav">
      <div class="line-wrapper">
        <div class="line"></div>
      </div>
      <nuxt-link
        :to="$i18n.path('')"
        exact
        goto="home"
        class="nav-hover nav-hover_home link router-link"
        btnSoundOn
        >{{ $t("menu.home") }}</nuxt-link
      >
      <!-- <nuxt-link
        :to="$i18n.path('about')"
        exact
        class="link router-link about-show-button"
        btnSoundOn
      >
        {{ $t("menu.about") }}
      </nuxt-link> -->
      <nuxt-link
        :to="$i18n.path('contact')"
        exact
        class="link router-link contact-show-btn"
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
