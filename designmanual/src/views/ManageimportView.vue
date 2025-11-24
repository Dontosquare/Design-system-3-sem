<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
</script>

<template>
  <HeaderComp></HeaderComp>
  <main>
    This is Import
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

.Footer__controls {
    display: flex;
    justify-content: space-between;
}
</style>