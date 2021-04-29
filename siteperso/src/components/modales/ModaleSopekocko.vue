<template>
  <div
    class="overflow-auto d-flex flex-column"
    data-scroll
    data-scroll-speed="2"
  >
    <h1 class="text-titre text-center pt-5">Site Web Sopekocko</h1>
    <i
      class="far fa-times-circle fermeModale iconeModale"
      @click="toggleAllModale()"
    ></i>
    <figure class="d-flex flex-column align-items-center zindex">
      <img
        src="../../assets/MockupSopekocko.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <h3 class="text-center text-primaire">
        Construire Une API sécurisée pour Sopekocko
      </h3>
      <caption class="captionModale text-center">
        <p class="p-4 text-primaire">
          Il s'agit du projet n°6 du parcour developpeur web d'openClassroom.
          J'ai dans ce projet réalisé le coté Backend à l'aide de Node.js,
          Express, MongoDB et Mongoose. L'API respecte le RGPD ainsi que les
          standards OWASP.
        </p>
      </caption>
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
  name: "ModaleSopekocko",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleSopekocko"),
        this.$store.commit("modaleGroupomania");
    },
    togglePrevious() {
      this.$store.commit("modaleSopekocko"),
        this.$store.commit("modaleOrinoco");
    },
  },
};
</script>

<style scoped></style>
