<template>
  <div class="d-flex flex-column">
    <h1 class="text-titre text-center pt-5">Sopekocko</h1>
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
        src="../../assets/MockupSopekocko.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale col-xl-6"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-center text-primaire p-3">
          API sécurisée pour Sopekocko
        </h3>
        <p class="p-4 text-primaire">
          Il s'agit du projet n°6 du parcours de developpeur web
          d'OpenClassroom. J'ai réalisé la partie Backend à l'aide de Node.js,
          Express, MongoDB et Mongoose. L'API respecte le RGPD ainsi que les
          standards OWASP.
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
  mounted() {
    this.$refs.exitBouton.focus();
  },
};
</script>

<style scoped></style>
