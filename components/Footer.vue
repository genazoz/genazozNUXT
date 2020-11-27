<template>
  <footer>
    <div class="flexRow">
      <div :class="{ 'magic-parallax': $store.state.windowSize === 'PC' }">
        <div
          class="icon-wrapper icon"
          tip__position="5"
          tip__title="Ссылка на профиль Telegram"
        >
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
      </div>
      <div :class="{ 'magic-parallax': $store.state.windowSize === 'PC' }">
        <div
          class="icon-wrapper icon"
          tip__position="4"
          tip__title="Ссылка на профиль hh.ru"
        >
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
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="text text-lower-main hide-ball">
      <p>© <span>2017</span>-<span>2020</span> · Saint-Petersburg · Russia</p>
    </div>
    <div class="davidli">
      Created by <a href="http://david.li" target="_blank">David Li</a>
    </div>
    <div class="flexRow">
      <div :class="{ 'magic-parallax': $store.state.windowSize === 'PC' }">
        <div class="icon-wrapper icon">
          <div class="magic-parallax__scale-unset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="bold"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d="m23.936 16.477-1.993-9.426c-.375-1.768-1.945-3.051-3.734-3.051h-12.418c-1.789 0-3.359 1.283-3.733 3.051l-1.993 9.426c-.184.871.03 1.766.589 2.455.55.679 1.364 1.068 2.233 1.068 1.188 0 2.24-.72 2.669-1.807l1.262-2.85c.042-.107.141-.177.251-.177h9.86c.11 0 .209.069.264.205l1.238 2.793c.442 1.116 1.494 1.836 2.682 1.836.869 0 1.683-.389 2.233-1.068.559-.689.774-1.584.59-2.455zm-14.436-5.977h-1v1c0 .552-.448 1-1 1s-1-.448-1-1v-1h-1c-.552 0-1-.448-1-1s.448-1 1-1h1v-1c0-.552.448-1 1-1s1 .448 1 1v1h1c.552 0 1 .448 1 1s-.448 1-1 1zm7 1.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
