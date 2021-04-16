<template >
  <div id="app" class="body">
    <NavBar />
    <div ><span class="bg-opacity-4 mt6"></span></div>
    <div class="container-fluid bg-opacity-4 p-0 ">
      <DvlpWeb class="mt-6 bg-darker p-lg-5 " />
    </div>
    <div class="container-fluid bg-opacity-4 p-0">
      <Competence class=" p-lg-5 bg-darker " />
    </div>
    <Footer class="bg-dark shadow-box" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import DvlpWeb from "./components/DvlpWeb.vue";
import Footer from "./components/Footer.vue";
import Competence from "./components/Competence";

export default {
  name: "App",
  components: {
    NavBar,
    DvlpWeb,
    Footer,
    Competence,
  },
};
</script>
