<template>
    <div>
      <div class="Postcode">
        <label for="Postcode">
          <input class="input-formulier" type="text" id="Postcode" name="Postcode" placeholder="Postcode" v-model="postcode" @input="checkPostcode">
        </label>
        <div class="error">{{ errors.postcode }}</div>
      </div>
  
      <div class="Kies-een-dealer">
        <label for="Kies-een-dealer">
          <select class="input-formulier" id="Kies-een-dealer" name="Kies-een-dealer" v-model="selectedDealer">
            <option value="" disabled>Selecteer een dealer</option>
            <option v-for="dealer in nearestDealers" :key="dealer.id" :value="dealer.id">{{ dealer.name }}</option>
          </select>
        </label>
        <div class="error">{{ errors.dealer }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  const dealers = [
    { "id": 4816, "name": "Van Mossel Hyundai Leeuwarden", "latitude": 53.200770023103, "longitude": 5.8407729035167 },
    { "id": 4819, "name": "Van Mossel Hyundai Groningen", "latitude": 53.220721988724, "longitude": 6.6111767146783 },
    { "id": 4822, "name": "Van Mossel Hyundai Heerenveen", "latitude": 52.964521308202, "longitude": 5.8921035528572 },
    { "id": 4825, "name": "Van Mossel Hyundai Emmen", "latitude": 52.763281277363, "longitude": 6.9392753158237 },
    { "id": 4828, "name": "Autobedrijf Van Veen Assen", "latitude": 52.995796249184, "longitude": 6.5331830435734 },
    { "id": 4831, "name": "Herwers Hyundai Deventer", "latitude": 52.24090320152, "longitude": 6.2148931809914 },
    { "id": 4834, "name": "Herwers Hyundai Arnhem", "latitude": 51.948344891296, "longitude": 5.881746123549 },
    { "id": 4837, "name": "Herwers Hyundai Doetinchem", "latitude": 51.972777644707, "longitude": 6.2666923214625 },
    { "id": 4840, "name": "Herwers Hyundai Tiel", "latitude": 51.912172705068, "longitude": 5.4268906916074 },
    { "id": 4843, "name": "Herwers Hyundai Veenendaal", "latitude": 52.037594643424, "longitude": 5.5738100626821 },
    { "id": 4846, "name": "Herwers Hyundai Apeldoorn", "latitude": 52.238002454923, "longitude": 5.9853544079444 },
    { "id": 4849, "name": "Broekhuis Hyundai Zwolle", "latitude": 52.494526968178, "longitude": 6.1222122787487 },
    { "id": 4852, "name": "Broekhuis Hyundai Almere", "latitude": 52.358275062373, "longitude": 5.2592331536395 },
    { "id": 4855, "name": "Autogroep Twente Enschede", "latitude": 52.191876753996, "longitude": 6.8891162548194 },
    { "id": 4858, "name": "Autogroep Twente Almelo", "latitude": 52.384869036162, "longitude": 6.7229862693341 },
    { "id": 4861, "name": "Autogroep Twente Hengelo", "latitude": 52.280382103484, "longitude": 6.7770215776139 },
    { "id": 4864, "name": "Hyundai Wittenberg Nieuwegein", "latitude": 52.019822448674, "longitude": 5.0999873964444 },
    { "id": 4867, "name": "Autogroep Ursem Barten Amsterdam", "latitude": 52.390577415125, "longitude": 4.7996608806479 },
    { "id": 4870, "name": "Autogroep Ursem Barten Zuid Oost", "latitude": 52.328628417496, "longitude": 4.9279489634226 },
    { "id": 4873, "name": "Autogroep Ursem Barten Amstelveen", "latitude": 52.281780526945, "longitude": 4.8379601112311 },
    { "id": 4876, "name": "Autobedrijf Velserbeek Velserbroek", "latitude": 52.007814310819, "longitude": 4.1622059933439 },
    { "id": 4879, "name": "Hyundai Wittenberg Amersfoort", "latitude": 52.165406956313, "longitude": 5.3525912536931 },
    { "id": 4882, "name": "Hyundai Wittenberg Utrecht", "latitude": 52.076206664219, "longitude": 5.046634422724 },
    { "id": 4885, "name": "Auto Sturm Goes", "latitude": 51.488043537477, "longitude": 3.8746142737977 },
    { "id": 4888, "name": "Auto Sturm Middelburg", "latitude": 51.482250586951, "longitude": 3.6290256698105 },
    { "id": 4891, "name": "Hyundai Wittenberg Hilversum", "latitude": 52.215382648186, "longitude": 5.1451317297305 },
    { "id": 4894, "name": "Autogroep Ursem Barten Purmerend", "latitude": 52.519588463866, "longitude": 4.9990811507024 },
    { "id": 4897, "name": "Autogroep Ursem Barten Zwaag", "latitude": 52.670418640975, "longitude": 5.0579877284956 },
    { "id": 4900, "name": "Autogroep Ursem Barten Heerhugowaard", "latitude": 52.666183113917, "longitude": 4.8184493526844 },
    { "id": 4903, "name": "Autogroep Ursem Barten Heemskerk", "latitude": 52.505040302237, "longitude": 4.6558053005753 },
    { "id": 4906, "name": "Autogroep Ursem Barten Alkmaar", "latitude": 52.643349229245, "longitude": 4.7828172643399 },
    { "id": 4909, "name": "Autogroep Ursem Barten Hoofddorp", "latitude": 52.293749540465, "longitude": 4.6797069000563 },
    { "id": 4912, "name": "Wittebrug Hyundai Den Haag Ypenburg", "latitude": 52.071089543392, "longitude": 4.3930214238068 },
    { "id": 4915, "name": "Wittebrug Hyundai Den Haag Kerketuinen", "latitude": 52.050924284312, "longitude": 4.2564097901303 },
    { "id": 4918, "name": "Wittebrug Hyundai Rotterdam Metaalhof", "latitude": 51.94910669907, "longitude": 4.5441793096486 },
    { "id": 4921, "name": "Autobedrijf Arjan Groet Den Helder", "latitude": 52.949898585181, "longitude": 4.7635901324677 },
    { "id": 4924, "name": "Autobedrijf Noteboom Spijkenisse BV", "latitude": 51.850566961721, "longitude": 4.307374391587 },
    { "id": 4927, "name": "Autobedrijf Noteboom Rotterdam b.v.", "latitude": 51.868951654863, "longitude": 4.549152595994 },
    { "id": 4930, "name": "Garage van Dalen Schiedam", "latitude": 51.931293082407, "longitude": 4.3988171276193 },
    { "id": 4933, "name": "H-Point Dordrecht", "latitude": 51.792037766149, "longitude": 4.648020753442 },
    { "id": 4936, "name": "H-Point Gorinchem", "latitude": 51.841449706817, "longitude": 4.9527912249317 },
    { "id": 4939, "name": "Dijksman Automobielbedrijven Katwijk", "latitude": 52.202092801914, "longitude": 4.4359123121548 },
    { "id": 4942, "name": "Van der Linden Groep Zoetermeer B.V.", "latitude": 52.03691784883, "longitude": 4.501799538036 },
    { "id": 4945, "name": "Van der Linden Groep Waddinxveen B.V.", "latitude": 52.027931285446, "longitude": 4.6553007642224 },
    { "id": 4948, "name": "Van der Linden Groep Leiden B.V.", "latitude": 52.171775837631, "longitude": 4.4956402746069 },
    { "id": 4951, "name": "Autobedrijf F. van der Heijden Uden", "latitude": 51.652427325599, "longitude": 5.6435443254211 },
    { "id": 4954, "name": "Autobedrijf Peter Janssen Weert", "latitude": 51.269692980175, "longitude": 5.7230822447685 },
    { "id": 4957, "name": "Wassink Autogroep Heerlen", "latitude": 50.904213103097, "longitude": 5.9484630028934 },
    { "id": 4960, "name": "Wassink Autogroep Sittard", "latitude": 50.996372403143, "longitude": 5.8448701421058 },
    { "id": 4963, "name": "Wassink Autogroep Venlo", "latitude": 51.390659512617, "longitude": 6.1359261106854 },
    { "id": 4966, "name": "Zeeuw & Zeeuw Roosendaal", "latitude": 51.557958043752, "longitude": 4.4660006632069 },
    { "id": 4969, "name": "Oostendorp Auto Den Bosch B.V.", "latitude": 51.708305676251, "longitude": 5.330910716323 },
    { "id": 4972, "name": "Oostendorp Auto Nijmegen B.V.", "latitude": 51.83966168017, "longitude": 5.8057202319442 },
    { "id": 4975, "name": "Oostendorp Auto Helmond B.V.", "latitude": 51.459466237075, "longitude": 5.6923203400239 },
    { "id": 4978, "name": "Content Autogroep Eindhoven", "latitude": 51.481318298583, "longitude": 5.4588081532907 },
    { "id": 4981, "name": "Content Autogroep Tilburg", "latitude": 51.580772353102, "longitude": 5.0643810461124 },
    { "id": 4984, "name": "Zeeuw & Zeeuw Breda", "latitude": 51.603712654071, "longitude": 4.8046630595467 },
    { "id": 4987, "name": "Groenewold & Dijkhuizen Delfzijl", "latitude": 53.322389781872, "longitude": 6.8849081644247 }
  ];

  
  export default {
    data() {
      return {
        postcode: '',
        selectedDealer: '',
        nearestDealers: [],
        errors: {
          postcode: '',
          dealer: ''
        }
      };
    },
    methods: {
      async checkPostcode() {
        if (this.postcode.length === 6) {
          const postcodeRegex = /^[1-9][0-9]{3}[a-zA-Z]{2}$/;
          if (postcodeRegex.test(this.postcode)) {
            await this.findNearestDealers();
          } else {
            this.errors.postcode = 'Voer een geldige postcode in (1234AB).';
          }
        }
      },
      async findNearestDealers() {
        try {
          const apiKey = 'pk.6c8d6a1e3fe6468f0ceab205affad3d7';
          const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.postcode}&format=json`);
  
          if (response.data && response.data.length > 0) {
            const { lat, lon } = response.data[0];
            const dealersWithDistance = dealers.map(dealer => {
              const distance = this.calculateDistance(lat, lon, dealer.latitude, dealer.longitude);
              return { ...dealer, distance };
            });
            this.nearestDealers = dealersWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 5);
          } else {
            this.errors.postcode = 'Geen gegevens gevonden voor de opgegeven postcode.';
          }
        } catch (error) {
          console.error('Fout bij het ophalen van de coördinaten voor de postcode:', error);
          this.errors.postcode = 'Fout bij het ophalen van de coördinaten voor de postcode.';
        }
      },
      calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = this.deg2rad(lat2 - lat1);
        const dLon = this.deg2rad(lon2 - lon1);
        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
            Math.sin(dLon / 2) * Math.sin(dLon / 2); 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
        const distance = R * c;
        return distance;
      },
      deg2rad(deg) {
        return deg * (Math.PI/180);
      },
      clearErrors() {
        this.errors.postcode = '';
      }
    }
  };
  </script>
  
  <style scoped>
  input, select {
    margin: 10px;
  }
  </style>
  