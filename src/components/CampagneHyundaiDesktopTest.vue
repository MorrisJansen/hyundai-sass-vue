<script>
import Keurmerk from "./Keurmerk";
import XLabel from "./XLabel";
import Voordeel2 from "./Voordeel2";
import Onderdelen from "./Onderdelen";
import Onderdelen2 from "./Onderdelen2";
import ComfortSmart from "./ComfortSmart";
import overlayImage from '/img/overlay.png';
import Carousel from './carousel';
import Tabel from "./tabel.vue";


export default {
  name: "CampagneHyundaiDesktopTest",
  components: {
    Keurmerk,
    XLabel,
    Voordeel2,
    Onderdelen,
    Onderdelen2,
    ComfortSmart,
    Carousel,
    Tabel,
  },
  props: 
    [
    "overlapGroup",
    "arrowLeft",
    "arrowRight",
    "tijdelijkVoorMaar275PM",
    "ontdekMeer",
    "privateLeaseNuTij",
    "deVernieuwdeHyundaiI10",
    "maakEenGrootsStatement",
    "spanText1",
    "spanText2",
    "hetMaandbedragVa",
    "vrouwBlijAuto",
    "stuurwiel",
    "rijdenInEenNieuweHyundai",
    "hyundaiI101",
    "allInclusiveGeniet",
    "vastMaandbedragInc",
    "hyundaiI102",
    "eenFrisseKijkOpEenGedurfdOntwerp",
    "handMobiel",
    "binnenAuto",
    "dashboardAuto",
    "binnenAuto2",
    "uitvoeringenEnHunFunctionaliteiten",
    "billMontly1",
    "profileGroups",
    "separators1",
    "accountViwers",
    "separators2",
    "socialMediaDashboa",
    "separators3",
    "shopifyDashboard",
    "separators4",
    "mixedDragAndDrop",
    "separators5",
    "downloadablePdfRep",
    "separators6",
    "whiteLabelReports",
    "separators7",
    "competitorAnalytics",
    "separators8",
    "automatedEmailRepo",
    "separators9",
    "roiAnalyticsAndTr",
    "separators10",
    "correlationAnalysis",
    "separators11",
    "trendDetection1",
    "separators12",
    "trendDetection2",
    "separators13",
    "trendDetection3",
    "separators14",
    "trendDetection4",
    "separators15",
    "trendDetection5",
    "separators16",
    "trendDetection6",
    "separators17",
    "trendDetection7",
    "separators18",
    "trendDetection8",
    "separators19",
    "trendDetection9",
    "separators20",
    "trendDetection10",
    "separators21",
    "trendDetection11",
    "separators22",
    "trendDetection12",
    "titel1",
    "spanText3",
    "spanText4",
    "titel2",
    "prijzentabelI10Comfort",
    "billMontly2",
    "titel3",
    "titel4",
    "line2",
    "bekijkDePrivacy",
    "xLabelProps",
    "voordeel21Props",
    "voordeel22Props",
    "voordeel23Props",
    "voordeel24Props",
    "onderdelen1Props",
    "onderdelen2Props",
    "comfortSmart1Props",
    "comfortSmart2Props",
    "onderdelen2Props2",
  ],
  data() {
    return {
      currentImage: '',
      overlayImage: overlayImage
    };
  },
  created() {
    this.currentImage = this.overlapGroup;
  },
  methods: {
    toggleImage() {
      this.currentImage = this.currentImage === this.overlapGroup ? this.overlayImage : this.overlapGroup;
    }
  }
};







</script>




<template>
  <div class="container-center-horizontal">
    <div class="campagne-hyundai-desktop-test screen">
      <div class="overlap-group2">
        <div class="group-1">
          <div class="overlap-group" :style="{'background-image': 'url(' + overlayGroup + ')'}"></div>

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
        </div>



        <div class="section-header">
          <div class="overlap-group1">
            <div class="overlap-group afbeelding-radius" :style="{ 'background-image': 'url(' + currentImage + ')' }">
              <div class="flex-col">
                <div
                  class="tijdelijk-voor-maar-275-pm hyundaisansheadoffice-bold-white-41px"
                  v-html="tijdelijkVoorMaar275PM"
                ></div>
                <div class="ontdek-meer">{{ ontdekMeer }}</div>
              </div>
              <div class="navigatie-slider">
                <button class="ontzichtbaar" @click="toggleImage">
                  <img class="arrow-left" :src="arrowLeft" alt="Arrow left" />
                </button>
                <button class="ontzichtbaar" @click="toggleImage">
                  <img class="arrow-right" :src="arrowRight" alt="Arrow right" />
                </button>
              </div>
              
            </div>



            
            <div class="cta-balk">
              <p
                class="private-lease-nu-tij hyundaisansheadoffice-bold-midnight-blue-nu-tijdelijk"
                v-html="privateLeaseNuTij"></p>

                <a href="/vraag1">
                  <button class="offerte-knop">
                    <div class="vraag-offerte-aan">Vraag offerte aan</div>
                    <img class="arrow" src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png" alt="Arrow button" />
                    </button>
                </a>


              </div>
          </div>
          <div class="hoofd-titel-tekst">
            <x-label :nieuw="xLabelProps.nieuw" />
            <div class="frame-5">
              <h1 class="de-vernieuwde-hyundai-i10" v-html="deVernieuwdeHyundaiI10"></h1>
              <div class="maak-een-groots-statement">{{ maakEenGrootsStatement }}</div>
            </div>
          </div>
          <p class="profiteer-nu-van-een bodymedium">
            <span class="span0 bodymedium">Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort.</span>
            <br>
            <span class="span1">Je stapt al in vanaf €275 per maand*</span>
          </p>
          <p class="het-maandbedrag-va hyundaisansheadoffice-regular-normal-silver-16px">{{ hetMaandbedragVa }}</p>
        </div>
      </div>
      <div class="section-all-inclusive">
        <div class="overlap-group-1">
          <img class="vrouw-blij-auto" :src="vrouwBlijAuto" alt="vrouw blij auto" />
          <div class="voordelen-blokken">
            <div class="voordeel-1">
              <img class="stuurwiel" :src="stuurwiel" alt="stuurwiel" />
              <div
                class="rijden-in-een-nieuwe-hyundai hyundaisansheadoffice-bold-midnight-blue-24px"
                v-html="rijdenInEenNieuweHyundai"
              ></div>
            </div>
            <voordeel2
              :coins="voordeel21Props.coins"
              :aantrekkelijkVastBedragPM="voordeel21Props.aantrekkelijkVastBedragPM"
            />
            <voordeel2
              :coins="voordeel22Props.coins"
              :aantrekkelijkVastBedragPM="voordeel22Props.aantrekkelijkVastBedragPM"
            />
            <voordeel2
              :coins="voordeel23Props.coins"
              :aantrekkelijkVastBedragPM="voordeel23Props.aantrekkelijkVastBedragPM"
            />
            <voordeel2
              :coins="voordeel24Props.coins"
              :aantrekkelijkVastBedragPM="voordeel24Props.aantrekkelijkVastBedragPM"
            />
          </div>
        </div>
        <div class="frame-19">
          <div class="titel-all-inclusive">
            <div class="hyundai-i10 hyundaisansheadoffice-bold-midnight-blue-18px">{{ hyundaiI101 }}</div>
            <p class="all-inclusive-geniet hyundaisansheadoffice-bold-midnight-blue-48px">{{ allInclusiveGeniet }}</p>
          </div>
          <p
            class="vast-maandbedrag-inc hyundaisansheadoffice-regular-normal-black-16px"
            v-html="vastMaandbedragInc"
          ></p>
        </div>
      </div>





      <div class="section-frisse-kijk-slider">
        <div class="titel-frisse-kijk">
          <div class="hyundai-i10 hyundaisansheadoffice-bold-midnight-blue-18px">{{ hyundaiI102 }}</div>
          <p class="een-frisse-kijk-op-een-gedurfd-ontwerp hyundaisansheadoffice-bold-midnight-blue-48px">
            {{ eenFrisseKijkOpEenGedurfdOntwerp }}
          </p>
        </div>





        <Carousel></Carousel>





      </div>



      <Tabel></Tabel>
      





      <div class="section-prijzentabel">
        <div class="prijzentabel-i10-comfort hyundaisansheadoffice-bold-midnight-blue-48px">
          Prijzentabel i10 Comfort
        </div>


        <div class="tabel-prijzen">
          <div class="container-prijzen">

            <div class="titel-7">
              <div class="bill-montly-1 hyundaisansheadoffice-bold-white-32px">Aantal maanden</div>
            </div>
           <div class="frame-9-1 licht-blauw-achtergrond hyundaisansheadoffice-regular-normal-port-gore-21px">
              <div class="border-prijzentabel"></div>
              <div class="profile-groups-1">60 Maanden</div>
              <img class="separators-5" :src="separators1" alt="Separators" />
              <div class="account-viwers">60 Maanden</div>
              <img class="separators-5" :src="separators2" alt="Separators" />
              <div class="social-media-dashboa">48 Maanden</div>
              <img class="separators-5" :src="separators3" alt="Separators" />
              <div class="shopify-dashboard">48 Maanden</div>
            </div>
          </div>


        <div class="container-prijzen">
          <div class="titel">
            <div class="titel-8 hyundaisansheadoffice-bold-port-gore-32px">Aantal km</div>
          </div>

          <div class="frame-9-1 hyundaisansheadoffice-regular-normal-port-gore-21px">
            <div class="border-prijzentabel"></div>
            <div class="profile-groups-1">10.000</div>
            <img class="separators-5" :src="separators1" alt="Separators" />
            <div class="account-viwers">20.000</div>
            <img class="separators-5" :src="separators2" alt="Separators" />
            <div class="social-media-dashboa">10.000</div>
            <img class="separators-5" :src="separators3" alt="Separators" />
            <div class="shopify-dashboard">20.000</div>
          </div>
        </div>


      
        <div class="container-prijzen">
          <div class="titel">
            <div class="titel-9 hyundaisansheadoffice-bold-port-gore-32px">Maandbedrag</div>
          </div>

        <div class="frame-9-1 hyundaisansheadoffice-regular-normal-port-gore-21px">
          <div class="border-prijzentabel"></div>
          <div class="profile-groups-1">€ 312,-</div>
          <img class="separators-5" :src="separators1" alt="Separators" />
          <div class="account-viwers">€ 358,11</div>
          <img class="separators-5" :src="separators2" alt="Separators" />
          <div class="social-media-dashboa">€ 342,-</div>
          <img class="separators-5" :src="separators3" alt="Separators" />
          <div class="shopify-dashboard">€ 385,04</div>
        </div>
      </div>

      </div>
    </div>


    <a href="/vraag1">
      <button class="offerte-knop midden-knop" onclick="navigateToQuestions()">
        <div class="vraag-offerte-aan">Vraag offerte aan</div>
        <img class="arrow" src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png" alt="Arrow button" />
      </button>
    </a>



      <footer class="footer">
        <img class="line-2" :src="line2" alt="Line 2" />
        <p class="bekijk-de-privacy hyundaisansheadoffice-regular-normal-silver-16px">{{ bekijkDePrivacy }}</p>
      </footer>
    </div>
  </div>
</template>



<style lang="sass">
@import '../../variables'

.campagne-hyundai-desktop-test
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: 387.29vw
  overflow: hidden
  width: 100.0vw

.overlap-group2
  height: 58.59vw
  margin-left: 0.21vw
  position: relative
  width: 100.21vw

.group-1
  display: flex
  height: 7.19vw
  left: 0
  position: absolute
  top: 0
  width: 100.0vw

.top-balk
  background-color: $white
  box-shadow: 0.0vw 1.61vw 4.22vw #00104c33
  display: flex
  gap: 65.68vw
  height: 7.21vw
  position: relative
  width: 100.0vw

.logo-hyundai
  height: 2.21vw
  margin-left: 7.66vw
  margin-top: 2.5vw
  width: 16.04vw

.section-header
  height: 51.41vw
  left: 7.6vw
  position: absolute
  top: 7.19vw
  width: 92.6vw

.overlap-group1
  height: 51.41vw
  left: 0.05vw
  position: absolute
  top: 0
  width: 92.34vw

.overlap-group
  align-items: flex-end
  background-position: 50% 50%
  background-size: cover
  display: flex
  gap: 13.75vw
  height: 51.41vw
  justify-content: flex-end
  left: 39.74vw
  min-width: 52.6vw
  padding: 5.31vw 8.34vw
  position: absolute
  top: 0

.flex-col
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 32.97vw
  min-height: 39.43vw
  width: 15.99vw

.tijdelijk-voor-maar-275-pm
  letter-spacing: 0
  line-height: 2.66vw
  margin-left: 0
  min-height: 5.31vw

.ontdek-meer
  color: $white
  font-family: $font-family-hyundai_sans_head_office-medium
  font-size: 0.94vw
  font-weight: 500
  letter-spacing: 0.36vw
  line-height: normal
  min-height: 1.15vw

.navigatie-slider
  align-items: flex-start
  display: inline-flex
  gap: 2.24vw
  margin-bottom: 0.03vw
  position: relative

.ontzichtbaar
  border: none
  margin: 0
  padding: 0
  background: none
  cursor: pointer

.arrow-left
  height: 1.3vw
  margin-bottom: -0.09vw
  margin-left: -0.18vw
  margin-top: -0.09vw
  position: relative
  width: 1.3vw

.arrow-right
  height: 1.3vw
  margin-bottom: -0.09vw
  margin-right: -0.18vw
  margin-top: -0.09vw
  position: relative
  width: 1.3vw



.afbeelding-radius
  border-radius: 0rem 0rem 0rem 6.25rem


.cta-balk
  display: inline-flex
  align-items: center
  background-color: $white
  border-radius: 0.62vw
  box-shadow: 0.0vw 1.61vw 4.22vw #00104c33
  left: 0
  overflow: hidden
  position: relative
  top: 32vw
  padding: 2.361vw 2.361vw
  gap: 8vw
  width: 50vw
  max-width: 57.3125rem
  max-height: 12.917vw




    

  @media (min-width: 768px )
    .vraag-offerte-aan
      letter-spacing: 0
      line-height: normal
      margin-top: -0.1vw
      position: relative
      width: fit-content
      border-radius: 0.4375rem
      color: $white
      font-size: 1.375vw
      font-family: $font-family-hyundai_sans_head_office-bold
      text-align: center


    .offerte-knop
      width: 22.917vw
      height: 7.014vw
      max-width: 20.625rem
      max-height: 6.3125rem

@media (min-width: 768px) and (max-width: 1150px)
  .midden-knop
    margin-top: 75px
    
  .offerte-knop
    width: 22.917vw
    height: 7.014vw
    gap: 0.8rem!important
  
  .vraag-offerte-aan
    font-size: 1.375vw!important






  






.offerte-knop
  align-items: center
  background-color: $primary-blue
  border-radius: 0.36vw
  display: inline-flex
  flex: 0 0 auto
  overflow: hidden
  padding: 34px 25px
  position: relative
  border-radius: 7px
  gap: 1.75rem



.vraag-offerte-aan
  letter-spacing: 0
  line-height: normal
  margin-top: -0.1vw
  position: relative
  width: fit-content
  border-radius: 0.4375rem
  color: $white
  font-size: 1.6875rem
  font-family: $font-family-hyundai_sans_head_office-bold
  text-align: center


.arrow
  width: 1.5rem
  height: 0.8125rem


.private-lease-nu-tij
  letter-spacing: 0
  line-height: 1.88vw
  position: relative
  width: fit-content




.rijden-in-een-nieuwe-hyundai
  letter-spacing: 0
  line-height: 1.88vw
  position: relative
  width: fit-content
  max-width: 17.25rem

.hoofd-titel-tekst
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 0.31vw
  left: 0
  position: absolute
  top: 6.04vw




.frame-5
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 0.26vw
  position: relative

.de-vernieuwde-hyundai-i10
  color: $primary-blue
  font-family: $font-family-hyundai_sans_head_office-bold
  font-size: 4.27vw
  font-weight: 700
  letter-spacing: 0
  line-height: 4.69vw
  margin-top: -0.05vw
  position: relative
  width: 70.23vw


.maak-een-groots-statement
  color: $primary-blue
  font-family: $font-family-hyundai_sans_head_office-bold
  font-size: 2.66vw
  font-weight: 700
  letter-spacing: 0
  line-height: 4.69vw
  position: relative
  white-space: nowrap
  width: fit-content

.profiteer-nu-van-een
  color: $black
  font-weight: 400
  left: 0
  line-height: 1.88vw
  position: absolute
  top: 25.47vw
  width: 28.49vw

.span0
  font-weight: 500

.span1
  font-family: $font-family-hyundai_sans_head_office-bold
  font-size: $font-size-xl
  font-weight: 700
  letter-spacing: 0

.het-maandbedrag-va
  left: 0.05vw
  letter-spacing: 0
  line-height: 1.25vw
  position: relative
  top: 48vw
  width: 29.95vw

.section-all-inclusive
  background-color: $light-blue
  height: 60.26vw
  margin-top: 6.77vw
  position: relative
  width: 100.0vw

.overlap-group-1
  height: 47.14vw
  left: 0
  position: absolute
  top: 5.83vw
  width: 91.41vw

.vrouw-blij-auto
  height: 47.14vw
  left: 0
  object-fit: cover
  position: absolute
  top: 0
  width: 42.34vw

.voordelen-blokken
  align-items: flex-start
  display: inline-flex
  gap: 0.7vw
  left: 8.33vw
  position: absolute
  top: 31.87vw

.voordeel-1
  align-items: flex-start
  background-color: $white
  border-radius: 0.86vw
  box-shadow: 0.0vw 1.41vw 2.16vw #26397e24
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 1.35vw
  overflow: hidden
  padding: 2.43vw 2.59vw
  position: relative

.stuurwiel
  height: 2.08vw
  position: relative
  width: 2.08vw

.frame-19
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 1.98vw
  left: 50.36vw
  position: absolute
  top: 10.05vw

.titel-all-inclusive
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 0.52vw
  position: relative

.hyundai-i10
  letter-spacing: 0
  line-height: 1.67vw
  margin-top: -0.05vw
  position: relative
  white-space: nowrap
  width: fit-content
  font-size: $font-size-xl
  font-family: $font-family-hyundai_sans_head_office-bold
  color: $primary-blue



.all-inclusive-geniet
  letter-spacing: 0
  line-height: 3.07vw
  position: relative
  width: 35.1vw

.vast-maandbedrag-inc
  letter-spacing: 0
  line-height: 1.25vw
  position: relative
  width: 36.2vw

.section-frisse-kijk-slider
  align-self: flex-end
  display: flex
  flex-direction: column
  height: 52.24vw
  margin-right: -19.58vw
  margin-top: 8.18vw
  width: 114.01vw

.titel-frisse-kijk
  align-items: center
  display: inline-flex
  flex-direction: column
  gap: 1.25vw
  height: 5.99vw
  margin-left: 21.51vw
  position: relative
  width: 45.16vw

.een-frisse-kijk-op-een-gedurfd-ontwerp
  letter-spacing: 0
  line-height: 3.07vw
  position: relative
  text-align: center
  white-space: nowrap
  width: fit-content

.slider-images
  align-items: flex-start
  display: inline-flex
  gap: 2.86vw
  height: 32.97vw
  margin-top: 3.65vw
  position: relative
  width: 114.01vw

.hand-mobiel
  height: 32.97vw
  object-fit: cover
  position: relative
  width: 26.35vw

.x-auto
  height: 32.97vw
  position: relative
  width: 26.35vw

.binnen-auto-2
  height: 32.97vw
  object-fit: cover
  position: relative
  width: 6.77vw

.slider-indicator
  align-items: flex-start
  display: inline-flex
  gap: 0.83vw
  height: 0.42vw
  margin-top: 9.22vw
  position: relative
  width: 7.66vw

.x01
  background-color: $primary-blue
  border-radius: 2.08vw
  height: 0.42vw
  position: relative
  width: 3.28vw

.slider-indicator-item
  background-color: $text-grey
  border-radius: 2.08vw
  height: 0.42vw
  position: relative
  width: 1.35vw












//  hier begint de tabel css ::::::::::::::::::::::::::::::::::::::::



.section-uitvoeringen-tabel
  background-color: $light-blue
  display: flex
  height: 125.68vw
  margin-top: 9.79vw
  width: 100.0vw


@media (min-width: 768px) and (max-width: 1100px)
  .section-uitvoeringen-tabel
    height: 145vw



.tabel-sectie
  align-items: center
  display: inline-flex
  flex-direction: column
  gap: 3.28vw
  height: 109.9vw
  margin-left: 7.6vw
  margin-top: 7.55vw
  position: relative
  width: 84.54vw

.uitvoeringen-en-hun-functionaliteiten
  letter-spacing: 0
  line-height: 3.07vw
  margin-top: -0.05vw
  position: relative
  white-space: nowrap
  width: fit-content



.tabel
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  gap: 0.37vw
  position: relative
  height: 100vw

.functionaliteiten
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 0.37vw
  position: relative

.titel-1
  display: flex
  height: 13.01306rem
  padding: 0rem 3.67338rem 0rem 4.54575rem
  align-items: center
  border-radius: 0.625rem
  border: 1px solid var(--Text-grey, #C1C1C1)
  background: var(--Primary-blue, #002E6B)
  width: 34.4rem


.bill-montly
  color: var(--White, #FFF)
  font-family: "Hyundai Sans Head Office"
  font-size: 2.5625rem
  font-style: normal
  font-weight: 700
  line-height: 3.1875rem
  text-align: center

.onderdelen
  background-color: $white
  border: 1px solid
  border-color: $text-grey
  border-radius: 0.625rem
  display: flex
  height: 1508px
  overflow: hidden
  position: relative
  width: 34.4rem

.frame-9
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: 1.26956rem

  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 0.954rem
  height: 79.02vw
  margin-left: 1.38vw
  margin-top: 2.76vw
  position: relative
  width: 26.2vw

.profile-groups
  letter-spacing: 0
  line-height: normal
  position: relative
  width: fit-content
  font-size: 1.3125rem

.profile-groups:nth-child(5)
  font-size: 19px

.separators
  width: 21.00969rem
  height: 0.07194rem

.frame-9-item
  letter-spacing: 0
  line-height: normal
  position: relative
  width: fit-content

.tabel-item
  align-items: flex-start
  flex: 0 0 auto
  flex-direction: column
  gap: 0.44rem
  overflow: hidden
  position: relative

.titel-2
  background-color: $white
  border: 1px  solid
  border-color: $text-grey
  border-radius:  0.625rem
  display: flex
  height: 13.01306rem
  position: relative
  width: 12.95rem

.titel-3
  height: 13.01306rem
  width: 12.95rem
  justify-content: center
  align-items: center
  letter-spacing: 0
  text-align: center
  white-space: nowrap
  margin-top: 70px

  

.titel-4
  background-color: $primary-blue
  border: 1px solid
  border-color: $text-grey
  border-radius: 0.625rem
  height: 13.01306rem
  width: 12.95rem

.titel-5
  margin-left: 10%
  display: inline
  justify-content: center
  align-items: center
  position: relative
  top: 32%

@media (min-width: 768px)
  .titel-5
    position: relative!important
    bottom: 30px

  .titel-4
    padding-top: 2rem


.span0-1
  color: var(--White, #FFF)
  text-align: center
  font-size: 2.5625rem!important
  font-style: normal
  font-weight: 700
  line-height: 0


  font-family: "Hyundai Sans Head Office-Bold", Helvetica
  font-style: normal
  font-weight: 700


.span1-1
  font-weight: 500
  color: var(--White, #FFF)
  font-family: "Hyundai Sans Head Office"
  font-size: 1.3125rem
  font-style: normal
  position: relative
  margin-left: 10%

.n-line

  display: flex
  height: 13.01306rem
  position: relative
  width: 12.95rem
  justify-content: center
  border-radius: 0.625rem
  border: 1px solid var(--Text-grey, #C1C1C1)
  background: var(--White, #FFF)

.titel-6
  color: var(--Text-color-tabel, #231E41)
  text-align: center
  font-family: "Hyundai Sans Head Office"
  font-size: 2.5625rem
  font-style: normal
  font-weight: 700
  line-height: 3.1875rem
  margin-top: 65px


@media (min-width: 768px)
  .profile-groups
    margin: 2.5px 0

















.section-prijzentabel
  display: flex
  flex-direction: column
  gap: 3.28vw
  height: 39.01vw
  margin-left: 0.06vw
  margin-top: 9.74vw
  position: relative
  width: 38.39vw

.prijzentabel-i10-comfort
  height: 3.07vw
  letter-spacing: 0
  line-height: 3.07vw
  margin-left: 4.74vw
  white-space: nowrap
  width: 28.8vw

.tabel-prijzen
  align-items: flex-start
  display: inline-flex
  gap: 0.37vw
  height: 24.11vw
  position: relative
  width: 38.29vw

.aantal-maanden
  align-items: flex-start
  align-self: stretch
  display: flex
  flex-direction: column
  gap: 0.37vw
  position: relative
  width: 12.55vw

.titel-7
  align-items: center
  background-color: $primary-blue
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 6.82vw
  margin-left: -0.05vw
  margin-top: -0.05vw
  overflow: hidden
  position: relative
  width: 12.6vw

.bill-montly-1
  flex: 1
  height: 3.33vw
  letter-spacing: 0
  line-height: 1.67vw
  margin-left: 13.1%
  margin-right: 11.42%
  margin-top: -0.05vw
  width: 9.51vw

.onderdelen-1
  background-color: $light-blue
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  flex: 1
  flex-grow: 1
  margin-bottom: -0.05vw
  margin-left: -0.05vw
  overflow: hidden
  position: relative
  width: 12.6vw

.tabel-prijzen-item
  align-items: flex-start
  align-self: stretch
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 0.52vw
  position: relative

.titel
  background-color: $white
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 6.82vw

  position: relative
  width: 12.5vw

.titel-8
  height: 1.67vw
  letter-spacing: 0
  line-height: 1.67vw
  margin-left: 1.57vw
  margin-top: 2.29vw
  text-align: center
  white-space: nowrap
  width: 8.23vw

.titel-9
  height: 1.67vw
  letter-spacing: 0
  line-height: 1.67vw
  margin-left: 0.5vw
  margin-top: 2.29vw
  text-align: center
  white-space: nowrap
  width: 11.51vw

.footer
  align-items: center
  background-color: transparent
  display: flex
  flex-direction: column
  flex-shrink: 1
  gap: 2.6vw
  height: 3.85vw
  margin-left: 0.16vw
  margin-top: 10.1vw
  width: 91.3vw

.line-2
  height: 0.05vw
  margin-left: -0.1vw
  margin-top: -0.05vw
  object-fit: cover
  width: 91.2vw

.bekijk-de-privacy
  height: 1.25vw
  letter-spacing: 0
  line-height: 1.25vw
  margin-left: -0.1vw
  text-align: center
  width: 29.95vw




.vast-maandbedrag-inc
  list-style-type: disc







  









.account-viwers,
.social-media-dashboa,
.shopify-dashboard
  letter-spacing: 0
  line-height: normal
  position: relative
  width: fit-content








.profile-groups-1,
.account-viwers,
.social-media-dashboa,
.shopify-dashboard
  display: flex
  flex-direction: row
  font-size: 0.9vw
  margin-left: 1.5vw

@media (min-width: 768px)
  .profile-groups-1
    margin-top: 3.31rem

.shopify-dashboard
  margin-bottom: 3.31rem



.container-prijzen
  width: 12.55vw
  display: flex
  flex-direction: column
  gap: 0.37vw
  
.container-geheel
  display: flex
  flex-direction: column



.frame-9-1
  border-radius: 0.625rem
  border: 1px solid var(--Text-grey, #C1C1C1)
  display: flex
  flex-direction: column
  gap: 1.06vw
  justify-content: left


.licht-blauw-achtergrond
  background: var(--Light-blue, #F2F8FF)


.frame-9-1
  align-items: flex-start
  flex-direction: column


.separators-5
  width:  9vw
  height: 0.125rem
  justify-content: center
  align-items: center
  margin: 0 auto
  margin-left: 1.5vw
  
@media (max-width: 768px)
  .separators-5
    width: 45vw




  
</style>
