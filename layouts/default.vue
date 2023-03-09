<template>
  <v-app dark>
    <v-main>
      <v-container fluid style="padding: 0px">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>
<style>
* {
  font-family: 'Open Sans', sans-serif;
}

:root {
  --firstColor: #0082eb;
}

.first-color {
  background-color: var(--firstColor) !important;
  color: #fff !important;
}

.first-font {
  color: var(--firstColor) !important;
}
</style>
