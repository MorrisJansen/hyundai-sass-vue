

<script>
import Keurmerk from "./Keurmerk";
import achtergrondVraag from "/img/achtergrondVraag.png";
import pijlVoren from "/img/vragen-pijl-volgende.svg"

export default {
  name: "DesktopVraag",
  components: {
    Keurmerk,
  },
  data() {
    return {
      achtergrondVraag: achtergrondVraag,
      pijlVoren: pijlVoren,
     
    };
  },
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
              <input type="radio" name="geslacht" value="meneer" /> Meneer
            </label>
            <label class="hyundaisansheadoffice-regular-midnight-blue-16px">
              <input type="radio" name="geslacht" value="mevrouw" /> Mevrouw
            </label>
          </div>
          


          <div class="Voornaam">
            <label for="Voornaam">
                <input class="input-formulier" type="text" id="Voornaam" name="Voornaam" placeholder="Voornaam">
            </label>
        </div>


        <div class="Achternaam">
            <label for="Achternaam">
                <input class="input-formulier" type="text" id="Achternaam" name="Achternaam" placeholder="Achternaam">
            </label>
        </div>


        <div class="E-mailadres">
            <label for="E-mailadres">
                <input class="input-formulier" type="text" id="E-mailadres" name="E-mailadres" placeholder="E-mailadres">
            </label>
        </div>


        <div class="Telefoonnummer">
            <label for="Telefoonnummer">
                <input class="input-formulier" type="text" id="Telefoonnummer" name="Telefoonnummer" placeholder="Telefoonnummer">
            </label>
        </div>
        


        <div class="lijn"></div>


        <div class="vrijblijvend-gegevens beneden">Vul je postcode in en <span id="dik" class="dik hyundaisansheadoffice-bold-midnight-blue-24px">kies een dealer</span> bij jou in de buurt:</div>

          


        <div class="Postcode">
            <label for="Postcode">
                <input class="input-formulier" type="text" id="Postcode" name="Postcode" placeholder="Postcode">
            </label>
        </div>


        <!-- dit moet nog een dropdown worden en waarschijnlijk iets te maken hebben met de api -->
        <div class="Kies een dealer">
            <label for="Kies een dealer">
                <input class="input-formulier" type="text" id="Kies een dealer" name="Kies een dealer" placeholder="Kies een dealer">
            </label>
        </div>







        <div class="vrijblijvend-gegevens beneden">
            De gekozen dealer neemt telefonisch contact met je op voor het bespreken van je wensen voor de berekening.
        </div>


        <a href="/afronden">
            <button class="volgende">
              <div class="volgende-tekst">Aanvraag afronden</div>
              <img :src="pijlVoren" class="pijl-omdraaien" alt="">
            </button>
          </a>




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
    font-family: "Hyundai Sans Head Office";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
}

.vrijblijvend-gegevens {
    color: var(--Primary-blue, #002E6B);
    font-family: Inter;
    font-size: 1.5rem;
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

.volgende {
    margin-left: 26vw;
    display: inline-flex;
    height: 4.7vw;
    width: 19vw;
    padding: 2.125rem 1.5625rem;
    align-items: center;
    gap: 1vw;
    border-radius: 0.4375rem;
    background: var(--Primary-blue, #002E6B);
    margin-top: 1vw;
  }
  
  .volgende-tekst {
    color: var(--White, #FFF);
    font-family: "Hyundai Sans Head Office";
    font-size: 1.6875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }


.afronding {
    color: #000A38;
    font-family: "Hyundai Sans Text Office";
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    margin-top: 2vw;
}


</style>
