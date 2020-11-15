<template>
  <div class="about-section">
    <div class="flexCol">
      <div class="available-for-work">
        <div class="available-for-work__icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
            <path
              d="m155.109 74.028a4 4 0 0 0 -3.48-2.028h-52.4l8.785-67.123a4.023 4.023 0 0 0 -7.373-2.614l-63.724 111.642a4 4 0 0 0 3.407 6.095h51.617l-6.962 67.224a4.024 4.024 0 0 0 7.411 2.461l62.671-111.63a4 4 0 0 0 .048-4.027z"
            />
          </svg>
        </div>
        <p>Доступен для фриланса или работы full-time</p>
      </div>
      <h1 data-translate-key="T24">
        Front-end разработчик <br />
        TypeScript, VueJS, NUXT
      </h1>
      <p data-translate-key="T25">
        Нахожусь в Санкт-Петербурге. На данный момент на фрилансе как Junior
        разработчик. В поиске full-time вакансии для работе в команде и
        улучшения своих скиллов в разработке.
      </p>
      <nuxt-link to="/contact" class="hide-ball" btnSoundOn
        >Заказать сайт</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["menu"],
  mounted() {
    const T = this;
    menu.closeMenu();
    menu.sectionScaleDown();
    $nuxt.$emit("init-cursor-hover");
    $nuxt.$emit("set-lang", T.$store.getters.lang);

    document.querySelector("header").setAttribute("about-contact", "");
    TweenMax.to(".about-section", 1.5, {
      css: { pointerEvents: "all", opacity: 1 },
      delay: 0.4,
    });
  },
};
</script>

<style>
</style>