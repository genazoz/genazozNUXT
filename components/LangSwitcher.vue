<template>
  <span class="lang-switcher" style="width: 100%; height: 100%">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: "LangSwitcher",
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      );
    },
  },
};
</script>
