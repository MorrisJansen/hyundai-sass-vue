<script>
import axios from 'axios';
import Keurmerk from "./Keurmerk";
import achtergrondVraag from "/img/achtergrondVraag.png";
import pijlVoren from "/img/vragen-pijl-volgende.svg";

export default {
  name: "DesktopVraag",
  components: {
    Keurmerk,
  },
  data() {
    return {
      achtergrondVraag: achtergrondVraag,
      pijlVoren: pijlVoren,
      formData: {
        geslacht: '',
        voornaam: '',
        achternaam: '',
        email: '',
        telefoonnummer: '',
        postcode: '',
        dealer: '',
        landcode: '',
        language: 'nl',
        publisher_id: 'IDMorrisDePublisher',  
        site_custom_url: window.location.href, 
        site_custom_name: 'Hyundai', 
        ip: '',  
        answers: [] 
      },
      errors: {
        geslacht: '',
        voornaam: '',
        achternaam: '',
        email: '',
        telefoonnummer: '',
        postcode: '',
        dealer: '',
      }
    };
  },
  mounted() {
    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        this.formData.ip = response.data.ip;
      })
      .catch(error => {
        console.error('Fout bij ophalen van IP-adres:', error);
      });
  },
  methods: {
    validateGeslacht() {
      console.log("Validating geslacht:", this.formData.geslacht);
      if (!this.formData.geslacht) {
        this.errors.geslacht = 'Selecteer een geslacht.';
        return false;
      }
      this.errors.geslacht = '';
      return true;
    },
    validateVoornaam() {
      console.log("Validating voornaam:", this.formData.voornaam);
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.voornaam.match(regex)) {
        this.errors.voornaam = 'Ongeldige voornaam. Gebruik alleen letters, spaties en leestekens.';
        return false;
      }
      this.errors.voornaam = '';
      return true;
    },
    validateAchternaam() {
      console.log("Validating achternaam:", this.formData.achternaam);
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      if (!this.formData.achternaam.match(regex)) {
        this.errors.achternaam = 'Ongeldige achternaam. Gebruik alleen letters, spaties en leestekens.';
        return false;
      }
      this.errors.achternaam = '';
      return true;
    },
    validateEmail() {
      console.log("Validating email:", this.formData.email);
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.formData.email.match(regex)) {
        this.errors.email = 'Ongeldig e-mailadres.';
        return false;
      }
      this.errors.email = '';
      return true;
    },
    validateTelefoonnummer() {
      console.log("Validating telefoonnummer:", this.formData.telefoonnummer);
      let nummer = this.formData.telefoonnummer.replace(/[-\s]/g, '');
      const landcode = this.formData.landcode;

      const regexNL = /^[0-9]{10}$/;  
      const regexBE = /^[0-9]{9}$/;

      if ((landcode === 'NL' && !regexNL.test(nummer)) || (landcode === 'BE' && !regexBE.test(nummer))) {
        this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
        return false;
      }

      if (landcode === 'BE' && nummer.startsWith('0')) {
        nummer = '+' + nummer;
      }

      this.errors.telefoonnummer = '';
      this.formData.telefoonnummer = nummer;
      return true;
    },
    validatePostcode() {
      console.log("Validating postcode:", this.formData.postcode);
      const regexNL = /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/;
      const regexBE = /^[1-9][0-9]{3}$/;
      if (!(this.formData.postcode.match(regexNL) || this.formData.postcode.match(regexBE))) {
        this.errors.postcode = 'Ongeldige postcode.';
        return false;
      }
      this.errors.postcode = '';
      return true;
    },
    validateDealer() {
      console.log("Validating dealer:", this.formData.dealer);
      if (this.formData.dealer === '') {
        this.errors.dealer = 'Selecteer een dealer.';
        return false;
      }
      this.errors.dealer = '';
      return true;
    },
    validateForm() {
      console.log("Validating form...");
      const isValid = (
        this.validateGeslacht() &&
        this.validateVoornaam() &&
        this.validateAchternaam() &&
        this.validateEmail() &&
        this.validateTelefoonnummer() &&
        this.validatePostcode() &&
        this.validateDealer()
      );
      console.log("Form valid:", isValid);
      return isValid;
    },
    submitForm() {
      console.log("Submitting form...");
      if (this.validateForm()) {
        console.log("Form is valid, submitting...");
        console.log("Form data:", this.formData);
        const authHeader = 'Basic MTg1OmFiODIyMWQ0YTMxNzBkODk1NDI4ODA0NTlhYmY3OTgxN2FlMzY3YzI=';
        axios.post(
          'https://leadgen.republish.nl/api/sponsors/2358/leads',
          this.formData,
          {
            headers: { 
              'Authorization': authHeader,
              'Content-Type': 'application/json; charset=utf-8'
            }
          }
        )
        .then(response => {
          console.log('Formulier succesvol verstuurd', response.data);
          this.$router.push('/bedankt');
        })
        .catch(error => {
          console.error('Er is een fout opgetreden bij het versturen van het formulier', error);
        });
      } else {
        console.log("Form is invalid, not submitting.");
      }
    }
  }
};
</script>












<template>
  <div class="container-center-horizontal">
    <div class="top-balk">
      <img
        class="logo-hyundai"
        src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg"
        alt="Logo Hyundai"
      />
      <keurmerk />
    </div>
  
    <div class="background-container">
      <img :src="achtergrondVraag" class="achtergrondVraag" alt="">

      <div class="vragen-achtergrond">
        <div class="bedankt hyundaisansheadoffice-bold-midnight-blue-32px">Bedankt!</div>
        <div class="vrijblijvend-gegevens">Vul jouw gegevens in en ontvang gratis en <span id="dik" class="dik hyundaisansheadoffice-bold-midnight-blue-24px">vrijblijvend de berekening van jouw leasetarief,</span> inclusief speciale aanbieding.</div>

        <div class="geslacht">
          <label class="hyundaisansheadoffice-regular-midnight-blue-16px">
            <input type="radio" name="geslacht" value="meneer" v-model="formData.geslacht" /> Meneer
          </label>
          <label class="hyundaisansheadoffice-regular-midnight-blue-16px">
            <input type="radio" name="geslacht" value="mevrouw" v-model="formData.geslacht" /> Mevrouw
          </label>
          <div class="error">{{ errors.geslacht }}</div>
        </div>
        
        
        <div class="Voornaam">
            <label for="Voornaam">
                <input class="input-formulier" type="text" id="Voornaam" name="Voornaam" placeholder="Voornaam" v-model="formData.voornaam">
            </label>
            <div class="error">{{ errors.voornaam }}</div>
        </div>

        <div class="Achternaam">
            <label for="Achternaam">
                <input class="input-formulier" type="text" id="Achternaam" name="Achternaam" placeholder="Achternaam" v-model="formData.achternaam">
            </label>
            <div class="error">{{ errors.achternaam }}</div>
        </div>

        <div class="E-mailadres">
            <label for="E-mailadres">
                <input class="input-formulier" type="text" id="E-mailadres" name="E-mailadres" placeholder="E-mailadres" v-model="formData.email">
            </label>
            <div class="error">{{ errors.email }}</div>
        </div>

        <div class="Telefoonnummer">
            <label for="Telefoonnummer"></label>
            <div class="telefoonnummer-input">
              <select id="Landcode" name="Landcode" v-model="formData.landcode" class="input-formulier landcode-select">
                <option value="" disabled>Selecteer een landcode</option>
                <option value="NL-mobiel">NL (+316)</option>
                <option value="NL">NL (+31)</option>
                <option value="BE-mobiel">BE (+324)</option>
                <option value="BE">BE (+32)</option>
              </select>
              <input class="input-formulier telefoonnummer" type="text" id="Telefoonnummer" name="Telefoonnummer" placeholder="Telefoonnummer" v-model="formData.telefoonnummer" :maxlength="formData.landcode === 'NL' ? 10 : 9">
            </div>
            <div class="error">{{ errors.telefoonnummer }}</div>
          </div>
          
        
        
        
        <div class="lijn"></div>

        <div class="vrijblijvend-gegevens beneden">Vul je postcode in en <span id="dik" class="dik hyundaisansheadoffice-bold-midnight-blue-24px">kies een dealer</span> bij jou in de buurt:</div>

        <div class="Postcode">
            <label for="Postcode">
                <input class="input-formulier" type="text" id="Postcode" name="Postcode" placeholder="Postcode" v-model="formData.postcode">
            </label>
            <div class="error">{{ errors.postcode }}</div>
        </div>

        <div class="Kies-een-dealer">
          <label for="Kies-een-dealer">
            <select class="input-formulier" id="Kies-een-dealer" name="Kies-een-dealer" v-model="formData.dealer">
              <option value="" disabled>Selecteer een dealer</option>
              <option>Rotterdam</option>
              <option>Rotterdam-Noord</option>
            </select>
          </label>
          <div class="error">{{ errors.dealer }}</div>
        </div>

        <div class="gekozen-dealer beneden">
          De gekozen dealer neemt telefonisch contact met je op voor het bespreken van je wensen voor de berekening.
        </div>

        <button id="verzendknop" class="volgende" @click="submitForm">
          <div class="volgende-tekst">Aanvraag afronden</div>
          <img :src="pijlVoren" class="pijl-omdraaien" alt="">
        </button>

        <div class="afronding">
          Jouw gegevens worden alleen gebruikt voor de berekening van jouw leasetarief en worden niet gedeeld met andere partijen. De berekening en uitgebrachte offertes zijn gratis en vrijblijvend, er zijn geen verplichtingen aan verbonden! De uitkomst van de berekening ontvang je telefonisch en/of per e-mail.
        </div>


      </div>
    </div>
  </div>
</template>












<style scoped>
.container-center-horizontal {
  display: block;
}

.background-container {
  height: 75vw;
}

.achtergrondVraag {
  width: 100%;
  height: 75vw;
  object-fit: cover;
}

.vragen-achtergrond {
  padding: 4.028vw  7vw;
  align-items: center;
  gap: 0.694vw;
  width: 61.111vw;
  height: 66.667vw;
  background-color: white;
  margin: 0 auto;
  position: relative;
  top: -71.5vw;
  border-radius: 0.75rem;
  box-shadow: 0px 31px 81px 0px rgba(0, 17, 77, 0.20);
}












.bedankt {
    color: var(--Primary-blue, #002E6B);
    font-family:  'Hyundai Sans Head Office-Bold', Helvetica;
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
}

.vrijblijvend-gegevens {
    color: var(--Primary-blue, #002E6B);
    font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}


.geslacht {
    margin-top: 1.5vw;
    
}


.input-formulier {
    width: 40vw;
    height: 3vw;    
    margin-top: 1vw;
    border-radius: 10px;
    background: #FBFBFB;
    border: 1px solid #F0F0F0;
    
}

.input-formulier::placeholder {
    padding-left: 2vw;    
    font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
}

.lijn {
    height: 0.0625rem;
    width: 40vw;
    background: #002E6B;;
    margin-top: 1.5vw;
}

.beneden {
    margin-top: 2vw;
}


.gekozen-dealer {
  color: var(--Primary-blue, #002E6B);
  font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.volgende {
    margin-left: 26vw;
    display: inline-flex;
    height: 4.7vw;
    width: 22vw;
    padding: 2vw 1.5vw;
    align-items: center;
    gap: 2vw;
    border-radius: 0.4375rem;
    background: var(--Primary-blue, #002E6B);
    margin-top: 1vw;
  }
  
  .volgende-tekst {
    color: var(--White, #FFF);
    font-family:  'Hyundai Sans Head Office-Bold', Helvetica;
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


.afronding {
    color: #002E6B;
    font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
    font-size: 0.9vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6vw;
    margin-top: 2vw;
}


.telefoonnummer-input {
  display: inline-flex;
  width: 40vw;
}

.landcode-select {
  width: 8vw;
}





</style>
