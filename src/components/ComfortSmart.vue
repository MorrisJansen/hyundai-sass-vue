<template>
  <div :class="[`tabel-item-1-1`, className || ``]">
    <div class="titel-10">
      <div class="titel-11 hyundaisansheadoffice-bold-port-gore-41px">{{ titel }}</div>
    </div>
    <onderdelen2 :frame12Props="onderdelen2Props.frame12Props" />
  </div>
</template>

<script>
import Onderdelen2 from "./Onderdelen2";
export default {
  name: "ComfortSmart",
  components: {
    Onderdelen2,
  },
  props: ["titel", "className", "onderdelen2Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.tabel-item-1-1
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 0.36vw
  overflow: hidden
  position: relative

.titel-10
  background-color: $white
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 10.84vw
  position: relative
  width: 10.79vw

.titel-11
  height: 5.31vw
  letter-spacing: 0
  line-height: 2.66vw
  margin-left: 0.01vw
  margin-top: 3.42vw
  text-align: center
  width: 10.73vw

.tabel-item-1-1.tabel-item-1 .titel-11
  height: 2.66vw
  
</style>
