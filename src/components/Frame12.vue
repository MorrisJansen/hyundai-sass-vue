<template>
  <div :class="[`frame-12`, className || ``]">
    <div v-for="(icon, index) in icons" :key="index" class="icoon-container">
      <img class="tabel-icons" :src="icon" alt="Tabel icons" />
      <img v-if="index < icons.length - 0" class="separators-3" :src="separators1" alt="Separators" />
    </div>
    <img v-if="extraIcon" class="tabel-icons" :src="extraIcon" alt="Extra Tabel icon" />
    <img v-for="missingSeparatorIndex in 21 - (icons.length = 21)" :key="'separator-' + missingSeparatorIndex" class="separators-3" :src="separators1" alt="Separators" />
  </div>
</template>


<script>
export default {
  name: "Frame12",
  props: {
    icons: {
      type: Array,
      required: true
    },
    separators1: String,
    className: String,
    extraIcon: String
  }
};
</script>

<style lang="sass">
.frame-12
  align-items: center
  display: inline-flex
  flex-direction: column
  gap: 1.01vw
  height: 78.7vw
  margin-top: 2.59vw
  position: relative
  width: 8.45vw

@media (max-width: 480px)
  .frame-12
    height: 190vw!important

.tabel-icons
  height: 1.44vw
  position: relative
  width: 1.44vw
  justify-content: center
  align-items: center
  margin: 0 auto
  margin-left: 3.5vw

.separators-3
  height: 0.06vw
  position: relative
  width: 8.45vw

.tabel-icons:last-child
  margin-right: 60px


</style>
