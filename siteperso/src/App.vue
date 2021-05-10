<template>
  <div
    id="app"
    data-scroll-container
    class="body"
    v-on:keyup.escape="toggleAllModale()"
  >
    <NavBar />
    <div><span class="bg-opacity-4 mt6"></span></div>
    <div
      id="ancreDvlp"
      data-scroll-section
      class="container-fluid w-100 bg-imageFond p-0 d-flex flex-column justify-content-center align-item-center"
    >
      <DvlpWeb data-scroll data-scroll-speed="2" class="mt-6 p-0 py-5" />
    </div>
    <transition name="bounce">
      <div
        class="overlay"
        v-show="this.$store.state.modale.overlay"
        @click="toggleAllModale()"
      ></div>
    </transition>
    <transition name="bounce">
      <ModaleReservia
        class="bg-darker modale"
        v-if="this.$store.state.modale.modaleReservia"
      />
    </transition>
    <transition name="bounce">
      <ModaleOhmyfood
        class="bg-darker modale"
        v-if="this.$store.state.modale.modaleOhmyfood"
      />
    </transition>
    <transition name="bounce">
      <ModaleChouetteAgence
        class="bg-darker modale"
        v-if="this.$store.state.modale.modaleChouetteAgence"
      />
    </transition>
    <transition name="bounce">
      <ModaleOrinoco
        class="bg-darker modale"
        v-if="this.$store.state.modale.modaleOrinoco"
      />
    </transition>
    <transition name="bounce">
      <ModaleSopekocko
        class="bg-darker modale"
        v-if="this.$store.state.modale.modaleSopekocko"
      />
    </transition>
    <transition name="bounce">
      <ModaleGroupomania
        class="bg-darker modale"
        v-if="this.$store.state.modale.modaleGroupomania"
      />
    </transition>
    <transition name="bounce">
      <ModaleArcheDuGrog
        class="bg-darker modale"
        v-if="this.$store.state.modale.modaleArcheDuGrog"
      />
    </transition>

    <div
      id="ancreCompetence"
      data-scroll-section
      class="container-fluid bg-opacity-4 p-0"
    >
      <Competence
        data-scroll
        data-scroll-speed="2"
        class="p-lg-5 bg-darker min-vh-100 py-5"
      />
    </div>
    <div
      data-scroll-section
      id="ancreProjet"
      class="container-fluid bg-opacity-4 p-0 my-5"
    >
      <Portfolio
        data-scroll
        data-scroll-speed="2"
        class="p-lg-5 min-vh-100 bg-transparent py-5"
      />
    </div>
    <Footer
      id="ancreReseauSocial"
      data-scroll-section
      class="bg-dark shadow-box"
    />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import DvlpWeb from "./components/DvlpWeb.vue";
import Footer from "./components/Footer.vue";
import Competence from "./components/Competence";
import Portfolio from "./components/Portfolio";
import LocomotiveScroll from "locomotive-scroll";
import ModaleReservia from "./components/modales/ModaleReservia";
import ModaleOhmyfood from "./components/modales/ModaleOhmyfood";
import ModaleChouetteAgence from "./components/modales/ModaleChouetteAgence";
import ModaleOrinoco from "./components/modales/ModaleOrinoco";
import ModaleSopekocko from "./components/modales/ModaleSopekocko";
import ModaleGroupomania from "./components/modales/ModaleGroupomania";
import ModaleArcheDuGrog from "./components/modales/ModaleArcheDuGrog";
import { mapState } from "vuex";
import store from "./store/index";

export default {
  name: "App",
  components: {
    NavBar,
    DvlpWeb,
    Footer,
    Competence,
    Portfolio,
    ModaleReservia,
    ModaleOhmyfood,
    ModaleChouetteAgence,
    ModaleOrinoco,
    ModaleSopekocko,
    ModaleGroupomania,
    ModaleArcheDuGrog,
  },
  computed: {
    ...mapState(["modale"]),
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    toggleAllModale() {
      store.commit("allModale");
    },
  },
  mounted() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true,
    });
    console.log("scroll", this.scroll);
  },
};
</script>
<style scoped>
.testici {
  height: 300px !important;
  width: 150px !important;
  background-color: yellow !important;
  position: fixed !important;
  top: 50% !important;
  left: 80% !important;
  z-index: 100;
}
</style>
