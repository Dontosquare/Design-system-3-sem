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
        <p>Hvis logikken skal udvides, for eksempel for at tilføje flere dropdown-menuer eller underkatagorier, kan man 
          nemt gøre det ved at tilføje ekstra v-for-loops i templaten. Resten af komponenten håndterer automatisk visning og styling,
          så ændringerne kan foretages uden at røre andre dele af koden</p>
        <p>Denne opsætning gør navigationen fleksibel, genanvendelig og let at vedligeholde.</p>
        <div class="json__img">
        <img :src="jsonimage" alt="jsonimg" id="jsonimage"> 
        </div>
      </div>  
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss">
@import "../assets/main.scss";

@import "../assets/main.scss";

.main__overall {
  background-color: $color-anubis-black;
}

.json__overall {
  display: flex;
}

h2 {
  display: flex;
  margin: 1.5rem;
}

p {
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  width: 60%;
}

.json__text {          
  margin-left: 10rem;
}

.json__img {
  flex: 0 0 auto;   
  display: flex;
  padding: 2rem; 
  align-items: center;       
}

img#jsonimage {
  max-width: 100%;
  height: auto;
  margin-right: 10rem;
}
</style>