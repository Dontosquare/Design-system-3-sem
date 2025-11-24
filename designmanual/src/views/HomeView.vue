<script setup>
import Logo from "@/assets/image/faraos-logo.webp";
</script>

<template>
  <main>
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
      <div class="footer__link">
        <p>Link til github</p>
        <p>Link til prototype</p>
      </div>
      <div class="footer__knap-dato">
        <button>Start</button>
        <p>Dato for sidst opdatering: d. 28 / 11 - 2025</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

main {
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
  width: 40%;
}

.text__padding {
  padding-top: 1rem;
}

.footer-wrapper {
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
}

.footer__link {
  display: flex;
  gap: 3rem;
}

.footer__link p {
  font-size: 2rem;
  text-decoration: underline;
  font-weight: 1000;
}

.footer__knap-dato {
  display: flex;
  flex-direction: column;
}

.footer__knap-dato button {
}
</style>
