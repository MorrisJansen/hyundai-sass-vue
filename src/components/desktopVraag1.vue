<template>
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
        this.$router.push("/desktopVragen/2");
      },
      gaNaarVorigeVraag() {
        // Hard coderen van de vorige vraag route
        this.$router.push("/desktopVragen");
      }
    }
  };
  </script>
  
  <style scoped>
  .mobiel-vraag {
    font-family: Arial, sans-serif;
    margin-bottom: 20px;
    color: red;
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
  