<template>
  <div>

  </div>
</template>
<script>

export default {
  mounted() {
    if (!window.localStorage.getItem('token')) {
      this.$router.push('/');
    }
  },
}
</script>

<style></style>
