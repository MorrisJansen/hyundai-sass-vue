<template>
  <div class="onderdelen-4"><frame9 v-bind="frame9Props" /></div>
</template>

<script>
import Frame9 from "./Frame9";
export default {
  name: "Onderdelen3",
  components: {
    Frame9,
  },
  props: ["frame9Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.onderdelen-4
  background-color: $white
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 16.98vw
  position: relative
  width: 12.5vw
</style>
