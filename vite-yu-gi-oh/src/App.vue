<template>
  <div>
    <Appheader />
    <Appmain />
  </div>
</template>

<script>
import Appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue';

export default {
  name: 'App',
  components: {
    Appheader,
    Appmain
  }
}
</script>

<style lang="scss">
@use './components/style/general.scss' as *;
</style>
