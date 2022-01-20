<template>
  <div class="header_mobile">
    <div class="flexRow">
      <div class="icon-wrapper">
        <a
          target="blank"
          href="https://t.me/genazoz"
          class="magic-parallax__scale-unset"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"
            />
          </svg>
        </a>
      </div>
      <div class="icon-wrapper">
        <a
          target="blank"
          href="https://spb.hh.ru/resume/d3c68fe7ff082c59d70039ed1f4a735977734f"
          class="magic-parallax__scale-unset"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="white"
              stroke="none"
            >
              <path
                d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0 -2560z m1590 709 l0 -381 65 60 c104 95 221 142 355 142 210 0 372 -109 432 -290 22 -63 22 -81 26 -602 l3 -538 -180 0 -181 0 0 403 c-1 439 -9 586 -34 635 -37 73 -97 103 -197 103 -157 0 -251 -91 -278 -268 -7 -43 -11 -230 -11 -473 l0 -400 -182 2 -183 3 -3 980 c-1 539 0 986 3 993 3 9 50 12 185 12 l180 0 0 -381z m1420 0 l0 -381 60 55 c142 128 311 174 489 132 136 -32 228 -104 282 -219 50 -107 53 -141 53 -686 l1 -505 -182 -3 -182 -2 -3 492 c-3 448 -5 497 -21 533 -37 82 -94 116 -197 116 -89 0 -157 -28 -210 -88 -78 -89 -89 -176 -90 -690 l0 -363 -180 0 -180 0 0 995 0 995 180 0 180 0 0 -381z"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="flexRow">
      <div class="icon-wrapper">
        <LangSwitcher />
      </div>
    </div>
  </div>
</template>

<script>
import LangSwitcher from "@/components/LangSwitcher";

export default {
  components: { LangSwitcher },
};
</script>
