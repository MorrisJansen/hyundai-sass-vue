<template>
  <div class="label">
    <div class="nieuw">{{ nieuw }}</div>
  </div>
</template>

<script>
export default {
  name: "XLabel",
  props: ["nieuw"],
};
</script>

<style lang="sass">
@import '../../variables'

.label,
.label-1
  align-items: center
  background-color: $light-grey
  border-radius: 1.64vw
  display: inline-flex
  flex: 0 0 auto
  gap: 0.37vw
  justify-content: center
  overflow: hidden
  padding: 0.15vw 0.82vw
  position: relative

.nieuw,
.nieuw-1
  letter-spacing: 0
  line-height: 1.19vw
  margin-top: -0.04vw
  position: relative
  white-space: nowrap
  width: fit-content

@media screen and (min-width: 768px)
  .nieuw,
  .nieuw-1
    display: flex
    padding: 0.17856rem 0.98213rem
    justify-content: center
    align-items: center
    gap: 0.44644rem
    font-size: $font-size-l


  
</style>
