<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div id="nav">
          <div class="col-12 col-md-2 col-lg-2">
            <!-- Logo Robin Assistant -->
            <img src="@/assets/images/logo.png" alt="Het logo van Robin Assistant">
          </div>
          <div class="col-12 col-md-10 col-lg-9">
            <div class="nav-links">
              <button @click="scrollTo('WatIsRobin')">Wat is Robin?</button>
              <button @click="scrollTo('Voordelen')">Voordelen</button>
              <button @click="scrollTo('HoeWerktHet')">Hoe werkt het?</button>
              <button @click="scrollTo('Contact')">Contact</button>

              <a class="cta-button" href="https://www.robinassists.me/dashboard/">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-landing-header></v-landing-header>

    <v-copy id="WatIsRobin">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Wat is Robin Assistant?</h2>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-12 col-lg-3">
            <p>Robin is een ondersteunende softwareoplossing waarmee verzorgers dagelijkse activiteiten kunnen opzetten en plannen voor degenen voor wie ze zorgen. Robin zal het individu vervolgens helpen bij het uitvoeren van deze activiteiten door stapsgewijze begeleiding te geven, met behulp van afbeeldingen, tekst en audio instructies.</p>
            <p>Tijdens het XI Autism-Europe International Congress 2016 in Edinburgh verraste een kleine stand veel van de aanwezigen. Het was Robin die voor het eerst officieel presenteerde, waarbij hij de interface en het frisse ontwerp lietzien dat samen met Mediacollege Amsterdam is ontwikkeld.</p>
          </div>
          <div class="col-12 col-lg-4 offset-lg-1">
            <p>Het Robin-team was erg blij met de overweldigende positieve reacties, adviezen en steun van mensen met autisme, hun familieleden en verzorgers, therapeuten en autismespecialisten. Ze gaven allemaal hun feedback, meningen, nieuwe ideeën en vele andere zeer nuttige bijdragen. Iedereen deelde ons doel om een dienst te creëren die volledig inspeelt op de behoeften van mensen met speciale behoeften en hen helpt een betere kwaliteit van leven te hebben.</p>
          </div>
          <div class="col-12 col-lg-3 offset-lg-1">
            <img src="@/assets/images/WhatIsRobinStock.png" alt="A Stock Image of a medical worker helping a person with down syndrome.">
          </div>
        </div>
      </div>
    </v-copy>

    <br />

    <v-copy id="Voordelen">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3">
            <img src="@/assets/images/Voordelen.png" alt="Een mevrouw die helpt middels RobinAssistant">
          </div>
          <div class="col-12 col-lg-4 offset-lg-1">
            <img src="@/assets/icons/VoordelenIcon.png" alt="Icon - Voordelen">
            <h4>Voordelen</h4>
            <p>Robin heeft verschillende voordelen om uw dagelijks leven zo aangenaam mogelijk te maken. Wat zijn de voordelen van Robin Assistent en waarom zou je het gebruiken?</p>

            <img src="@/assets/icons/OnafhankelijkheidIcon.png" alt="Icon - Onafhankelijkheid">
            <h4>Onafhankelijkheid</h4>
            <p>Robin helpt bij het zelfstandig uitvoeren van dagelijkse activiteiten door stapsgewijze begeleiding te geven. Hierdoor is het individu een stuk onafhankelijker dan zonder het gebruik van Robin.</p>
          </div>
          <div class="col-12 col-lg-3 offset-lg-1">
            <img src="@/assets/icons/RoutineIcon.png" alt="Icon - Dagelijkse Routine">
            <h4>Dagelijkse routines</h4>
            <p>Doordat het individu niet meer zo afhankelijk is van de verzorger hebben ze meer routine. De dagelijkse activiteiten worden op vaste tijdstippen gedaan en kunnen dan zelfstandig door het individu worden uitgevoerd.</p>

            <img src="@/assets/icons/DashboardIcon.png" alt="Icon - Dashboard">
            <h4>Dashboard management</h4>
            <p>Via het dashboard kan de verzorger heel makkelijk de taken van de persoon programmeren en op elk moment wijzigen.</p>
          </div>
        </div>
      </div>
    </v-copy>

    <v-convince-you-login></v-convince-you-login>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingHeader from '@/components/LandingHeader.vue'
import Copy from '@/components/Copy.vue'
import ConvinceYouLogin from '@/components/ConvinceYouLogin.vue'

export default {
  name: 'Home',

  components: {
    'v-landing-header': LandingHeader,
    'v-copy': Copy,
    'v-convince-you-login': ConvinceYouLogin
  },

  methods: {
    scrollTo (component) {
      document.getElementById(component).scrollIntoView()
    }
  }
}
</script>
