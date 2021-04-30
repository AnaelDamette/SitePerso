<template>
  <div class="d-flex flex-column" data-scroll data-scroll-speed="2">
    <h1 class="text-titre text-center pt-5">Groupomania</h1>
    <i
      class="far fa-times-circle fermeModale iconeModale"
      @click="toggleAllModale()"
    ></i>
    <figure class="d-flex flex-column flex-xl-row align-items-center zindex">
      <img
        src="../../assets/MockupGroupomania.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-primaire text-center p-3">
          Création d'un réseau social d'entreprise pour Groumpomania
        </h3>
        <p class="p-4 text-primaire">
          Création d'un réseau social d'entreprise, ce projet comporte aussi
          bien la partie backEnd que la partie frontEnd. Il a été réalisé avec
          Node.js et Express pour la partie backEnd et avec Vue.js pour la
          partie frontEnd
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
  name: "ModaleGroupomania",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleGroupomania"),
        this.$store.commit("modaleArcheDuGrog");
    },
    togglePrevious() {
      this.$store.commit("modaleGroupomania"),
        this.$store.commit("modaleSopekocko");
    },
  },
};
</script>

<style scoped></style>
