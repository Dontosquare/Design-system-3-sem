<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="3. Drift"/>
  <main>
    <div class="wrapper">
      <div class="text-wrapper">
        <h2>3.4 SPA-routing</h2>
        <p>Projektet er opbygget som en <b>Single Page Application (SPA)</b>, hvor navigationen håndteres af <RouterLink to="/setup-framework" class="Link-color">Vue</RouterLink> Router.</p>
        <p>I stedet for at indlæse nye sider opdateres kun det område, hvor <<span class="color-change">RouterView</span> /> ligger i App.vue.</p>
        <p>Som intern retningslinje anvendes <<span class="color-change">RouterView</span> /> til al intern navigation mellem undersider, mens almindelige <<span class="color-change">a</span>>-<b>tags bruges kun til eksterne links</b>.</p>
        <p>Det sikrer korrekt SPA-adfærd og undgår unødige sideindlæsninger.</p>
      </div>
      <div class="examples-wrapper">
        <h2>Eksempler fra vores kode:</h2>
        <p>Ruterne defineres i router/index.js og kobler en URL-sti til et specifikt view:</p>
        <img class="examples-image-1" src="..\assets\image\manage-picture-7.webp" alt="Image of router paths" />
        <p>Når man så skal lave et <<span class="color-change">RouterLink </span>> vil det se sådan her ud</p>
        <img class="examples-image-2" src="..\assets\image\manage-picture-8.webp" alt="Image of routerlinks" />
        <p>Visningen vil ske automatisk da dit <<span class="color-change">RouterLink</span>> altid vil blive vist gennem vores <<span class="color-change">RouterLink</span>/> der altid vil befinde sig på App.vue siden.</p>
        <img class="examples-image-3" src="..\assets\image\manage-picture-9.webp" alt="Image of routerlinks" />
        <h2>Oprettelse af nye views</h2>
        <p>Når der skal tilføjes en ny underside, oprettes først et view i views-mappen. Din sti kan f.eks. se således ud: <span class="color-change">/src/views/AboutView.vue</span></p>
        <p>Derefter skal den registeres i routeren således:</p>
        <img class="examples-image-4" src="..\assets\image\manage-picture-10.webp" alt="Image of new routes" />
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.wrapper {
  .text-wrapper {
    padding: 2rem;
      border-bottom: 2px solid #2a2a2a;
  }

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  p:last-of-type {
    margin-bottom: 0rem;
  }

  .examples-wrapper {
    padding: 2rem;

    p {
      margin-bottom: 2rem;
    }

    .examples-image-3 {
      margin-bottom: 2rem;
    }
  }
}

@media (max-width: 800px) {
  .wrapper {
    flex-direction: column;
  }

  .examples-wrapper img {
    width: 100%;
  }
}

</style>