<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="3. Drift"/>
  <main>
    This is Template
  </main>
  <FooterComp />
</template>

<style lang="scss">
@import "../assets/main.scss";

.Footer__controls {
    display: flex;
    justify-content: space-between;
}
</style>