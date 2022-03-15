<template>
  <div class="home">
    <div class="container-fluid" id="Home">
      <div class="row">
        <div id="nav">
          <div class="col-12 col-md-2 col-lg-2">
            <!-- Logo Robin Assistant -->
            <img src="@/assets/images/logo2.png" alt="Het logo van Robin Assistant">
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

    <v-landing-header @scrollTo="(component) => scrollTo(component)"></v-landing-header>

    <v-copy id="WatIsRobin">
      <div class="container text-box">
        <div class="row">
          <div class="col-12">
            <h2 class="title">Wat is Robin Assistant?</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 text-box4">
            <p>Robin is een ondersteunende softwareoplossing waarmee verzorgers dagelijkse activiteiten kunnen opzetten en plannen voor degenen voor wie ze zorgen. Robin zal het individu vervolgens helpen bij het uitvoeren van deze activiteiten door stapsgewijze begeleiding te geven, met behulp van afbeeldingen, tekst en audio instructies.</p>
            <p>Tijdens het XI Autism-Europe International Congress 2016 in Edinburgh verraste een kleine stand veel van de aanwezigen. Het was Robin die voor het eerst officieel presenteerde, waarbij hij de interface en het frisse ontwerp lietzien dat samen met Mediacollege Amsterdam is ontwikkeld.</p>
          </div>
          <div class="col-12 col-lg-4 text-box4">
            <p>Het Robin-team was erg blij met de overweldigende positieve reacties, adviezen en steun van mensen met autisme, hun familieleden en verzorgers, therapeuten en autismespecialisten. Ze gaven allemaal hun feedback, meningen, nieuwe ideeën en vele andere zeer nuttige bijdragen. Iedereen deelde ons doel om een dienst te creëren die volledig inspeelt op de behoeften van mensen met speciale behoeften en hen helpt een betere kwaliteit van leven te hebben.</p>
          </div>
          <div class="col-12 col-lg-4">
            <img src="@/assets/images/WhatIsRobinStock.png" alt="A Stock Image of a medical worker helping a person with down syndrome.">
          </div>
        </div>
      </div>
    </v-copy>

    <v-copy id="Voordelen">
      <div class="container text-box">
        <div class="row">
          <div class="col-12 d-none d-lg-block col-lg-4">
            <img class="img" src="@/assets/images/Voordelen.png" alt="Een mevrouw die helpt middels RobinAssistant">
          </div>
          <div class="col-12 col-lg-4">
            <div class="text-box2">
              <img class="icon" src="@/assets/icons/VoordelenIcon.png" alt="Icon - Voordelen">
              <h4>Voordelen</h4>
              <p>Robin heeft verschillende voordelen om uw dagelijks leven zo aangenaam mogelijk te maken. Wat zijn de voordelen van Robin Assistent en waarom zou je het gebruiken?</p>
              <br />
            </div>
            <div class="text-box2">
              <img class="icon" src="@/assets/icons/OnafhankelijkheidIcon.png" alt="Icon - Onafhankelijkheid">
              <h4>Onafhankelijkheid</h4>
              <p>Robin helpt bij het zelfstandig uitvoeren van dagelijkse activiteiten door stapsgewijze begeleiding te geven. Hierdoor is het individu een stuk onafhankelijker dan zonder het gebruik van Robin.</p>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="text-box2">
              <img class="icon" src="@/assets/icons/RoutineIcon.png" alt="Icon - Dagelijkse Routine">
              <h4>Dagelijkse routines</h4>
              <p>Doordat het individu niet meer zo afhankelijk is van de verzorger hebben ze meer routine. De dagelijkse activiteiten worden op vaste tijdstippen gedaan en kunnen dan zelfstandig door het individu worden uitgevoerd.</p>
            </div>
            <div class="text-box2">
              <img class="icon" src="@/assets/icons/DashboardIcon.png" alt="Icon - Dashboard">
              <h4>Dashboard management</h4>
              <p>Via het dashboard kan de verzorger heel makkelijk de taken van de persoon programmeren en op elk moment wijzigen.</p>
            </div>
          </div>
        </div>
      </div>
    </v-copy>

    <v-convince-you-login></v-convince-you-login>

    <div class="robinassistantgreen-bg">
      <v-copy>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-3">
              <h4>Hoe werkt het?</h4>
            </div>
            <div class="col-12 col-lg-3 offset-lg-1">
              <h4>Online dashboard</h4>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-3">
              <p>De dienst bestaat uit twee delen: Het online dashboard voor de verzorgers en de mobiele app voor de persoon die bijzondere zorg nodig heeft.</p>
              <ul>
                <li>Online Dashboard</li>
                <li>Mobiele App</li>
              </ul>
            </div>
            <div class="col-12 col-lg-4 offset-lg-1">
              <p>De verzorger heeft toegang tot Robin via de website www.robinassist.mevanaf een computer of een ander apparaat met internettoegang en kan inloggen op zijn persoonlijke dashboard. Daar kunnen ze de taken van de persoon voor de dag, week of zelfs de hele maand programmeren, met de optie om ze op elk moment te wijzigen. Ze kunnen bijvoorbeeld de volgorde van de activiteiten en de duur van elke stap configureren voor één of meerdere personen. Bovendien kunnen ze een actie instellen voor de knop “paniek”. Deze actie kan rechtstreeks vanuit de Robin app bellen, sms’en of een e-mailbericht sturen naar een speciaal persoon (de verzorger of een familielid van de persoon).</p>
            </div>
            <div class="col-12 d-none d-lg-block col-lg-3 offset-lg-1">
              <img src="@/assets/images/youtubelogo.png" alt="YouTube Logo">
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-12 d-none d-lg-block col-lg-3">
              <img src="@/assets/images/patienttekent.png" alt="Patient tekent een tekening en kleurt hem in">
            </div>

            <div class="col-12 d-none d-xl-block col-xl-4 offset-xl-1">
              <div class="telefoon-iconimage">
                <img src="@/assets/images/telefoonapp.png" alt="Telefoon Icoon">
              </div>
            </div>

            <div class="col-12 col-lg-8 offset-lg-1 col-xl-3 offset-xl-1">
              <h4>Mobiele App</h4>
              <p>De activiteiten die de verzorger in het online dashboard programmeert, worden naar de Robin app van de persoon gestuurd. Wanneer het tijd is om een activiteit uit te voeren, zal de app de persoon op de hoogte stellen via een waarschuwing of melding. Dit zal hen vragen om de geplande activiteit te openen in de Robin app, die automatisch elke stap toont die moet worden gevolgd om de activiteit te voltooien. Elke stap wordt zorgvuldig uitgelegd met spraak, tekst en afbeeldingen. Robin geeft ook aan hoeveel tijd de persoon maximaal mag nemen voor elke stap en laat hem de instructie van elke stap herhalen, indien nodig. Nadat alle stappen in de activiteit zijn voltooid, keert de Robin app terug naar de kalender om de geplande taken voor die dag of week te tonen. Wanneer de applicatie wordt gesloten, blijft deze inactief totdat het tijd is voor een nieuwe activiteit.</p>
            </div>
          </div>
        </div>
      </v-copy>
    </div>

    <v-contact id="Contact"></v-contact>

    <v-footer @scrollTo="(component) => scrollTo(component)"></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingHeader from '@/components/LandingHeader.vue'
import Copy from '@/components/Copy.vue'
import ConvinceYouLogin from '@/components/ConvinceYouLogin.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',

  components: {
    'v-landing-header': LandingHeader,
    'v-copy': Copy,
    'v-convince-you-login': ConvinceYouLogin,
    'v-contact': Contact,
    'v-footer': Footer
  },

  methods: {
    scrollTo (component) {
      document.getElementById(component).scrollIntoView()
      // console.log(component)
    }
  }
}
</script>
