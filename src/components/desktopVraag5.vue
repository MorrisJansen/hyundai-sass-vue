<script>
import Keurmerk from "./Keurmerk";
import achtergrondVraag from "/img/achtergrondVraag.png";
import vragenPijlVorige from "/img/vragen-pijl-vorige.svg";
import { addAntwoord } from "/src/antwoorden.js";

export default {
  name: "DesktopVraag",
  components: {
    Keurmerk,
  },
  data() {
    return {
      vragenPijlVorige: vragenPijlVorige,
      achtergrondVraag: achtergrondVraag,
      antwoordOpties: [
        { id: 4810, answer: "Ja, ik wil graag een proefrit maken" },
        { id: 4813, answer: "Nee, ik hoef geen proefrit te maken" },
      ],
      geselecteerdAntwoordId: null,
    };
  },
  methods: {
    goToNextQuestion() {
      if (this.geselecteerdAntwoordId !== null) {
        addAntwoord(this.geselecteerdAntwoordId); // Doorsturen van het geselecteerde antwoord-ID naar antwoorden.js
        setTimeout(() => {
          this.$router.push('/formulier');
        }, 1000);

      }
    },
  },
  watch: {
    geselecteerdAntwoordId() {
      this.goToNextQuestion();
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
        <div class="vraag-hoeveel">Vraag 5 van de 5</div>
        <div class="vraag">Wil jij graag een proefrit maken bij een dealer in jouw regio?</div>
        <div class="vraag-optie-container" v-for="(optie, index) in antwoordOpties" :key="index">
          <label class="vraag-optie">
            <input type="radio" :id="'optie' + (index + 1)" :value="optie.id" v-model="geselecteerdAntwoordId"> {{ optie.answer }}
          </label>
        </div>
        <button class="terug" @click="goToNextQuestion">
          <img :src="vragenPijlVorige" alt="">
          <div class="vorige-tekst">Vorige</div>
        </button>
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
  width: 45vw;
  color: var(--Primary-blue, #002E6B);
  font-family: "Hyundai Sans Head Office-bold", 'Helvetica';
  font-size: 2.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: 3.3vw;
  margin-bottom: 2vw;
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
  margin-top: 1.8vw

}


.vraag-optie-container {
  display: flex;
  flex-direction: column;
  margin-bottom:  2vw;
  background-color: var(--Light-blue, #F2F8FF);
  width: 46vw; 
  height: 5vw;
  flex-shrink: 0;
  border-radius: 45px;
}




.vraag-optie input[type="radio"] {
  transform: scale(1.5); 
  margin-left: 2vw;
  margin-right: 2vw;
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
    height: 64rem;
  }

  .vragen-achtergrond {
    height: 60rem;
    width: 90vw;
    position: relative;
    top: -62rem;
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
    width:  85%;
    color: var(--Primary-blue, #002E6B);
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family: 'Hyundai Sans Head Office-Bold', Helvetica;
    margin-bottom: 3rem;
  }







  .vraag-optie-container {
    height: auto;
    border-radius: 35px;
    margin-bottom: 1.5rem; 
    width: 100%;
    height: 5rem;


  }

  .vraag-optie {
    font-size: 1.4rem; 
    margin-top: 0.8rem; 
    margin-left: 1rem;
    gap: 1rem;
    width: 85%;    
  }

  .vraag-optie input[type="radio"] {
    transform: scale(1.5);
    margin-left: 1rem;
    margin-right: 0.5rem;
  }

  .terug {
    width: 35%;
  }


  .vorige-tekst {
    font-size: 1.5rem;
    margin-left: 1.5rem;
    font-family: 'Hyundai Sans Head Office-Regular', Helvetica;

  }

  .vorige-afbeelding {
    width: 50%;
  }



}
</style>
