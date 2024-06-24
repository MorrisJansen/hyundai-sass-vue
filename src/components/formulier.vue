<script>
import axios from 'axios';
import Keurmerk from "./Keurmerk";
import achtergrondVraag from "/img/achtergrondVraag.png";
import pijlVoren from "/img/vragen-pijl-volgende.svg";
import { getAntwoorden } from "/src/antwoorden.js";

const dealers = [
    { "id": 4816, "name": "Van Mossel Hyundai Leeuwarden", "latitude": 53.200770023103, "longitude": 5.8407729035167 },
    { "id": 4819, "name": "Van Mossel Hyundai Groningen", "latitude": 53.220721988724, "longitude": 6.6111767146783 },
    { "id": 4822, "name": "Van Mossel Hyundai Heerenveen", "latitude": 52.964521308202, "longitude": 5.8921035528572 },
    { "id": 4825, "name": "Van Mossel Hyundai Emmen", "latitude": 52.763281277363, "longitude": 6.9392753158237 },
    { "id": 4828, "name": "Autobedrijf Van Veen Assen", "latitude": 52.995796249184, "longitude": 6.5331830435734 },
    { "id": 4831, "name": "Herwers Hyundai Deventer", "latitude": 52.24090320152, "longitude": 6.2148931809914 },
    { "id": 4834, "name": "Herwers Hyundai Arnhem", "latitude": 51.948344891296, "longitude": 5.881746123549 },
    { "id": 4837, "name": "Herwers Hyundai Doetinchem", "latitude": 51.972777644707, "longitude": 6.2666923214625 },
    { "id": 4840, "name": "Herwers Hyundai Tiel", "latitude": 51.912172705068, "longitude": 5.4268906916074 },
    { "id": 4843, "name": "Herwers Hyundai Veenendaal", "latitude": 52.037594643424, "longitude": 5.5738100626821 },
    { "id": 4846, "name": "Herwers Hyundai Apeldoorn", "latitude": 52.238002454923, "longitude": 5.9853544079444 },
    { "id": 4849, "name": "Broekhuis Hyundai Zwolle", "latitude": 52.494526968178, "longitude": 6.1222122787487 },
    { "id": 4852, "name": "Broekhuis Hyundai Almere", "latitude": 52.358275062373, "longitude": 5.2592331536395 },
    { "id": 4855, "name": "Autogroep Twente Enschede", "latitude": 52.191876753996, "longitude": 6.8891162548194 },
    { "id": 4858, "name": "Autogroep Twente Almelo", "latitude": 52.384869036162, "longitude": 6.7229862693341 },
    { "id": 4861, "name": "Autogroep Twente Hengelo", "latitude": 52.280382103484, "longitude": 6.7770215776139 },
    { "id": 4864, "name": "Hyundai Wittenberg Nieuwegein", "latitude": 52.019822448674, "longitude": 5.0999873964444 },
    { "id": 4867, "name": "Autogroep Ursem Barten Amsterdam", "latitude": 52.390577415125, "longitude": 4.7996608806479 },
    { "id": 4870, "name": "Autogroep Ursem Barten Zuid Oost", "latitude": 52.328628417496, "longitude": 4.9279489634226 },
    { "id": 4873, "name": "Autogroep Ursem Barten Amstelveen", "latitude": 52.281780526945, "longitude": 4.8379601112311 },
    { "id": 4876, "name": "Autobedrijf Velserbeek Velserbroek", "latitude": 52.007814310819, "longitude": 4.1622059933439 },
    { "id": 4879, "name": "Hyundai Wittenberg Amersfoort", "latitude": 52.165406956313, "longitude": 5.3525912536931 },
    { "id": 4882, "name": "Hyundai Wittenberg Utrecht", "latitude": 52.076206664219, "longitude": 5.046634422724 },
    { "id": 4885, "name": "Auto Sturm Goes", "latitude": 51.488043537477, "longitude": 3.8746142737977 },
    { "id": 4888, "name": "Auto Sturm Middelburg", "latitude": 51.482250586951, "longitude": 3.6290256698105 },
    { "id": 4891, "name": "Hyundai Wittenberg Hilversum", "latitude": 52.215382648186, "longitude": 5.1451317297305 },
    { "id": 4894, "name": "Autogroep Ursem Barten Purmerend", "latitude": 52.519588463866, "longitude": 4.9990811507024 },
    { "id": 4897, "name": "Autogroep Ursem Barten Zwaag", "latitude": 52.670418640975, "longitude": 5.0579877284956 },
    { "id": 4900, "name": "Autogroep Ursem Barten Heerhugowaard", "latitude": 52.666183113917, "longitude": 4.8184493526844 },
    { "id": 4903, "name": "Autogroep Ursem Barten Heemskerk", "latitude": 52.505040302237, "longitude": 4.6558053005753 },
    { "id": 4906, "name": "Autogroep Ursem Barten Alkmaar", "latitude": 52.643349229245, "longitude": 4.7828172643399 },
    { "id": 4909, "name": "Autogroep Ursem Barten Hoofddorp", "latitude": 52.293749540465, "longitude": 4.6797069000563 },
    { "id": 4912, "name": "Wittebrug Hyundai Den Haag Ypenburg", "latitude": 52.071089543392, "longitude": 4.3930214238068 },
    { "id": 4915, "name": "Wittebrug Hyundai Den Haag Kerketuinen", "latitude": 52.050924284312, "longitude": 4.2564097901303 },
    { "id": 4918, "name": "Wittebrug Hyundai Rotterdam Metaalhof", "latitude": 51.94910669907, "longitude": 4.5441793096486 },
    { "id": 4921, "name": "Autobedrijf Arjan Groet Den Helder", "latitude": 52.949898585181, "longitude": 4.7635901324677 },
    { "id": 4924, "name": "Autobedrijf Noteboom Spijkenisse BV", "latitude": 51.850566961721, "longitude": 4.307374391587 },
    { "id": 4927, "name": "Autobedrijf Noteboom Rotterdam b.v.", "latitude": 51.868951654863, "longitude": 4.549152595994 },
    { "id": 4930, "name": "Garage van Dalen Schiedam", "latitude": 51.931293082407, "longitude": 4.3988171276193 },
    { "id": 4933, "name": "H-Point Dordrecht", "latitude": 51.792037766149, "longitude": 4.648020753442 },
    { "id": 4936, "name": "H-Point Gorinchem", "latitude": 51.841449706817, "longitude": 4.9527912249317 },
    { "id": 4939, "name": "Dijksman Automobielbedrijven Katwijk", "latitude": 52.202092801914, "longitude": 4.4359123121548 },
    { "id": 4942, "name": "Van der Linden Groep Zoetermeer B.V.", "latitude": 52.03691784883, "longitude": 4.501799538036 },
    { "id": 4945, "name": "Van der Linden Groep Waddinxveen B.V.", "latitude": 52.027931285446, "longitude": 4.6553007642224 },
    { "id": 4948, "name": "Van der Linden Groep Leiden B.V.", "latitude": 52.171775837631, "longitude": 4.4956402746069 },
    { "id": 4951, "name": "Autobedrijf F. van der Heijden Uden", "latitude": 51.652427325599, "longitude": 5.6435443254211 },
    { "id": 4954, "name": "Autobedrijf Peter Janssen Weert", "latitude": 51.269692980175, "longitude": 5.7230822447685 },
    { "id": 4957, "name": "Wassink Autogroep Heerlen", "latitude": 50.904213103097, "longitude": 5.9484630028934 },
    { "id": 4960, "name": "Wassink Autogroep Sittard", "latitude": 50.996372403143, "longitude": 5.8448701421058 },
    { "id": 4963, "name": "Wassink Autogroep Venlo", "latitude": 51.390659512617, "longitude": 6.1359261106854 },
    { "id": 4966, "name": "Zeeuw & Zeeuw Roosendaal", "latitude": 51.557958043752, "longitude": 4.4660006632069 },
    { "id": 4969, "name": "Oostendorp Auto Den Bosch B.V.", "latitude": 51.708305676251, "longitude": 5.330910716323 },
    { "id": 4972, "name": "Oostendorp Auto Nijmegen B.V.", "latitude": 51.83966168017, "longitude": 5.8057202319442 },
    { "id": 4975, "name": "Oostendorp Auto Helmond B.V.", "latitude": 51.459466237075, "longitude": 5.6923203400239 },
    { "id": 4978, "name": "Content Autogroep Eindhoven", "latitude": 51.481318298583, "longitude": 5.4588081532907 },
    { "id": 4981, "name": "Content Autogroep Tilburg", "latitude": 51.580772353102, "longitude": 5.0643810461124 },
    { "id": 4984, "name": "Zeeuw & Zeeuw Breda", "latitude": 51.603712654071, "longitude": 4.8046630595467 },
    { "id": 4987, "name": "Groenewold & Dijkhuizen Delfzijl", "latitude": 53.322389781872, "longitude": 6.8849081644247 }
  ];


export default {
  name: "DesktopVraag",
  components: {
    Keurmerk,
  },
  data() {
    return {
      nearestDealers: [],
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
        language: 'nl_NL',
        publisher_id: 'Hyundai',  
        site_custom_url: window.location.href, 
        site_custom_name: 'Hyundai-i10', 
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

    this.formData.answers = getAntwoorden();
    console.log("Antwoorden:", this.formData.answers);
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
      const inputElement = document.querySelector('#voornaam-input');

      if (!this.formData.voornaam.match(regex)) {
        this.errors.voornaam = 'Ongeldige voornaam. Gebruik alleen letters, spaties en leestekens.';
        inputElement.classList.add('error-input');
        return false;
      }

      this.errors.voornaam = '';
      inputElement.classList.remove('error-input');
      return true;
    },

  validateAchternaam() {
    console.log("Validating achternaam:", this.formData.achternaam);
    const regex = /^[a-zA-Z\s.,'-]{1,}$/;
    const inputElement = document.querySelector('#achternaam-input');

    if (!this.formData.achternaam.match(regex)) {
      this.errors.achternaam = 'Ongeldige achternaam. Gebruik alleen letters, spaties en leestekens.';
      inputElement.classList.add('error-input');
      return false;
    }

    this.errors.achternaam = '';
    inputElement.classList.remove('error-input');
    return true;
  },
  validateEmail() {
    console.log("Validating email:", this.formData.email);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const containsApostrophe = /'/;

    const inputElement = document.querySelector('#email-input');

    if (!this.formData.email.match(regex) || this.formData.email.match(containsApostrophe)) {
      this.errors.email = 'Ongeldig e-mailadres.';
      inputElement.classList.add('error-input');
      return false;
    }

    this.errors.email = '';
    inputElement.classList.remove('error-input');
    return true;
  },
  validateAndFormatPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/[^0-9+]/g, '');

    const dutchRegex = /^(06[0-9]{8}|[+]{0,1}31[0]?[0-9]{9,10}|0031[0]?[0-9]{9,10})$/;
    
    if (!phoneNumber.match(dutchRegex)) {
      console.error('Ongeldig telefoonnummer');
      return null;
    }

    phoneNumber = phoneNumber.replace(/^0+/, '');

    if (phoneNumber.startsWith('0') && (phoneNumber.length === 10 || phoneNumber.length === 11)) {
      phoneNumber = '+31' + phoneNumber.substring(1);
    } else if (phoneNumber.startsWith('6') && phoneNumber.length === 9) {
      phoneNumber = '+31' + phoneNumber;
    } else if (phoneNumber.startsWith('31') && phoneNumber.length === 11) {
        phoneNumber = '+' + phoneNumber;
    } else if (phoneNumber.startsWith('+31')) {
    } else if (phoneNumber.startsWith('0031')) {
      phoneNumber = '+' + phoneNumber.substring(2);
    } else {
      console.error('Ongeldig telefoonnummer');
      return null;
    }

    if (phoneNumber.length !== 12) {
      console.error('Telefoonnummer moet in het formaat +31XXXXXXXXX zijn.');
      return null;
    }

    return phoneNumber;
  },

  validateTelefoonnummer() {
    console.log("Validating telefoonnummer:", this.formData.telefoonnummer);
    const phoneNumber = this.validateAndFormatPhoneNumber(this.formData.telefoonnummer);

    if (!phoneNumber) {
      console.error('Ongeldig telefoonnummer.');
      this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
      const inputElement = document.querySelector('#telefoonnummer-input');
      inputElement.classList.add('error-input');
      return false;
    }

    this.errors.telefoonnummer = '';
    const inputElement = document.querySelector('#telefoonnummer-input');
    inputElement.classList.remove('error-input');
    return true;
  },  

  async  checkPostcode() {
    // Verwijder spaties uit de postcode voor verdere verwerking
    const cleanPostcode = this.postcode.replace(/\s+/g, '');

    if (cleanPostcode.length === 6) {
        // Regex die postcodes in het formaat 1234AB controleert
        const postcodeRegex = /^[1-9][0-9]{3}[a-zA-Z]{2}$/;
        if (postcodeRegex.test(cleanPostcode)) {
            await this.findNearestDealers();
            this.errors.postcode = '';
        } else {
            this.errors.postcode = 'Voer een geldige postcode in (1234AB).';
        }
    } else if (cleanPostcode.length > 0) {
        this.errors.postcode = 'Een postcode moet 6 tekens bevatten.';
    } else {
        this.errors.postcode = '';
    }
},
    
    validateDealer() {
      console.log("Validating dealer:", this.formData.dealer.id);
      if (!this.formData.dealer || !this.formData.dealer.id) {
        this.errors.dealer = 'Selecteer een dealer.';
        return false;
      }
      this.errors.dealer = '';

      const dealerAnswer = this.formData.dealer.id;
      const dealerAnswerIndex = this.formData.answers.findIndex(answer => answer === dealerAnswer);
      if (dealerAnswerIndex === -1) {
        this.formData.answers = this.formData.answers.filter(answer => !dealers.some(dealer => dealer.id === answer));
        this.formData.answers.push(dealerAnswer);
      }

      return true;
    },

    async findNearestDealers() {
      try {
        const apiKey = 'pk.6c8d6a1e3fe6468f0ceab205affad3d7';
        const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.postcode}&format=json`);

        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          const dealersWithDistance = dealers.map(dealer => {
            const distance = this.calculateDistance(lat, lon, dealer.latitude, dealer.longitude);
            return { ...dealer, distance };
          });
          this.nearestDealers = dealersWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 5);
        } else {
          this.errors.postcode = 'Geen gegevens gevonden voor de opgegeven postcode.';
        }
      } catch (error) {
        console.error('Fout bij het ophalen van de coördinaten voor de postcode:', error);
        this.errors.postcode = 'Fout bij het ophalen van de coördinaten voor de postcode.';
      }
    },
    calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = this.deg2rad(lat2 - lat1);
      const dLon = this.deg2rad(lon2 - lon1);
      const a = 
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
      const distance = R * c;
      return distance;
    },
    deg2rad(deg) {
      return deg * (Math.PI/180);
    },
    clearErrors() {
      this.errors.postcode = '';
    },
    validateForm() {
      console.log("Validating form...");
      const isValid = (
        this.validateGeslacht() &&
        this.validateVoornaam() &&
        this.validateAchternaam() &&
        this.validateEmail() &&
        this.validateTelefoonnummer() &&
        this.validateDealer()
      );
      console.log("Form valid:", isValid);
      return isValid;
    },
    submitForm() {
  console.log("Submitting form...");
  if (this.validateForm()) {
    console.log("Form is valid, submitting...");
    console.log("Form data before processing:", this.formData);

    this.formData.answers = getAntwoorden();
    this.formData.answers.push(4659);

    this.formData.firstname = this.formData.voornaam;
    this.formData.lastname = this.formData.achternaam;

    const formattedPhoneNumber = this.validateAndFormatPhoneNumber(this.formData.telefoonnummer);
    if (!formattedPhoneNumber) {
      console.error('Ongeldig telefoonnummer, formulier niet verzonden.');
      return;
    }
    this.formData.phone_number = formattedPhoneNumber;

    this.formData.gender = this.formData.geslacht;

    const dealerAnswer = this.formData.dealer.id;
    this.formData.answers = this.formData.answers.filter(answer => !dealers.some(dealer => dealer.id === answer));
    this.formData.answers.push(dealerAnswer);

    delete this.formData.voornaam;
    delete this.formData.achternaam;
    delete this.formData.telefoonnummer;
    delete this.formData.geslacht;

    console.log("Form data after processing:", JSON.stringify(this.formData));

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
      this.$router.push('/hyundai-sass-vue/bedankt');
    })
    .catch(error => {
      console.error('Er is een fout opgetreden bij het versturen van het formulier', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
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
      <a href="/">
        <img
          class="logo-hyundai"
          src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg"
          alt="Logo Hyundai"
        />
        </a>
      <keurmerk />
    </div>
  
    <div class="background-container">
      <img :src="achtergrondVraag" class="achtergrondVraag" alt="">

      <div class="vragen-achtergrond">
        <div class="bedankt hyundaisansheadoffice-bold-midnight-blue-32px">Bedankt!</div>
        <div class="vrijblijvend-gegevens">Vul jouw gegevens in en ontvang gratis en <span class="dik">vrijblijvend de berekening van jouw leasetarief,</span> inclusief speciale aanbieding.</div>

        <template>
          <div>
            <label>
              <div class="geslacht-container">
                <input type="radio" v-model="formData.geslacht" value="male">
                <div class="geslacht"> Meneer </div>
              </div>
            </label>
            <label>
              <div class="geslacht-container">
                <input type="radio" v-model="formData.geslacht" value="female">
                <div class="geslacht"> Mevrouw </div>
              </div>
            </label>
            <div class="error-message" v-if="errors.geslacht">{{ errors.geslacht }}</div>
          </div>
        </template>

        <div class="Voornaam">
          <label for="voornaam-input"></label>
          <input 
            class="input-formulier" 
            :class="{'error-input': errors.voornaam}" 
            id="voornaam-input" 
            v-model="formData.voornaam" 
            type="text" 
            placeholder="Voornaam" 
            @blur="validateVoornaam" 
          />
          <div class="error-message" v-if="errors.voornaam">{{ errors.voornaam }}</div>
        </div>
        
        
        <div class="Achternaam">
          <label for="achternaam-input"></label>
          <input class="input-formulier" id="achternaam-input" v-model="formData.achternaam" type="text" placeholder="Achternaam" @blur="validateAchternaam()" />
          <div class="error-message" v-if="errors.achternaam">{{ errors.achternaam }}</div>
        </div>
        
        <div class="E-mailadres">
          <label for="email-input"></label>
          <input class="input-formulier" type="email" id="email-input" name="E-mailadres" placeholder="E-mailadres" v-model="formData.email" @blur="validateEmail">
          <div class="error-message" v-if="errors.email">{{ errors.email }}</div>
        </div>
        
        <div class="Telefoonnummer">
          <label for="telefoonnummer-input"></label>
          <div class="telefoonnummer-input">
            <input class="input-formulier telefoonnummer" type="text" id="telefoonnummer-input" name="Telefoonnummer" placeholder="Telefoonnummer" v-model="formData.telefoonnummer" @blur="validateTelefoonnummer">
          </div>
          <div class="error-message" v-if="errors.telefoonnummer">{{ errors.telefoonnummer }}</div>
        </div>

          
        <div class="lijn"></div>

        <div class="vrijblijvend-gegevens beneden">Vul je postcode in en <span class="dik">kies een dealer</span> bij jou in de buurt:</div>


        <div>
          <div class="Postcode">
            <label for="Postcode">
              <input class="input-formulier" type="text" id="Postcode" name="Postcode" placeholder="Postcode" v-model="postcode" @blur="checkPostcode">
            </label>
            <div class="error">{{ errors.postcode }}</div>
          </div>
      
            <div>
              <div class="Kies-een-dealer">
                <label for="Kies-een-dealer"></label>
                <select 
                  class="input-formulier dealer-select"
                  id="Kies-een-dealer" 
                  name="Kies-een-dealer" 
                  v-model="formData.dealer" 
                  @change="validateDealer"
                >
                  <option class="selecteer-een-dealer" value="" disabled> <span class="input-rechts">Selecteer een dealer</span></option>
                  <option v-for="dealer in nearestDealers" :key="dealer.id" :value="dealer">{{ dealer.name }}</option>
                </select>
                <div class="error">{{ errors.dealer }}</div>
              </div>
            </div>
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


  <div class="footer-vragen-achtergrond">
    <div class="footer-vragen">Bekijk de Privacy & voorwaarden <br> van deze actie.</div>
  </div>


  </div>
</template>













<style scoped>

.dealer-select:first-child {
  margin-left: 30px!important;
}


.input-rechts {
  margin-left: 30px;
}

.selecteer-een-dealer {
  margin-left: 20px;
}


.error-input {
  border: 2px solid red!important;
}



.error-message {
  font-family:  'Hyundai Sans Head Office-Bold', Helvetica;
  margin-top: 1rem;
}

.error {
  font-family:  'Hyundai Sans Head Office-Bold', Helvetica;
  margin-top: 1rem;
}



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
    font-size: 2vw;
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
    width: 45vw;
    height: 3vw;    
    margin-top: 1vw;
    border-radius: 10px;
    background: #FBFBFB;
    border: 1px solid #F0F0F0;
    
}

.input-formulier::placeholder {
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



.dik {
  font-family: 'Hyundai Sans Head Office-Bold', Helvetica;
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
  width: 55vw;
}

.landcode-select {
  width: 8vw;
}


.geslacht-container {
  display: inline-flex;
  margin-right: 1rem;
  margin-top: 1rem;
}

.geslacht {
  color: #002e6b!important;
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica;
  margin-top: 5px;
  margin-left: 0.8rem;
  font-size: 1.2rem;
}


.selecteer-een-dealer {
  margin-left: 2rem;
}


#kies-een-dealer {
  margin-left: 1rem;
}


.selecteer-een-dealer {
  margin-left: 1rem;
}

input[type="text"], input[type="number"], input[type="email"], select {
  padding-left: 2vw;
}

input[type="text"], input[type="number"], input[type="email"] {
  color: black;
}







@media (max-width: 768px) {



  .top-balk {
    background-color: white;
    box-shadow: 0.0vw 8.27vw 21.6vw #00104c33;
    display: flex;
    gap: 23.33vw;
    height: 30vw;
    position: relative;
    width: 100.0vw;
  }

  .group-1 {
    display: flex;
    height: 36.8vw;
    width: 100.0vw;
  }
  
  
  .logo-hyundai {
    height: 7.04vw;
    margin-left: 5.33vw;
    margin-top: 12vw;
    width: 50.67vw;
  }
  
  .keurmerk {
    height: 10.68vw;
    margin-top: 10.5vw;
    width: 9.33vw;
  }





  .achtergrondVraag {
    height: 88rem;
  }

  .vragen-achtergrond {
    padding: 3rem;
    height: 84rem;
    width: 90vw;
    position: relative;
    top: -86rem;
  }

  .bedankt {
    font-size: 2rem
  }

  .vrijblijvend-gegevens {
    font-size: 1.3rem;
    line-height: 1.7;
  }

  .geslacht-container {
    display: inline-flex;
    margin-right: 1rem;
    margin: 0.5rem 0;
  }

  .geslacht {
    font-size: 1.2rem;
    color: #002e6b!important;
    font-family: 'Hyundai Sans Head Office-Regular', Helvetica;


  }

  .input-formulier {
    width: 100%;
    height: 3.75rem;
  }

  .input-formulier:placeholder-shown {
    font-size: 1rem
  }

  .input-formulier[value="+31"] {
    font-size: 1rem;
    padding-left: 1rem;
  }

  

  .telefoonnummer-input {
    width: 100%;
  }

  .telefoonnummer {
    width: 400%;
  }
.input-formulier {
  font-size: 1rem;
}

.input-formulier,
.input-formulier option {
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.8rem;
}

.lijn {
  width: 100%;
  margin: 7% 0;
}

.gekozen-dealer {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

#verzendknop {
  width: 90%;
  font-size: 1rem;
  padding: 2rem 0;
  margin-right: 200px;
}

.volgende {
  margin-left: 0;
}

.volgende-tekst {
  font-size: 1.3rem; 
  margin-left: 2rem;
  
}

.pijl-omdraaien {
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
}


.afronding {
  font-size: 14px;
  line-height: 2;
  
}

.dik {
  text-decoration: none;
/* font-family: 'Hyundai Sans Head Office-Regular', Helvetica; */
}




.geslacht:first-child {
  margin-right: 10px;
}

}






@media (min-width: 2000px) {
  .geslacht {
    font-size: 1.2vw;
    margin-top: 1rem;
    color: #002E6B;
  }

  .pijl-omdraaien {
    width: 2vw;
  }

  .geslacht-container input[type="radio"] {
    transform: scale(2);
    margin-top: 0.3vw;
  }
}



@media (max-width: 480px) {

  .achtergrondVraag {
    height: 92rem;
  }

  .vragen-achtergrond {
    padding: 3rem 3rem 3rem 2rem;
    height: 88rem;
    width: 90vw;
    position: relative;
    top: -90rem;
  }
  
  .geslacht  {
    margin-right: 0.2rem;
    font-size: 1rem;
  }

  .input-formulier {
    margin-bottom: 0;
  }


  .volgende-tekst {
    font-size: 1rem;
    margin-left: 0.5rem;

  }

  .volgende {
    margin-bottom: 1rem;

  }

  .pijl-omdraaien {
    margin: 0;
  }


  .vrijblijvend-gegevens {
    line-height: 1.2;
    width: 75vw;
  }

  .afronding {
    line-height: 1.4;
  }



  .footer-vragen-achtergrond {
    display: block;
    background-color: white;
    height: 20vw;
  }

  .footer-vragen {
    display: block;
    z-index: 999;
    color: var(--Text-grey, #C1C1C1);
    text-align: center;
    font-family: "Hyundai Sans Head Office-Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 350vw;
  }



}


</style>
