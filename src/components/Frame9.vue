<template>
  <div :class="[`frame-9-1 hyundaisansheadoffice-regular-normal-port-gore-21px`, className || ``]">
    <div class="profile-groups-1">{{ profileGroups }}</div>
    <img class="separators-5" :src="separators1" alt="Separators" />
    <div class="account-viwers">{{ accountViwers }}</div>
    <img class="separators-5" :src="separators2" alt="Separators" />
    <div class="social-media-dashboa">{{ socialMediaDashboa }}</div>
    <img class="separators-5" :src="separators3" alt="Separators" />
    <div class="shopify-dashboard">{{ shopifyDashboard }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame9",
  props: [
    "profileGroups",
    "separators1",
    "accountViwers",
    "separators2",
    "socialMediaDashboa",
    "separators3",
    "shopifyDashboard",
    "className",
  ],
};
</script>

<style lang="sass">
.frame-9-1
  align-items: flex-start
  display: inline-flex
  flex-direction: column
  gap: 1.06vw
  height: 11.97vw
  margin-left: 1.38vw
  margin-top: 2.76vw
  position: relative
  width: 9.69vw

.profile-groups-1
  letter-spacing: 0
  line-height: normal
  margin-top: -0.05vw
  position: relative
  width: fit-content

.separators-5
  height: 0.06vw
  position: relative
  width: 9.69vw

.account-viwers,
.social-media-dashboa,
.shopify-dashboard
  letter-spacing: 0
  line-height: normal
  position: relative
  width: fit-content

.frame-9-1.frame-10
  margin-left: 1.41vw
  margin-top: 2.5vw

.frame-9-1.frame-9-2
  height: unset
  margin-left: unset
  margin-top: unset
  width: unset

.frame-9-1.frame-9-2 .separators-5
  height: 0.31vw
</style>
