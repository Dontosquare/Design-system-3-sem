<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
  <HeaderComp title="5. Troubleshooting & FAQ" />
  <main>
    <div class="wrapper">
      <h2>Før du koder:</h2>
      <p>Før du begynder at ændre eller tilføje kode i projektet, er der nogle vigtige ting, du bør vide for at undgå
        fejl og gøre arbejdet mere effektivt:</p>
      <h3>1. Forstå projektstrukturen</h3>
      <ul>
        <li><span class="color-change">/src/views</span>: Indeholder de forskellige sider (views) i applikationen. Nye undersider oprettes her.</li>
        <li><span class="color-change">/src/components</span>: Indeholder genanvendelige komponenter. Brug komponenter fremfor at kopiere kode.</li>
        <li><span class="color-change">/src/assets/images og /src/assets/icons</span>: Alle billeder og ikoner til siden skal ligge her for at blive korrekt importeret.</li>
        <li><span class="color-change">/src/styles/main.scss</span>: Centrale stylingregler, farver og variabler. Ændringer her slår igennem globalt.</li>
      </ul>
      <h3>2. Kend de vigtige filer</h3>
      <ul>
        <li><span class="color-change">router/index.js</span>: Her registreres alle ruter og views. Hvis du opretter en ny side, skal den tilføjes her.</li>
        <li><span class="color-change">Header.vue og navigation.json</span>: Bruges til dynamisk navigation i burgermenuen. Ændringer i menuen sker primært i JSON-filen.</li>
      </ul>
      <h3>3. Følg best practice</h3>
      <ul>
        <li>Brug BEM til struktur.</li>
        <li>Styling sker kun via klasser, ikke elementer eller IDs.</li>
        <li>Hold komponenter små og med single responsibility.</li>
        <li>Tænk phone-first og responsive løsninger, når du laver layout.</li>
      </ul>
      <h3>4. Deployment og build</h3>
      <ul>
        <li>Husk altid at køre npm  run build og firebase deploy, når nye ændringer skal publiceres.</li>
        <li>Kontroller, at alle filer og imports er korrekt stavet og placeret i den rigtige mappe, før du deployer.</li>
      </ul>
      <h2>5. Troubleshooting og FAQ</h2>
      <h3>1. Burgermenuen vises ikke korrekt</h3>
      <ul>
        <li>Problem: Menuen dukker ikke op på mobil eller tablet.</li>
        <li>Løsning: Sørg for, at JavaScript er aktiveret i browseren, og at siden er opdateret. Kontroller også, at HeaderData.json & HeaderDataTwo.json til navigationen ligger korrekt i projektet.</li>
      </ul>
      <h3>2. Links fungerer ikke</h3>
      <ul>
        <li>Problem: Klik på menupunkter fører ikke til den forventede underside.</li>
        <li>Løsning: Tjek at navigationen bruger <<span class="color-change">RouterLink</span> /> til interne sider, og at ruten er registreret i <span class="color-change">/src/router/index.js.</span></li>
      </ul>
      <h3>3. Nyt billede vises ikke</h3>
      <ul>
        <li>Problem: Et billede, der er uploadet, vises ikke på siden.</li>
        <li>Løsning: Sørg for, at billedet ligger i <span class="color-change">/src/assets/images</span> og er korrekt importeret i komponenten.</li>
      </ul>
      <h3>4. Tekstændringer slår ikke igennem</h3>
      <ul>
        <li>Problem: Ændringer i tekstindhold opdateres ikke på siden.</li>
        <li>Løsning: Tjek, at ændringen er foretaget i den korrekte komponent, komponenten er rigtigt importeret og at siden er rebuildet og redeployed.</li>
      </ul>
      <h3>5. Siden indlæses langsomt</h3>
      <ul>
        <li>Problem: Sider tager lang tid at loade.</li>
        <li>Løsning: Huske at SPAen loader komponenter lazy, men store billeder kan stadig påvirke performance. Optimér billedstørrelser og brug caching, hvis muligt.</li>
      </ul>
      <h3>6. Layout eller elementer ser forkert ud</h3>
      <ul>
        <li>Problem: Elementer overlapper eller bryder layoutet på mobile enheder.</li>
        <li>Løsning: Kontroller at mobile-first styling og media queries i SCSS er korrekt implementeret.</li>
      </ul>
      <h3>7. Browser-kompatibilitet</h3>
      <ul>
        <li>Problem: Visse funktioner virker ikke i ældre browsere.</li>
        <li>Løsning: Brug moderne browsere som Chrome, Edge eller Firefox. Internet Explorer understøttes ikke.</li>
      </ul>
      <h3>8. Projektet kører ikke lokalt</h3>
      <ul>
        <li>Problem: Projektet starter ikke, eller der mangler pakker.</li>
        <li>Løsning: Sørg for, at du står i projektets rodmappe i terminalen og kør:</li>
      </ul>
      <div class="yellow-box">
        <h3>Hvorfor understøttes Internet Explorer ikke?</h3>
        <p>Internet Explorer understøtter ikke moderne webstandarder og modtager ikke længere sikkerhedsopdateringer. Derfor fokuserer vi på moderne browsere som Chrome, Edge og Firefox, der giver bedre performance, sikkerhed og brugeroplevelse.</p>
      </div>
    </div>
  </main>
  <FooterComp />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

.wrapper {
  padding: 2rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h2:last-of-type {
    margin-bottom: 2rem;
    margin-top: 4rem;
  }

  ul {
    padding-left: 2.6rem;

    li {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    li:last-of-type {
      margin-bottom: 2rem;
    }
  }

  .yellow-box {
    background-color: $color-pharaos-gold;
    padding: 2rem;
    
    h3, p {
      color: $color-anubis-black;
      margin: 0rem;
      padding: 0rem;
    }

    h3{
      margin-bottom: 0.5rem;
    }
  }
}
</style>