<template>
  <div class="button-5">
    <div class="vraag-offerte-aan-2">{{ vraagOfferteAan }}</div>
    <img class="arrow-6" :src="arrow" alt="Arrow" />
  </div>
</template>

<script>
export default {
  name: "XButton2",
  props: ["vraagOfferteAan", "arrow"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-5
  align-items: center
  background-color: $primary-blue
  border-radius: 1.41vw
  display: inline-flex
  flex: 0 0 auto
  gap: 5.63vw
  overflow: hidden
  padding: 6.84vw 5.03vw
  position: relative

.vraag-offerte-aan-2
  color: $white
  font-family: $font-family-hyundai_sans_head_office-bold
  font-size: 5.44vw
  font-weight: 700
  letter-spacing: 0
  line-height: normal
  margin-top: -0.4vw
  position: relative
  width: fit-content

.arrow-6
  height: 2.62vw
  position: relative
  width: 4.83vw
</style>
