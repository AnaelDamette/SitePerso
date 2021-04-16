<template>
  <div class=" mt-6 rounded shadow-box">
    <h1 class="bg-transparent text-center text-primaire mb-4">Compétences</h1>
    <div class="d-lg-flex justify-content-center">
      <SoftSkill class="col-12 col-lg-4 text-primaire mb-3 text-center text-lg-left" />
      <CompetenceDvlp class="col-12 col-lg-4 text-primaire mt-5 mt-lg-0 text-center text-lg-right" />
        
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