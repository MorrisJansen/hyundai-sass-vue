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


@media (max-width: 768px)
  .nieuw,
  .nieuw-1
    letter-spacing: 0
    line-height: 1.19vw
    margin-top: -0.04vw
    position: relative
    white-space: nowrap
    width: fit-content



  

@media screen and (min-width: 768px)
  .label,
  .label-1
    display: flex
    padding: 0.198vw 1.091vw
    justify-content: center
    align-items: center
    border-radius:  2.183vw
    background: var(--Light-grey, #F0F0F0)
  
  .nieuw,
  .nieuw-1
    letter-spacing: 0
    margin-top: -0.04vw
    white-space: nowrap
    width: fit-content
    font-size: $font-size-l


    

  
</style>
