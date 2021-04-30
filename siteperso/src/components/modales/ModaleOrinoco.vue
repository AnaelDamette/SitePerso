<template>
  <div class="d-flex flex-column" data-scroll data-scroll-speed="2">
    <h1 class="text-titre text-center pt-5">Orinoco</h1>
    <i
      class="far fa-times-circle fermeModale iconeModale"
      @click="toggleAllModale()"
    ></i>
    <figure class="d-flex flex-column flex-xl-row align-items-center zindex">
      <img
        src="../../assets/MockupOrinoco.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <div class="col-xl-6 overflow-auto captionModale">
        <h3 class="text-center text-primaire p-3">
          Construire un site E-commerce Pour Orinoco
        </h3>
        <p class="p-4 text-primaire">
          Il s'agit du projet n°5 du parcour de développeur web d'OpenClassroom.
          J'ai réalisé le frontEnd de l'application Web. Le but était de créer
          une panier grâce à des objets contenu dans la base de donée mongoDB et
          d'envoyer une commande factice ainsi que de recevoir et d'afficher le
          numéro de commande. Le site à été réaliser en html, sass, bootstrap et
          javascript.
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
  name: "ModaleOrinoco",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleOrinoco"),
        this.$store.commit("modaleSopekocko");
    },
    togglePrevious() {
      this.$store.commit("modaleOrinoco"),
        this.$store.commit("modaleChouetteAgence");
    },
  },
};
</script>

<style scoped></style>
