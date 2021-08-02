import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modale: {
      modaleType: false,
      modaleReservia: false,
      modaleOhmyfood: false,
      modaleSopekocko: false,
      modaleGroupomania: false,
      modaleChouetteAgence: false,
      modaleArcheDuGrog: false,
      modaleMarinaHantz: false,
      modaleOrinoco: false,
      overlay: false,
    },
  },
  mutations: {
    ouvertureOverlay() {
      this.state.modale.overlay = true;
    },
    modaleType() {
      this.state.modale.modaleType = !this.state.modale.modaleType;
      console.log(this.state.modale.modaleType);
    },
    modaleReservia() {
      this.state.modale.modaleReservia = !this.state.modale.modaleReservia;
    },
    modaleOhmyfood() {
      this.state.modale.modaleOhmyfood = !this.state.modale.modaleOhmyfood;
    },
    modaleSopekocko() {
      this.state.modale.modaleSopekocko = !this.state.modale.modaleSopekocko;
    },
    modaleGroupomania() {
      // eslint-disable-next-line
      this.state.modale.modaleGroupomania = !this.state.modale.modaleGroupomania;
    },
    modaleChouetteAgence() {
      // eslint-disable-next-line
      this.state.modale.modaleChouetteAgence = !this.state.modale.modaleChouetteAgence;
    },
    modaleArcheDuGrog() {
      // eslint-disable-next-line
      this.state.modale.modaleArcheDuGrog = !this.state.modale.modaleArcheDuGrog;
    },
    modaleMarinaHantz() {
      this.state.modale.modaleMarinaHantz = !this.state.modale.modaleMarinaHantz;
    },
    modaleOrinoco() {
      this.state.modale.modaleOrinoco = !this.state.modale.modaleOrinoco;
    },
    allModale() {
      for (const property in this.state.modale) {
        this.state.modale[property] = false;
      }
    },
  },
  actions: {},
  modules: {},
});
