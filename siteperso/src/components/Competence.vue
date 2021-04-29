<template>
  <div
    class="mt-6 rounded bg-transparent shadow-box d-flex flex-column justify-content-center"
  >
    <h1 class="bg-transparent text-center text-titre pt-5 mb-5">Compétences</h1>
    <div class="d-md-flex bg-transparent justify-content-center mb-4">
      <CompetenceDvlp
        class="col-12 py-5 mx-md-3 px-md-5 my-3 rounded col-md-5 text-primaire text-center text-lg-right"
      />
      <SoftSkill
        class="col-12 py-5 mx-md-3 px-md-5 my-3 rounded col-md-5 text-primaire text-center text-lg-right"
      />
    </div>
  </div>
</template>

<script>
import CompetenceDvlp from "./CompetenceDvlp";
import SoftSkill from "./SoftSkill";
export default {
  name: "Competence",
  components: {
    SoftSkill,
    CompetenceDvlp,
  },
};
</script>
