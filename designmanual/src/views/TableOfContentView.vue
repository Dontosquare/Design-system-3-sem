<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
</script>

<template>
  <HeaderComp title="Indholdsfortegnelse" />
  <main>
    <h2>1. Introduktion</h2>
    <div class="text__padding">
      <h2>2. Opsætning</h2>
      <h3>2.1 Installation</h3>
      <h3>2.1.5 Trin for trin guide</h3>
      <h3>2.2 Projektstruktur</h3>
      <h3>2.3 Firebase</h3>
      <h3>2.4 Framework</h3>
    </div>
    <div class="text__padding">
      <h2>3. Drift</h2>
      <h3>3.1 Component based approach</h3>
      <h3>3.2 Import af komponenter</h3>
      <h3>3.3 Styling / SCSS</h3>
      <h3>3.4 SPA-routing</h3>
      <h3>3.5 Dynamisk navigation via JSON</h3>
      <h3>3.5.5 Template og script til dynamisk navigation</h3>
    </div>
    <div class="text__padding">
      <h2>4. Vedligholdelse</h2>
      <h3>4.1 Vedligehold & Udvidelser</h3>
      <h3>4.2 Best Practice</h3>
    </div>
    <div class="text__padding">
      <h2>5. Troubleshooting / FAQ</h2>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
main {
  padding: 2rem;
}

.text__padding {
  padding-top: 2rem;
}

h3 {
  font-weight: 100;
  padding-left: 2rem;
  cursor: pointer;
}
</style>
