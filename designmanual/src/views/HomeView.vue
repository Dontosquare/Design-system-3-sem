<script setup>
import { RouterLink } from "vue-router";
import Logo from "@/assets/image/faraos-logo.webp";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <main>
    <div class="wrapper">
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
          <li>Mads Grønbæk - Udvikler & designer</li>
          <li>
            Sofie Abildgaard Pedersen - Teamleder, udvikler & lead designer
          </li>
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
      <div class="footer-knap__wrapper">
        <RouterLink to="/tableofcontent">
          <button>
            Start <FontAwesomeIcon :icon="faAngleRight"></FontAwesomeIcon>
          </button>
        </RouterLink>
      </div>
      <div class="footer-wrapper">
        <div class="footer__link">
          <p>Link til github</p>
          <p>Link til prototype</p>
        </div>
        <p>Dato for sidst opdatering: d. 28 / 11 - 2025</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

main {
  background: $color-pharaos-gold;
  height: 100vh;
  overflow: auto;
}

.wrapper {
  padding: 2rem;
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
  width: 35%;
}

.text__padding {
  padding-top: 1rem;
}

.footer-knap__wrapper {
  display: flex;
  justify-content: end;
}

button {
  display: flex;
  padding: 0.4rem 4rem;
  margin-top: 1rem;
  background-color: $color-anubis-black;
  color: $color-pharaos-gold;
  font-family: $font-play;
  font-size: 1.5rem;
  font-weight: 1000;
  cursor: pointer;
  white-space: nowrap;
  width: auto;
  border: none;
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
  cursor: pointer;
}
</style>
