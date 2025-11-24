<script setup>
import ManagePicture11 from "@/assets/image/manage-picture-11.webp";
import HeaderComp from '@/components/HeaderComp.vue'
</script>

<template>
  <HeaderComp></HeaderComp>
  <main class="main__overall">
    <div class="json__overall">
      <div class="json__text">
        <h2>3.5 Dymamisk navigaiton via JSON</h2>
        <p> Burgermenuernes navigation bygger på data hentet fra en JSON fil, som indeholder bl.a
          navnene på de navigationsknapper, der vises i menuen.
        </p>
        <p>Når der skal foretages ændringer i menuen, kan man nøjes med at opdatere titlerne i de relevante arrays i JSON filerne.</p>
        <p>Selve Header-komponenten håndtere automatisk både struktur og styling, så ændringerne slår igennem  uden yderligere justeringer
          i komponentkoden.
        </p>
        <p>Denne tilgang gør det både hurtigt og sikkert at vedligeholde navigationen, samtidig med at koden forbliver overskuelig og
          genanvendelig.
        </p>
        <div class="json__img">
        <img :src="ManagePicture11" alt="jsonimg" id="jsonimage"> 
        </div>
      </div>
    </div>


    <Footer>
      <div class="Footer__controls">
          <div>
              <p class="footer__p">Dato for sidste opdatering: d. 28 / 11 - 2025</p>
          </div>
          <div>
              <p class="footer__p"># ud af 13</p>
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
}

h2 {
  display: flex;
  margin: 1.5rem;
}

p {
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  width: 30%;
}

.json__text {
  flex: 1;          
  margin-right: 2rem;
}

.json__img {
  flex: 0 0 auto;   
  display: flex; 
  align-items: center;       
}

img#jsonimage {
  max-width: 50%;
  height: auto;
}

.Footer__controls {
    display: flex;
    justify-content: space-between;
}

.footer__p {
  margin: 0%;
  width: 100%;
}
</style>