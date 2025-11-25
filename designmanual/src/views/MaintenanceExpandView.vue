<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import Promo from "@/assets/image/maintenance-picture.webp";
import maintenance from "@/assets/image/maintenance-picture-2.webp";
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
           tekstfelter.</p>

        <h3>Globale stilændringer</h3>
        <p>Farver og generelle stylingprincipper administreres centralt i main.css. Hvis man eksempelvis ønsker at udskifte en global
          farve, tilpasses den blot her, hvorefter ændringen automatisk slår igennem i alle komponenter.</p>

        <h3>Struktur for nye elementer</h3>
        <p>For at udvide projektet følges denne faste struktur</p>
        <ul>
          <li>Nye sider (views) oprettes i: <span class="color-change">/src/views</span></li>
          <li>Nye komponenter oprettes i: <span class="color-change">/src/components</span></li>
          <li>Nye billeder uploades i: <span class="color-change">/src/assets/images</span></li>
          <li>Nye ikoner uploades i: <span class="color-change">/src/assets/icons</span></li>
        </ul>
        <p>Denne opdeling sikrer et ensartet, overskueligt og let vedligeholdeligt projekt</p>
      </div>  
        <div class="promo__img">
        <img :src="Promo" alt="promoimg" class="promoimage"> 
        <img :src="maintenance" alt="colors" class="promoimage">
        </div>
    </div>
    <div class="json__overall">
      <div class="bp__text">
        <h2>4.2 Best Practice</h2>
        <p>for at sikre konsistens, skalerbarhed og overskuelighed følger projektet disse retningslinjer:</p>

        <ul>
          <li><span class="color-change">BEM</span>: Klar og struktureret navngivning af CSS-klasser (Block, Element, Modifier) - block__element--modifier</li>
          <li><span class="color-change">Styling på classes</span>: Alle styles anvendes på klasser for at undgå konflikter.</li>
          <li><span class="color-change">SCSS</span>: Brug af varialer, nesting og mixins for organiseret og genanvendelig styling.</li>
          <li><span class="color-change">Component-based Approach</span>: Små, isolering komponeneter for bedre genbrug og vedligehold.</li>
          <li><span class="color-change">Single Responsibility</span>: Komponenter har ét klart ansvar, hvilket gør koden overskuelig.</li>
          <li><span class="color-change">Phone-first</span>: Desing starter på mobile enheder; media-queries anvendes til større skærme.</li>
          <li><span class="color-change">Lazy loading</span>: Komponenter og views indlæses kun når nødvendigt, hvilket forbedrer performance.</li>
          <li><span class="color-change">Tilgængelighed (Accessibility / a11y)</span>: Overvejer kontrast, tekststørrelse og tastaturnavigation.</li>
        </ul>
      </div> 
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.main__overall {
  display: flex;
  flex-direction: column;
}

.json__overall{
  display: flex;
  flex-direction: row;
}

.json__text {          
  width: 60%;
  padding: 2rem;
  padding-bottom: 0rem;
}

h3:first-of-type {
  margin-top: 2rem;
}

p {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

ul {
  padding-left: 3rem;
}

li {
  margin-top: 1rem;
}

li:first-of-type {
  margin-top: 0;
}

.promo__img {  
  display: flex;
  width: 40%;
  padding: 2rem;
  flex-direction: column;   
}

.promoimage {
  max-width: 100%;
}

.promoimage:last-of-type {
  margin-top: 2rem;
}

.bp__text {
  padding: 2rem;
  border-top: 2px solid #2a2a2a;
  width: 100%;
}

@media (max-width: 800px) {
  .json__overall {
    flex-direction: column;
  }

  .json__text {
    width: 90%;
  }

  ul {
    padding: 1rem;
  }

  li {
    width: 70%;
  }

  .promo__img {
    width: 100%;
    padding: 2rem;
  }

  .promoimage {
    width: 90%;
  }
}
</style>

