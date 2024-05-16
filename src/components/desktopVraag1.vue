<script>
import Keurmerk from "./Keurmerk";

export default {
  name: "TopBalk",
  components: {
    Keurmerk,
  },
  data() {
    return {
      vraag: "Stel hier je vraag",
      antwoordOpties: [
        "Antwoord 1",
        "Antwoord 2",
        "Antwoord 3",
        "Antwoord 4",
        "Antwoord 5",
        "Antwoord 6",
        "Antwoord 7"
      ],
      geselecteerdAntwoord: null,
      overlayImage: overlayImage // Voeg overlayImage toe aan de data
    };
  },
  computed: {
    toonVolgendeVraagKnop() {
      return this.$route.name !== "desktopVraag1";
    },
    toonVorigeVraagKnop() {
      return this.$route.name !== "desktopVraag1";
    }
  },
  methods: {
    gaNaarVolgendeVraag() {
      this.$router.push("/desktopVragen/2");
    },
    gaNaarVorigeVraag() {
      this.$router.push("/desktopVragen");
    }
  }
};
</script>

<template>
  <div class="container-center-horizontal">
    <div class="top-balk">
      <img
        class="logo-hyundai"
        src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg"
        alt="Logo Hyundai"
      />
      <keurmerk />
    </div>
  
    <div class="desktop-vraag">
      <h2>{{ vraag }}</h2>
      <form>
        <div v-for="(optie, index) in antwoordOpties" :key="index" class="optie">
          <input type="radio" :id="'optie' + (index + 1)" :value="optie" v-model="geselecteerdAntwoord">
          <label :for="'optie' + (index + 1)">{{ optie }}</label>
        </div>
        <button @click.prevent="gaNaarVolgendeVraag" v-if="toonVolgendeVraagKnop">Volgende vraag</button>
        <button @click.prevent="gaNaarVorigeVraag" v-if="toonVorigeVraagKnop">Vorige vraag</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container-center-horizontal {
  display: block;
}

.desktop-vraag {
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
  color: red;
  display: flex;
}

.optie {
  margin-bottom: 10px;
  color: green;
}

label {
  margin-left: 5px;
  color: yellow;
}
</style>
