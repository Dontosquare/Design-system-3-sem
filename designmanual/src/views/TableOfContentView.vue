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
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
main {
  padding: 2rem;
}
</style>
