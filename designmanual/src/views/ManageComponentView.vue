<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="3. Drift" />
  <main>
    <div class="wrapper">
      <div>
        <div class="text-wrapper">
          <h2>3.1 Component based approach</h2>
          <p class="first-p">
            Løsningen er opbygget med genanvendelige komponenter for at sikre en mere 
            struktureret og overskuelig kodebase. I stedet for én stor og uorganiseret
            kodebase opdeles funktionalitet i mindre, selvstændige komponenter, som er
            nemmere at teste, vedligeholde og udvide.
          </p>
          <p class="last-p">
            For at sikre konsistens og høj læsbarhed navngives alle komponenter med
            <b>Pascal Casing</b>, hvilket gør det enkelt at identificere og genkende komponenter på tværs af projektet.
          </p>
        </div>
        <div class="text-wrapper-2">
          <h2>Fordele ved at bruge components og Vue.js</h2>
          <div class="text-listing">
            <p class="text-listing-title"><b>Genbrug af kode:</b></p>
            <p class="text-listing-info">Funktionalitet kan anvendes flere steder uden at blive omskrevet.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Nem vedligeholdelse:</b></p>
            <p class="text-listing-info">Fejl og opdateringer kan håndteres i et enkelt komponent uden at påvirke resten af systemet.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Effektivt samarbejde:</b></p>
            <p class="text-listing-info">Flere udviklere kan arbejde parallelt på forskellige komponenter uden konflikt.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Skalerbarhed:</b></p>
            <p class="text-listing-info">Nye funktioner kan tilføjes som selvstændige komponenter uden at påvirke eksisterende funktionalitet.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Høj performance:</b></p>
            <p class="text-listing-info">Vue er letvægtigt og leverer hurtige indlæsningstider.</p>
          </div>
          <div class="text-listing">
            <p class="text-listing-title"><b>Konsistent navngivning med PascalCase:</b></p>
            <p class="text-listing-info">Forbedrer overblik, læsbarhed og minimerer fejl ved import og brug af komponenter.</p>
          </div>
        </div>
      </div>
      <div class="image-wrapper">
        <img class="comp-img" src="..\assets\image\manage-picture.webp" alt="image of components structures" />
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

    .comp-img {
      width: 15rem;
      padding-right: 4rem;
    }
  }
}
</style>