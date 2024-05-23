
<script>
import Keurmerk from "./Keurmerk";
import achtergrondVraag from "/img/achtergrondVraag.png";

export default {
  name: "DesktopVraag",
  components: {
    Keurmerk,
  },
  data() {
    return {
      achtergrondVraag: achtergrondVraag,
    };
  },
}
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
          <div class="vraag">Bedankt voor het invullen van het formulier.</div>
          <div class="vraag-hoeveel">Onze dealer neemt binnenkort contact met jou op.</div>

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
    font-family:  'Hyundai Sans Head Office-Regular', Helvetica;
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
  

  

  

  </style>
  