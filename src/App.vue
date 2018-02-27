<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    test: function() {
      alert('test')
    }
  }
}
</script>

<style>
#app {

}
</style>
