<template>
  <div class=" mt-6 rounded shadow-box">
    <h1 class="bg-transparent text-center text-primaire mb-5 ">Compétences</h1>
    <div class="d-lg-flex justify-content-center mb-4">
      <CompetenceDvlp class="col-12 px-md-5  col-lg-5 text-primaire my-5 mt-lg-0 text-center text-lg-right" />
      <SoftSkill class="col-12 col-lg-5 px-md-5 text-primaire mb-3 text-center text-lg-left" />
        
    </div>
  </div>
</template>

<script>
import CompetenceDvlp from "./CompetenceDvlp"
import SoftSkill from "./SoftSkill"
export default {
  name: "Competence",
  components: {
      SoftSkill,
      CompetenceDvlp
  }
};
</script>