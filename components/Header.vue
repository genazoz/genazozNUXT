<template>
  <header>
    <div class="flexRow">
      <div class="elastic-close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50.4 29.4"
          class="arrow-button__picto"
        >
          <path fill="none" d="M0 14.7h50.4M35.7 29.4l14.7-14.7L35.7 0"></path>
        </svg>
      </div>
    </div>
    <div class="flexRow">
      <div :class="{ 'magic-parallax': $store.state.windowSize == 'PC' }">
        <div class="icon-wrapper icon icon_language">
          <div class="magic-parallax__scale-unset">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LangSwitcher from "@/components/LangSwitcher";

export default {
  components: { LangSwitcher },
};
</script>
