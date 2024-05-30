<script>
import Keurmerk from "./Keurmerk";
import achtergrondVraag from "/img/achtergrondVraag.png";
import vragenPijlVorige from "/img/vragen-pijl-vorige.svg";
import vragenPijlVolgende from "/img/vragen-pijl-volgende.svg";
import Tabel from "./tabel.vue";
import { addAntwoord } from "/src/antwoorden.js";

export default {
  name: "DesktopVraag",
  components: {
    Keurmerk,
    Tabel,
  },
  data() {
    return {
      vragenPijlVolgende: vragenPijlVolgende,
      vragenPijlVorige: vragenPijlVorige,
      achtergrondVraag: achtergrondVraag,
      antwoordOpties: [
        { id: 4750, answer: "i10 i-Drive" },
        { id: 4753, answer: "i10 Comfort" },
        { id: 4759, answer: "i10 Comfort Smart" },
        { id: 4762, answer: "i10 Premium" },
        { id: 4765, answer: "i10 N Line" },
        { id: 4774, answer: "Weet ik nog niet" }
      ],
      geselecteerdeAntwoorden: [], 
      showPopup: false
    };
  },
  methods: {
    goToNextQuestion() {
      if (this.geselecteerdeAntwoorden.length === 0) {
        alert("Selecteer minstens één antwoord.");
        return; 
      }

      this.geselecteerdeAntwoorden.forEach((antwoord) => {
        addAntwoord(antwoord.id); 
      });

      this.$router.push('/vraag4');
    },
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>

















<template>
  <div class="container-center-horizontal">
    <div class="top-balk">
      <a href="/campagne-hyundai-desktop">
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
        <div class="vraag-hoeveel">Vraag 3 van de 5</div>
        <div class="vraag">Welk model heeft jouw voorkeur?</div>
        <div class="tussen-haakjes">(meerdere antwoorden mogelijk)</div>
        <div class="onderstreept">Bekijk <a href="/link-naar-functionaliteiten" class="link">hier</a> de functionaliteiten per model</div>
        <div class="vraag-optie-container" v-for="(optie, index) in antwoordOpties" :key="index">
          <label 
            class="vraag-optie" 
            :class="{ 'i10-comfort': optie.answer === 'i10 Comfort' }"
          >
            <input 
              type="checkbox" 
              :id="'optie' + (index + 1)" 
              :value="{ id: optie.id, answer: optie.answer }" 
              v-model="geselecteerdeAntwoorden"
            > 
            <span class="switcher"></span>
            {{ optie.answer }}
            <button 
              v-if="optie.answer === 'i10 Comfort'" 
              class="i10-knop" 
              @click="openPopup"
            >
              Aanbieding!
            </button>
          </label>
        </div>
        
        <div class="pijlen-container">
          <a href="/vraag2">
            <button class="terug">
              <img :src="vragenPijlVorige" alt="">
              <div class="vorige-tekst">Vorige</div>
            </button>
          </a>
          <button class="volgende" @click="goToNextQuestion">
            <div class="volgende-tekst">Volgende</div>
            <img :src="vragenPijlVolgende" class="pijl-omdraaien" alt="">
          </button>
        </div>
      </div>
      
      <div v-if="showPopup" class="popup-overlay" @click="closePopup">
        <div class="popup" @click.stop>
          <div class="popup-content">
            <Tabel />
          </div>
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
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica;
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
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica;
  margin-bottom: 0.5vw;
}

.onderstreept {
  color: var(--Primary-blue, #002E6B);
  margin-bottom: 2vw;
  font-size: 1vw;
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica;
}

.onderstreept a {
  text-decoration: underline;
  color: var(--Primary-blue, #002E6B);
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica;
}

.vraag-optie {
  color: var(--Text-color-tabel, #231E41);
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica;
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
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica;
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
  font-family: 'Hyundai Sans Head Office-Bold', Helvetica;
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

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 60%;
  height: 60%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.popup-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
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
    height: 67rem;
  }

  .vragen-achtergrond {
    height: 63rem;
    width: 90vw;
    position: relative;
    top: -65rem;
  }



  .vraag-hoeveel {
    font-family: 'Hyundai Sans Head Office-Bold', Helvetica;
    color: var(--Primary-blue, #002E6B);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 95%;
  }

  .vraag {
    width:  90%;
    color: var(--Primary-blue, #002E6B);
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family: 'Hyundai Sans Head Office-Bold', Helvetica;
    margin-bottom: 0.5rem;
    

  }





  .i10-comfort {
    margin-top: 1px!important;
  }


  .i10-knop {

    margin-left: 0;
    width: 40%;
    
  }

  .vraag-optie:nth-child(2) {
    margin-top: 0rem!important;
  }



  .vraag-optie-container {
    height: auto; 
    border-radius: 35px; 
    margin-bottom: 2rem;
    width: 100%;
    height: 5rem;



  }

  .vraag-optie {
    font-size: 1.3rem;
    margin-top: 1.7rem;
    margin-left: 0rem;
    gap: 1rem;
  }



  .terug {
    width: 35%;
    margin-left: 2rem;
    margin-top: 15px;
  }


  .vorige-tekst {
    font-size: 1.5rem;
    margin-left: 1.5rem;
    font-family: 'Hyundai Sans Head Office-Regular', Helvetica;

  }

  .vorige-afbeelding {
    width: 50%;
  }
  
  .volgende {
    margin-left: 5%;
    width: 100%;
  }

  @media (min-width: 640px) and (max-width: 768px) {
    .volgende {
        margin-left: 35%;
    }
}



  .tussen-haakjes {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }

  .onderstreept {
    display: none;
  }

  .popup {
    display: none;
  }


  .switcher {
    width: 3rem; 
    height: 1.4rem; 
    border-radius: 35px;


  }

  .switcher::before {
    width: 1.5rem;
    height: 1.45rem;
    left: 0.1vw;
    bottom: 0.1vw;
    border-radius: 35px;
  }

  .vraag-optie input[type="checkbox"]:checked + .switcher::before {
    transform: translateX(1.48rem);
  }



  .vraag-optie.i10-comfort {
    margin-bottom: 30px!important;
    position: relative;
    top: 15px;
    font-size: 1.3rem;

  }

  .vraag-optie.i10-comfort .i10-knop {
    width: 40%;
  }



}









</style>