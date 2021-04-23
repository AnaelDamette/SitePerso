<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" align="end">
      <b-navbar-brand class="hoverNav" data-scroll-to href="#ancreDvlp">Accueil</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav class="d-flex justify-content-right">
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown dropleft text="Index" variant="dark" class="hoverNav bg-dark">
            <b-dropdown-item class="hoverNav" data-scroll-to href="#ancreCompetence">Compétences</b-dropdown-item>
            <b-dropdown-item class="hoverNav" data-scroll-to href="#ancreProjet">Projet Accompli</b-dropdown-item>
            <b-dropdown-item class="hoverNav" data-scroll-to href="#ancreReseauSocial">Réseaux Sociaux</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
};
</script>

<style>

</style>
