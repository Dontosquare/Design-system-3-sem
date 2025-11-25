<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <HeaderComp title="Indholdsfortegnelse" />
    <div class="wrapper">
      <RouterLink to="/introduction">
        <h2>1. Introduktion</h2>
      </RouterLink>
      <div class="text__padding">
        <RouterLink to="/setup-installation">
          <h2>2. Opsætning</h2>
        </RouterLink>
        <RouterLink to="/setup-installation">
          <h3>2.1 Installation</h3>
        </RouterLink>
        <RouterLink to="/setup-installation">
          <h3>2.1.5 Trin for trin guide</h3>
        </RouterLink>
        <RouterLink to="/setup-structure">
          <h3>2.2 Projektstruktur</h3>
        </RouterLink>
        <RouterLink to="/setup-firebase">
          <h3>2.3 Firebase</h3>
        </RouterLink>
        <RouterLink to="/setup-framework">
          <h3>2.4 Framework</h3>
        </RouterLink>
      </div>
      <div class="text__padding">
        <RouterLink to="/manage-component">
          <h2>3. Drift</h2>
        </RouterLink>
        <RouterLink to="/manage-component">
          <h3>3.1 Component based approach</h3>
        </RouterLink>
        <RouterLink to="/manage-import">
          <h3>3.2 Import af komponenter</h3>
        </RouterLink>
        <RouterLink to="/manage-styling">
          <h3>3.3 Styling / SCSS</h3>
        </RouterLink>
        <RouterLink to="/manage-routing">
          <h3>3.4 SPA-routing</h3>
        </RouterLink>
        <RouterLink to="/manage-JSON">
          <h3>3.5 Dynamisk navigation via JSON</h3>
        </RouterLink>
        <RouterLink to="/manage-JSON-template">
          <h3>3.5.5 Template og script til dynamisk navigation</h3>
        </RouterLink>
      </div>
      <div class="text__padding">
        <RouterLink to="/maintenance-expand">
          <h2>4. Vedligholdelse</h2>
        </RouterLink>
        <RouterLink to="/maintenance-expand">
          <h3>4.1 Vedligehold & Udvidelser</h3>
        </RouterLink>
        <RouterLink to="/maintenance-expand">
          <h3>4.2 Best Practice</h3>
        </RouterLink>
      </div>
      <div class="text__padding">
        <RouterLink to="/troubleshooting">
          <h2>5. Troubleshooting / FAQ</h2>
        </RouterLink>
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.wrapper {
  padding: 2rem;
  background-color: $color-pharaos-gold;
  min-height: 42rem;
}

a {
  text-decoration: none;
}

h2:hover,
h3:hover {
  color: $color-tactical-blue;
}

.text__padding {
  padding-top: 2rem;
}

h2 {
  color: $color-anubis-black;
}

h3 {
  font-weight: 500;
  padding-left: 2rem;
  cursor: pointer;
  color: $color-anubis-black;
}
</style>
