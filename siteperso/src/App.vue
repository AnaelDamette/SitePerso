<template>
  <div id="app" data-scroll-container class="body">
    <NavBar />
    <div><span class="bg-opacity-4 mt6"></span></div>
    <div
      id="ancreDvlp"
      data-scroll-section
      class="container-fluid w-100 bg-imageFond p-0 d-flex flex-column justify-content-center align-item-center"
    >
      <DvlpWeb data-scroll data-scroll-speed="2" class="mt-6 p-0 py-5" />
    </div>
    <div
      id="ancreCompetence"
      data-scroll-section
      class="container-fluid bg-opacity-4 p-0"
    >
      <Competence
        data-scroll
        data-scroll-speed="2"
        class="p-lg-5 bg-darker min-vh-100 py-5"
      />
    </div>
    <div
      data-scroll-section
      id="ancreProjet"
      class="container-fluid bg-opacity-4 p-0 my-5"
    >
      <Portfolio
        data-scroll
        data-scroll-speed="2"
        class="p-lg-5 min-vh-100 bg-transparent py-5"
      />
    </div>
    <Footer
      id="ancreReseauSocial"
      data-scroll-section
      class="bg-dark shadow-box"
    />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import DvlpWeb from "./components/DvlpWeb.vue";
import Footer from "./components/Footer.vue";
import Competence from "./components/Competence";
import Portfolio from "./components/Portfolio";
import LocomotiveScroll from "locomotive-scroll";

export default {
  name: "App",
  components: {
    NavBar,
    DvlpWeb,
    Footer,
    Competence,
    Portfolio,
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true,
    });
    console.log("scroll", this.scroll);
  },
};
</script>
