<script setup>
import FooterComp from "@/components/FooterComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import Manage4 from "@/assets/image/manage-picture-4.webp";
import Manage5 from "@/assets/image/manage-picture-5.webp";
import Manage6 from "@/assets/image/manage-picture-6.webp";
</script>

<template>
  <HeaderComp title="3. Drift" />
  <main>
    <div class="text__wrapper">
      <div class="text__left">
        <img :src="Manage4" alt="Eksempel på main.scss" />
        <div class="text__padding">
          <p>Når farver, font og andet styling er blevet valgt, kan man</p>
          <p>importere det i sine komponenter under sit style-tag</p>
          <p>således:</p>
        </div>
        <div class="text__padding">
          <img :src="Manage5" alt="Importering af scss til komponent" />
        </div>
        <div class="text__padding">
          <p>Det er vigtigt at importere main.scss i sit single-</p>
          <p>responsibility-styling, så man kan tilgå de globale</p>
          <p>værktøjer og dermed effektivisere arbejdstiden.</p>
        </div>
      </div>
      <div class="text__right">
        <h2>3.3 Styling / SCSS</h2>
        <div class="text__padding">
          <p>I projektet er der anvendt SCSS til styling, da vi gennem</p>
          <p>en udvidet CSS kan gøre brug af værktøjer som variabler</p>
          <p>og mixins der kan optimere arbejdshastigheden gennem</p>
          <p>genbrugelig kode.</p>
        </div>
        <div class="text__padding">
          <p>Alt globalt styling & genbruglig styling skal kodes i</p>
          <p>main.scss filen som ligger i /src/assets/main.scss.</p>
        </div>
        <div class="text__padding">
          <p>På den måde kan alle tilgå disse styles, og anvende dem</p>
          <p>hvorend det er ønsket selv på de components hvor vi</p>
          <p>anvender single reponsibility styling.</p>
        </div>
        <div class="text__padding">
          <h3>Eksempel:</h3>
        </div>
        <div class="text__padding">
          <div class="picture__3">
            <img :src="Manage6" alt="Eksempel på brug af scss til styling" />
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss">
@import "../assets/main.scss";
main {
  padding: 2rem;
}

.text__wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3rem;
}

.text__left,
.text__right {
  flex: 1;
}

img {
  max-width: 100%;
  height: auto;
  width: 80%;
}

.picture__3 img {
  max-width: 100%;
  height: auto;
  width: 75%;
}

.text__padding {
  padding-top: 2rem;
}

@media (max-width: 1000px) {
  img {
    max-width: 100%;
    height: auto;
    width: 100%;
  }

  .picture__3 img {
    max-width: 100%;
    height: auto;
    width: 100%;
  }
}
</style>
