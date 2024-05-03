<template>
  <div :class="[`button-4`, className || ``]">
    <div class="vraag-offerte-aan hyundaisansheadoffice-bold-white-27px">Vraag offerte aan</div>
    <img class="arrow" :src="arrowButton" alt="Arrow button" />
  </div>
</template>

<script>
export default {
  name: "XButton",
  props: ["arrowButton", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.button-4
  align-items: center
  background-color: $primary-blue
  border-radius: 0.36vw
  display: inline-flex
  flex: 0 0 auto
  gap: 1.46vw
  overflow: hidden
  padding: 1.77vw 1.3vw
  position: relative

.vraag-offerte-aan
  letter-spacing: 0
  line-height: normal
  margin-top: -0.1vw
  position: relative
  width: fit-content

.arrow
  height: 0.68vw
  position: relative
  width: 1.25vw

.button-4.button-1
  align-items: center
  background-color: $primary-blue
  border-radius: 0.36vw
  display: inline-flex
  gap: 1.46vw
  height: 5.26vw
  margin-left: 10.55vw
  overflow: hidden
  padding: 1.77vw 1.3vw
  position: relative
  width: 17.19vw

.button-4.button-3
  align-items: center
  align-self: center
  background-color: $primary-blue
  border-radius: 1.87vw
  display: inline-flex
  gap: 7.47vw
  height: 26.93vw
  margin-left: -0.27vw
  margin-top: 16.8vw
  overflow: hidden
  padding: 9.07vw 6.67vw
  position: relative
  width: 88.0vw
</style>
