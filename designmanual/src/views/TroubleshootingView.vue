<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="5. Troubleshooting & FAQ" />
  <main>
    <div class="wrapper">
      <h2>Før du koder:</h2>
      <p>Før du begynder at ændre eller tilføje kode i projektet, er der nogle vigtige ting, du bør vide for at undgå
        fejl og gøre arbejdet mere effektivt:</p>
      <h3>1. Forstå projektstrukturen</h3>
      <ul>
        <li><span class="color-change">/src/views</span>: Indeholder de forskellige sider (views) i applikationen. Nye undersider oprettes her.</li>
        <li><span class="color-change">/src/components</span>: Indeholder genanvendelige komponenter. Brug komponenter fremfor at kopiere kode.</li>
        <li><span class="color-change">/src/assets/images og /src/assets/icons</span>: Alle billeder og ikoner til siden skal ligge her for at blive korrekt importeret.</li>
        <li><span class="color-change">/src/styles/main.scss</span>: Centrale stylingregler, farver og variabler. Ændringer her slår igennem globalt.</li>
      </ul>
      <h3>2. Kend de vigtige filer</h3>
      <ul>
        <li><span class="color-change"></span></li>
        <li><span class="color-change"></span></li>
      </ul>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.wrapper {
  padding: 2rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    padding-left: 2.6rem;

    li {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    li:last-of-type {
      margin-bottom: 2rem;
    }
  }
}
</style>