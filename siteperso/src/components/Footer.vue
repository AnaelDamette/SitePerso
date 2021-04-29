<template>
  <div class="bg-dark">
    <div class="shadow-box">
      <ReseauxSociaux class="container-fluid bg-darker" />
      <div class="container-fluid justify-content-between d-lg-flex bg-dark">
        <TextePresentation class="bg-dark p-lg-5 col-12 col-lg-4" />
        <Coordonnees class="bg-dark p-lg-5 col-12 col-lg-4" />
      </div>
      <Copyright class="container-fluid bg-darker" />
    </div>
  </div>
</template>

<script>
import ReseauxSociaux from "./ReseauxSociaux.vue";
import Coordonnees from "./Coordonnees";
import TextePresentation from "./TextePresentation.vue";
import Copyright from "./Copyright.vue";
export default {
  name: "Footer",
  components: {
    ReseauxSociaux,
    Coordonnees,
    TextePresentation,
    Copyright,
  },
};
</script>
