<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="2. Opsætning" />
  <main>
    <div class="wrapper">
      <div class="text-wrapper">
        <h2>2.3 Firebase</h2>
        <p>Firebase blev valgt som hostingplatform, fordi den tilbyder mere end traditionel hosting og giver mulighed for:</p>
        <ul>
          <li>Database: Realtime-opdateringer og lagring af brugerdata.</li>
          <li>Lagring: Upload og håndtering af filer direkte i cloud.</li>
          <li>Andre integrerede tjenester: F.eks. autentifikation, cloud functions, analytics.</li>
        </ul>
        <p>Derudover blev Firebase valgt, fordi platformen er:</p>
        <ul>
          <li>Nem at komme i gang med – hurtig opsætning.</li>
          <li>Brugervenlig – intuitivt dashboard og klar dokumentation.</li>
          <li>Skalerbar – gratis plan til prototyper og mulighed for nem opgradering ved vækst.</li>
        </ul>
        <h3>Relevante Firebase-kommandoer</h3>
        <p>For at publicere projektet på Firebase Hosting anvendes følgende kommandoer:</p>
        <p class="prompt-text"><span class="color-change">npm run build</span></p>
        <p>Kompilerer og optimerer projektet til en produktionsklar build-mappe. Denne kommando køres, når der er lavet ændringer i koden, som skal gøres klar til deployment.</p>
        <p class="prompt-text"><span class="color-change">firebase deploy</span></p>
        <p>Uploader den færdige build til Firebase Hosting. Bruges hver gang sitet skal opdateres med nyt indhold, nye features eller generelle ændringer efter første deployment.</p>
      </div>
      <div class="image-wrapper">
        <img class="structure-img" src="..\assets\image\setup-picture-8.webp" alt="image of file structure" />
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
    width: 50%;

    h2 {
      margin-bottom: 2rem;
    }

    h3{
      margin-top: 1rem;
    }

    .prompt-text {
      margin-top: 1rem;
    }

    ul {
      margin: 2rem;
      margin-left: 2.5rem;

      li {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      li:first-of-type {
        margin-top: 0rem;
      }

    }
  }

  .image-wrapper {
    .structure-img {
      width: 30rem;
    }
  }

}

</style>