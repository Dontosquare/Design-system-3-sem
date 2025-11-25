<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="3. Drift" />
  <main>
    <div class="wrapper">
      <div class="text-wrapper">
        <h2>3.2 Import af komponenter</h2>
        <p>Da projektet er opbygget <RouterLink to="/manage-component" class="Link-color">komponent-baseret</RouterLink>, skal nye komponenter importeres afhængigt af, hvor de skal
          bruges.</p>
      </div>
      <div class="info-wrapper">
        <div class="info-wrappers--box">
          <h3>Globale komponenter</h3>
          <p>
            Komponenter som f.eks. header og footer, der skal vises på alle sider, importeres direkte i App.vue.
            På den måde bliver de tilgængelige på tværs af hele projektet.
          </p>
        </div>
        <img class="info-image" src="..\assets\image\manage-picture-2.webp" alt="image of how global components gets imported" />
      </div>
      <div class="info-wrapper">
        <div class="info-wrappers--box">
          <h3>Side-specifikke komponenter</h3>
          <p>
            Komponenter, som kun bruges på én bestemt underside, importeres direkte i den
            relevante view-fil. Et eksempel er slideshowet på forsiden, der importeres
            direkte i HomeView.vue, da det kun er relevant dér.
          </p>
        </div>
        <img class="info-image" src="..\assets\image\manage-picture-3.webp" alt="image of how local components gets imported" />
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.wrapper {
  padding: 2rem;
  display: flex;
  flex-direction: column;

  .text-wrapper {
    width: 60%;

    p {
      margin-top: 2rem;
    }
  }

  .info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 2rem;

    .info-image {
      width: 39%;
    }
  }

  .info-wrappers--box {
    width: 40%;
  }
}

@media (max-width: 1000px) {
  .wrapper {

    .text-wrapper {
      width: 100%;
    }

    .info-wrappers--box {
      width: 100%;
    }

    .info-wrapper {
      flex-direction: column;
      width: 100%;

      .info-image {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
}
</style>