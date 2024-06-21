<script>
import Keurmerk from "./Keurmerk";
import XLabel from "./XLabel";
import Voordeel2 from "./Voordeel2";
import Onderdelen from "./Onderdelen";
import Onderdelen2 from "./Onderdelen2";
import ComfortSmart from "./ComfortSmart";
import overlayImage from '/img/overlay.png';
import Carousel from './carousel';
import Tabel2 from "./tabel2.vue";


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
    Tabel2,
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
      currentImage: "",
      overlayImage: overlayImage,
      showOverlay: false,
    };
  },
  created() {
    this.currentImage = this.overlapGroup;
  },
  mounted() {
    this.startImageToggleTimer();
  },
  beforeDestroy() {
    this.stopImageToggleTimer();
  },
  methods: {
    toggleImage() {
      this.showOverlay = !this.showOverlay;
      if (this.showOverlay) {
        this.currentImage = this.overlayImage;
      } else {
        this.currentImage = this.overlapGroup;
      }
    },
    startImageToggleTimer() {
      this.intervalId = setInterval(() => {
        this.toggleImage();
      }, 5000);
    },
    stopImageToggleTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    },
    scrollToSection() {
      const element = document.getElementById('target-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
            <a href="https://morrisjansen.github.io/hyundai-sass-vue/">
            <img
              class="logo-hyundai"
              src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg"
              alt="Logo Hyundai"
            />
            </a>
            <keurmerk />
          </div>
        </div>


      <div class="overkoepelende-container-header">
        <div class="section-header">
          <div class="overlap-group1">

            



            <div class="overlap-group1">
              <transition name="image-slide" mode="out-in">
                <div
                  v-if="showOverlay"
                  class="overlap-group new-image afbeelding-radius"
                  :key="currentImage"
                  :style="{ 'background-image': 'url(' + currentImage + ')' }"
                >
                  <div class="flex-col">
                    <div
                      class="tijdelijk-voor-maar-275-pm hyundaisansheadoffice-bold-white-41px"
                      v-html="tijdelijkVoorMaar275PM"
                    ></div>
                    <div class="ontdek-meer" @click="scrollToSection">ONTDEK MEER</div>                  </div>
                  <div class="navigatie-slider">
                    <button class="ontzichtbaar" @click="toggleImage">
                      <img class="arrow-left" :src="arrowLeft" alt="Arrow left" />
                    </button>
                    <button class="ontzichtbaar" @click="toggleImage">
                      <img class="arrow-right" :src="arrowRight" alt="Arrow right" />
                    </button>
                  </div>
                </div>
              </transition>
            
              <transition name="image-slide" mode="out-in">
                <div
                  v-if="!showOverlay"
                  class="overlap-group old-image afbeelding-radius"
                  :key="currentImage"
                  :style="{ 'background-image': 'url(' + currentImage + ')' }"
                >
                  <div class="flex-col">
                    <div
                      class="tijdelijk-voor-maar-275-pm hyundaisansheadoffice-bold-white-41px"
                      v-html="tijdelijkVoorMaar275PM"
                    ></div>
                    <div class="ontdek-meer" @click="scrollToSection">ONTDEK MEER</div>                  </div>
                  <div class="navigatie-slider">
                    <button class="ontzichtbaar" @click="toggleImage">
                      <img class="arrow-left" :src="arrowLeft" alt="Arrow left" />
                    </button>
                    <button class="ontzichtbaar" @click="toggleImage">
                      <img class="arrow-right" :src="arrowRight" alt="Arrow right" />
                    </button>
                  </div>
                </div>
              </transition>
            </div>
            
            


            








            <div class="cta-balk">
              <p
                class="private-lease-nu-tij hyundaisansheadoffice-bold-midnight-blue-nu-tijdelijk"
                v-html="privateLeaseNuTij"></p>

                <router-link to="/hyundai-sass-vue/vraag1">
                  <button class="offerte-knop cta-offerte-knop">
                    <div class="vraag-offerte-aan">Vraag offerte aan</div>
                    <img class="arrow" src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png" alt="Arrow button" />
                  </button>
                </router-link>
                


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
      </div>





      <div class="section-all-inclusive">
        <div class="overlap-group-1">
          <img class="vrouw-blij-auto" id="target-section" :src="vrouwBlijAuto" alt="vrouw blij auto" />
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


        <Tabel2></Tabel2>


        <router-link to="/hyundai-sass-vue/vraag1">
          <button class="offerte-knop middelste-knop-groot">
            <div class="vraag-offerte-aan">Vraag offerte aan</div>
            <img class="arrow" src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png" alt="Arrow button" />
          </button>
        </router-link>
        
      
      





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


    <router-link to="/hyundai-sass-vue/vraag1">
      <button class="offerte-knop midden-knop">
        <div class="vraag-offerte-aan">Vraag offerte aan</div>
        <img class="arrow" src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png" alt="Arrow button" />
      </button>
    </router-link>
    


    <img class="line-2" :src="line2" alt="Line 2" />


    <div class="footer-vragen-achtergrond">
      <div class="footer-vragen-1">
        Bekijk de <a class="footer-link" href="https://leadgen.republish.nl/api/content/hyundai-privacy">Privacy</a> & <a class="footer-link" href="https://leadgen.republish.nl/api/content/hyundai-voorwaarden">voorwaarden</a> <span class="footer-klein-scherm"><br></span> van deze actie.
      </div>
      <div class="footer-vragen">
        Bekijk de <a class="footer-link" href="https://leadgen.republish.nl/api/content/hyundai-privacy">Privacy</a> & <a class="footer-link" href="https://leadgen.republish.nl/api/content/hyundai-voorwaarden">voorwaarden</a> van deze actie.
      </div>
    </div>
    

    </div>
  </div>
</template>



<style lang="sass">
@import '../../variables'





@media (min-width: 768px) 
  .footer-vragen-1
    display: none!important

.top-balk 
  width: 99vw


.footer-vragen-1
  display: none

.line-2
  margin-top: 4rem!important


.footer-vragen
  display: block
  z-index: 999
  color: var(--Text-grey, #C1C1C1)
  text-align: center
  font-family: "Hyundai Sans Head Office-Regular"
  font-size: 1rem
  font-style: normal
  font-weight: 500
  line-height: 1.5
  padding-top: 2vw
  padding-bottom: 2vw


.footer-link
  color: var(--Text-grey, #C1C1C1)
  text-decoration: underline!important
  display: initial!important


.overlap-group1
  position: relative
  width: 100%
  height: 100%

.overlap-group
  background-size: cover
  background-position: center
  position: absolute
  top: 0
  left: 0

.old-image
  z-index: 1
  transition: opacity 4s ease-in-out

.new-image-container
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden

.new-image
  z-index: 1111
  position: absolute
  top: 0
  left: 100% 
  transition: left 4s ease-in-out, opacity 4s ease-in-out 

.image-slide-enter-active
  left: 0 
  transition-delay: 0.5s

.image-slide-leave-to
  left: -100%
  opacity: 0 

.ontzichtbaar
  background: none
  border: none
  padding: 0

.arrow-left,
.arrow-right
  cursor: pointer










.cta-balk
  z-index: 2000

.cta-offerte-knop
  height: 5rem
  padding: 0 1.4rem!important




























.campagne-hyundai-desktop-test
  align-items: center
  background-color: $white
  display: flex
  flex-direction: column
  height: auto
  overflow: hidden
  width: 100.0vw

.overlap-group2
  height: 62.59vw
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


.overkoepelende-container-header
  height: 54vw!important
  display: block

.section-header
  height: 61.41vw!important
  left: 7.6vw
  position: absolute
  top: 7.19vw
  width: 92.6vw
  display: block

.overlap-group1
  height: 1.41vw
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

.ontdek-meer:hover
  cursor: pointer

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
  transition: transform 0.5s ease, opacity 0.5s ease


.image-slide-enter-active,
.image-slide-leave-active
  transition: none

.image-slide-enter,
.image-slide-leave-to
  transform: translateX(0)
  transition: transform 0.5s ease, opacity 0.5s ease

.image-slide-enter-to
  transform: translateX(100%)

.image-slide-leave
  opacity: 1
  transition: opacity 0.5s ease

.image-slide-leave-to
  opacity: 0

























.cta-balk
  display: inline-flex
  align-items: center
  background-color: $white
  border-radius: 0.62vw
  box-shadow: 0.0vw 1.61vw 4.22vw #00104c33
  left: 0
  overflow: hidden
  position: relative
  top: 34.5vw
  padding: 2.361vw 2.361vw
  width: 45vw
  height: 7vw


@media (min-width: 1900px)
  .private-lease-nu-tij
    width: 50%!important
    margin-right: 10%!important
    font-size: 3rem!important


    

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
      height: 5vw

    .vraag-offerte-aan
      font-size: 27px


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

.middelste-knop-groot
  position: relative
  bottom: 14vw



.vraag-offerte-aan
  letter-spacing: 0
  line-height: normal
  margin-top: -0.1vw
  position: relative
  width: fit-content
  border-radius: 0.4375rem
  color: $white
  font-size: 22px
  font-family: $font-family-hyundai_sans_head_office-bold
  text-align: center


.arrow
  width: 1.5rem


.private-lease-nu-tij
  letter-spacing: 0
  line-height: 1.88vw
  position: relative
  width: fit-content
  margin-right: 10%
  font-size: 22px
  




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
  height: 70vw
  margin-top: 6.77vw
  position: relative
  width: 100.0vw

.overlap-group-1
  height: 51vw
  display: block
  width: 91.41vw
  position: relative
  top: 10vw

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
  top: 32.87vw


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
  top: 6vw
  position: relative
  top: -37vw

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


.vast-maandbedrag-inc li 
  list-style-position: outside
  padding-left: 20px 

.vast-maandbedrag-inc li::marker
  margin-right: 30px

.vast-maandbedrag-inc li 
  line-height: 1.7



.section-frisse-kijk-slider
  align-self: flex-end
  display: flex
  flex-direction: column
  height: 55vw
  margin-right: -19.58vw
  margin-top: 8vw
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


  




.x01
  background-color: $primary-blue
  border-radius: 2.08vw
  height: 0.42vw
  position: relative
  width: 3.28vw














//  hier begint de tabel css ::::::::::::::::::::::::::::::::::::::::
// @media (min-width: )


.section-uitvoeringen-tabel
  background-color: $light-blue
  display: flex

  width: 100.0vw


@media (min-width: 768px) and (max-width: 1100px)



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
  overflow-y: auto


.titel-1
  display: flex
  height: 13.01306rem
  padding: 0rem 3.67338rem 0rem 4.54575rem
  align-items: center
  border-radius: 0.625rem
  border: 1px solid var(--Text-grey, #C1C1C1)
  background: var(--Primary-blue, #002E6B)
  min-width: 34.4rem


.bill-montly
  color: var(--White, #FFF)
  font-family: "Hyundai Sans Head Office"
  font-size: 2.5625rem
  font-style: normal
  font-weight: 700
  line-height: 3.1875rem
  text-align: center

.functionaliteiten
  align-items: flex
  display: inline-flex
  flex: 0 1 auto
  flex-direction: column
  gap: 0.37vw
  position: relative

  

.onderdelen
  background-color: $white
  border: 1px solid
  border-color: $text-grey
  border-radius: 0.625rem
  display: flex
  overflow: hidden
  position: relative
  min-width: 34.4rem
  height: 81.5vw

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
  min-width: 12.95rem

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
  min-width: 12.95rem

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

@media (max-width: 1650px) and (min-width: 768px)
  .tabel-container-groot
    overflow: auto
    
  .tabel
    position: relative
    left: 400px


.span0-1
  color: var(--White, #FFF)
  text-align: center
  font-size: 2vw!important
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

  font-style: normal
  font-weight: 700
  line-height: 0
  position: relative
  bottom: 12px

  font-family: "Hyundai Sans Head Office-Bold", Helvetica
  font-style: normal
  font-weight: 700

@media (max-width 768px)
  .span1-1
    font-weight: 500
    color: var(--White, #FFF)
    font-family: "Hyundai Sans Head Office"
    font-size: 1.2rem
    font-style: normal
    position: relative
    display: inline-block
    bottom: 12px
    width: 100%
    left: 35px!important


@media (min-width: 768px)
.span1-1
  font-weight: 500
  color: var(--White, #FFF)
  font-family: "Hyundai Sans Head Office"
  font-size: 1.2rem
  font-style: normal
  display: inline-block
  width: 100%
  margin-left: 16%



  @media (max-width: 2700px)
    .span1-1
      bottom:  2vw

    .span0-1
      bottom: 2vw




.n-line

  display: flex
  height: 13.01306rem
  position: relative
  min-width: 12.95rem
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


@media (max-width: 2900px) and (min-width: 2000px)
  .midden-knop
    margin-top: 400px


@media (max-width: 2824px) and (min-width: 2000px)
  .kleiner-tabel
    font-size: 1.55rem!important

  .kleiner-profile
    font-size: 1.7s5rem!important


  .profile-groups
    font-size: 1.8rem



  


@media (min-width: 2530px)
  .profile-groups,
  .profile-groups:nth-child(5)
    font-size: 1.8rem
    padding: 1.6rem




  .tabel-icons
    margin-bottom: 2.1rem
    margin-top: 2.3rem

  .icoon-container:first-child
    margin-top: 3.8rem


  .frame-12
    gap: 0
    margin-top: 0
    height: auto

  .separators-3
    width: 6.5vw
    margin-left: 1vw

  .titel-1,
  .titel-2,
  .titel-4,
  .n-line
    height: 20rem

  .titel-3
    padding: 2.2rem 0 0 2rem

  .titel-6
    margin-top: 6.6rem

  .titel-6:first-child
    line-height: 1

  .span1-1
    font-size: 0.8vw

  .tabel-container-groot
    height: 4200px

  .section-uitvoeringen-tabel
    height: 4200px

  .tabel-sectie
    height: 100%

  .tabel
    height: 3500px

  .onderdelen 
    height: 2825px
    
  .frame-12 
    height: 2825px



  .arrow
    width: 4.5rem
    margin-left: 5rem
  
  .vraag-offerte-aan
    margin-left: 3rem
    font-size: 3rem
  
  .offerte-knop
    height: 15rem
    width: 45rem
    border-radius: 25px
  
  .middelste-knop-groot
    margin-top: 100px




  
    
    















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
  height: 11vw
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
  padding-bottom: 7vw
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
