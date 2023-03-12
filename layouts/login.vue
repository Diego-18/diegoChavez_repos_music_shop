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
@font-face {
  font-family: 'Bernier';
  font-style: normal;
  font-weight: normal;
  src: url('/fonts/Bernier.otf');
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0px !important;
}


.first-color {
  background-color: #0082eb !important;
  color: #fff !important;
}

.first-font {
  color: #0082eb !important;
}

.left_bar {
  width: 20vw;
  background: #0082eb;
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

@media (max-width: 991px) {
  .flex-container {
    display: inline-flex;
  }

  .left_bar {
    width: 100%;
    height: 10%;
  }

  .left_bar_description {
    display: none;
  }
}
</style>
