<template>
  <div class="d-flex flex-column" data-scroll data-scroll-speed="2">
    <h1 class="text-titre text-center pt-5">l'Arche Du Grog</h1>
    <button
      class="fermeModale hoverNav"
      @click="toggleAllModale()"
      v-on:keydown.exact.tab.shift.prevent=""
      ref="exitBouton"
    >
      <i class="far fa-times-circle fermeModale iconeModale"></i>
    </button>
    <figure
      class="d-flex flex-column overflow-hidden flex-xl-row align-items-center zindex"
    >
      <img
        src="../../assets/MockupArcheDuGrog.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-primaire text-center p-3">
          Création du site Vitrine l'Arche Du Grog
        </h3>
        <p class="p-4 text-primaire">
          Site Web réalisé pour l'équipe l'Arche Du Grog autour de l'univers du
          jeu vidéo Sea of thieves. Le site est en cours de réalisation, il est
          crée avec Vue.js
        </p>
      </div>
    </figure>
    <div class="d-flex justify-content-between px-3 pb-3">
      <button class="hoverNav" @click="togglePrevious()">
        <i class="far fa-arrow-alt-circle-left iconeModale"></i>
      </button>
      <button
        class="hoverNav"
        @click="toggleNext()"
        v-on:keydown.exact.tab.prevent=""
      >
        <i class="far fa-arrow-alt-circle-right iconeModale"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaleArcheDuGrog",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleArcheDuGrog"),
        this.$store.commit("modaleReservia");
    },
    togglePrevious() {
      this.$store.commit("modaleArcheDuGrog"),
        this.$store.commit("modaleGroupomania");
    },
  },
  mounted() {
    this.$refs.exitBouton.focus();
  },
};
</script>

<style scoped></style>
