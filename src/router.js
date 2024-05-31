import Vue from "vue";
import Router from "vue-router";

import CampagneHyundaiDesktopTest from "./components/CampagneHyundaiDesktopTest";
import CampagneHyundaiMobiel from "./components/CampagneHyundaiMobiel";

import vraag1 from "./components/desktopVraag1.vue";
import vraag2 from "./components/desktopVraag2.vue";
import vraag3 from "./components/desktopVraag3.vue";
import vraag4 from "./components/desktopVraag4.vue";
import vraag5 from "./components/desktopVraag5.vue";
import Formulier from "./components/formulier.vue";
import Bedankt from "./components/bedankt.vue"

import { 
  campagneHyundaiDesktopTestData, 
  campagneHyundaiMobielData,
} from "./data";

Vue.use(Router);

const routes = [
  {
    path: "/campagne-hyundai-mobiel",
    component: CampagneHyundaiMobiel,
    props: { ...campagneHyundaiMobielData },
  },
  {
    path: "/",
    component: CampagneHyundaiDesktopTest,
    props: { ...campagneHyundaiDesktopTestData },
  },

  {
    path: "/vraag1",
    component: vraag1,
    name: 'vraag1',
  },
  {
    path: "/vraag2",
    component: vraag2,
    name: 'vraag2',
  },
  {
    path: "/vraag3",
    component: vraag3,
    name: 'vraag3',
  },
  {
    path: "/vraag4",
    component: vraag4,
    name: 'vraag4',
  },
  {
    path: "/vraag5",
    component: vraag5,
    name: 'vraag5',
  },
  {
    path: "/formulier",
    component: Formulier,
    name: 'formulier'
  },
  {
    path: "/bedankt",
    component: Bedankt,
    name: 'bedankt'
  },
];

const router = new Router({
  mode: "history",
  routes,
});
const handleRouting = () => {
  const isMobile = window.innerWidth < 768;
  const currentPath = router.currentRoute.path;

  const isOnVragenPage = currentPath.startsWith("/desktopVragen") || currentPath === "/";
  const isOnCampagnePage = currentPath.startsWith("/campagne-hyundai-mobiel");

  if (isOnVragenPage) {
    if (isMobile) {
      router.replace("/campagne-hyundai-mobiel");
    } else {
      router.replace(currentPath);
    }
  } else if (isOnCampagnePage) {
    if (isMobile) {
      router.replace("/campagne-hyundai-mobiel");
    } else {
      router.replace("/");
    }
  }
};



window.addEventListener("resize", handleRouting);
window.addEventListener("load", handleRouting);

export default router;
