<script setup>
import ManagePicture11 from "@/assets/image/manage-picture-11.webp";
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="3. Drift"/>
  <main class="main__overall">
    <div class="json__overall">
      <div class="json__text">
        <h2>3.5 Dymamisk navigaiton via JSON</h2>
        <p>
          Burgermenuernes navigation bygger på data hentet fra en JSON fil, som indeholder bl.a
          navnene på de navigationsknapper, der vises i menuen.
        </p>
        <p>
          Når der skal foretages ændringer i menuen, kan man nøjes med at opdatere titlerne i de relevante arrays i
          JSON filerne.</p>
        <p>
          Selve Header-komponenten håndtere automatisk både struktur og styling, så ændringerne slår igennem uden
          yderligere justeringer
          i komponentkoden.
        </p>
        <p>
          Denne tilgang gør det både hurtigt og sikkert at vedligeholde navigationen, samtidig med at koden forbliver
          overskuelig og
          genanvendelig.
        </p>
      </div>
      <div class="json-img-wrapper">
        <img :src="ManagePicture11" alt="jsonimg" class="json-image">
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.json__overall {
  display: flex;
  padding: 2rem;
}

p {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 80%;
}

.json-image {
  width: auto;
  height: 42rem;
}

@media (max-width: 800px) {
  .json__overall {
    flex-direction: column;
  }
}
</style>