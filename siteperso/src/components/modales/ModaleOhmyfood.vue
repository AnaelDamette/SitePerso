<template>
  <div class="d-flex flex-column" data-scroll data-scroll-speed="2">
    <h1 class="text-titre text-center pt-5">Ohmyfood</h1>
    <i
      class="far fa-times-circle fermeModale iconeModale"
      @click="toggleAllModale()"
    ></i>
    <figure class="d-flex flex-column flex-xl-row align-items-center zindex">
      <img
        src="../../assets/MockupOhmyfood.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-primaire text-center p-3">
          Création animation css pour ohmyfood
        </h3>
        <p class="p-4 text-primaire">
          Réalisation à partir de maquettes de plusieurs pages avec animation.
          Le projet a été réalisé en html et Sass sans aucun framework.
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
  name: "ModaleOhmyfood",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleOhmyfood"),
        this.$store.commit("modaleChouetteAgence");
    },
    togglePrevious() {
      this.$store.commit("modaleOhmyfood"),
        this.$store.commit("modaleReservia");
    },
  },
};
</script>

<style scoped></style>
