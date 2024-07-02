<script>
import Keurmerk from "./Keurmerk";
import achtergrondVraag from "/img/achtergrondVraag.png";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "DesktopVraag",
  components: {
    Keurmerk,
  },
  data() {
    return {
      achtergrondVraag: achtergrondVraag,
      uniqueConversionId: uuidv4(),
    };
  },
  computed: {
    pixelUrl() {
      return `https://republish.topleaseauto.nl/m/6190/13f48bd4ecfb/?event=7228&unique_conversion_id=${this.uniqueConversionId}`;
    }
  }
}
</script>

<template>
  <div>
    <head>
      <img 
        referrerpolicy="no-referrer-when-downgrade"
        :src="pixelUrl" 
        style="width: 1px; height: 1px; border: 0px;" 
        alt="tracking-pixel">
    </head>



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
          <div class="vraag">Bedankt voor het invullen van het formulier.</div>
          <div class="vraag-hoeveel">Onze dealer neemt binnenkort contact met jou op.</div>
          <div class="weghalen">dit is de img pixel bedankt pagina</div>
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
  height: 18vw;
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
  width: 40vw;
  color: var(--Primary-blue, #002E6B);
  font-family: "Hyundai Sans Head Office-bold", 'Helvetica';
  font-size: 2.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: 3.3vw;
  margin-bottom: 2vw;
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
    height: 34rem;
  }

  .vragen-achtergrond {
    height: 20rem;
    width: 90vw;
    position: relative;
    top: -32rem;
  }

  .vraag {
    font-size: 2rem;
    width: 100%;
    line-height: 1.2;
  }

  .vraag-hoeveel {
    font-size: 1.4rem;
  }
}
</style>