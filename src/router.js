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
import Bedankt from "./components/bedankt.vue";
import Tabel2 from "./components/tabel2.vue";

import { 
  campagneHyundaiDesktopTestData, 
  campagneHyundaiMobielData,
} from "./data";

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/hyundai-sass-vue/',
    name: 'Home',
    component: CampagneHyundaiDesktopTest,
    props: { ...campagneHyundaiDesktopTestData },
  },
  {
    path: '/hyundai-sass-vue/campagne-hyundai-mobiel',
    component: CampagneHyundaiMobiel,
    props: { ...campagneHyundaiMobielData },
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/vraag1',
    component: vraag1,
    name: 'vraag1',
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/vraag2',
    component: vraag2,
    name: 'vraag2',
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/vraag3',
    component: vraag3,
    name: 'vraag3',
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/vraag4',
    component: vraag4,
    name: 'vraag4',
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/vraag5',
    component: vraag5,
    name: 'vraag5',
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/formulier',
    component: Formulier,
    name: 'formulier'
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/bedankt',
    component: Bedankt,
    name: 'bedankt'
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/tabel2',
    component: Tabel2,
    name: 'tabel2'
  },
  {
    path: 'https://morrisjansen.github.io/hyundai-sass-vue/:queryParams(.*)',
    name: 'Result',
    component: CampagneHyundaiDesktopTest,
    props: true
  }
];

const router = new Router({
  mode: 'history',
  routes,
});

const handleRouting = () => {
  const isMobile = window.innerWidth < 768;
  const currentPath = router.currentRoute.path;

  const isOnVragenPage = currentPath.startsWith("https://morrisjansen.github.io/hyundai-sass-vue/desktopVragen") || currentPath === "https://morrisjansen.github.io/hyundai-sass-vue/hyundai-sass-vue/";
  const isOnCampagnePage = currentPath.startsWith("https://morrisjansen.github.io/hyundai-sass-vue/campagne-hyundai-mobiel");

  if (isOnVragenPage) {
    if (isMobile) {
      router.replace("https://morrisjansen.github.io/hyundai-sass-vue/campagne-hyundai-mobiel");
    } else {
      router.replace(currentPath);
    }
  } else if (isOnCampagnePage) {
    if (isMobile) {
      router.replace("https://morrisjansen.github.io/hyundai-sass-vue/campagne-hyundai-mobiel");
    } else {
      router.replace("https://morrisjansen.github.io/hyundai-sass-vue/");
    }
  }
};

const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const debouncedHandleRouting = debounce(handleRouting, 200);

window.addEventListener("resize", debouncedHandleRouting);
document.addEventListener("DOMContentLoaded", handleRouting);

export default router;
