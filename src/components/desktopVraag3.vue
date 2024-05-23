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
        <div class="vraag-hoeveel">Vraag 3 van de 5</div>
        <div class="vraag">Welk model heeft jouw voorkeur?</div>
        <div class="tussen-haakjes">(meerdere antwoorden mogelijk)</div>
        <div class="onderstreept">Bekijk <a href="/link-naar-functionaliteiten" class="link">hier</a> de functionaliteiten per model</div>
        <div class="vraag-optie-container" v-for="(optie, index) in antwoordOpties" :key="index">
          <label class="vraag-optie">
            <input type="checkbox" :id="'optie' + (index + 1)" :value="optie" v-model="geselecteerdeAntwoorden"> 
            <span class="switcher"></span>
            {{ optie }}
            <button v-if="optie === 'i10 Comfort'" class="i10-knop">Aanbieding!</button>
          </label>
        </div>
        <div class="pijlen-container">
          <a href="/vraag2">
            <button class="terug">
              <img :src="vragenPijlVorige" alt="">
              <div class="vorige-tekst">Vorige</div>
            </button>
          </a>
          <a href="/vraag4">
            <button class="volgende">
              <div class="volgende-tekst">Volgende</div>
              <img :src="vragenPijlVolgende" class="pijl-omdraaien" alt="">
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Keurmerk from "./Keurmerk";
import achtergrondVraag from "/img/achtergrondVraag.png";
import vragenPijlVorige from "/img/vragen-pijl-vorige.svg";
import vragenPijlVolgende from "/img/vragen-pijl-volgende.svg";

export default {
  name: "DesktopVraag",
  components: {
    Keurmerk,
  },
  data() {
    return {
      vragenPijlVolgende: vragenPijlVolgende,
      vragenPijlVorige: vragenPijlVorige,
      achtergrondVraag: achtergrondVraag,
      antwoordOpties: [
        "i10 i-Drive",
        "i10 Comfort",
        "i10 Comfort Smart",
        "i10 Premium",
        "i10 N Line",
        "Weet ik nog niet",
      ],
      geselecteerdeAntwoorden: [],
    };
  },
};
</script>

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
  padding: 4.028vw 7vw;
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

.vraag-hoeveel {
  color: var(--Primary-blue, #002E6B);
  font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-bottom: 0.5vw;
}

.vraag {
  width: 60vw;
  color: var(--Primary-blue, #002E6B);
  font-size: 2.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: 3.3vw;
  font-family: "Hyundai Sans Head Office-bold", 'Helvetica';

}

.tussen-haakjes {
  font-size: 1.4vw;
  color: var(--Primary-blue, #002E6B);
  font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
  margin-bottom: 0.5vw;
}

.onderstreept {
  color: var(--Primary-blue, #002E6B);
  margin-bottom: 2vw;
  font-size: 1vw;
  font-family:  'Hyundai Sans Head Office-Regular', Helvetica;

}

.onderstreept a {
  text-decoration: underline;
  color: var(--Primary-blue, #002E6B);
  font-family:  'Hyundai Sans Head Office-Regular', Helvetica;

}

.vraag-optie {
  color: var(--Text-color-tabel, #231E41);
  font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 1.4vw;
  position: relative;
  margin-left: 1.5vw;
}

.vraag-optie-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
  background-color: var(--Light-blue, #F2F8FF);
  width: 46vw;
  height: 5vw;
  flex-shrink: 0;
  border-radius: 45px;
}

.vraag-optie input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.switcher {
  position: relative;
  width: 4vw;
  height: 2vw;
  background-color: #ccc;
  border-radius: 1vw;
  transition: background-color 0.2s;
  margin-right: 1vw;
}

.switcher::before {
  content: "";
  position: absolute;
  width: 1.8vw;
  height: 1.8vw;
  left: 0.1vw;
  bottom: 0.1vw;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s;
}

.vraag-optie input[type="checkbox"]:checked + .switcher {
  background-color: var(--Primary-blue, #002E6B);
}

.vraag-optie input[type="checkbox"]:checked + .switcher::before {
  transform: translateX(2vw);
}


.pijlen-container {
  display: inline-flex;
}

.terug {
  display: inline-flex;
  gap: 1vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.vorige-tekst {
  color: var(--Primary-blue, #002E6B);
  font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}



.volgende {
  margin-left: 26vw;
  display: inline-flex;
  height: 4.7vw;
  width: 14vw;
  padding: 2.125rem 1.5625rem;
  align-items: center;
  gap: 3vw;
  border-radius: 0.4375rem;
  background: var(--Primary-blue, #002E6B);
}

.volgende-tekst {
  color: var(--White, #FFF);
  font-family:  'Hyundai Sans Head Office-Bold', Helvetica;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}



.i10-knop {
  margin-left: 20vw;
  display: inline-flex;
  padding: 0.625rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 2.125rem;
  background: #002E6B;
  color: #FFF;
  font-family: 'Hyundai Sans Head Office-Medium', Helvetica;
  font-size: 1.3125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.i10-knop:hover {
  background-color: darkblue;
}



</style>
