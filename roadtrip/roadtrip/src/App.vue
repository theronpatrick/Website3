<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

// App wide styles
body {
  margin: 0;
  font-family: 'Mukta', sans-serif;
}

body, html, #app {
  height: 100%;
  width: 100%;
  position: relative;
}

h1, h2, h3, h4, h5, p, span {
  margin: 0;
}

</style>
