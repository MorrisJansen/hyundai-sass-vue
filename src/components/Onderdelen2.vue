<template>
  <div class="onderdelen-3"><frame12 v-bind="frame12Props" /></div>
</template>

<script>
import Frame12 from "./Frame12";
export default {
  name: "Onderdelen2",
  components: {
    Frame12,
  },
  props: ["frame12Props"],
};
</script>

<style lang="sass">
@import '../../variables'

.onderdelen-3
  background-color: $white
  border: 0.05vw solid
  border-color: $text-grey
  border-radius: 0.52vw
  display: flex
  height: 83.79vw
  position: relative
  width: 10.79vw
</style>
