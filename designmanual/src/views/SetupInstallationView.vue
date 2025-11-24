<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
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
      </div>
      <img class="guide-image--1" src="..\assets\image\setup-picture.webp" alt="image of the download menu to Github Desktop" />
    </div>

  </main>
  <footer>
    <div class="footer__controls">
      <div>
        <p class="footer__p">Dato for sidste opdatering: d. 28 / 11 - 2025</p>
      </div>
      <div>
        <p class="footer__p"># ud af 13</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "../assets/main.scss";

.wrapper {}

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

}

.guide-image--1 {
  margin-left: 2rem;

}


</style>