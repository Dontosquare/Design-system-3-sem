<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import jsonimage  from '@/assets/image/manage-picture-12.webp';
</script>

<template>
  <HeaderComp title="3. Drift"/>
  <main class="main__overall">
    <div class="json__overall">
      <div class="json__text">
        <h2>3.5.5 Template og script til dynamisk navigation</h2>
        <p> Burgermenuen template- og script-del står for at mappe og parse dataen fra JSON-filen
        </p>
        <p>
          Hvis logikken skal udvides, for eksempel for at tilføje flere dropdown-menuer eller underkategorier, kan man 
          nemt gøre det ved at tilføje ekstra v-for-loops i templaten. Resten af <RouterLink to="/manage-component" class="Link-color">komponenten</RouterLink> håndterer automatisk visning og <RouterLink to="/manage-styling" class="Link-color">styling</RouterLink>,
          så ændringerne kan foretages uden at røre andre dele af koden</p>
        <p>Denne opsætning gør navigationen fleksibel, genanvendelig og let at vedligeholde.</p>
        <div class="json-img-wrapper">
        <img :src="jsonimage" alt="jsonimg" class="json-img"> 
        </div>
      </div>  
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.json__overall {
  display: flex;
  padding: 2rem;
}

p {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 80%;
}

.json-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.json-img {
  width: 90%;
}

@media (max-width: 800px) {
  .json-img {
    width: 100%;
  }

  p {
    width: 100%;
  }
}
</style>