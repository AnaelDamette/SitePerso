<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" align="end">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
        <b-navbar-nav class="d-flex justify-content-right">
          <b-nav-item href="#" class="bg-black">Link</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown dropleft text="Index" variant="dark" class=" bg-dark">
            <b-dropdown-item href="#">Developpement FullStack</b-dropdown-item>
            <b-dropdown-item href="#">Compétences</b-dropdown-item>
            <b-dropdown-item href="#">Projet Accompli</b-dropdown-item>
            <b-dropdown-item href="#">Réseaux Sociaux</b-dropdown-item>
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
