<template>
  <div class="d-flex flex-column" data-scroll data-scroll-speed="2">
    <h1 class="text-titre text-center pt-5">Ohmyfood</h1>
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
        src="../../assets/MockupOhmyfood.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-primaire p-3">Animation CSS pour Ohmyfood</h3>
        <p class="p-4 text-primaire">
          Réalisation de plusieurs pages avec des animations à partir de
          maquettes.<br />
          Le projet a été réalisé en langages html et Sass sans aucun
          framework.<br />
          <a
            class="text-primaire hoverNav"
            href="https://anaeldamette.github.io/AnaelDamette_3_06-11-2020/"
            target="_blank"
            >Visiter Ohmyfood
          </a>
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
  mounted() {
    this.$refs.exitBouton.focus();
  },
};
</script>

<style scoped></style>
