<script setup>
import Logo from "@/assets/image/faraos-logo.webp";
</script>

<template>
  <div class="picture-wrapper">
    <img :src="Logo" alt="Faraos logo" />
  </div>
  <div class="text__padding">
    <h2>[Pharaos Cigarer - Webshop]</h2>
    <p>Interaktiv Produktmanual</p>
  </div>
  <div class="text__padding">
    <p>Version: v1.0.0 (20.11.2025)</p>
    <p>Dokumenttype: Drift-, Opsætnings- og Vedligeholdelsesmanual</p>
  </div>
  <div class="text__padding">
    <h2>Udviklet af</h2>
    <p>Team 2:</p>
    <ul>
      <li>Joachim Pors Knudsen - Udvikler & scrummaster</li>
      <li>Mads Grøndahl - Udvikler & designer</li>
      <li>Sofie Abildgaard Pedersen - Teamleder, udvikler & lead designer</li>
    </ul>
  </div>
  <div class="text__padding">
    <h2>Kontakt:</h2>
    <ul>
      <li>Email: sape67086@edu.ucl.dk</li>
    </ul>
  </div>
  <div class="text__padding">
    <p>Institution: UCL - University College Lillebælt</p>
    <p>Uddannelse: Multimediedesigner - Frontend Development</p>
    <p>Semester: 3. semester - 2025</p>
  </div>
  <div class="footer-wrapper">
    <p class="forside-footer__link">Link til github</p>
    <p class="forside-footer__link">Link til prototype</p>
    <p></p>
  </div>
</template>

<style lang="scss">
@import "../assets/main.scss";

body {
  padding: 2rem;
  background: $color-pharaos-gold;
}

h2 {
  color: $color-anubis-black;
}

p {
  color: $color-anubis-black;
}

ul {
  padding-left: 2rem;
}

li {
  color: $color-anubis-black;
}

.picture-wrapper {
  display: flex;
  justify-content: end;
}

.picture-wrapper img {
  max-width: 100%;
  height: auto;
  width: 50%;
}

.text__padding {
  padding-top: 1rem;
}
</style>
