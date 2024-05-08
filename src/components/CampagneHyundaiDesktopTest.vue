<template>
  <div class="container-center-horizontal">
    <div class="campagne-hyundai-desktop-test screen">
      <div class="overlap-group2">
        <div class="group-1">
          <div class="top-balk">
            <img
              class="logo-hyundai"
              src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg"
              alt="Logo Hyundai"
            />
            <keurmerk />
          </div>
        </div>
        <div class="section-header">
          <div class="overlap-group1">
            <div class="overlap-group" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
              <div class="flex-col">
                <div
                  class="tijdelijk-voor-maar-275-pm hyundaisansheadoffice-bold-white-41px"
                  v-html="tijdelijkVoorMaar275PM"
                ></div>
                <div class="ontdek-meer">{{ ontdekMeer }}</div>
              </div>
              <div class="navigatie-slider">
                <img class="arrow-left" :src="arrowLeft" alt="Arrow left" /><img
                  class="arrow-right"
                  :src="arrowRight"
                  alt="Arrow right"
                />
              </div>
            </div>
            <div class="cta-balk">
              <p
                class="private-lease-nu-tij hyundaisansheadoffice-bold-midnight-blue-24px"
                v-html="privateLeaseNuTij"
              ></p>
              <x-button :arrowButton="xButton1Props.arrowButton" />
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
            <span class="span0 bodymedium">{{ spanText1 }}</span>
            <br>
            <span class="span1">{{ spanText2 }}</span>
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
          <div class="hyundai-i10 hyundaisansheadoffice-bold-midnight-blue-32px">{{ hyundaiI102 }}</div>
          <p class="een-frisse-kijk-op-een-gedurfd-ontwerp hyundaisansheadoffice-bold-midnight-blue-48px">
            {{ eenFrisseKijkOpEenGedurfdOntwerp }}
          </p>
        </div>
        <div class="slider-images">
          <img class="hand-mobiel" :src="handMobiel" alt="hand mobiel" /><img
            class="x-auto"
            :src="binnenAuto"
            alt="binnen auto"
          /><img class="x-auto" :src="dashboardAuto" alt="dashboard auto" /><img
            class="binnen-auto-2"
            :src="binnenAuto2"
            alt="binnen auto 2"
          />
        </div>
        <div class="slider-indicator">
          <div class="x01"></div>
          <div class="slider-indicator-item"></div>
          <div class="slider-indicator-item"></div>
        </div>
      </div>
      <div class="section-uitvoeringen-tabel">
        <div class="tabel-sectie">
          <div class="uitvoeringen-en-hun-functionaliteiten hyundaisansheadoffice-bold-midnight-blue-48px">
            {{ uitvoeringenEnHunFunctionaliteiten }}
          </div>
          <div class="tabel">
            <div class="functionaliteiten">
              <div class="titel-1">
                <div class="bill-montly hyundaisansheadoffice-bold-white-41px">{{ billMontly1 }}</div>
              </div>
              <div class="onderdelen">
                <div class="frame-9 hyundaisansheadoffice-regular-normal-port-gore-21px">
                  <div class="profile-groups">{{ profileGroups }}</div>
                  <img class="separators" :src="separators1" alt="Separators" />
                  <div class="frame-9-item">{{ accountViwers }}</div>
                  <img class="separators" :src="separators2" alt="Separators" />
                  <div class="frame-9-item">{{ socialMediaDashboa }}</div>
                  <img class="separators" :src="separators3" alt="Separators" />
                  <div class="frame-9-item">{{ shopifyDashboard }}</div>
                  <img class="separators" :src="separators4" alt="Separators" />
                  <div class="frame-9-item">{{ mixedDragAndDrop }}</div>
                  <img class="separators" :src="separators5" alt="Separators" />
                  <div class="frame-9-item">{{ downloadablePdfRep }}</div>
                  <img class="separators" :src="separators6" alt="Separators" />
                  <div class="frame-9-item">{{ whiteLabelReports }}</div>
                  <img class="separators" :src="separators7" alt="Separators" />
                  <div class="frame-9-item">{{ competitorAnalytics }}</div>
                  <img class="separators" :src="separators8" alt="Separators" />
                  <div class="frame-9-item">{{ automatedEmailRepo }}</div>
                  <img class="separators" :src="separators9" alt="Separators" />
                  <div class="frame-9-item">{{ roiAnalyticsAndTr }}</div>
                  <img class="separators" :src="separators10" alt="Separators" />
                  <div class="frame-9-item">{{ correlationAnalysis }}</div>
                  <img class="separators" :src="separators11" alt="Separators" />
                  <p class="frame-9-item">{{ trendDetection1 }}</p>
                  <img class="separators" :src="separators12" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection2 }}</div>
                  <img class="separators" :src="separators13" alt="Separators" />
                  <p class="frame-9-item">{{ trendDetection3 }}</p>
                  <img class="separators-1" :src="separators14" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection4 }}</div>
                  <img class="separators-1" :src="separators15" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection5 }}</div>
                  <img class="separators-1" :src="separators16" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection6 }}</div>
                  <img class="separators-1" :src="separators17" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection7 }}</div>
                  <img class="separators-1" :src="separators18" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection8 }}</div>
                  <img class="separators-1" :src="separators19" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection9 }}</div>
                  <img class="separators-1" :src="separators20" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection10 }}</div>
                  <img class="separators-1" :src="separators21" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection11 }}</div>
                  <img class="separators-1" :src="separators22" alt="Separators" />
                  <div class="frame-9-item">{{ trendDetection12 }}</div>
                </div>
              </div>
            </div>
            <div class="tabel-item">
              <div class="titel-2">
                <div class="titel-3 hyundaisansheadoffice-bold-port-gore-41px">{{ titel1 }}</div>
              </div>
              <onderdelen :frame12Props="onderdelen1Props.frame12Props" />
            </div>
            <div class="tabel-item">
              <div class="titel-4">
                <div class="titel-5 hyundaisansheadoffice-bold-white-41px">
                  <span class="span0-1 hyundaisansheadoffice-bold-white-41px">{{ spanText3 }}</span>
                  <br>
                  <span class="span1-1">{{ spanText4 }}</span>
                </div>
              </div>
              <onderdelen2 :frame12Props="onderdelen2Props.frame12Props" />
            </div>
            <comfort-smart :titel="comfortSmart1Props.titel" :onderdelen2Props="comfortSmart1Props.onderdelen2Props" />
            <comfort-smart
              :titel="comfortSmart2Props.titel"
              :className="comfortSmart2Props.className"
              :onderdelen2Props="comfortSmart2Props.onderdelen2Props"
            />
            <div class="tabel-item">
              <div class="n-line">
                <div class="titel-6 hyundaisansheadoffice-bold-port-gore-41px">{{ titel2 }}</div>
              </div>
              <onderdelen :frame12Props="onderdelen2Props2.frame12Props" />
            </div>
          </div>
          <x-button :arrowButton="xButton2Props.arrowButton" />
        </div>
      </div>
      <div class="section-prijzentabel">
        <div class="prijzentabel-i10-comfort hyundaisansheadoffice-bold-midnight-blue-48px">
          {{ prijzentabelI10Comfort }}
        </div>
        <div class="tabel-prijzen">
          <div class="aantal-maanden">
            <div class="titel-7">
              <div class="bill-montly-1 hyundaisansheadoffice-bold-white-32px">{{ billMontly2 }}</div>
            </div>
            <div class="onderdelen-1"><frame9 v-bind="frame9Props" /></div>
          </div>
          <div class="tabel-prijzen-item">
            <div class="titel">
              <div class="titel-8 hyundaisansheadoffice-bold-port-gore-32px">{{ titel3 }}</div>
            </div>
            <onderdelen3 :frame9Props="onderdelen31Props.frame9Props" />
          </div>
          <div class="tabel-prijzen-item">
            <div class="titel">
              <div class="titel-9 hyundaisansheadoffice-bold-port-gore-32px">{{ titel4 }}</div>
            </div>
            <onderdelen3 :frame9Props="onderdelen32Props.frame9Props" />
          </div>
        </div>

        
        <x-button :arrowButton="xButton3Props.arrowButton" :className="xButton3Props.className" />

        
      </div>
      <footer class="footer">
        <img class="line-2" :src="line2" alt="Line 2" />
        <p class="bekijk-de-privacy hyundaisansheadoffice-regular-normal-silver-16px">{{ bekijkDePrivacy }}</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Keurmerk from "./Keurmerk";
import XButton from "./XButton";
import XLabel from "./XLabel";
import Voordeel2 from "./Voordeel2";
import Onderdelen from "./Onderdelen";
import Onderdelen2 from "./Onderdelen2";
import ComfortSmart from "./ComfortSmart";
import Frame9 from "./Frame9";
import Onderdelen3 from "./Onderdelen3";
import XButton2 from "./XButton2.vue";
export default {
  name: "CampagneHyundaiDesktopTest",
  components: {
    Keurmerk,
    XButton,
    XLabel,
    Voordeel2,
    Onderdelen,
    Onderdelen2,
    ComfortSmart,
    Frame9,
    Onderdelen3,
  },
  props: [
    "overlapGroup",
    "tijdelijkVoorMaar275PM",
    "ontdekMeer",
    "arrowLeft",
    "arrowRight",
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
    "xButton1Props",
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
    "xButton2Props",
    "frame9Props",
    "onderdelen31Props",
    "onderdelen32Props",
    "xButton3Props",
  ],
};
</script>

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

.cta-balk
  align-items: center
  background-color: $white
  border-radius: 0.62vw
  box-shadow: 0.0vw 1.61vw 4.22vw #00104c33
  display: inline-flex
  gap: 9.43vw
  left: 0
  overflow: hidden
  padding: 1.09vw 1.25vw
  position: relative
  top: 33.75vw
  width: 48vw

.private-lease-nu-tij,
.rijden-in-een-nieuwe-hyundai
  letter-spacing: 0
  line-height: 1.88vw
  position: relative
  width: fit-content

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
  position: absolute
  top: 46.56vw
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
  margin-left: 38.59vw
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

.section-uitvoeringen-tabel
  background-color: $light-blue
  display: flex
  height: 125.68vw
  margin-top: 9.79vw
  width: 100.0vw

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

.functionaliteiten
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 0.37vw
  position: relative

.titel-1
  align-items: center
  background-color: $primary-blue
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 10.95vw
  margin-left: -0.05vw
  margin-right: -0.05vw
  margin-top: -0.05vw
  overflow: hidden
  position: relative
  width: 28.78vw

.bill-montly
  flex: 1
  height: 2.66vw
  letter-spacing: 0
  line-height: 2.66vw
  margin-left: 13.16%
  margin-right: 11.0%
  margin-top: -0.08vw
  width: 21.82vw

.onderdelen
  background-color: $white
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 83.79vw
  overflow: hidden
  position: relative
  width: 28.67vw

.frame-9
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 1.06vw
  height: 79.02vw
  margin-left: 1.38vw
  margin-top: 2.76vw
  position: relative
  width: 26.2vw

.profile-groups
  letter-spacing: 0
  line-height: normal
  margin-top: -0.05vw
  position: relative
  width: fit-content

.separators
  height: 0.06vw
  position: relative
  width: 17.51vw

.frame-9-item
  letter-spacing: 0
  line-height: normal
  position: relative
  width: fit-content

.separators-1
  height: 0.06vw
  position: relative
  width: 17.51vw

.tabel-item
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 0.36vw
  overflow: hidden
  position: relative

.titel-2
  background-color: $white
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 10.84vw
  position: relative
  width: 10.79vw

.titel-3
  height: 2.66vw
  letter-spacing: 0
  line-height: 2.66vw
  margin-left: 1.83vw
  margin-top: 3.42vw
  text-align: center
  white-space: nowrap
  width: 6.72vw

.titel-4
  background-color: $primary-blue
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 10.84vw
  position: relative
  width: 10.79vw

.titel-5
  height: 3.7vw
  letter-spacing: 0
  line-height: 2.14vw
  margin-left: 0.88vw
  margin-top: 3.42vw
  text-align: center
  width: 8.54vw

.span0-1
  line-height: 2.66vw

.span1-1
  color: $white
  font-family: $font-family-hyundai_sans_head_office-regular
  font-size: $font-size-l
  font-weight: 400

.n-line
  background-color: $white
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 10.84vw
  position: relative
  width: 10.86vw

.titel-6
  height: 2.66vw
  letter-spacing: 0
  line-height: 2.66vw
  margin-left: 0.12vw
  margin-top: 3.42vw
  text-align: center
  width: 10.73vw

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
  height: 6.61vw
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
  
</style>
