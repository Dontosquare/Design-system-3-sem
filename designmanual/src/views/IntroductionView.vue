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
        <div class="text__padding">
          <p>Applikationen er bygget som en Single Page Application</p>
          <p>(SPA) med modulære komponenter, hvilket sikrer</p>
          <p>overskuelighed og let udvidelse. Manualen inkluderer også</p>
          <p>skærmbilleder, der dokumenterer brugen af løsningen.</p>
        </div>
      </div>
      <div class="text__left">
        <div class="text__padding">
          <h3>Tekniske krav</h3>
          <p>For at kunne anvende manualen og køre løsningen</p>
          <p>korrekt, skal følgende krav være opfyldt:</p>
        </div>
        <div class="text__padding">
          <h3>Browser:</h3>
          <ul>
            <li>
              Chrome, Firefox, Edge eller Safari (seneste version anbefales)
            </li>
          </ul>
        </div>
        <div class="text__padding">
          <h3>Operativsystem:</h3>
          <ul>
            <li>Windows 10 eller nyere</li>
            <li>macOS 10.15 eller nyere</li>
            <li>Linux (Ubuntu 20.04+ anbefales)</li>
          </ul>
        </div>
        <div class="text__padding">
          <h3>Dependencies / Software:</h3>
          <ul>
            <li>Node.js ≥ 18</li>
            <li>npm ≥ 9</li>
            <li>Git</li>
            <li>Firebase CLI (til hosting og databasefunktionalitet)</li>
          </ul>
        </div>
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

.text__wrapper {
}

.Footer__controls {
  display: flex;
  justify-content: space-between;
}
</style>
