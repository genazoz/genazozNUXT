import firebase from 'firebase/app'

export const state = () => ({
  projects: []
})

export const mutations = {
  setProjects(state, projects){
    state.projects = 1;
  }
}

export const actions = {
  async fetchProjects({commit}) {
    const projects = (await firebase.database().ref(`/projects`).once('value')).val() || {}
    commit('setProjects', Object.keys(projects).map(key => ({...projects[key], id: key})));
  },
}

export const getters = {
  projects: state => { 
    return state.projects;
  }
}