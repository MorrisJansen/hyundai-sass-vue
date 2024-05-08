import Vue from "vue";
import Router from "vue-router";
import CampagneHyundaiDesktopTest from "./components/CampagneHyundaiDesktopTest";
import CampagneHyundaiMobiel from "./components/CampagneHyundaiMobiel";
import { campagneHyundaiDesktopTestData, campagneHyundaiMobielData } from "./data";

// Import your mobiel vraag components and their data
import MobielVraag1 from "./components/mobielVraag1.vue";
import MobielVraag2 from "./components/mobielVraag2.vue";
import MobielVraag3 from "./components/mobielVraag3.vue";
import MobielVraag4 from "./components/mobielVraag4.vue";
import MobielVraag5 from "./components/mobielVraag5.vue";

import { 
   mobielVraag1Data,
   mobielVraag2Data,
   mobielVraag3Data,
   mobielVraag4Data,
   mobielVraag5Data
  } from "./data";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    // Campagne routes
    {
      path: "/campagne-hyundai-mobiel",
      component: CampagneHyundaiMobiel,
      props: { ...campagneHyundaiMobielData },
    },
    {
      path: "*",
      component: CampagneHyundaiDesktopTest,
      props: { ...campagneHyundaiDesktopTestData },
    },
    // Mobiel Vraag routes
    {
      path: "/mobielVraag1",
      component: MobielVraag1,
      props: { ...mobielVraag1Data },
    },
    {
      path: "/mobielVraag2",
      component: MobielVraag2,
      props: { ...mobielVraag2Data },
    },
    {
      path: "/mobielVraag3",
      component: MobielVraag3,
      props: { ...mobielVraag3Data },
    },
    {
      path: "/mobielVraag4",
      component: MobielVraag4,
      props: { ...mobielVraag4Data },
    },
    {
      path: "/mobielVraag5",
      component: MobielVraag5,
      props: { ...mobielVraag5Data },
    },
  ],
});

const resizeHandler = () => {
  if (window.innerWidth < 768) {
    if (router.currentRoute.path === "/mobielVraag1") {
      router.replace("/mobielVraag1");
    } else {
      router.replace("/campagne-hyundai-mobiel");
    }
  } else if (router.currentRoute.path !== "/campagne-hyundai-desktop") {
    router.replace("/campagne-hyundai-desktop");
  }
};



window.addEventListener("resize", resizeHandler);
window.addEventListener("load", resizeHandler);

export default router;
