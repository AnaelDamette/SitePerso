<template>
  <div id="app" class="body">
    <NavBar />
    <div><span class="bg-opacity-4 mt6"></span></div>
    <div class="container-fluid bg-opacity-4 p-0">
      <DvlpWeb class="mt-6 bg-darker p-lg-5 py-5" />
    </div>
    <div class="container-fluid bg-opacity-4 p-0">
      <Competence class="p-lg-5 bg-darker py-5" />
    </div>
    <div class="container bg-opacity-4 p-0 my-5">
      <Portfolio class="p-lg-5 bg-darker  py-5" />
    </div>
    <Footer class="bg-dark shadow-box" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import DvlpWeb from "./components/DvlpWeb.vue";
import Footer from "./components/Footer.vue";
import Competence from "./components/Competence";
import Portfolio from "./components/Portfolio";

export default {
  name: "App",
  components: {
    NavBar,
    DvlpWeb,
    Footer,
    Competence,
    Portfolio,
  },
};
</script>
