export const navstate = {
  state: {
    navOpen: false
  },
  mutations: {
    toggleNav: state => state.navOpen = !state.navOpen,
    closeNav: state => state.navOpen = false
  }
}