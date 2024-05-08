<template>
  <div :class="[`keurmerk`, className || ``]"></div>
</template>

<script>
export default {
  name: "Keurmerk",
  props: ["className"],
};
</script>

<style lang="sass">
.keurmerk
  background-image: url(https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/image-1.png)
  background-position: 50% 50%
  background-size: cover
  height: 3.12vw
  margin-top: 2.03vw
  width: 2.73vw

.keurmerk.keurmerk-1
  height: 10.68vw
  margin-top: 13.87vw
  width: 9.33vw
</style>
