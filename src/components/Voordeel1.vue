<template>
  <div :class="[`voordeel-2-1`, className || ``]">
    <img class="icons-lease" :src="iconsLease" alt="Icons lease" />
    <div
      class="rijden-in-een-nieuwe-hyundai-1 hyundaisansheadoffice-bold-midnight-blue-24px"
      v-html="rijdenInEenNieuweHyundai"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Voordeel1",
  props: ["iconsLease", "rijdenInEenNieuweHyundai", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.voordeel-2-1
  align-items: flex-start
  align-self: stretch
  background-color: $white
  border-radius: 4.43vw
  box-shadow: 0.0vw 7.19vw 11.07vw #26397e24
  display: flex
  flex: 0 0 auto
  gap: 5.33vw
  overflow: hidden
  padding: 10.67vw 8.0vw
  position: relative
  width: 100%

.icons-lease
  height: 10.67vw
  position: relative
  width: 10.67vw

.rijden-in-een-nieuwe-hyundai-1
  letter-spacing: 0
  line-height: 9.6vw
  margin-top: -0.28vw
  position: relative
  width: fit-content

.voordeel-2-1.voordeel-2-2 .rijden-in-een-nieuwe-hyundai-1,
.voordeel-2-1.voordeel-2-3 .rijden-in-een-nieuwe-hyundai-1,
.voordeel-2-1.voordeel-2-4 .rijden-in-een-nieuwe-hyundai-1,
.voordeel-2-1.voordeel-2 .rijden-in-een-nieuwe-hyundai-1
  width: 57.01vw
</style>
