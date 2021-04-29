<template>
  <div
    class="overflow-auto d-flex flex-column"
    data-scroll
    data-scroll-speed="2"
  >
    <h1 class="text-titre text-center pt-5">Site Web Ohmyfood</h1>
    <i
      class="far fa-times-circle fermeModale iconeModale"
      @click="toggleAllModale()"
    ></i>
    <figure class="d-flex flex-column align-items-center zindex">
      <img
        src="../../assets/MockupOhmyfood.png"
        alt="Un Mock-up du site Web Reservia"
        class="imageModale"
      />
      <caption class="captionModale text-center">
        <p class="p-4 text-primaire">
          Ici je met un magnifique texte pour expliquer ce que j'ai fais dans ce
          projet ... Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolore assumenda adipisci quasi, repellendus, eaque neque libero est
          placeat eveniet inventore doloribus quidem, laborum consequuntur
          delectus repudiandae possimus quo a dolor. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo asperiores saepe ipsam eveniet
          sequi, necessitatibus eos est itaque ratione unde sint nisi eaque.
          Officia repudiandae facilis rem veritatis pariatur consequuntur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Minima officia
          praesentium soluta similique, qui excepturi quaerat aliquid aperiam
          laborum magnam recusandae, reiciendis placeat cupiditate voluptatem
          vero beatae vel quasi velit! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis hic temporibus molestiae alias impedit
          voluptatem quasi vitae tempore, repellendus reprehenderit quidem eius
          perspiciatis optio distinctio ratione rerum. Aliquam, dolorem maiores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          necessitatibus, temporibus molestiae maiores repellendus at veniam
          aspernatur fugit, nobis pariatur fuga nulla cum impedit? Accusantium,
          iure. Neque, deleniti! Explicabo, itaque.
        </p>
      </caption>
    </figure>
    <div class="d-flex justify-content-between px-3 pb-3">
      <i
        class="far fa-arrow-alt-circle-left iconeModale"
        @click="toggleNext()"
      ></i>
      <i
        class="far fa-arrow-alt-circle-right iconeModale"
        @click="togglePrevious()"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaleOhmyfood",
  methods: {
    toggleAllModale() {
      this.$store.commit("allModale");
    },
    toggleNext() {
      this.$store.commit("modaleOhmyfood"),
        this.$store.commit("modaleChouetteAgence");
    },
    togglePrevious() {
      this.$store.commit("modaleOhmyfood"),
        this.$store.commit("modaleReservia");
    },
  },
};
</script>

<style scoped></style>
