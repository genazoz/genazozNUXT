
export const state = () => ({
  error: null,
  appLoaded: 0,
  volume: 0.1,
  locales: ['en', 'ru'],
  locale: 'ru',
  worksMode: 2,
  windowSize: "PC",
  e: {
    x: 0,
    y: 0,
  },
  t: {
    x: 0,
    y: 0,
  },
  curX: null,
  curY: null,
  projectsCount: 11,
})

export const mutations = {
  setError(state, error) {
    state.error = error
  },

  
  /*--------------------------------------------------
    Страница загружена
  ---------------------------------------------------*/
  changeAppLoaded(state, {val}){
    state.appLoaded = val;
  },

  /*--------------------------------------------------
    Изменение вида отображения работ
  ---------------------------------------------------*/
  changeMode (state, worksMode){
    state.worksMode = worksMode;
  },

  /*--------------------------------------------------
    Изменение громкости
  ---------------------------------------------------*/
  getVolume (state){
    let results = document.cookie.match(
    "(^|;) ?volume=([^;]*)(;|$)"
    );
    if(results){
      state.volume = results[2];
    }else{
      state.volume = 0.1;
    }
  },

  /*--------------------------------------------------
    Изменение языка
  ---------------------------------------------------*/
  getLang (state){
    let results = document.cookie.match(
    "(^|;) ?lang=([^;]*)(;|$)"
    );
    if(results){
      state.lang = results[2];
    }else{
      state.lang = 'Ru';
    }
  },

  /*--------------------------------------------------
    Изменение громкости
  ---------------------------------------------------*/
  setVolume (state, vol){
    state.volume = vol;
  },

  /*--------------------------------------------------
    Изменение языка
  ---------------------------------------------------*/
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },

  /*--------------------------------------------------
    Получение состояния проектов
  ---------------------------------------------------*/
  getWorksMode (state){
    let results = document.cookie.match(
    "(^|;) ?worksMode=([^;]*)(;|$)"
    );
    if(results){
      state.worksMode = results[2];
    }
  },

  getWindowSize(state){
    if(window.innerWidth > 1100){
      state.windowSize = "PC";
    }else{
      state.windowSize = "smartphone";
    }
  },

  /*--------------------------------------------------
    Получение/установка куков - Get/Set cookie
  ---------------------------------------------------*/
  setCookie(state, {name, value, time}) {
    let date = new Date();

    date.setTime(date.getTime() + time * 1000000);
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString();
    
  },

  plusT(state, {x,y}){
    state.t.x += x;
    state.t.y += y;
  },

  setE(state, {x,y}){
    state.e.x = x;
    state.e.y = y;
  },

  changeT(state, {x,y}){
    state.t.x = x;
    state.t.y = y;
  }
}

export const actions = {}

export const modules = {
}

export const getters = {
  worksMode(state){ 
    return state.worksMode;
  },
  volume: state => { 
    return state.volume;
  },
  lang: state => { 
    return state.lang;
  },
  windowSize: state => { 
    return state.windowSize;
  },
}

