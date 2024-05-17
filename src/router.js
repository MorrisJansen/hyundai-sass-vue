import Vue from "vue";
import Router from "vue-router";
import CampagneHyundaiDesktopTest from "./components/CampagneHyundaiDesktopTest";
import CampagneHyundaiMobiel from "./components/CampagneHyundaiMobiel";
import { campagneHyundaiDesktopTestData, campagneHyundaiMobielData } from "./data";
import Carousel from "./components/carousel.vue";



import mobielVraag1 from "./components/mobielVraag1.vue";
import mobielVraag2 from "./components/mobielVraag2.vue";
import mobielVraag3 from "./components/mobielVraag3.vue";
import mobielVraag4 from "./components/mobielVraag4.vue";
import mobielVraag5 from "./components/mobielVraag5.vue";

import desktopVraag1 from "./components/desktopVraag1.vue";
import desktopVraag2 from "./components/desktopVraag2.vue";
import desktopVraag3 from "./components/desktopVraag3.vue";
import desktopVraag4 from "./components/desktopVraag4.vue";
import desktopVraag5 from "./components/desktopVraag5.vue";

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
      path: "/campagne-hyundai-desktop",
      component: CampagneHyundaiDesktopTest,
      props: { ...campagneHyundaiDesktopTestData },
    },
    {
      path: "/carousel",
      component: Carousel,
    },

    // Mobiel Vraag routes
    {
      path: "/mobielVragen",
      component: mobielVraag1,
      children: [
        { path: "1", component: mobielVraag1, props: { ...mobielVraag1Data } },
        { path: "2", component: mobielVraag2, props: { ...mobielVraag2Data } },
        { path: "3", component: mobielVraag3, props: { ...mobielVraag3Data } },
        { path: "4", component: mobielVraag4, props: { ...mobielVraag4Data } },
        { path: "5", component: mobielVraag5, props: { ...mobielVraag5Data } },
      ]
    },
    // Desktop Vraag routes
    {
      path: "/desktopVragen",
      component: desktopVraag1,
      children: [
        { path: "1", component: desktopVraag1, props: { ...campagneHyundaiDesktopTestData } },
        { path: "2", component: desktopVraag2, props: { ...campagneHyundaiDesktopTestData } },
        { path: "3", component: desktopVraag3, props: { ...campagneHyundaiDesktopTestData } },
        { path: "4", component: desktopVraag4, props: { ...campagneHyundaiDesktopTestData } },
        { path: "5", component: desktopVraag5, props: { ...campagneHyundaiDesktopTestData } },
      ]
    },
  ],
});

const handleRouting = () => {
  const isMobile = window.innerWidth < 768;
  const isOnVragenPage = router.currentRoute.path.startsWith("/desktopvragen") || router.currentRoute.path.startsWith("/mobielvragen");
  const isOnCampagnePage = router.currentRoute.path.startsWith("/campagne-hyundai-mobiel") || router.currentRoute.path.startsWith("/campagne-hyundai-desktop");

  if (isOnVragenPage) {
    if (isMobile) {
      router.replace("/mobielVragen");
    } else {
      router.replace("/desktopVragen");
    }
  } else if (isOnCampagnePage) {
    if (isMobile) {
      router.replace("/campagne-hyundai-mobiel");
    } else {
      router.replace("/campagne-hyundai-desktop");
    }
  }
};

// Voeg event listeners toe om handleRouting aan te roepen bij wijziging van de schermgrootte
window.addEventListener("resize", handleRouting);
window.addEventListener("load", handleRouting);








export default router;
