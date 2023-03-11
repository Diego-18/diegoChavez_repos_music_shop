<template>
  <div class="flex-container">
    <div class="left_bar">
      <div class="left_bar_logo">
        <Logo />
      </div>

      <div class="left_bar_description">
        <p>Welcome!</p>
        <p>Sign to start</p>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import Logo from '@/components/Logo/Logo'
export default {
  components: {
    Logo
  },
}
</script>
<style>
* {
  font-family: 'Open Sans', sans-serif;
  margin: 0px;
  padding: 0px;
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

.left_bar {
  width: 20vw;
  background: var(--firstColor) !important;
  height: 100vh;
  padding: 1rem 2rem;
}

.left_bar_logo,
.left_bar_description {
  color: #fff;
  font-weight: 700;
}

.left_bar_logo {
  font-weight: normal;
  top: 50%;
  left: 50%;
  height: 30%;
  text-transform: uppercase;
  font-size: 3rem;
}



.left_bar_description {
  margin: 0 auto;
  font-size: 2rem;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.right_section {
  margin: 0rem auto;
  width: 65vw;
}
</style>
