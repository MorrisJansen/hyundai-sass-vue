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
import { component } from "vue/types/umd";

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
    path: '/hyundai-sass-vue/vraag1',
    component: vraag1,
    name: 'vraag1',
  },
  {
    path: '/hyundai-sass-vue/vraag2',
    component: vraag2,
    name: 'vraag2',
  },
  {
    path: '/hyundai-sass-vue/vraag3',
    component: vraag3,
    name: 'vraag3',
  },
  {
    path: '/hyundai-sass-vue/vraag4',
    component: vraag4,
    name: 'vraag4',
  },
  {
    path: '/hyundai-sass-vue/vraag5',
    component: vraag5,
    name: 'vraag5',
  },
  {
    path: '/hyundai-sass-vue/formulier',
    component: Formulier,
    name: 'formulier'
  },
  {
    path: '/hyundai-sass-vue/bedankt',
    component: Bedankt,
    name: 'bedankt'
  },
  {
    path: '/hyundai-sass-vue/bedankt-img',
    component: Bedankt-img,
    name: 'bedankt-img'
  },
  {
    path: '/hyundai-sass-vue/:queryParams(.*)',
    name: 'Result',
    component: CampagneHyundaiDesktopTest,
    props: true
  }
];



const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

const handleRouting = () => {
  const isMobile = window.innerWidth < 768;
  const currentPath = router.currentRoute.path;

  const isOnVragenPage = currentPath.startsWith("/hyundai-sass-vue/desktopVragen") || currentPath === "/hyundai-sass-vue/";
  const isOnCampagnePage = currentPath.startsWith("/hyundai-sass-vue/campagne-hyundai-mobiel");

  if (isOnVragenPage) {
    if (isMobile) {
      if (currentPath !== "/hyundai-sass-vue/campagne-hyundai-mobiel") {
        router.replace("/hyundai-sass-vue/campagne-hyundai-mobiel");
      }
    } else {
      if (currentPath !== currentPath) {
        router.replace(currentPath);
      }
    }
  } else if (isOnCampagnePage) {
    if (isMobile) {
      if (currentPath !== "/hyundai-sass-vue/campagne-hyundai-mobiel") {
        router.replace("/hyundai-sass-vue/campagne-hyundai-mobiel");
      }
    } else {
      if (currentPath !== "/hyundai-sass-vue/") {
        router.replace("/hyundai-sass-vue/");
      }
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
