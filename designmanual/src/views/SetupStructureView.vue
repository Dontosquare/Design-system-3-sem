<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="2. Opsætning" />
  <main>
    <div class="wrapper">
      <div class="text-wrapper">
        <h2>2.2 Projektstruktur</h2>
        <p>Filer og mapper er opdelt således:</p>
        <p><span class="color-change">/src</span> – Indeholder al kildekoden for projektet, opdelt i flere mapper.</p>
        <p><span class="color-change">/src/assets</span> – Indeholder billeder, ikoner samt main.scss-filen, som
          indeholder skrifttyper og farver.</p>
        <p><span class="color-change">/src/components</span> – Indeholder diverse komponenter og er det sted, man
          tilgår, hvis man vil justere et komponent eller tilføje et nyt.</p>
        <p><span class="color-change">/src/router</span> – Indeholder projektets routing, som definerer, hvordan
          forskellige sider eller komponenter forbindes via URL-stier.</p>
        <p><span class="color-change">/src/views</span> – Indeholder projektets sider, som præsenteres for brugeren,
          typisk bundet til specifikke routes.</p>
        <p><span class="color-change">/src/App.vue</span> – Hovedkomponenten, som fungerer som rod og ramme for alle
          øvrige komponenter og views. Det er også her, header og footer importeres direkte.</p>
      </div>
      <div class="image-wrapper">
        <img class="structure-img" src="..\assets\image\setup-picture-7.webp" alt="image of file structure" />
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  .text-wrapper {
    width: 50%;
  }

  .image-wrapper {
    .structure-img {
      width: 24rem;
      padding-right: 5rem;
    }
  }

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
</style>