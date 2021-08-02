<template>
  <div class="d-flex flex-column" data-scroll data-scroll-speed="2">
    <h1 class="text-titre text-center pt-5">Réservia</h1>
    <button
      class="fermeModale hoverNav"
      @click="toggleAllModale()"
      v-on:keydown.exact.tab.shift.prevent=""
      ref="exitBouton"
    >
      <i class="far fa-times-circle fermeModale iconeModale"></i>
    </button>

    <figure
      class="d-flex flex-column flex-xl-row overflow-hidden align-items-center zindex"
    >
      <img
        src="../../assets/MockupReservia.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-primaire text-center p-3">
          Création page web avec une maquette pour Réservia
        </h3>

        <p class="p-4 text-primaire">
          Création d'une page web responsive à l'aide d'une maquette.
          <br />Cette page a été créée sans framework. <br />
          <a
            class="text-primaire hoverNav"
            target="_blank"
            href="https://anaeldamette.github.io/AnaelDamette_2_15-10-2020/"
            >Visiter Reservia
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
  name: "ModaleReservia",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleReservia"),
        this.$store.commit("modaleOhmyfood");
    },
    togglePrevious() {
      this.$store.commit("modaleReservia"),
        this.$store.commit("modaleMarinaHantz");
    },
  },
  mounted() {
    this.$refs.exitBouton.focus();
  },
};
</script>

<style scoped></style>
