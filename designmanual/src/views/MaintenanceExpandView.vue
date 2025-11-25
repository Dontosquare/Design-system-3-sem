<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="4. Vedligholdelse & udvidelser" />
  <main class="main__overall">
    <div class="json__overall">
      <div class="json__text">
        <h2>4.1 Vedligehold & Udvidelser</h2>
        <h3>Opdatering af indhold</h3>
        <p>Ændringer i tekster, billeder og logoer foretages direkte i de relevante komponenter. Eksempelvis opdateres logoet
           i Header.vue, hvor et nyt billede importeres, mens almindelige tekstændringer typisk sker i komponenternes <<span class="color-change">p</span>>-tag eller andre
           tekstfelter.
        </p>
        <p>Selve Header-komponenten håndtere automatisk både struktur og styling, så ændringerne slår igennem  uden yderligere justeringer
          i komponentkoden.
        </p>
        <p>Denne tilgang gør det både hurtigt og sikkert at vedligeholde navigationen, samtidig med at koden forbliver overskuelig og
          genanvendelig.
        </p>
      </div>  
        <div class="json__img">
        <img :src="ManagePicture11" alt="jsonimg" id="jsonimage"> 
        </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss">
@import "../assets/main.scss";

.main__overall {
  background-color: $color-anubis-black;
}

.json__overall {
  display: flex;
}

h2 {
  display: flex;
  margin: 1.5rem;
}

p {
  margin: 1.5rem;
  width: 40%;
}

.json__text {          
  margin-left: 10rem;
}

.json__img {
  flex: 0 0 auto;   
  display: flex; 
  align-items: center;       
}

img#jsonimage {
  max-width: 100%;
  height: auto;
  margin-right: 10rem;
}
</style>