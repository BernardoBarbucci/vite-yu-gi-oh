<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold">Yu-gi-oh API</a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Appheader',
}
</script>
<style lang="scss" scoped></style>