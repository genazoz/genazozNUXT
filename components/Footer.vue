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
            <svg>
              <use xlink:href="@/assets/img/sprites.svg#svg-telegram"></use>
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
            <svg>
              <use xlink:href="@/assets/img/sprites.svg#svg-headhunter"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="davidli">
      <a href="http://david.li" target="_blank">Created by David Li</a>
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
