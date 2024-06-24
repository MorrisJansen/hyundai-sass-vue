<template>
  <div class="section-uitvoeringen-tabel-correct">
    <div class="tabel-sectie-correct">
      <div class="uitvoeringen-en-hun-functionaliteiten-correct">
        Uitvoeringen en hun Functionaliteiten
      </div>
      <div class="tabel-wrapper-correct" ref="tabelWrapper">
        <div class="tabel-correct" ref="tabel">
          <div class="titels-container-correct">
            <div class="titel-item-correct titel-functionaliteiten-correct">functionaliteiten</div>
            <div v-for="(uitvoering, index) in uitvoeringen" :key="index" class="titel-item-correct">
              <div class="titel-tekst-container-correct">
                {{ uitvoering.naam }}
                <br v-if="uitvoering.prijs"/>
                <span v-if="uitvoering.prijs">{{ uitvoering.prijs }}</span>
              </div>
            </div>
          </div>
          <div class="kolommen-container-correct" ref="kolommen">
            <div class="functionaliteiten-correct kolom-item-correct">
              <div class="functionaliteit-item-container-correct">
                <div v-for="(functionaliteit, index) in functionaliteiten" :key="index" class="functionaliteit-item-correct">
                  {{ functionaliteit }}
                  <img v-if="index !== functionaliteiten.length - 1" class="separators-correct" :src="separatorsImage" alt="Separators" />
                </div>
              </div>
            </div>
            <div v-for="(uitvoering, index) in uitvoeringen" :key="index" class="kolom-item-correct">
              <div class="icoon-item-container-correct">
                <div v-for="(icon, iconIndex) in uitvoering.icons" :key="iconIndex" class="icoon-container-correct">
                  <img class="tabel-icons-correct" :src="icon" alt="Tabel icons" />
                  <img v-if="iconIndex !== uitvoering.icons.length - 1" class="separators-correct" :src="separatorsImage" alt="Separators" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabel-slider">
      <img @click="scrollLeft" :src="TabelSliderTerug" class="tabel-slider-item" alt="achteruit">
      <img @click="scrollRight" :src="TabelSlider" class="tabel-slider-item" alt="vooruit">
    </div>
  </div>
</template>

<script>
import TabelSlider from "/img/tabel-slider.svg";
import TabelSliderTerug from "/img/tabel-slider-terug.svg";

export default {
  data() {
    return {
      separatorsImage: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-119@2x.png",
      functionaliteiten: [
        "Actieve rijbaanassistentie (LKA)",
        "Cruise Control met limiet",
        "Noodremassistent (FCA) met voetgangerherkenning",
        "eCall (Emergency Call)",
        "Start/Stop systeem",
        "Achterbank in delen neerklapbaar",
        "Zij- en gordijnairbags",
        "ABS",
        "Vermoeidheidsherkenning",
        "8 inch multimediascherm",
        "USB aansluiting",
        "Android Auto (voorbereiding) / Apple Carplay",
        "Airconditioning (manueel)",
        "8 inch multimediascherm met navigatie",
        "Achteruitrijcamera met dynamische hulplijnen",
        "Snelheidsbordenherkenning (ISLW)",
        "Airconditioning (volautomatisch)",
        "Parkeersensoren achter",
        "3D afwerking interieurdelen",
        "16-inch lichtmetalen velgen",
        "Verwarmde stoelen voor",
        "Draadloos telefoon opladen",
        "Verwarmd stuurwiel"
      ],
      TabelSlider: TabelSlider,
      TabelSliderTerug: TabelSliderTerug,
      firstScroll: true,
      kolomBreedte: 195,
      uitvoeringen: [
        {
          naam: "i-Drive",
          class: "titel-i-drive",
          icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png").fill(
            "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png",
            9
          )
        },
        {
          naam: "Comfort",
          prijs: "vanaf €275 p/m",
          class: "titel-comfort",
          icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png").fill(
            "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png",
            13
          )
        },
        {
          naam: "Comfort Smart",
          class: "titel-comfort-smart",
          icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png").fill(
            "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png",
            16
          )
        },
        {
          naam: "Premium",
          class: "titel-premium",
          icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png").fill(
            "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png",
            18
          )
        },
        {
          naam: "N Line",
          class: "titel-n-line",
          icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png")
        }
      ]
    };
  },
  methods: {
  scrollLeft() {
    const tabelWrapper = this.$refs.tabelWrapper;
    tabelWrapper.scrollLeft -= this.kolomBreedte;
    
    if (tabelWrapper.scrollLeft === 0) {
      this.firstScroll = true;
    }
  },
  scrollRight() {
    const tabelWrapper = this.$refs.tabelWrapper;
    if (this.firstScroll) {
      tabelWrapper.scrollLeft += 144;
      this.firstScroll = false; 
    } else {
      tabelWrapper.scrollLeft += this.kolomBreedte;
    }
  }
}


};
</script>



<style lang="sass">

:root
  --separator-margin: 16px
  --icon-margin: 8px

.tabel-slider
  display: none

.section-uitvoeringen-tabel-correct
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  padding: 12rem 0 22rem 6rem
  box-sizing: border-box
  background-color: #f2f8ff

.tabel-sectie-correct
  width: 100%
  box-sizing: border-box

.uitvoeringen-en-hun-functionaliteiten-correct
  font-family: 'Hyundai Sans Head Office-Bold', sans-serif
  font-size: 3rem
  color: #002e6b
  text-align: center
  margin-bottom: 4rem

.tabel-wrapper-correct
  width: 100%
  overflow-x: auto
  display: flex
  justify-content: center
  box-sizing: border-box

.tabel-correct
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  box-sizing: border-box

@media (min-width: 1900px)
  .tabel-correct
    max-width: 100vw
    margin: 0 auto
    display: flex
    align-content: center
    justify-content: center
    align-items: center 

  .section-uitvoeringen-tabel-correct
    padding: 20% 0 20% 0!important

.titels-container-correct
  display: flex
  width: 100%
  gap: 5px
  margin-bottom: 5px
  box-sizing: border-box

.titel-item-correct
  font-family: 'Hyundai Sans Head Office-Bold', Helvetica
  color: #002e6b
  background-color: white
  font-size: 2.5rem
  text-align: center
  border: 1px solid #c1c1c1
  border-radius: 0.625rem
  flex: 1
  box-sizing: border-box
  height: 10rem
  display: flex
  align-items: center
  justify-content: center

.titel-functionaliteiten-correct
  flex: 3
  color: white
  background-color: #002e6b
  box-sizing: border-box

.titel-item-correct:nth-child(3)
  background-color: #002e6b
  color: white

.titel-tekst-container-correct
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.titel-item-correct span
  font-size: 20px
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica

.kolommen-container-correct
  display: flex
  width: 100%
  gap: 5px
  box-sizing: border-box

.kolom-item-correct
  flex: 1
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  border: 1px solid #c1c1c1
  border-radius: 0.625rem
  box-sizing: border-box
  background-color: white

.functionaliteiten-correct
  flex: 3
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  border: 1px solid #c1c1c1
  border-radius: 0.625rem
  box-sizing: border-box
  background-color: white

.functionaliteit-item-container-correct, .icoon-item-container-correct
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100%

.icoon-container-correct
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 100%
  margin-top: 16px
  margin-bottom: 16px



.functionaliteit-item-correct
  font-family: 'Hyundai Sans Head Office-Regular', Helvetica
  color: black
  font-size: 22px
  display: flex
  flex-direction: column
  text-align: start

.tabel-icons-correct
  width: 22px
  height: 22px

.separators-correct
  width: 80%
  height: 1px
  margin-top: 22px

.functionaliteiten-correct .separators-correct
  width: 60%
  


.functionaliteit-item-correct:first-child,
.icoon-container-correct:first-child
  margin-top: 54px

.functionaliteit-item-correct:last-child,
.icoon-container-correct:last-child
  margin-bottom: 54px

.tabel-wrapper-correct
  overflow-x: auto
  width: 100%
  display: block
  max-width: 100%

.tabel-correct
  display: block
  width: 1585px

@media (max-width: 768px)
  .section-uitvoeringen-tabel-correct

    padding: 0 0 10rem 0.5rem
    margin-top: 10rem

.titel-item-correct:nth-child(4) .titel-tekst-container-correct 
  margin-top: 9% 

.titel-item-correct:nth-child(2) .titel-tekst-container-correct,
.titel-item-correct:nth-child(5) .titel-tekst-container-correct,
.titel-item-correct:nth-child(6) .titel-tekst-container-correct
  margin-bottom: 11%


.titel-item-correct:nth-child(2) .titel-tekst-container-correct,
.titel-item-correct:nth-child(4) .titel-tekst-container-correct,
.titel-item-correct:nth-child(5) .titel-tekst-container-correct,
.titel-item-correct:nth-child(6) .titel-tekst-container-correct
  color: black


@media (max-width: 480px)

  .tabel-sectie-correct
    margin-top: 2rem


  .uitvoeringen-en-hun-functionaliteiten-correct
    font-size: 2rem
    margin-top: 20vw

  .onder
    margin-top: -350px!important

  .section-uitvoeringen-tabel-correct
    margin-top: 75vw
    padding-bottom: 21rem
    zoom: 55%

    .section-uitvoeringen-tabel-correct
    margin-left: 5%
    margin-right: 5%
  
  

    
@media (min-width: 501px) and (max-width: 625px)
  .section-uitvoeringen-tabel-correct
    zoom: 35%
    margin-left: 5%

@media (min-width: 626px) and (max-width: 750px)
  .section-uitvoeringen-tabel-correct
    zoom: 40%
    margin-left: 5%
    
@media (min-width: 751px) and (max-width: 875px)
  .section-uitvoeringen-tabel-correct
    zoom: 45%
    margin-left: 5%
    
@media (min-width: 876px) and (max-width: 1000px)
  .section-uitvoeringen-tabel-correct
    zoom: 50%
    margin-left: 5%
    
@media (min-width: 1001px) and (max-width: 1125px)
  .section-uitvoeringen-tabel-correct
    zoom: 58%
    margin-left: 5%
    
@media (min-width: 1126px) and (max-width: 1250px)
  .section-uitvoeringen-tabel-correct
    zoom: 65%
    margin-left: 5%
    
@media (min-width: 1251px) and (max-width: 1375px)
  .section-uitvoeringen-tabel-correct
    zoom: 70%
    margin-left: 5%
    
@media (min-width: 1376px) and (max-width: 1500px)
  .section-uitvoeringen-tabel-correct
    zoom: 75%
    margin-left: 5%
    
@media (min-width: 1501px) and (max-width: 1625px)
  .section-uitvoeringen-tabel-correct
    zoom: 80%
    margin-left: 5%
    
@media (min-width: 1626px) and (max-width: 1750px)
  .section-uitvoeringen-tabel-correct
    zoom: 85%
    margin-left: 5%
    
@media (min-width: 1751px) and (max-width: 1875px)
  .section-uitvoeringen-tabel-correct
    zoom: 90%
    margin-left: 5%
  


.knop-onder-tabel
  margin-top: -90%!important

.prijzentabel-i10-comfort-1
  width:  100%!important

.tabel-slider 
  display: flex
  margin-left: 33%

.tabel-slider-item
  height: 90px
  position: relative
  top: -40%
  z-index: 999

.tabel-slider-item:first-child
  margin-right: 10%


@media (min-width: 480px)
.tabel-slider-item 
  display: none




</style>
