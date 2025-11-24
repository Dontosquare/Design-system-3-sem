<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="2. Opsætning" />
  <main>
    <div class="wrapper">
      <div>
        <div class="text-wrapper">
          <h2>2.4 Framework</h2>
          <p class="first-p">
            Løsningen er udviklet i Vue.js, da frameworket tilbyder en moderne og fleksibel
            tilgang til opbygning af webapplikationer.Vue er let at lære og gør det muligt
            for mindre teams at arbejde hurtigt og effektivt, samtidig med at kodekvaliteten
            bevares.
          </p>
          <p class="last-p">
            Frameworket giver desuden en række funktionelle fordele, der understøtter en
            struktureret og skalerbar udviklingsproces.
          </p>
        </div>
        <div class="text-wrapper-2">
          <h2>Fordele ved at bruge Vue.js</h2>
          <div class="text-listing">
            <p class="text-listing-title"><b>Reaktivitet:</b></p>
            <p class="text-listing-info">Ændringer i data opdateres automatisk i brugergrænsefladen.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Overskuelig struktur:</b></p>
            <p class="text-listing-info">En klar komponent- og filstruktur gør projektet lettere at organisere og vedligeholde.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Lav indlæringskurve:</b></p>
            <p class="text-listing-info">Frameworket er intuitivt og nemt at arbejde med for både nye og erfarne udviklere.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Modulært komponentdesign:</b></p>
            <p class="text-listing-info">Genanvendelige komponenter sikrer hurtigere udvikling og mere konsistent kode.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Høj performance:</b></p>
            <p class="text-listing-info">Vue er letvægtigt og leverer hurtige indlæsningstider.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Stærkt økosystem:</b></p>
            <p class="text-listing-info">Et omfattende udvalg af officielle værktøjer understøtter skalerbare og komplekse projekter.</p>
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="vue-img" src="..\assets\image\setup-picture-9.webp" alt="image of vue logo" />
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.wrapper {
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  .text-wrapper {
    width: 80%;

    p {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .last-p {
      margin-bottom: 2rem;
    }
  }

  .text-wrapper-2 {
    width: 80%;

    h2 {
      margin-top: 5.5rem;
      margin-bottom: 2rem;
    }

    .text-listing {
      margin-top: 1rem;
      margin-bottom: 1rem;

      p {
        font-size: 1.2rem;
      }
    }

    .text-listing:last-of-type {
      margin-bottom: 0rem;
    }
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>