<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import Promo from "@/assets/image/maintenance-picture.webp";
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
        <img :src="Promo" alt="promoimg" id="promoimage"> 
        </div>
    
    <div class="json__overall">
      <div class="json__text">
        <h2>4.2 Best Practice</h2>
        <p>for at sikre konsistens, skalerbarhed og overskuelighed følger projektet disse retningslinjer:</p>

        <ul>
          <li><span class="color-change">BEM</span>: Klar og struktureret navngivning af CSS-klasser (Block, Element, Modifier).</li>
          <li><span class="color-change">Styling på classes</span>: Alle styles anvendes på klasser for at undgå konflikter.</li>
          <li><span class="color-change">SCSS</span>: Brug af varialer, nesting og mixins for organiseret og genanvendelig styling.</li>
          <li><span class="color-change">Component-based Approach</span>: Små, isolering komponeneter for bedre genbrug og vedligehold.</li>
          <li><span class="color-change">Single Responsibility</span>: Komponeneter</li>
          <li><span class="color-change">BEM</span>: Klar og struktureret navngivning af CSS-klasser (Block, Element, Modifier).</li>
          <li><span class="color-change">BEM</span>: Klar og struktureret navngivning af CSS-klasser (Block, Element, Modifier).</li>
          <li><span class="color-change">BEM</span>: Klar og struktureret navngivning af CSS-klasser (Block, Element, Modifier).</li>
        </ul>
      </div>  
    </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.main__overall {
  background-color: $color-anubis-black;
}

.json__overall {
  display: flex;
}

h3 {
  margin-left: 1.5rem;
}

h2 {
  display: flex;
  margin: 1.5rem;
}

p {
  margin: 1.5rem;
  width: 60%;
}

.json__text {          
  margin-left: 10rem;
}

.promo__img {
  flex: 0 0 auto;   
  display: flex; 
  align-items: center;       
}

img#promoimage {
  max-width: 100%;
  height: auto;
  margin-right: 10rem;
}
</style>