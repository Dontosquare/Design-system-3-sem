<script setup>
import ManagePicture11 from "@/assets/image/manage-picture-11.webp";
</script>

<template>
  <main class="main__overall">
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
      <div class="json__img">
      <img :src="ManagePicture11" alt="jsonimg"> 
      </div>
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

<style lang="scss" scoped>
@import "../assets/main.scss";

.main__overall {
  background-color: $color-anubis-black;
}

.json__overall {
  background-color: $color-anubis-black;
  color: $color-newspaper-white;
  width: 100%;
  width: 10%;
}

.json__img {
  width: 10%;
  height: 10%;

}

.Footer__controls {
    display: flex;
    justify-content: space-between;
}
</style>