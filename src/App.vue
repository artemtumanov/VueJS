<template>
  <div id="app">
    <HelloWorld msg="Calculator" />
    <Calc />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Calc from '@/components/Calc.vue'
export default {
  name: 'App',
  components: {
    Calc,
    HelloWorld
  }
}
</script>

<style lang="scss">
</style>
