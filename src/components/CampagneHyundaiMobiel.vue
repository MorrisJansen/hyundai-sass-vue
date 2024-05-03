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
          <div class="hoofd-titel-tekst-1">
            <x-label :nieuw="xLabelProps.nieuw" />
            <div class="frame-5-1">
              <img class="de-vernieuwde-hyundai-i10-1" :src="deVernieuwdeHyundaiI10" alt="De vernieuwde Hyundai i10" />
              <div class="maak-een-groots-statement-1">{{ maakEenGrootsStatement }}</div>
            </div>
          </div>
          <p
            class="profiteer-nu-van-een-1 hyundaisansheadoffice-regular-normal-black-16px"
            v-html="profiteerNuVanEen"
          ></p>
          <div class="overlap-group3">
            <div class="groot-beeld-slider" :style="{ 'background-image': 'url(' + grootBeeldSlider + ')' }"></div>
            <div class="cta-balk-1">
              <p
                class="private-lease-nu-tij-1 hyundaisansheadoffice-bold-midnight-blue-24px"
                v-html="privateLeaseNuTij"
              ></p>
              <x-button2 :vraagOfferteAan="xButton2Props.vraagOfferteAan" :arrow="xButton2Props.arrow" />
            </div>
          </div>
          <p class="het-maandbedrag-va-1">{{ hetMaandbedragVa }}</p>
        </div>
        <div class="navigatie-slider-1">
          <img class="arrow-2" :src="arrow1" alt="Arrow" /><img class="arrow-3" :src="arrow2" alt="Arrow" />
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
          <div class="hyundai-i10-2 hyundaisansheadoffice-bold-midnight-blue-24px">{{ hyundaiI102 }}</div>
          <p class="een-frisse-kijk-op-een-gedurfd-ontwerp-1 hyundaisansheadoffice-bold-midnight-blue-32px">
            {{ eenFrisseKijkOpEenGedurfdOntwerp }}
          </p>
        </div>
        <div class="slider-images-1">
          <img class="hand-mobiel-1" :src="handMobiel" alt="hand mobiel" /><img
            class="binnen-auto"
            :src="binnenAuto"
            alt="binnen auto"
          /><img class="dashboard-auto" :src="dashboardAuto" alt="dashboard auto" /><img
            class="binnen-auto-2-1"
            :src="binnenAuto2"
            alt="binnen auto 2"
          />
        </div>
      </div>
      <div class="slider-indicator-1">
        <div class="x01-1"></div>
        <div class="slider-indicator-item-1"></div>
        <div class="slider-indicator-item-1"></div>
      </div>
      <div class="section-uitvoeringen-tabel-1">
        <div class="overlap-group2-1">
          <div class="rectangle-2"></div>
          <div class="tabel-sectie-1">
            <div class="uitvoeringen-en-hun-functionaliteiten-1 hyundaisansheadoffice-bold-midnight-blue-32px">
              {{ uitvoeringenEnHunFunctionaliteiten }}
            </div>
            <div class="tabel-1">
              <div class="functionaliteiten-1">
                <div class="titel-15" :style="{ 'background-image': 'url(' + titel1 + ')' }">
                  <div class="bill-montly-2 hyundaisansheadoffice-bold-white-23-8px">{{ billMontly1 }}</div>
                </div>
                <div class="onderdelen-7" :style="{ 'background-image': 'url(' + onderdelen + ')' }">
                  <img class="frame-9-3" :src="frame9" alt="Frame 9" />
                </div>
              </div>
              <div class="tabel-item-2">
                <div class="titel-12">
                  <div class="overlap-group-3">
                    <img class="base" :src="base1" alt="Base" />
                    <div class="titel-16 hyundaisansheadoffice-bold-port-gore-23-8px">{{ titel2 }}</div>
                  </div>
                </div>
                <div class="onderdelen-5">
                  <div class="overlap-group1-1">
                    <img class="base-1" :src="base2" alt="Base" />
                    <div class="frame-1-1">
                      <img class="tabel-icons-6" :src="tabelIcons1" alt="Tabel icons" /><img
                        class="separators-13"
                        :src="separators1"
                        alt="Separators"
                      /><img class="tabel-icons-7" :src="tabelIcons2" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators2"
                        alt="Separators"
                      /><img class="tabel-icons-8" :src="tabelIcons3" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators3"
                        alt="Separators"
                      /><img class="tabel-icons-9" :src="tabelIcons4" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators4"
                        alt="Separators"
                      /><img class="tabel-icons-10" :src="tabelIcons5" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators5"
                        alt="Separators"
                      /><img class="tabel-icons-11" :src="tabelIcons6" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators6"
                        alt="Separators"
                      /><img class="tabel-icons-12" :src="tabelIcons7" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators7"
                        alt="Separators"
                      /><img class="tabel-icons-13" :src="tabelIcons8" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators8"
                        alt="Separators"
                      /><img class="tabel-icons-14" :src="tabelIcons9" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators9"
                        alt="Separators"
                      /><img class="tabel-icons-15" :src="tabelIcons10" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators10"
                        alt="Separators"
                      /><img class="tabel-icons-16" :src="tabelIcons11" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators11"
                        alt="Separators"
                      /><img class="tabel-icons-17" :src="tabelIcons12" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators12"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons13" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators13"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons14" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators14"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons15" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators15"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons16" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators16"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons17" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators17"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons18" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators18"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons19" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators19"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons20" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators20"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons21" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators21"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons22" alt="Tabel icons" /><img
                        class="separators-7"
                        :src="separators22"
                        alt="Separators"
                      /><img class="tabel-icons-1" :src="tabelIcons23" alt="Tabel icons" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="tabel-item-2">
                <div class="titel-12">
                  <img class="base-2" :src="base3" alt="Base" />
                  <div class="titel-17 hyundaisansheadoffice-bold-white-23-8px">
                    <span class="span0-2 hyundaisansheadoffice-bold-white-23-8px">{{ spanText1 }}</span
                    ><span class="span1-2">{{ spanText2 }}</span>
                  </div>
                </div>
                <div class="onderdelen-5">
                  <img class="base-3" :src="base4" alt="Base" />
                  <div class="frame-1-1">
                    <img class="tabel-icons-18" :src="tabelIcons24" alt="Tabel icons" /><img
                      class="separators-14"
                      :src="separators23"
                      alt="Separators"
                    /><img class="tabel-icons-19" :src="tabelIcons25" alt="Tabel icons" /><img
                      class="separators-15"
                      :src="separators24"
                      alt="Separators"
                    /><img class="tabel-icons-20" :src="tabelIcons26" alt="Tabel icons" /><img
                      class="separators-16"
                      :src="separators25"
                      alt="Separators"
                    /><img class="tabel-icons-21" :src="tabelIcons27" alt="Tabel icons" /><img
                      class="separators-17"
                      :src="separators26"
                      alt="Separators"
                    /><img class="tabel-icons-22" :src="tabelIcons28" alt="Tabel icons" /><img
                      class="separators-18"
                      :src="separators27"
                      alt="Separators"
                    /><img class="tabel-icons-23" :src="tabelIcons29" alt="Tabel icons" /><img
                      class="separators-19"
                      :src="separators28"
                      alt="Separators"
                    /><img class="tabel-icons-24" :src="tabelIcons30" alt="Tabel icons" /><img
                      class="separators-20"
                      :src="separators29"
                      alt="Separators"
                    /><img class="tabel-icons-25" :src="tabelIcons31" alt="Tabel icons" /><img
                      class="separators-21"
                      :src="separators30"
                      alt="Separators"
                    /><img class="tabel-icons-26" :src="tabelIcons32" alt="Tabel icons" /><img
                      class="separators-22"
                      :src="separators31"
                      alt="Separators"
                    /><img class="tabel-icons-27" :src="tabelIcons33" alt="Tabel icons" /><img
                      class="separators-23"
                      :src="separators32"
                      alt="Separators"
                    /><img class="tabel-icons-28" :src="tabelIcons34" alt="Tabel icons" /><img
                      class="separators-24"
                      :src="separators33"
                      alt="Separators"
                    /><img class="tabel-icons-29" :src="tabelIcons35" alt="Tabel icons" /><img
                      class="separators-25"
                      :src="separators34"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons36" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators35"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons37" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators36"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons38" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators37"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons39" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators38"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons40" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators39"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons41" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators40"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons42" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators41"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons43" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators42"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons44" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators43"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons45" alt="Tabel icons" /><img
                      class="separators-8"
                      :src="separators44"
                      alt="Separators"
                    /><img class="tabel-icons-2" :src="tabelIcons46" alt="Tabel icons" />
                  </div>
                </div>
              </div>
              <div class="tabel-item-2">
                <div class="titel-12">
                  <img class="base-4" :src="base5" alt="Base" />
                  <div class="titel-13 hyundaisansheadoffice-bold-port-gore-23-8px">{{ titel3 }}</div>
                </div>
                <div class="onderdelen-5">
                  <img class="base-5" :src="base6" alt="Base" />
                  <div class="frame-1-1">
                    <img class="tabel-icons-30" :src="tabelIcons47" alt="Tabel icons" /><img
                      class="separators-26"
                      :src="separators45"
                      alt="Separators"
                    /><img class="tabel-icons-31" :src="tabelIcons48" alt="Tabel icons" /><img
                      class="separators-27"
                      :src="separators46"
                      alt="Separators"
                    /><img class="tabel-icons-32" :src="tabelIcons49" alt="Tabel icons" /><img
                      class="separators-28"
                      :src="separators47"
                      alt="Separators"
                    /><img class="tabel-icons-33" :src="tabelIcons50" alt="Tabel icons" /><img
                      class="separators-29"
                      :src="separators48"
                      alt="Separators"
                    /><img class="tabel-icons-34" :src="tabelIcons51" alt="Tabel icons" /><img
                      class="separators-30"
                      :src="separators49"
                      alt="Separators"
                    /><img class="tabel-icons-35" :src="tabelIcons52" alt="Tabel icons" /><img
                      class="separators-31"
                      :src="separators50"
                      alt="Separators"
                    /><img class="tabel-icons-36" :src="tabelIcons53" alt="Tabel icons" /><img
                      class="separators-32"
                      :src="separators51"
                      alt="Separators"
                    /><img class="tabel-icons-37" :src="tabelIcons54" alt="Tabel icons" /><img
                      class="separators-33"
                      :src="separators52"
                      alt="Separators"
                    /><img class="tabel-icons-38" :src="tabelIcons55" alt="Tabel icons" /><img
                      class="separators-34"
                      :src="separators53"
                      alt="Separators"
                    /><img class="tabel-icons-39" :src="tabelIcons56" alt="Tabel icons" /><img
                      class="separators-35"
                      :src="separators54"
                      alt="Separators"
                    /><img class="tabel-icons-40" :src="tabelIcons57" alt="Tabel icons" /><img
                      class="separators-36"
                      :src="separators55"
                      alt="Separators"
                    /><img class="tabel-icons-41" :src="tabelIcons58" alt="Tabel icons" /><img
                      class="separators-37"
                      :src="separators56"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons59" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators57"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons60" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators58"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons61" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators59"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons62" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators60"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons63" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators61"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons64" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators62"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons65" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators63"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons66" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators64"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons67" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators65"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons68" alt="Tabel icons" /><img
                      class="separators-9"
                      :src="separators66"
                      alt="Separators"
                    /><img class="tabel-icons-3" :src="tabelIcons69" alt="Tabel icons" />
                  </div>
                </div>
              </div>
              <div class="tabel-item-2">
                <div class="titel-12">
                  <img class="base-6" :src="base7" alt="Base" />
                  <div class="titel-13 hyundaisansheadoffice-bold-port-gore-23-8px">{{ titel4 }}</div>
                </div>
                <div class="onderdelen-5">
                  <img class="base-7" :src="base8" alt="Base" />
                  <div class="frame-1-1">
                    <img class="tabel-icons-42" :src="tabelIcons70" alt="Tabel icons" /><img
                      class="separators-38"
                      :src="separators67"
                      alt="Separators"
                    /><img class="tabel-icons-43" :src="tabelIcons71" alt="Tabel icons" /><img
                      class="separators-39"
                      :src="separators68"
                      alt="Separators"
                    /><img class="tabel-icons-44" :src="tabelIcons72" alt="Tabel icons" /><img
                      class="separators-40"
                      :src="separators69"
                      alt="Separators"
                    /><img class="tabel-icons-45" :src="tabelIcons73" alt="Tabel icons" /><img
                      class="separators-41"
                      :src="separators70"
                      alt="Separators"
                    /><img class="tabel-icons-46" :src="tabelIcons74" alt="Tabel icons" /><img
                      class="separators-42"
                      :src="separators71"
                      alt="Separators"
                    /><img class="tabel-icons-47" :src="tabelIcons75" alt="Tabel icons" /><img
                      class="separators-43"
                      :src="separators72"
                      alt="Separators"
                    /><img class="tabel-icons-48" :src="tabelIcons76" alt="Tabel icons" /><img
                      class="separators-44"
                      :src="separators73"
                      alt="Separators"
                    /><img class="tabel-icons-49" :src="tabelIcons77" alt="Tabel icons" /><img
                      class="separators-45"
                      :src="separators74"
                      alt="Separators"
                    /><img class="tabel-icons-50" :src="tabelIcons78" alt="Tabel icons" /><img
                      class="separators-46"
                      :src="separators75"
                      alt="Separators"
                    /><img class="tabel-icons-51" :src="tabelIcons79" alt="Tabel icons" /><img
                      class="separators-47"
                      :src="separators76"
                      alt="Separators"
                    /><img class="tabel-icons-52" :src="tabelIcons80" alt="Tabel icons" /><img
                      class="separators-48"
                      :src="separators77"
                      alt="Separators"
                    /><img class="tabel-icons-53" :src="tabelIcons81" alt="Tabel icons" /><img
                      class="separators-49"
                      :src="separators78"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons82" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators79"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons83" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators80"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons84" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators81"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons85" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators82"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons86" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators83"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons87" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators84"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons88" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators85"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons89" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators86"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons90" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators87"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons91" alt="Tabel icons" /><img
                      class="separators-10"
                      :src="separators88"
                      alt="Separators"
                    /><img class="tabel-icons-4" :src="tabelIcons92" alt="Tabel icons" />
                  </div>
                </div>
              </div>
              <div class="tabel-item-2">
                <div class="n-line-1">
                  <img class="base-8" :src="base9" alt="Base" />
                  <div class="titel-18 hyundaisansheadoffice-bold-port-gore-23-8px">{{ titel5 }}</div>
                </div>
                <div class="onderdelen-5">
                  <img class="base-9" :src="base10" alt="Base" />
                  <div class="frame-16-1">
                    <img class="tabel-icons-54" :src="tabelIcons93" alt="Tabel icons" /><img
                      class="separators-50"
                      :src="separators89"
                      alt="Separators"
                    /><img class="tabel-icons-55" :src="tabelIcons94" alt="Tabel icons" /><img
                      class="separators-51"
                      :src="separators90"
                      alt="Separators"
                    /><img class="tabel-icons-56" :src="tabelIcons95" alt="Tabel icons" /><img
                      class="separators-52"
                      :src="separators91"
                      alt="Separators"
                    /><img class="tabel-icons-57" :src="tabelIcons96" alt="Tabel icons" /><img
                      class="separators-53"
                      :src="separators92"
                      alt="Separators"
                    /><img class="tabel-icons-58" :src="tabelIcons97" alt="Tabel icons" /><img
                      class="separators-54"
                      :src="separators93"
                      alt="Separators"
                    /><img class="tabel-icons-59" :src="tabelIcons98" alt="Tabel icons" /><img
                      class="separators-55"
                      :src="separators94"
                      alt="Separators"
                    /><img class="tabel-icons-60" :src="tabelIcons99" alt="Tabel icons" /><img
                      class="separators-56"
                      :src="separators95"
                      alt="Separators"
                    /><img class="tabel-icons-61" :src="tabelIcons100" alt="Tabel icons" /><img
                      class="separators-57"
                      :src="separators96"
                      alt="Separators"
                    /><img class="tabel-icons-62" :src="tabelIcons101" alt="Tabel icons" /><img
                      class="separators-58"
                      :src="separators97"
                      alt="Separators"
                    /><img class="tabel-icons-63" :src="tabelIcons102" alt="Tabel icons" /><img
                      class="separators-59"
                      :src="separators98"
                      alt="Separators"
                    /><img class="tabel-icons-64" :src="tabelIcons103" alt="Tabel icons" /><img
                      class="separators-60"
                      :src="separators99"
                      alt="Separators"
                    /><img class="tabel-icons-65" :src="tabelIcons104" alt="Tabel icons" /><img
                      class="separators-61"
                      :src="separators100"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons105" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators101"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons106" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators102"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons107" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators103"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons108" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators104"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons109" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators105"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons110" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators106"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons111" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators107"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons112" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators108"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons113" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators109"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons114" alt="Tabel icons" /><img
                      class="separators-11"
                      :src="separators110"
                      alt="Separators"
                    /><img class="tabel-icons-5" :src="tabelIcons115" alt="Tabel icons" />
                  </div>
                </div>
              </div>
            </div>
            <x-button :arrowButton="xButton1Props.arrowButton" />
            <div class="group-2"><img class="arrow-4" :src="arrow3" alt="arrow" /></div>
            <div class="group-1-2"><img class="arrow-5" :src="arrow4" alt="arrow" /></div>
          </div>
        </div>
      </div>
      <div class="section-prijzentabel-1">
        <div class="prijzentabel-i10-comfort-1 hyundaisansheadoffice-bold-midnight-blue-32px">
          {{ prijzentabelI10Comfort }}
        </div>
        <div class="tabel-prijzen-1">
          <div class="aantal-maanden-1">
            <div class="titel-19" :style="{ 'background-image': 'url(' + titel6 + ')' }">
              <div class="bill-montly-3 hyundaisansheadoffice-bold-white-32px">{{ billMontly2 }}</div>
            </div>
            <div class="onderdelen-8">
              <div class="overlap-group-4" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
                <frame9 v-bind="frame9Props" />
              </div>
            </div>
          </div>
          <div class="aantal-km">
            <div class="titel-14">
              <div class="overlap-group-5">
                <img class="base-10" :src="base11" alt="Base" />
                <div class="titel-20 hyundaisansheadoffice-bold-port-gore-32px">{{ titel7 }}</div>
              </div>
            </div>
            <div class="onderdelen-6">
              <div class="overlap-group1-2">
                <img class="base-11" :src="base12" alt="Base" />
                <div class="frame-10-1 hyundaisansheadoffice-regular-normal-port-gore-21px">
                  <div class="profile-groups-3">{{ profileGroups1 }}</div>
                  <img class="separators-62" :src="separators111" alt="Separators" />
                  <div class="account-viwers-3">{{ accountViwers1 }}</div>
                  <img class="separators-12" :src="separators112" alt="Separators" />
                  <div class="social-media-dashboa-3">{{ socialMediaDashboa1 }}</div>
                  <img class="separators-12" :src="separators113" alt="Separators" />
                  <div class="shopify-dashboard-3">{{ shopifyDashboard1 }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="maandbedrag">
            <div class="titel-14">
              <img class="base-12" :src="base13" alt="Base" />
              <div class="titel-21 hyundaisansheadoffice-bold-port-gore-32px">{{ titel8 }}</div>
            </div>
            <div class="onderdelen-6">
              <img class="base-13" :src="base14" alt="Base" />
              <div class="frame-10-1 hyundaisansheadoffice-regular-normal-port-gore-21px">
                <div class="profile-groups-3">{{ profileGroups2 }}</div>
                <img class="separators-63" :src="separators114" alt="Separators" />
                <div class="account-viwers-4">{{ accountViwers2 }}</div>
                <img class="separators-64" :src="separators115" alt="Separators" />
                <div class="social-media-dashboa-4">{{ socialMediaDashboa2 }}</div>
                <img class="separators-65" :src="separators116" alt="Separators" />
                <div class="shopify-dashboard-4">{{ shopifyDashboard2 }}</div>
              </div>
            </div>
          </div>
        </div>
        <x-button :arrowButton="xButton2Props2.arrowButton" :className="xButton2Props2.className" />
      </div>
      <footer class="footer-1">
        <img class="line-2-1" :src="line2" alt="Line 2" />
        <p class="bekijk-de-privacy-1 hyundaisansheadoffice-regular-normal-silver-16px">{{ bekijkDePrivacy }}</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Keurmerk from "./Keurmerk";
import XLabel from "./XLabel";
import XButton2 from "./XButton2";
import Voordeel1 from "./Voordeel1";
import XButton from "./XButton";
import Frame9 from "./Frame9";
export default {
  name: "CampagneHyundaiMobiel",
  components: {
    Keurmerk,
    XLabel,
    XButton2,
    Voordeel1,
    XButton,
    Frame9,
  },
  props: [
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
    "frame9",
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
    "xButton2Props",
    "voordeel11Props",
    "voordeel12Props",
    "voordeel13Props",
    "voordeel14Props",
    "voordeel15Props",
    "xButton1Props",
    "frame9Props",
    "xButton2Props2",
  ],
};
</script>

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
  margin-top: 13.33vw
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

.hoofd-titel-tekst-1
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 1.6vw
  margin-right: 1.07vw
  position: relative

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

.maak-een-groots-statement-1
  color: $primary-blue
  font-family: $font-family-hyundai_sans_head_office-bold
  font-size: 6.21vw
  font-weight: 700
  letter-spacing: 0
  line-height: 10.96vw
  position: relative
  white-space: nowrap
  width: fit-content

.profiteer-nu-van-een-1
  letter-spacing: 0
  line-height: 6.4vw
  margin-right: 1.07vw
  margin-top: 7.2vw
  min-height: 19.2vw
  width: 89.33vw

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
  line-height: 9.6vw
  margin-top: -0.27vw
  position: relative
  text-align: center
  width: fit-content

.het-maandbedrag-va-1
  color: $text-grey
  font-family: $font-family-hyundai_sans_head_office-bold
  font-size: $font-size-s
  font-weight: 700
  letter-spacing: 0
  line-height: 4.27vw
  margin-right: 1.07vw
  margin-top: 7.2vw
  min-height: 12.8vw
  width: 89.33vw

.navigatie-slider-1
  align-items: flex-start
  display: inline-flex
  gap: 7.06vw
  left: 78.93vw
  position: absolute
  top: 123.73vw

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
  top: 123.2vw

.section-all-inclusive-1
  align-items: center
  background-color: $light-blue
  display: flex
  flex-direction: column
  gap: 7.2vw
  margin-top: 9.6vw
  min-height: 418.4vw
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

.overlap-group-2
  height: 256.8vw
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

.section-uitvoeringen-tabel-1
  align-items: flex-start
  display: flex
  margin-top: 18.4vw
  min-width: 256.8vw

.overlap-group2-1
  height: 390.4vw
  position: relative
  width: 256.8vw

.rectangle-2
  background-color: $light-blue
  height: 390.4vw
  left: 0
  position: absolute
  top: 0
  width: 100.0vw

.tabel-sectie-1
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 16.8vw
  left: 5.33vw
  position: absolute
  top: 16.27vw

.uitvoeringen-en-hun-functionaliteiten-1
  letter-spacing: 0
  line-height: 8.53vw
  margin-top: -0.27vw
  position: relative
  text-align: center
  width: 89.33vw

.tabel-1
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  gap: 1.1vw
  position: relative

.functionaliteiten-1
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 1.1vw
  position: relative

.titel-15
  align-items: center
  background-size: 100% 100%
  display: flex
  height: 32.26vw
  position: relative
  width: 85.3vw

.bill-montly-2
  flex: 1
  height: 8.0vw
  letter-spacing: 0
  line-height: 7.89vw
  margin-left: 13.21%
  margin-right: 10.68%
  margin-top: 0.16vw
  width: 64.93vw

.onderdelen-7
  background-size: 100% 100%
  border: 0.15vw solid
  border-color: $text-grey
  display: flex
  height: 249.3vw
  position: relative
  width: 85.3vw

.frame-9-3
  height: 234.42vw
  margin-left: 4.08vw
  margin-top: 8.21vw
  position: relative
  width: 78.13vw

.tabel-item-2
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 1.09vw
  overflow: hidden
  position: relative

.titel-12
  height: 32.26vw
  position: relative
  width: 32.11vw

.overlap-group-3
  height: 32.27vw
  position: relative
  width: 25.33vw

.base
  height: 32.27vw
  left: 0
  position: absolute
  top: 0
  width: 8.27vw

.titel-16
  left: 5.33vw
  letter-spacing: 0
  line-height: 7.89vw
  position: absolute
  text-align: center
  top: 10.13vw
  white-space: nowrap

.onderdelen-5
  height: 249.3vw
  position: relative
  width: 32.11vw

.overlap-group1-1
  height: 249.33vw
  position: relative
  width: 28.8vw

.base-1
  height: 249.33vw
  left: 0
  position: absolute
  top: 0
  width: 8.27vw

.frame-1-1
  align-items: center
  display: inline-flex
  flex-direction: column
  gap: 2.99vw
  left: 3.47vw
  position: absolute
  top: 7.73vw

.tabel-icons-6
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -123.73vw
  position: relative
  width: 4.28vw

.separators-13
  height: 0.27vw
  position: relative
  width: 4.59vw

.tabel-icons-7
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -113.11vw
  position: relative
  width: 4.28vw

.separators-7
  height: 0.27vw
  position: relative
  width: 4.68vw

.tabel-icons-8
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -102.67vw
  position: relative
  width: 4.28vw

.tabel-icons-9
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -92.23vw
  position: relative
  width: 4.28vw

.tabel-icons-10
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -81.79vw
  position: relative
  width: 4.28vw

.tabel-icons-11
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -71.35vw
  position: relative
  width: 4.28vw

.tabel-icons-12
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -60.91vw
  position: relative
  width: 4.28vw

.tabel-icons-13
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -50.47vw
  position: relative
  width: 4.28vw

.tabel-icons-14
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -40.02vw
  position: relative
  width: 4.28vw

.tabel-icons-15
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -29.58vw
  position: relative
  width: 4.28vw

.tabel-icons-16
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -19.14vw
  position: relative
  width: 4.28vw

.tabel-icons-17
  height: 4.28vw
  margin-right: -1180.65vw
  margin-top: -8.7vw
  position: relative
  width: 4.28vw

.tabel-icons-1
  height: 4.28vw
  margin-right: -1180.65vw
  position: relative
  width: 4.28vw

.base-2
  height: 32.27vw
  left: 1161.33vw
  position: absolute
  top: -82.67vw
  width: 32.0vw

.titel-17
  left: 2.67vw
  letter-spacing: 0
  line-height: 6.35vw
  position: absolute
  text-align: center
  top: 10.13vw

.span0-2
  line-height: 7.89vw

.span1-2
  color: $white
  font-family: $font-family-hyundai_sans_head_office-regular
  font-size: 3.25vw
  font-weight: 400

.base-3
  height: 249.33vw
  left: 1161.33vw
  position: absolute
  top: -116.0vw
  width: 32.0vw

.tabel-icons-18
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -123.73vw
  position: relative
  width: 4.28vw

.separators-14
  height: 0.36vw
  margin-right: -1157.99vw
  margin-top: -116.46vw
  position: relative
  width: 25.15vw

.tabel-icons-19
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -113.11vw
  position: relative
  width: 4.28vw

.separators-15
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -105.84vw
  position: relative
  width: 25.15vw

.tabel-icons-20
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -102.67vw
  position: relative
  width: 4.28vw

.separators-16
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -95.4vw
  position: relative
  width: 25.15vw

.tabel-icons-21
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -92.23vw
  position: relative
  width: 4.28vw

.separators-17
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -84.95vw
  position: relative
  width: 25.15vw

.tabel-icons-22
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -81.79vw
  position: relative
  width: 4.28vw

.separators-18
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -74.51vw
  position: relative
  width: 25.15vw

.tabel-icons-23
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -71.35vw
  position: relative
  width: 4.28vw

.separators-19
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -64.07vw
  position: relative
  width: 25.15vw

.tabel-icons-24
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -60.91vw
  position: relative
  width: 4.28vw

.separators-20
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -53.63vw
  position: relative
  width: 25.15vw

.tabel-icons-25
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -50.47vw
  position: relative
  width: 4.28vw

.separators-21
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -43.19vw
  position: relative
  width: 25.15vw

.tabel-icons-26
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -40.02vw
  position: relative
  width: 4.28vw

.separators-22
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -32.75vw
  position: relative
  width: 25.15vw

.tabel-icons-27
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -29.58vw
  position: relative
  width: 4.28vw

.separators-23
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -22.31vw
  position: relative
  width: 25.15vw

.tabel-icons-28
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -19.14vw
  position: relative
  width: 4.28vw

.separators-24
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -11.87vw
  position: relative
  width: 25.15vw

.tabel-icons-29
  height: 4.28vw
  margin-right: -1147.55vw
  margin-top: -8.7vw
  position: relative
  width: 4.28vw

.separators-25
  height: 0.27vw
  margin-right: -1157.99vw
  margin-top: -1.43vw
  position: relative
  width: 25.15vw

.tabel-icons-2
  height: 4.28vw
  margin-right: -1147.55vw
  position: relative
  width: 4.28vw

.separators-8
  height: 0.27vw
  margin-right: -1157.99vw
  position: relative
  width: 25.15vw

.base-4
  height: 32.27vw
  left: 1128.27vw
  position: absolute
  top: -82.67vw
  width: 32.0vw

.titel-13
  left: 0
  letter-spacing: 0
  line-height: 7.89vw
  position: absolute
  text-align: center
  top: 10.13vw
  width: 32.0vw

.base-5
  height: 249.33vw
  left: 1128.27vw
  position: absolute
  top: -116.0vw
  width: 32.0vw

.tabel-icons-30
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -123.73vw
  position: relative
  width: 4.28vw

.separators-26
  height: 0.36vw
  margin-right: -1124.78vw
  margin-top: -116.46vw
  position: relative
  width: 25.15vw

.tabel-icons-31
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -113.11vw
  position: relative
  width: 4.28vw

.separators-27
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -105.84vw
  position: relative
  width: 25.15vw

.tabel-icons-32
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -102.67vw
  position: relative
  width: 4.28vw

.separators-28
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -95.4vw
  position: relative
  width: 25.15vw

.tabel-icons-33
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -92.23vw
  position: relative
  width: 4.28vw

.separators-29
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -84.95vw
  position: relative
  width: 25.15vw

.tabel-icons-34
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -81.79vw
  position: relative
  width: 4.28vw

.separators-30
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -74.51vw
  position: relative
  width: 25.15vw

.tabel-icons-35
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -71.35vw
  position: relative
  width: 4.28vw

.separators-31
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -64.07vw
  position: relative
  width: 25.15vw

.tabel-icons-36
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -60.91vw
  position: relative
  width: 4.28vw

.separators-32
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -53.63vw
  position: relative
  width: 25.15vw

.tabel-icons-37
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -50.47vw
  position: relative
  width: 4.28vw

.separators-33
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -43.19vw
  position: relative
  width: 25.15vw

.tabel-icons-38
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -40.02vw
  position: relative
  width: 4.28vw

.separators-34
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -32.75vw
  position: relative
  width: 25.15vw

.tabel-icons-39
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -29.58vw
  position: relative
  width: 4.28vw

.separators-35
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -22.31vw
  position: relative
  width: 25.15vw

.tabel-icons-40
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -19.14vw
  position: relative
  width: 4.28vw

.separators-36
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -11.87vw
  position: relative
  width: 25.15vw

.tabel-icons-41
  height: 4.28vw
  margin-right: -1114.35vw
  margin-top: -8.7vw
  position: relative
  width: 4.28vw

.separators-37
  height: 0.27vw
  margin-right: -1124.78vw
  margin-top: -1.43vw
  position: relative
  width: 25.15vw

.tabel-icons-3
  height: 4.28vw
  margin-right: -1114.35vw
  position: relative
  width: 4.28vw

.separators-9
  height: 0.27vw
  margin-right: -1124.78vw
  position: relative
  width: 25.15vw

.base-6
  height: 32.27vw
  left: 1094.93vw
  position: absolute
  top: -82.67vw
  width: 32.0vw

.base-7
  height: 249.33vw
  left: 1094.93vw
  position: absolute
  top: -116.0vw
  width: 32.0vw

.tabel-icons-42
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -123.73vw
  position: relative
  width: 4.28vw

.separators-38
  height: 0.36vw
  margin-right: -1091.57vw
  margin-top: -116.46vw
  position: relative
  width: 25.15vw

.tabel-icons-43
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -113.11vw
  position: relative
  width: 4.28vw

.separators-39
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -105.84vw
  position: relative
  width: 25.15vw

.tabel-icons-44
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -102.67vw
  position: relative
  width: 4.28vw

.separators-40
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -95.4vw
  position: relative
  width: 25.15vw

.tabel-icons-45
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -92.23vw
  position: relative
  width: 4.28vw

.separators-41
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -84.95vw
  position: relative
  width: 25.15vw

.tabel-icons-46
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -81.79vw
  position: relative
  width: 4.28vw

.separators-42
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -74.51vw
  position: relative
  width: 25.15vw

.tabel-icons-47
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -71.35vw
  position: relative
  width: 4.28vw

.separators-43
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -64.07vw
  position: relative
  width: 25.15vw

.tabel-icons-48
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -60.91vw
  position: relative
  width: 4.28vw

.separators-44
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -53.63vw
  position: relative
  width: 25.15vw

.tabel-icons-49
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -50.47vw
  position: relative
  width: 4.28vw

.separators-45
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -43.19vw
  position: relative
  width: 25.15vw

.tabel-icons-50
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -40.02vw
  position: relative
  width: 4.28vw

.separators-46
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -32.75vw
  position: relative
  width: 25.15vw

.tabel-icons-51
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -29.58vw
  position: relative
  width: 4.28vw

.separators-47
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -22.31vw
  position: relative
  width: 25.15vw

.tabel-icons-52
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -19.14vw
  position: relative
  width: 4.28vw

.separators-48
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -11.87vw
  position: relative
  width: 25.15vw

.tabel-icons-53
  height: 4.28vw
  margin-right: -1081.14vw
  margin-top: -8.7vw
  position: relative
  width: 4.28vw

.separators-49
  height: 0.27vw
  margin-right: -1091.57vw
  margin-top: -1.43vw
  position: relative
  width: 25.15vw

.tabel-icons-4
  height: 4.28vw
  margin-right: -1081.14vw
  position: relative
  width: 4.28vw

.separators-10
  height: 0.27vw
  margin-right: -1091.57vw
  position: relative
  width: 25.15vw

.n-line-1
  height: 32.26vw
  position: relative
  width: 32.3vw

.base-8
  height: 32.27vw
  left: 1061.87vw
  position: absolute
  top: -82.67vw
  width: 32.0vw

.titel-18
  left: 0.27vw
  letter-spacing: 0
  line-height: 7.89vw
  position: absolute
  text-align: center
  top: 10.13vw
  width: 32.0vw

.base-9
  height: 249.33vw
  left: 1061.87vw
  position: absolute
  top: -116.0vw
  width: 32.0vw

.frame-16-1
  align-items: center
  display: inline-flex
  flex-direction: column
  gap: 2.99vw
  left: 3.73vw
  position: absolute
  top: 7.73vw

.tabel-icons-54
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -123.73vw
  position: relative
  width: 4.28vw

.separators-50
  height: 0.36vw
  margin-right: -1058.05vw
  margin-top: -116.46vw
  position: relative
  width: 25.15vw

.tabel-icons-55
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -113.11vw
  position: relative
  width: 4.28vw

.separators-51
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -105.84vw
  position: relative
  width: 25.15vw

.tabel-icons-56
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -102.67vw
  position: relative
  width: 4.28vw

.separators-52
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -95.4vw
  position: relative
  width: 25.15vw

.tabel-icons-57
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -92.23vw
  position: relative
  width: 4.28vw

.separators-53
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -84.95vw
  position: relative
  width: 25.15vw

.tabel-icons-58
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -81.79vw
  position: relative
  width: 4.28vw

.separators-54
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -74.51vw
  position: relative
  width: 25.15vw

.tabel-icons-59
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -71.35vw
  position: relative
  width: 4.28vw

.separators-55
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -64.07vw
  position: relative
  width: 25.15vw

.tabel-icons-60
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -60.91vw
  position: relative
  width: 4.28vw

.separators-56
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -53.63vw
  position: relative
  width: 25.15vw

.tabel-icons-61
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -50.47vw
  position: relative
  width: 4.28vw

.separators-57
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -43.19vw
  position: relative
  width: 25.15vw

.tabel-icons-62
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -40.02vw
  position: relative
  width: 4.28vw

.separators-58
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -32.75vw
  position: relative
  width: 25.15vw

.tabel-icons-63
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -29.58vw
  position: relative
  width: 4.28vw

.separators-59
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -22.31vw
  position: relative
  width: 25.15vw

.tabel-icons-64
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -19.14vw
  position: relative
  width: 4.28vw

.separators-60
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -11.87vw
  position: relative
  width: 25.15vw

.tabel-icons-65
  height: 4.28vw
  margin-right: -1047.61vw
  margin-top: -8.7vw
  position: relative
  width: 4.28vw

.separators-61
  height: 0.27vw
  margin-right: -1058.05vw
  margin-top: -1.43vw
  position: relative
  width: 25.15vw

.tabel-icons-5
  height: 4.28vw
  margin-right: -1047.61vw
  position: relative
  width: 4.28vw

.separators-11
  height: 0.27vw
  margin-right: -1058.05vw
  position: relative
  width: 25.15vw

.group-2
  background-color: $primary-blue
  border-radius: 5.33vw
  display: flex
  height: 10.67vw
  left: 67.47vw
  position: absolute
  top: 311.73vw
  width: 10.67vw

.arrow-4
  height: 3.75vw
  margin-left: 3.2vw
  margin-top: 3.47vw
  width: 3.71vw

.group-1-2
  background-color: $primary-blue
  border-radius: 5.33vw
  display: flex
  height: 10.67vw
  left: 53.07vw
  position: absolute
  top: 311.73vw
  width: 10.67vw

.arrow-5
  height: 3.75vw
  margin-left: 3.76vw
  margin-top: 3.47vw
  width: 3.71vw

.section-prijzentabel-1
  align-self: center
  display: flex
  flex-direction: column
  height: 199.73vw
  margin-left: 1.07vw
  margin-top: 17.33vw
  position: relative
  width: 90.4vw

.prijzentabel-i10-comfort-1
  height: 17.07vw
  letter-spacing: 0
  line-height: 8.53vw
  margin-left: 11.15vw
  text-align: center
  width: 67.59vw

.tabel-prijzen-1
  align-items: flex-start
  display: flex
  gap: 1.9vw
  height: 123.47vw
  margin-top: 15.47vw
  position: relative
  width: 89.87vw

.aantal-maanden-1
  align-items: flex-start
  align-self: stretch
  display: flex
  flex-direction: column
  gap: 1.9vw
  position: relative
  width: 64.27vw

.titel-19
  align-items: center
  background-size: 100% 100%
  display: flex
  height: 34.4vw
  position: relative
  width: 64.0vw

.bill-montly-3
  flex: 1
  height: 17.07vw
  letter-spacing: 0
  line-height: 8.53vw
  margin-left: 13.21%
  margin-right: 10.68%
  margin-top: 0.27vw
  width: 48.71vw

.onderdelen-8
  background-color: $light-blue
  flex: 1
  flex-grow: 1
  position: relative
  width: 64.0vw

.overlap-group-4
  align-items: flex-end
  background-size: 100% 100%
  display: flex
  height: 87.2vw
  min-width: 64.0vw
  padding: 11.76vw 7.04vw
  position: relative

.aantal-km
  align-items: flex-start
  align-self: stretch
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 2.67vw
  margin-right: -40.3vw
  position: relative

.titel-14
  height: 33.87vw
  position: relative
  width: 64.0vw

.overlap-group-5
  height: 33.87vw
  position: relative
  width: 50.13vw

.base-10
  height: 33.87vw
  left: 0
  position: absolute
  top: 0
  width: 28.53vw

.titel-20
  left: 8.0vw
  letter-spacing: 0
  line-height: 8.53vw
  position: absolute
  text-align: center
  top: 11.47vw
  white-space: nowrap

.onderdelen-6
  height: 86.93vw
  position: relative
  width: 64.0vw

.overlap-group1-2
  height: 86.93vw
  position: relative
  width: 56.8vw

.base-11
  height: 86.93vw
  left: 0
  position: absolute
  top: 0
  width: 28.53vw

.frame-10-1
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 5.42vw
  left: 7.2vw
  position: absolute
  top: 12.8vw

.profile-groups-3
  letter-spacing: 0
  line-height: normal
  margin-top: -0.27vw
  position: relative
  width: fit-content

.separators-62
  height: 0.31vw
  position: relative
  width: 21.27vw

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
</style>
