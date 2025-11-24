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
    </div>

  </main>
  <footer>
    <div class="footer__controls">
      <div>
        <p>Dato for sidste opdatering: d. 28 / 11 - 2025</p>
      </div>
      <div>
        <p># ud af 13</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "../assets/main.scss";

.wrapper {
  padding: 2rem;
}

.intro-text {

  .intro-text-ul{
    margin-left: 1.5rem;
  }
}

.footer__controls {
  display: flex;
  justify-content: space-between;
}
</style>