<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="2. Opsætning" />
  <main>
    <div class="wrapper">
      <div class="intro-text">
        <h2>2.1 Installation</h2>
        <p>For at installere og køre projektet lokalt skal følgende værktøjer være installeret på din computer:</p>
        <h3>Krav</h3>
        <ul class="intro-text-ul">
          <li>Node.js<br>Bruges til at køre udviklingsmiljøet og installere projektets afhængigheder.</li>
          <li>Git<br>Bruges til at hente projektet fra GitHub og håndtere versionsstyring.</li>
          <li>Firebase CLI<br>Bruges til at administrere Firebase-projektet og til at deploy.</li>
        </ul>
      </div>
      <div class="guide-wrapper">
        <h2>Trin for trin guide</h2>
        <p>1. Installer GitHub Desktop</p>
        <ul>
          <li>Download GitHub Desktop - <a href="https://github.com/apps/desktop">Link til download</a></li>
          <li>Følg installationsguiden.</li>
        </ul>
        <img class="guide-image--1" src="..\assets\image\setup-picture.webp" alt="image of the download menu to Github Desktop" />
        <p>2. Klon projektet fra GitHub</p>
        <ul>
          <li>Åbn GitHub Desktop.</li>
          <li>Klik på “File → Clone Repository”.</li>
          <li>Vælg repository fra GitHub (eller indsæt URLen).</li>
        </ul>
        <img class="guide-image--2" src="..\assets\image\setup-picture-2.webp" alt="A guide on how to clone GitHub repository" />
        <p>3. Installer Node.js</p>
        <ul>
          <li>Download Node.js - <a href="https://nodejs.org.">Link til download</a></li>
          <li>Kør installationsfilen og følg instruktionerne.</li>
        </ul>
        <img class="guide-image--3" src="..\assets\image\setup-picture-3.webp" alt="Image of where to download Node.js" />
        <p>4. Installer Firebase CLI</p>
        <ul>
          <li>Åbn terminal eller kommandoprompt.</li>
          <li>Skriv denne prompt:</li>
        </ul>
        <img class="guide-image--4" src="..\assets\image\setup-picture-4.webp" alt="Image of a prompt command" />
        <p>5. Installer projektets afhængigheder</p>
        <ul>
          <li>Åbn terminalen i projektmappen (den mappe du klonede)</li>
          <li>Skriv denne prompt:</li>
        </ul>
        <img class="guide-image--5" src="..\assets\image\setup-picture-5.webp" alt="Image of a prompt command" />
        <p>Hvis du gerne vil se et live preview af projektet kan du nu skrive:</p>
        <img class="guide-image--6" src="..\assets\image\setup-picture-6.webp" alt="Image of a prompt command" />
        <p style="margin-bottom: 0rem;">Projektet vil nu starte en lokal server, og du kan åbne det i browseren.</p>
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.intro-text {
  padding: 2rem;
  border-bottom: 1px solid #2A2A2A;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .intro-text-ul {
    margin-left: 1.5rem;

    li {
      margin-bottom: 1rem;
    }

    li:last-of-type {
      margin-bottom: 0rem;
    }
  }
}

.guide-wrapper {
  padding: 2rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  ul {
    margin-left: 3rem;

    li {
      margin-bottom: 1rem;
    }

    li:last-of-type {
      margin-bottom: 0rem;
    }
  }
  
  .guide-image--1,
  .guide-image--2,
  .guide-image--3,
  .guide-image--4,
  .guide-image--5,
  .guide-image--6 {
  margin-top: 2rem;
  }

  a {
    color: $color-tactical-blue;
  }
}

@media (max-width: 800px) {
  .guide-image--1,
  .guide-image--2,
  .guide-image--3,
  .guide-image--4,
  .guide-image--5,
  .guide-image--6 {
    width: 100%;
  }
}

</style>