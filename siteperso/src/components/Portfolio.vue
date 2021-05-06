<template>
  <div class="p-3 shadow-box">
    <h1 class="text-titre pt-5 text-center bg-transparent">Mes réalisations</h1>
    <div class="row justify-content-center my-5 py-5">
      <button
        @click="toggleModaleReservia()"
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="vertical"
        class="p-2 bg-card col-12 col-xl-4 col-md-5 mx-2 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100"
      >
        <div class="bg-reservia bg-card bg-light">
          <i class="check fas fa-check-circle"></i>
          <p
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="vertical"
            class="text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation"
          >
            Reservia
          </p>
        </div>
      </button>
      <button
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="vertical"
        @click="toggleModaleOhmyfood()"
        class="p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100"
      >
        <div class="bg-ohmyfood bg-card bg-light">
          <i class="check fas fa-check-circle"></i>
          <p
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="vertical"
            class="text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation"
          >
            Ohmyfood
          </p>
        </div>
      </button>
      <button
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="vertical"
        @click="toggleModaleChouetteAgence()"
        class="p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100"
      >
        <div class="bg-chouetteagence bg-card bg-light">
          <i class="check fas fa-check-circle"></i>
          <p
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="vertical"
            class="text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation"
          >
            La chouette agence
          </p>
        </div>
      </button>
      <button
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="vertical"
        @click="toggleModaleOrinoco()"
        class="p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100"
      >
        <div class="bg-orinoco bg-card bg-light">
          <i class="check fas fa-check-circle"></i>
          <p
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="vertical"
            class="text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation"
          >
            Orinoco
          </p>
        </div>
      </button>
      <button
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="vertical"
        @click="toggleModaleSopekocko()"
        class="p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100"
      >
        <div class="bg-sopekocko bg-card bg-light">
          <i class="check fas fa-check-circle"></i>
          <p
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="vertical"
            class="text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation"
          >
            So pekocko
          </p>
        </div>
      </button>
      <button
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="vertical"
        @click="toggleModaleGroupomania()"
        class="p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100"
      >
        <div class="bg-groupomania bg-card bg-light">
          <i class="check fas fa-check-circle"></i>
          <p
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="vertical"
            class="text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation"
          >
            Groupomania
          </p>
        </div>
      </button>
      <button
        data-scroll
        data-scroll-speed="1"
        data-scroll-direction="vertical"
        @click="toggleModaleArcheDuGrog()"
        id="modale"
        class="p-2 bg-card col-12 col-xl-4 mx-2 col-md-5 m-md-3 d-flex justify-content-center rounded m-lg-3 my-4 w-100"
      >
        <div class="bg-archedugrog bg-card bg-light">
          <i class="progres fas fa-circle-notch"></i>
          <p
            data-scroll
            data-scroll-speed="0.5"
            data-scroll-direction="vertical"
            class="text-primaire text-center p-3 rounded bg-opacity-2 filigraneMesRealisation"
          >
            l'Arche du Grog
          </p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Portfolio",
  computed: {
    ...mapState(["modale"]),
  },
  methods: {
    toggleModaleReservia() {
      this.$store.commit("modaleReservia");
      this.$store.commit("ouvertureOverlay");
    },
    toggleModaleOhmyfood() {
      this.$store.commit("modaleOhmyfood");
      this.$store.commit("ouvertureOverlay");
    },
    toggleModaleChouetteAgence() {
      this.$store.commit("modaleChouetteAgence");
      this.$store.commit("ouvertureOverlay");
    },
    toggleModaleOrinoco() {
      this.$store.commit("modaleOrinoco");
      this.$store.commit("ouvertureOverlay");
    },
    toggleModaleSopekocko() {
      this.$store.commit("modaleSopekocko");
      this.$store.commit("ouvertureOverlay");
    },
    toggleModaleGroupomania() {
      this.$store.commit("modaleGroupomania");
      this.$store.commit("ouvertureOverlay");
    },
    toggleModaleArcheDuGrog() {
      this.$store.commit("modaleArcheDuGrog");
      this.$store.commit("ouvertureOverlay");
    },
  },
};
</script>
