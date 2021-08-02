<template>
  <div class="d-flex flex-column" data-scroll data-scroll-speed="2">
    <h1 class="text-titre text-center pt-5">Marina Hantz</h1>
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
        src="../../assets/MockupMarinaHantz.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-primaire text-center p-3">
          Création du site Vitrine de Marina Hantz
        </h3>
        <p class="p-4 text-primaire">
          Site Web réalisé pour Marina Hantz traductrice. Le site est en cours de réalisation, il est
          crée avec Vue.js <br />
          <a
            class="text-primaire hoverNav"
            target="_blank"
            href="https://marinaHantz.anaeldamette.fr"
            >Découvrez le site de Marina Hantz
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
  name: "ModaleMarinaHantz",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleMarinaHantz"),
        this.$store.commit("modaleReservia");
    },
    togglePrevious() {
      this.$store.commit("modaleMarinaHantz"),
        this.$store.commit("modaleArcheDuGrog");
    },
  },
  mounted() {
    this.$refs.exitBouton.focus();
  },
};
</script>

<style scoped></style>
