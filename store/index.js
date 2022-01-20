export const state = () => ({
  error: null,
  locales: ["en", "ru"],
  locale: "ru",
  windowSize: "PC",
  allProjects: null,
  categories: null,
  project: null,
  e: {
    x: 0,
    y: 0
  },
  t: {
    x: 0,
    y: 0
  }
});

export const mutations = {
  setError(state, error) {
    state.error = error;
  },

  setProject(state, { project }) {
    state.project = project;
  },

  setProjects(state, { projects }) {
    state.allProjects = projects;
  },

  setCategories(state, { categories }) {
    state.categories = categories;
  },

  /*--------------------------------------------------
    Изменение языка
  ---------------------------------------------------*/
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },

  getWindowSize(state, { width }) {
    if (width > 1100) {
      state.windowSize = "PC";
    } else {
      state.windowSize = "smartphone";
    }
  },

  /*--------------------------------------------------
    Получение/установка куков - Get/Set cookie
  ---------------------------------------------------*/
  setCookie(state, { name, value, time }) {
    let date = new Date();

    date.setTime(date.getTime() + time * 1000000);
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString();
  },

  plusT(state, { x, y }) {
    state.t.x += x;
    state.t.y += y;
  },

  setE(state, { x, y }) {
    state.e.x = x;
    state.e.y = y;
  },

  changeT(state, { x, y }) {
    state.t.x = x;
    state.t.y = y;
  }
};

export const actions = {};

export const modules = {};

export const getters = {
  windowSize: state => {
    return state.windowSize;
  }
};



