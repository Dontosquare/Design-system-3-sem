<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
</script>

<template>
  <HeaderComp></HeaderComp>
  <main>
    <div class="json__overall">
      <h2>3.5 Dymamisk navigaiton via JSON</h2>
      <p> Burgermenuernes navigation bygger på data hentet fra en JSON fil, som indeholder bl.a
        navnene på de navigationsknapper, der vises i menuen.
      </p>
      <p>Når der skal foretages ændringer i menuen, kan man nøjes med at opdatere titlerne i de relevante arrays i JSON filerne</p>
      <p>Selve Header-komponenten håndtere automatisk både struktur og styling, så ændringerne slår igennem  uden yderligere justeringer
        i komponentkoden.
      </p>
      <p>Denne tilgang gør det både hurtigt og sikkert at vedligeholde navigationen, samtidig med at koden forbliver overskuelig og
        genanvendelig.
      </p>
    </div>


    <Footer>
      <div class="Footer__controls">
          <div>
              <p>Dato for sidste opdatering: d. 28 / 11 - 2025</p>
          </div>
          <div>
              <p># ud af 13</p>
          </div>
      </div>
    </Footer>
  </main>
</template>

<style lang="scss">
@import "../assets/main.scss";

.json__overall {
  background-color: $color-anubis-black;
  color: $color-newspaper-white;
  width: 100%;
}

.Footer__controls {
    display: flex;
    justify-content: space-between;
}
</style>