<template>
  <!-- <div class="container-center-horizontal">

  <div class="top-balk">
    <img
      class="logo-hyundai"
      src="https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg"
      alt="Logo Hyundai"
    />
    <keurmerk />
  </div>






    <div class="mobiel-vraag">
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
    </div> -->
    <div>hallo</div>
  </template>
  
  <script>
  export default {
    name: "MobielVraag",
    props: {
      vraag: String,
      antwoordOpties: {
        type: Array,
        default: () => [
          "Antwoord 1",
          "Antwoord 2",
          "Antwoord 3",
          "Antwoord 4",
          "Antwoord 5",
          "Antwoord 6",
          "Antwoord 7"
        ]
      }
    },
    data() {
      return {
        geselecteerdAntwoord: null
      };
    },
    computed: {
      toonVolgendeVraagKnop() {
        // Toon de knop voor de volgende vraag behalve als het de laatste vraag is
        return this.$route.name !== "MobielVraag5";
      },
      toonVorigeVraagKnop() {
        // Toon de knop voor de vorige vraag behalve als het de eerste vraag is
        return this.$route.name !== "MobielVraag1";
      }
    },
    methods: {
      gaNaarVolgendeVraag() {
        // Hard coderen van de volgende vraag route
        this.$router.push("/desktopVragen/3");
      },
      gaNaarVorigeVraag() {
        // Hard coderen van de vorige vraag route
        this.$router.push("/desktopVragen/1");
      }
    }
  };
  </script>
  
  <style scoped>
  .mobiel-vraag {
    font-family: Arial, sans-serif;
    margin-bottom: 20px;
    color: blue;
  }
  
  .optie {
    margin-bottom: 10px;
    color: purple;
  }
  
  label {
    margin-left: 5px;
    color: green;
  }
  </style>
  