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
        <p>Projektet er opbygget som en Single Page Application (SPA), hvor navigationen håndteres af Vue Router.</p>
        <p>I stedet for at indlæse nye sider opdateres kun det område, hvor <<span class="color-change">RouterView</span> /> ligger i App.vue.</p>
        <p>Som intern retningslinje anvendes <<span class="color-change">RouterView</span> /> til al intern navigation mellem undersider, mens almindelige <<span class="color-change">a</span>>-<b>tags bruges kun til eksterne links</b>.</p>
        <p>Det sikrer korrekt SPA-adfærd og undgår unødige sideindlæsninger.</p>
      </div>
      <div class="examples-wrapper">
        <h2>Eksempler fra vores kode:</h2>
        <p>Ruterne defineres i router/index.js og kobler en URL-sti til et specifikt view:</p>
        <img class="" src="" alt="" />
        <p>Når man så skal lave et <<span class="color-change">RouterLink </span>> vil det se sådan her ud</p>
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
  }
}


</style>