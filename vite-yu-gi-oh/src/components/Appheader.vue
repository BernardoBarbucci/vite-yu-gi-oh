<template>
  <header>
    <nav class="navbar bg-light">
      <div class="container-fluid bg-light">
        <a class="navbar-brand fs-3 bg-light">
          <img src="../components/img/Yugioh_anime_logo.webp" class="me-4" alt="Logo" width="120">
          {{ title }}
        </a>
        <select id="filter-select" class="form-select" aria-label="Default select example">
          <option selected>Select an archetype</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Appheader',

  data() {
    return {
      title: 'Yu-Gi-Oh API'
    }
  }
}
</script>

<style lang="scss" scoped>
#filter-select {
  width: 20rem;
}
</style>