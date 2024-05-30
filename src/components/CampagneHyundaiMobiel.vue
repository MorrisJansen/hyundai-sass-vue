<script>
import Keurmerk from "./Keurmerk";
import XLabel from "./XLabel";
import Voordeel1 from "./Voordeel1";
import overlayImage from '/img/overlay.png';
import Carousel from './carousel.vue';
// import Carousel from './carousel';
import Tabel from "./tabel.vue"


export default {
  name: "CampagneHyundaiMobiel",
  components: {
    Keurmerk,
    XLabel,
    Voordeel1,
    Carousel,
    Tabel,

  },
  props: 
    [
    "deVernieuwdeHyundaiI10",
    "maakEenGrootsStatement",
    "profiteerNuVanEen",
    "grootBeeldSlider",
    "privateLeaseNuTij",
    "hetMaandbedragVa",
    "arrow1",
    "arrow2",
    "ontdekMeer",
    "hyundaiI101",
    "allInclusiveGeniet",
    "vastMaandbedragInc",
    "vrouwBlijAuto",
    "hyundaiI102",
    "eenFrisseKijkOpEenGedurfdOntwerp",
    "handMobiel",
    "binnenAuto",
    "dashboardAuto",
    "binnenAuto2",
    "uitvoeringenEnHunFunctionaliteiten",
    "titel1",
    "billMontly1",
    "onderdelen",
    "base1",
    "titel2",
    "base2",
    "tabelIcons1",
    "separators1",
    "tabelIcons2",
    "separators2",
    "tabelIcons3",
    "separators3",
    "tabelIcons4",
    "separators4",
    "tabelIcons5",
    "separators5",
    "tabelIcons6",
    "separators6",
    "tabelIcons7",
    "separators7",
    "tabelIcons8",
    "separators8",
    "tabelIcons9",
    "separators9",
    "tabelIcons10",
    "separators10",
    "tabelIcons11",
    "separators11",
    "tabelIcons12",
    "separators12",
    "tabelIcons13",
    "separators13",
    "tabelIcons14",
    "separators14",
    "tabelIcons15",
    "separators15",
    "tabelIcons16",
    "separators16",
    "tabelIcons17",
    "separators17",
    "tabelIcons18",
    "separators18",
    "tabelIcons19",
    "separators19",
    "tabelIcons20",
    "separators20",
    "tabelIcons21",
    "separators21",
    "tabelIcons22",
    "separators22",
    "tabelIcons23",
    "base3",
    "spanText1",
    "spanText2",
    "base4",
    "tabelIcons24",
    "separators23",
    "tabelIcons25",
    "separators24",
    "tabelIcons26",
    "separators25",
    "tabelIcons27",
    "separators26",
    "tabelIcons28",
    "separators27",
    "tabelIcons29",
    "separators28",
    "tabelIcons30",
    "separators29",
    "tabelIcons31",
    "separators30",
    "tabelIcons32",
    "separators31",
    "tabelIcons33",
    "separators32",
    "tabelIcons34",
    "separators33",
    "tabelIcons35",
    "separators34",
    "tabelIcons36",
    "separators35",
    "tabelIcons37",
    "separators36",
    "tabelIcons38",
    "separators37",
    "tabelIcons39",
    "separators38",
    "tabelIcons40",
    "separators39",
    "tabelIcons41",
    "separators40",
    "tabelIcons42",
    "separators41",
    "tabelIcons43",
    "separators42",
    "tabelIcons44",
    "separators43",
    "tabelIcons45",
    "separators44",
    "tabelIcons46",
    "base5",
    "titel3",
    "base6",
    "tabelIcons47",
    "separators45",
    "tabelIcons48",
    "separators46",
    "tabelIcons49",
    "separators47",
    "tabelIcons50",
    "separators48",
    "tabelIcons51",
    "separators49",
    "tabelIcons52",
    "separators50",
    "tabelIcons53",
    "separators51",
    "tabelIcons54",
    "separators52",
    "tabelIcons55",
    "separators53",
    "tabelIcons56",
    "separators54",
    "tabelIcons57",
    "separators55",
    "tabelIcons58",
    "separators56",
    "tabelIcons59",
    "separators57",
    "tabelIcons60",
    "separators58",
    "tabelIcons61",
    "separators59",
    "tabelIcons62",
    "separators60",
    "tabelIcons63",
    "separators61",
    "tabelIcons64",
    "separators62",
    "tabelIcons65",
    "separators63",
    "tabelIcons66",
    "separators64",
    "tabelIcons67",
    "separators65",
    "tabelIcons68",
    "separators66",
    "tabelIcons69",
    "base7",
    "titel4",
    "base8",
    "tabelIcons70",
    "separators67",
    "tabelIcons71",
    "separators68",
    "tabelIcons72",
    "separators69",
    "tabelIcons73",
    "separators70",
    "tabelIcons74",
    "separators71",
    "tabelIcons75",
    "separators72",
    "tabelIcons76",
    "separators73",
    "tabelIcons77",
    "separators74",
    "tabelIcons78",
    "separators75",
    "tabelIcons79",
    "separators76",
    "tabelIcons80",
    "separators77",
    "tabelIcons81",
    "separators78",
    "tabelIcons82",
    "separators79",
    "tabelIcons83",
    "separators80",
    "tabelIcons84",
    "separators81",
    "tabelIcons85",
    "separators82",
    "tabelIcons86",
    "separators83",
    "tabelIcons87",
    "separators84",
    "tabelIcons88",
    "separators85",
    "tabelIcons89",
    "separators86",
    "tabelIcons90",
    "separators87",
    "tabelIcons91",
    "separators88",
    "tabelIcons92",
    "base9",
    "titel5",
    "base10",
    "tabelIcons93",
    "separators89",
    "tabelIcons94",
    "separators90",
    "tabelIcons95",
    "separators91",
    "tabelIcons96",
    "separators92",
    "tabelIcons97",
    "separators93",
    "tabelIcons98",
    "separators94",
    "tabelIcons99",
    "separators95",
    "tabelIcons100",
    "separators96",
    "tabelIcons101",
    "separators97",
    "tabelIcons102",
    "separators98",
    "tabelIcons103",
    "separators99",
    "tabelIcons104",
    "separators100",
    "tabelIcons105",
    "separators101",
    "tabelIcons106",
    "separators102",
    "tabelIcons107",
    "separators103",
    "tabelIcons108",
    "separators104",
    "tabelIcons109",
    "separators105",
    "tabelIcons110",
    "separators106",
    "tabelIcons111",
    "separators107",
    "tabelIcons112",
    "separators108",
    "tabelIcons113",
    "separators109",
    "tabelIcons114",
    "separators110",
    "tabelIcons115",
    "arrow3",
    "arrow4",
    "prijzentabelI10Comfort",
    "titel6",
    "billMontly2",
    "overlapGroup",
    "base11",
    "titel7",
    "base12",
    "profileGroups",
    "profileGroups1",
    "separators111",
    "accountViwers1",
    "separators112",
    "socialMediaDashboa1",
    "separators113",
    "shopifyDashboard1",
    "base13",
    "titel8",
    "base14",
    "profileGroups2",
    "separators114",
    "accountViwers2",
    "separators115",
    "socialMediaDashboa2",
    "separators116",
    "shopifyDashboard2",
    "line2",
    "bekijkDePrivacy",
    "keurmerkProps",
    "xLabelProps",
    "voordeel11Props",
    "voordeel12Props",
    "voordeel13Props",
    "voordeel14Props",
    "voordeel15Props",












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
    "trendDetection12"




    
  ],
  data() {
    return {
      currentImage: '',
      overlayImage: overlayImage


    };
  },
  created() {
    this.currentImage = this.grootBeeldSlider;
  },
  methods: {
    toggleImage() {
    this.currentImage = this.currentImage === this.grootBeeldSlider ? this.overlayImage : this.grootBeeldSlider;
}

  }


};
</script>





<template>
  
  <div class="container-center-horizontal">
    <div class="campagne-hyundai-mobiel screen">
      <div class="group-1-1">
        <div class="top-balk-1">
          <img
            class="logo-hyundai-1"
            src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6631f717c9610b16f5d2db40/img/logo-hyundai.svg"
            alt="Logo Hyundai"
          />
          <keurmerk :className="keurmerkProps.className" />
        </div>
      </div>


      <div class="overlap-group4">
        <div class="section-header-1">
          <div class="marge-links">
          <div class="hoofd-titel-tekst-1">
            <div class="nieuw">NIEUW</div>
            <div class="frame-5-1">
              <div class="de-vernieuwde-hyundai-i10 hyundaisansheadoffice-bold-midnight-blue-48px">De vernieuwde
                Hyundai i10</div>
              <div class="maak-een-groots-statement-1">{{ maakEenGrootsStatement }}</div>
            </div>
          </div>
          <p
            class="profiteer-nu-van-een-1 hyundaisansheadoffice-regular-normal-black-16px"
            v-html="profiteerNuVanEen"
          ></p>
          </div>
          <div class="overlap-group3">
            <div class="groot-beeld-slider" :style="{ 'background-image': 'url(' + currentImage + ')' }"></div>
            <div class="cta-balk-1">
              <p class="private-lease-nu-tij-1 hyundaisansheadoffice-bold-midnight-blue-24px">Private Lease nu tijdelijk<br> vanaf €275 p/m* </p>
              <!-- <div class="offerte-knop eerste-knop" onclick="navigateToQuestions()">
                <div class="vraag-offerte-aan eerste-knop-tekst">Vraag offerte aan</div>
                <img class="arrow" src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png" alt="Arrow button" />
              </div> -->
      
            </div>
          </div>
          <p class="het-maandbedrag-va-1">{{ hetMaandbedragVa }}</p>
        </div>

        <div class="navigatie-slider-1">

          <button class="ontzichtbaar" @click="toggleImage">
            <img class="arrow-2" :src="arrow1" alt="Arrow" />
          </button>
          <button class="ontzichtbaar" @click="toggleImage">
            <img class="arrow-3" :src="arrow2" alt="Arrow" />
          </button>

        </div>
        <div class="ontdek-meer-1">{{ ontdekMeer }}</div>
      </div>
      <div class="section-all-inclusive-1">
        <div class="frame-19-1">
          <div class="titel-all-inclusive-1">
            <div class="hyundai-i10-1 hyundaisansheadoffice-bold-midnight-blue-18px">{{ hyundaiI101 }}</div>
            <h1 class="all-inclusive-geniet-1 hyundaisansheadoffice-bold-midnight-blue-32px">
              {{ allInclusiveGeniet }}
            </h1>
          </div>
          <p
            class="vast-maandbedrag-inc-1 hyundaisansheadoffice-regular-normal-black-16px"
            v-html="vastMaandbedragInc"
          ></p>
        </div>
        <div class="overlap-group-2">
          <img class="vrouw-blij-auto-1" :src="vrouwBlijAuto" alt="vrouw blij auto" />
          <div class="voordelen-blokken-1">
            <voordeel1
              :iconsLease="voordeel11Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel11Props.rijdenInEenNieuweHyundai"
            />
            <voordeel1
              :iconsLease="voordeel12Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel12Props.rijdenInEenNieuweHyundai"
              :className="voordeel12Props.className"
            />
            <voordeel1
              :iconsLease="voordeel13Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel13Props.rijdenInEenNieuweHyundai"
              :className="voordeel13Props.className"
            />
            <voordeel1
              :iconsLease="voordeel14Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel14Props.rijdenInEenNieuweHyundai"
              :className="voordeel14Props.className"
            />
            <voordeel1
              :iconsLease="voordeel15Props.iconsLease"
              :rijdenInEenNieuweHyundai="voordeel15Props.rijdenInEenNieuweHyundai"
              :className="voordeel15Props.className"
            />
          </div>
        </div>
      </div>



      
      <div class="section-frisse-kijk-slider-1">
        <div class="titel-frisse-kijk-1">
          <div class="hyundai-i10-2 hyundaisansheadoffice-bold-midnight-blue-18px">{{ hyundaiI102 }}</div>
          <p class="een-frisse-kijk-op-een-gedurfd-ontwerp-1 hyundaisansheadoffice-bold-midnight-blue-32px">
            {{ eenFrisseKijkOpEenGedurfdOntwerp }}
          </p>
        </div>

        <!-- <div class="slider-images-1">
          <img class="hand-mobiel-1" :src="handMobiel" alt="hand mobiel" />
          <img class="binnen-auto"   :src="binnenAuto" alt="binnen auto" />
          <img class="dashboard-auto" :src="dashboardAuto" alt="dashboard auto" />
          <img class="binnen-auto-2-1" :src="binnenAuto2"  alt="binnen auto 2"  />
        </div> -->

        <Carousel></Carousel>



      </div>

      <!-- <div class="slider-indicator-1">
        <div class="x01-1"></div>
        <div class="slider-indicator-item-1"></div>
        <div class="slider-indicator-item-1"></div>
      </div> -->





      <div class="scroll-tabel-container">
      <Tabel></Tabel>
      </div>


      


<!-- 
      <div class="group-2"><img class="arrow-4" :src="arrow3" alt="arrow" /></div>
      <div class="group-1-2"><img class="arrow-5" :src="arrow4" alt="arrow" /></div> -->





    <a href="/vraag1">
      <div class="offerte-knop midden onder knop-onder-tabel" onclick="navigateToQuestions()">
        <div class="vraag-offerte-aan">Vraag offerte aan</div>
        <img class="arrow" src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png" alt="Arrow button" />
      </div>
    </a>








      
      <div class="section-prijzentabel-1">
        <div class="prijzentabel-i10-comfort-1 hyundaisansheadoffice-bold-midnight-blue-32px">
          Prijzentabel i10 Comfort
        </div>

        
      <div class="scroll-container">
        <div class="tabel-prijzen-1">


          <div class="aantal-maanden-1">
            <div class="titel-19" :style="{ 'background-image': 'url(' + titel6 + ')' }">
              <div class="bill-montly-3 hyundaisansheadoffice-bold-white-32px">{{ billMontly2 }}</div>
            </div>


            <div class="onderdelen-8">
              <div class="overlap-group-1-2">
                <div class="frame-9-1 achtergrond-lichtblauw hyundaisansheadoffice-regular-normal-port-gore-21px">
                  <div class="profile-groups-1">60 maanden</div>
                  <img class="separators-2" :src="separators1" alt="Separators" />
                  <div class="profile-groups-1">60 maanden</div>
                  <img class="separators-2" :src="separators2" alt="Separators" />
                  <div class="profile-groups-1">48 maanden</div>
                  <img class="separators-2" :src="separators3" alt="Separators" />
                  <div class="profile-groups-1">48 maanden</div>
                </div>             
               </div>
             </div>
          </div>
          
          <div class="aantal-km">
            <div class="titel-14">
              <div class="overlap-group-5">
                <div class="titel-20 tweede-kolom-titel hyundaisansheadoffice-bold-port-gore-32px">{{ titel7 }}</div>
              </div>
            </div>


            <div class="onderdelen-8">
              <div class="overlap-group-1-2">
                <div class="frame-9-1 tweede-kolom-onderkant hyundaisansheadoffice-regular-normal-port-gore-21px">
                  <div class="profile-groups-1">10.000</div>
                  <img class="separators-2" :src="separators1" alt="Separators" />
                  <div class="profile-groups-1">20.000</div>
                  <img class="separators-2" :src="separators2" alt="Separators" />
                  <div class="profile-groups-1">10.000</div>
                  <img class="separators-2" :src="separators3" alt="Separators" />
                  <div class="profile-groups-1 ">20.000</div>
                </div>             
               </div>
            </div>
          </div>



          <div class="aantal-km">
            <div class="titel-14">
              <div class="overlap-group-5">
                <div class="titel-20 hyundaisansheadoffice-bold-port-gore-32px">{{ titel8 }}</div>
              </div>
            </div>




            <div class="onderdelen-8">
              <div class="overlap-group-1-2">
                <div class="frame-9-1 hyundaisansheadoffice-regular-normal-port-gore-21px">
                  <div class="profile-groups-1">€ 312,-</div>
                  <img class="separators-2" :src="separators1" alt="Separators" />
                  <div class="profile-groups-1">€ 358,11</div>
                  <img class="separators-2" :src="separators2" alt="Separators" />
                  <div class="profile-groups-1">€ 342,-</div>
                  <img class="separators-2" :src="separators3" alt="Separators" />
                  <div class="profile-groups-1 ">€ 385,04
                  </div>
                </div>             
               </div>
            </div>
          </div>

          

        </div>
      </div>

      <a href="/vraag1">
        <div class="offerte-knop midden knop-onder-kleine-tabel"  onclick="navigateToQuestions()">
          <div class="vraag-offerte-aan">Vraag offerte aan</div>
          <img class="arrow" src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png" alt="Arrow button" />
        </div>
      </a>


      </div>

      
      <footer class="footer-1">
        <img class="line-2-1" :src="line2" alt="Line 2" />
        <p class="bekijk-de-privacy-1 hyundaisansheadoffice-regular-normal-silver-16px">{{ bekijkDePrivacy }}</p>
      </footer>
    </div>
  </div>
</template>



<style lang="sass">
@import '../../variables'




.campagne-hyundai-mobiel
  align-items: flex-start
  background-color: $white
  display: flex
  flex-direction: column
  height: 1554.93vw
  overflow: hidden
  width: 100.0vw

.group-1-1
  display: flex
  height: 36.8vw
  width: 100.0vw

.top-balk-1
  background-color: $white
  box-shadow: 0.0vw 8.27vw 21.6vw #00104c33
  display: flex
  gap: 29.33vw
  height: 36.9vw
  position: relative
  width: 100.0vw

.logo-hyundai-1
  height: 7.04vw
  margin-left: 5.33vw
  margin-top: 15.73vw
  width: 50.67vw

.overlap-group4
  height: 206.93vw
  margin-top: 5vw
  position: relative
  width: 101.07vw

.section-header-1
  align-items: center
  display: flex
  flex-direction: column
  left: 0
  min-height: 206.93vw
  padding: 0 0.0vw
  position: absolute
  top: 0
  width: 101.07vw

.marge-links
  margin-left:  12vw

.hoofd-titel-tekst-1
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 1.6vw
  position: relative
  letter-spacing: 0
  line-height: 6.4vw
  margin-top: 7.2vw
  min-height: 19.2vw
  width: 100vw

.nieuw
  display: flex
  padding: 0.8rem 0.98213rem
  justify-content: center
  align-items: center
  gap: 0.44644rem
  border-radius: 2rem
  background: var(--Light-grey, #F0F0F0)
  color: var(--Dark-grey, #747474)
  font-family: $font-family-hyundai_sans_head_office-bold
  
.frame-5-1
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 0.61vw
  position: relative


.de-vernieuwde-hyundai-i10-1
  flex: 0 0 auto
  position: relative
  width: 70.33vw
  background-color: transparent

.maak-een-groots-statement-1
  color: $primary-blue
  font-family: $font-family-hyundai_sans_head_office-bold
  font-size: 2rem
  font-weight: 700
  letter-spacing: 0
  line-height: 10.96vw
  position: relative
  white-space: nowrap
  width: fit-content

.profiteer-nu-van-een-1
  letter-spacing: 0
  line-height: 6.4vw
  margin-top: 7.2vw
  min-height: 19.2vw
  max-width: 90vw

.overlap-group3
  height: 107.73vw
  margin-right: 1.07vw
  margin-top: 9.6vw
  position: relative
  width: 100.0vw

.groot-beeld-slider
  background-position: 50% 50%
  background-size: cover
  height: 58.13vw
  left: 0
  position: absolute
  top: 0
  width: 100.0vw

.cta-balk-1
  align-items: center
  background-color: $white
  border-radius: 3.2vw
  box-shadow: 0.0vw 8.27vw 21.6vw #00104c33
  display: flex
  flex-direction: column
  gap: 5.33vw
  justify-content: center
  left: 5.33vw
  overflow: hidden
  padding: 5.6vw 6.4vw
  position: absolute
  top: 51.73vw
  width: 90.67vw

.private-lease-nu-tij-1
  letter-spacing: 0
  line-height: 2.25rem
  margin-top: -0.27vw
  position: relative
  text-align: center
  width: fit-content




.het-maandbedrag-va-1
  color: $text-grey
  font-family: $font-family-hyundai_sans_head_office-bold
  font-size: 1rem
  font-weight: 700
  letter-spacing: 0
  line-height: 4.27vw
  margin-right: 1.07vw
  min-height: 12.8vw
  width: 89.33vw



.arrow-2
  height: 4.1vw
  margin-bottom: -0.29vw
  margin-left: -0.58vw
  margin-top: -0.29vw
  position: relative
  width: 4.1vw

.arrow-3
  height: 4.1vw
  margin-bottom: -0.29vw
  margin-right: -0.58vw
  margin-top: -0.29vw
  position: relative
  width: 4.1vw

.ontdek-meer-1
  color: $white
  font-family: $font-family-hyundai_sans_head_office-medium
  font-size: 3.47vw
  font-weight: 500
  left: 5.33vw
  letter-spacing: 1.32vw
  line-height: normal
  position: absolute
  top: 123vw

.navigatie-slider-1
  align-items: flex-start
  display: inline-flex
  gap: 7.06vw
  left: 78.93vw
  position: absolute
  top: 123vw

@media (min-width: 500px) and (max-width: 580px)
  .ontdek-meer-1
    top: 130vw

  .navigatie-slider-1
    top: 130vw


.section-all-inclusive-1
  align-items: center
  background-color: $light-blue
  display: flex
  flex-direction: column
  gap: 7.2vw
  margin-top: 9.6vw
  min-height: 380.4vw
  padding: 9.07vw 0
  width: 100.0vw


.frame-19-1
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 10.13vw
  margin-left: 1.33vw
  position: relative
  width: 90.67vw

.titel-all-inclusive-1
  align-items: flex-start
  align-self: stretch
  display: flex
  flex: 0 0 auto
  flex-direction: column
  gap: 2.67vw
  position: relative
  width: 100%

.hyundai-i10-1
  letter-spacing: 0
  line-height: 8.53vw
  margin-top: -0.27vw
  position: relative
  white-space: nowrap
  width: fit-content

.all-inclusive-geniet-1
  align-self: stretch
  letter-spacing: 0
  line-height: 8.53vw
  position: relative

.vast-maandbedrag-inc-1
  align-self: stretch
  letter-spacing: 0
  line-height: 6.4vw
  position: relative
  margin-left: 3vw

.overlap-group-2
  height: 230vw
  position: relative
  width: 100.0vw

.vrouw-blij-auto-1
  height: 64.0vw
  left: 0
  object-fit: cover
  position: absolute
  top: 0
  width: 100.0vw

.voordelen-blokken-1
  align-items: center
  display: flex
  flex-direction: column
  gap: 3.6vw
  left: 5.33vw
  position: absolute
  top: 39.73vw
  width: 89.33vw

.section-frisse-kijk-slider-1
  display: flex
  flex-direction: column
  gap: 24.08vw
  height: 146.93vw
  margin-top: 10.93vw
  width: 320.0vw

.titel-frisse-kijk-1
  align-items: center
  display: flex
  flex-direction: column
  gap: 3.51vw
  height: 30.18vw
  margin-left: 5.33vw
  position: relative
  width: 89.33vw

.hyundai-i10-2
  letter-spacing: 0
  line-height: 9.6vw
  margin-top: -0.15vw
  position: relative
  white-space: nowrap
  width: fit-content

.een-frisse-kijk-op-een-gedurfd-ontwerp-1
  align-self: stretch
  letter-spacing: 0
  line-height: 8.53vw
  position: relative
  text-align: center

.slider-images-1
  align-items: flex-start
  display: flex
  gap: 8.04vw
  height: 92.56vw
  position: relative
  width: 320.09vw

.hand-mobiel-1
  height: 92.56vw
  object-fit: cover
  position: relative
  width: 73.99vw

.binnen-auto
  height: 92.56vw
  position: relative
  width: 17.97vw

.dashboard-auto
  height: 92.56vw
  margin-bottom: -90.55vw
  margin-right: -1204.37vw
  position: relative
  width: 73.99vw

.binnen-auto-2-1
  height: 92.56vw
  margin-bottom: -90.55vw
  margin-right: -1286.4vw
  object-fit: cover
  position: relative
  width: 73.99vw

.slider-indicator-1
  align-items: flex-start
  align-self: center
  display: flex
  gap: 4.35vw
  height: 2.13vw
  margin-left: 0.27vw
  margin-top: 9.87vw
  position: relative
  width: 40.0vw

.x01-1
  background-color: $primary-blue
  border-radius: 10.89vw
  height: 2.18vw
  position: relative
  width: 17.14vw

.slider-indicator-item-1
  background-color: $text-grey
  border-radius: 10.89vw
  height: 2.18vw
  position: relative
  width: 7.07vw



.onderdelen 
  height: 1465px
























  



  // hier begint de styling van de tabel tabelmobiel


@media (max-width: 768px)

  .scroll-tabel-container
    width: 95vw
    height: 1750px

  .section-uitvoeringen-tabel
    background-color: $white!important

  .uitvoeringen-en-hun-functionaliteiten
    margin-left: 400px

  .inhoud-tabel-container
    margin-top: 2px
    height: 1325px
    
    
  .tabel
    position: relative
    left: 550px
    height: 1200px

  .profile-groups
    display: inline-flex
    width:  470px

  .profile-groups:first-child
    margin-top: 2.484rem

  .separator-3:last-child
    display: none



  .onderdelen
    margin: 0
    padding: 0
    width: 34.4rem
    height: 1325px


  .tabel-icons,
  .separators-3
    position: relative
    bottom: 420px
    gap: 0.954rem

  .tabel-icons 
    width: 1.72681rem
    height: 1.72681rem
    margin-left: 70px
    margin-top: 3.25px
    margin-bottom: 2.5px

  .tabel-icons:last-child
    display: none
  .onderdelen
    .separators-3:last-of-type
       display: none




  .frame12
    gap: 1rem


  .separators-3
    width: 10.14513rem!important
    height: 0.07194rem!important
  

  .inhoud-tabel-container
    position: relative




  .titel-3,
  .titel-6
    font-size: 2.5rem!important
    color: #002e6b!important
    font-family: 'Hyundai Sans Head Office-Bold', Helvetica

  .span0-1
    font-size: 2.5rem!important
    color: white!important
    font-family: 'Hyundai Sans Head Office-Bold', Helvetica

 

@media (max-width: 768px)
  .offerte-knop

  .tabel-icoon:last-child 
    margin: 0 auto










































  
.account-viwers-3,
.social-media-dashboa-3,
.shopify-dashboard-3,
.account-viwers-4,
.social-media-dashboa-4,
.shopify-dashboard-4
  letter-spacing: 0
  line-height: normal
  position: relative
  width: fit-content

.separators-12
  height: 0.31vw
  position: relative
  width: 21.27vw

.maandbedrag
  align-items: flex-start
  align-self: stretch
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 2.67vw
  margin-right: -106.19vw
  position: relative

.base-12
  height: 33.87vw
  left: 1149.07vw
  position: absolute
  top: -472.8vw
  width: 64.0vw

.titel-21
  left: 2.67vw
  letter-spacing: 0
  line-height: 8.53vw
  position: absolute
  text-align: center
  top: 11.47vw
  white-space: nowrap

.base-13
  height: 86.93vw
  left: 1149.07vw
  position: absolute
  top: -509.33vw
  width: 64.0vw

.separators-63
  height: 0.53vw
  margin-right: -1141.77vw
  margin-top: -509.78vw
  position: relative
  width: 49.6vw

.separators-64
  height: 0.27vw
  margin-right: -1141.77vw
  margin-top: -491.48vw
  position: relative
  width: 49.6vw

.separators-65
  height: 0.27vw
  margin-right: -1141.77vw
  margin-top: -473.45vw
  position: relative
  width: 49.6vw

.footer-1
  align-items: center
  background-color: transparent
  display: flex
  flex-direction: column
  flex-shrink: 1
  gap: 13.33vw
  height: 38.93vw
  margin-top: 21.6vw
  width: 100.53vw

.line-2-1
  height: 0.27vw
  margin-left: -0.53vw
  margin-top: -0.27vw
  object-fit: cover
  width: 100.0vw

.bekijk-de-privacy-1
  height: 25.6vw
  letter-spacing: 0
  line-height: 6.4vw
  margin-left: -0.53vw
  text-align: center
  width: 32.84vw






@media (max-width: 768px)


  .section-prijzentabel-1
    margin-top: 50%

  .scroll-container
    margin-top: 10%
    width: 90vw
    position: absolute
    left: 10px


  .tabel-prijzen-1
    display: flex
    flex-direction: row
    overflow-x: auto



  .prijzentabel-i10-comfort-1
    width: 110%
    margin-left: 90px

  .aantal-maanden-1
    display: flex
    flex-direction: column
    width: 70vw
    gap: 1.9vw
    width: 900px


  .profile-groups-1
    font-size: 1.3125rem
    

  .profile-groups-1:first-child
    margin-top: 3.31rem
    
  .profile-groups-1:last-child
    margin-bottom: 3.31rem

  .profile-groups-1,
  .separators-5
    margin-left: 5vw

  .separators-5
    margin-top: 1.27rem
    margin-bottom: 1.27rem

  .achtergrond-lichtblauw
    background-color: $light-blue

  .eerste-knop
    width: 70vw!important

  .eerste-knop-tekst
    font-size: 5.8vw!important


  .offerte-knop
    display: inline-flex
    padding: 2.125rem 1.5625rem
    align-items: center
    gap: 1.75rem
    align-items: center
    gap: 2rem
    width: 80vw  

  .knop-onder-tabel
    position: relative
    top: 200px


  .knop-onder-kleine-tabel
    position: relative
    top: 650px
    margin-left: 11%!important



  .vraag-offerte-aan
    letter-spacing: 0
    line-height: normal
    position: relative
    width: fit-content
    border-radius: 0.4375rem
    color: $white
    font-family: $font-family-hyundai_sans_head_office-bold
    text-align: center

    color: var(--White, #FFF)
    font-size: 6.5vw
    font-style: normal
    font-weight: 700
    line-height: normal

  .midden
    margin: 0 auto

  .onder
    margin-top: -150px


  .scroll-tabel-container
    overflow-x: auto
    position: relative


  .aantal-maanden-1
    gap: 0.5rem

  .titel-19
    width: 15rem
    height: 8rem
    flex-shrink: 0

    border-radius: 0.625rem
    background: var(--Primary-blue, #002E6B)
    border: none!important

  .bill-montly-3
    color: var(--White, #FFF)
    font-family: "Hyundai Sans Head Office"
    margin-left: 15%
    font-size: 2rem
    font-style: normal
    font-weight: 700
    line-height: 2rem
    display: flex
    margin-top: 10%
    justify-content: center
    border: none!important
  


  .titel-20
    display: flex
    width: 15rem

    height: 8rem
    align-items: center
    justify-content: center
    margin-bottom: 0.5rem

    border-radius: 0.625rem
    border: 1px solid var(--Text-grey, #C1C1C1)
    background: var(--White, #FFF)
    color: #002E6B!important


  .tweede-kolom-titel
    margin-left: 0.5rem


  .tweede-kolom-onderkant
    width: 15rem
    margin: 0 0.5rem


  .profile-groups-1
    margin: 0 auto

  
  .separators-2
    width: 80%
    margin: 1.27rem auto
    
    

  

  .titel-21
    display: flex
    width: 15rem

    height: 8rem
    align-items: center
    justify-content: center
    margin-bottom: 0.5rem
    color: var(--Primary-blue, #002E6B)


    border-radius: 0.625rem
    border: 1px solid var(--Text-grey, #C1C1C1)
    background: var(--White, #FFF)










  .footer-1
    position: absolute
    top: -250px




</style>
