<template>
  <div class="voordeel">
    <img class="coins" :src="coins" alt="coins" />
    <div class="aantrekkelijk-vast-bedrag-pm hyundaisansheadoffice-bold-midnight-blue-24px">
      {{ aantrekkelijkVastBedragPM }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Voordeel2",
  props: ["coins", "aantrekkelijkVastBedragPM"],
};
</script>

<style lang="sass">
@import '../../variables'

.voordeel
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

.coins,
.verzekering,
.schade,
.portmonnee
  height: 2.08vw
  position: relative
  width: 2.08vw

.aantrekkelijk-vast-bedrag-pm,
.inc-verzekering-en-reparatie,
.schadeherstel-en-onderhoud,
.geen-verborgen-kosten
  letter-spacing: 0
  line-height: 1.88vw
  position: relative
  width: 11.13vw
</style>
