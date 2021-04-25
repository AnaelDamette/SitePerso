<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" align="end">
      <b-navbar-brand class="hoverNav" data-scroll-to href="#ancreDvlp">Accueil</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav class="d-flex bg-transparent justify-content-right">
          <a class="hoverNav text-center px-3" href="#ancreCompetence" data-scroll-to>Compétences</a>
          <a class="hoverNav text-center px-3" href="#ancreProjet" data-scroll-to>Mes réalisations</a>
          <a class="hoverNav text-center px-3" href="#ancreReseauSocial" data-scroll-to>Réseaux Sociaux</a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
  },
};
</script>

<style>

</style>
