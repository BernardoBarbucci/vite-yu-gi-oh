<template>
  <div>
    <Appheader />
    <Appmain />
  </div>
</template>

<script>
import Appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue';
import Cardswrapper from './components/Cardswrapper.vue';

export default {
  name: 'App',
  components: {
    Appheader,
    Appmain,
    Cardswrapper
  }
}
</script>

<style lang="scss">
@use './components/style/general.scss' as *;
</style>


<!-- TYPE : 
cd /Users/Berna/Desktop/vite-yu-gi-oh/vite-yu-gi-oh -->