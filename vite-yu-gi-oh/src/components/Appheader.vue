<template>
  <header>
    <nav class="navbar bg-light">
      <div class="container-fluid bg-light">
        <a class="navbar-brand fs-3 bg-light">
          <img src="../components/img/Yugioh_anime_logo.webp" class="me-4" alt="Logo" width="120">
          {{ title }}
        </a>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Appheader',

  data() {
    return {
      title: 'Yu-gi-oh API'
    }
  }
}
</script>

<style lang="scss" scoped></style>