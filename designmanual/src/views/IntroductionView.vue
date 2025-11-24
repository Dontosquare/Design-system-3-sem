<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
</script>

<template>
  <HeaderComp title="1. Introduktion" />
  <main>
    <div class="text__wrapper">
      <div class="text__left">
        <div class="text__padding">
          <p>Denne interaktive produktmanual er udviklet som en del af</p>
          <p>3. semesters eksamen på UCL Multimediedesigner-</p>
          <p>uddannelsen i samarbejde med Faraos Cigarer.</p>
        </div>
        <div class="text__padding">
          <p>Manualen er designet til at hjælpe både udviklere og brugere</p>
          <p>med opsætning, drift og vedligeholdelse af vores</p>
          <p>multimedieløsning.</p>
        </div>
        <h3>Manualen indeholder detaljerede guides til:</h3>
        <ul>
          <li>Opsætning af projektet på lokale maskiner</li>
          <li>Vedligeholdelse og drift af løsningen</li>
          <li>Troubleshooting / FAQ for hurtig fejlfinding</li>
        </ul>
      </div>
    </div>
  </main>
  <footer>
    <div class="footer__controls">
      <div>
        <p class="footer__p">Dato for sidste opdatering: d. 28 / 11 - 2025</p>
      </div>
      <div>
        <p class="footer__p">1 ud af 13</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "../assets/main.scss";



main {
  padding: 2rem;
}
</style>
