<template>
  <header>
    <nav class="navbar bg-light">
      <div class="container-fluid bg-light">
        <a class="navbar-brand fs-3 bg-light">
          <img src="../components/img/Yugioh_anime_logo.webp" class="me-4" alt="Logo" width="120">
          {{ title }}
        </a>
        <select id="filter-select" class="form-select" @change="selectArchetype()" v-model="selectedArchetype"
          aria-label="Default select example">
          <option selected>Select an archetype</option>
          <!-- v-for che cerce nella lista in data -->
          <option v-for="(archetype, index) in archetypesList" :key="index" :value="archetype.archetype_name">
            {{ archetype.archetype_name }}
          </option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
  name: 'Appheader',

  data() {
    return {
      title: 'Yu-Gi-Oh API',
      archetypesList: [],
      apiUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
      store,
      selectedArchetype: '',
    }
  },
  methods: {
    // copiata chiamata axios da cardswrapper e adattata alla ricerca dell'archetipo all'interno di appheader
    getArchetypes() {
      axios.get(this.apiUrl)
        .then((response) => {
          this.archetypesList = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    selectArchetype() {
      console.log(this.selectedArchetype);
      this.store.archetypeFilter = this.selectedArchetype;
    }
  },
  // richiamo la seconda chiamata per completare il giro
  created() {
    this.getArchetypes();
  }
};
</script>

<style lang="scss" scoped>
#filter-select {
  width: 20rem;
}
</style>