<template>
  <div class="d-flex flex-column" data-scroll data-scroll-speed="2">
    <h1 class="text-titre text-center pt-5">La Chouette Agence</h1>
    <i
      class="far fa-times-circle fermeModale iconeModale"
      @click="toggleAllModale()"
    ></i>
    <figure class="d-flex flex-column flex-xl-row align-items-center zindex">
      <img
        src="../../assets/MockupChouetteAgence.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-primaire text-center px-2 py-3">
          Optimisation du site la Chouette Agence
        </h3>
        <p class="text-primaire">
          Réalisation  d'audit pour la Chouette Agence ainsi que
          proposition d'amélioration en terme de SEO
          ("Seach Engine Optimisation") ou en terme d'accéssibilité.
        </p>
      </div>
    </figure>
    <div class="d-flex justify-content-between px-3 pb-3">
      <i
        class="far fa-arrow-alt-circle-left iconeModale"
        @click="toggleNext()"
      ></i>
      <i
        class="far fa-arrow-alt-circle-right iconeModale"
        @click="togglePrevious()"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaleChouetteAgence",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleChouetteAgence"),
        this.$store.commit("modaleOrinoco");
    },
    togglePrevious() {
      this.$store.commit("modaleChouetteAgence"),
        this.$store.commit("modaleOhmyfood");
    },
  },
};
</script>

<style scoped>
@media (max-width: 379px) {
  .zindex {
    min-height: 73% !important;
  }
}
</style>
