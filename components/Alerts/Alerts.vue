<template>
  <div class="card_alerts" :class="type">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    typeAlert: String,
    msgAlert: String,
  },
  data() {
    return {
      type: this.$props.typeAlert,
      message: this.$props.msgAlert,
    }
  }
}
</script>

<style>
.card_alerts {
  width: 30rem;
  position: absolute;
  margin: 0.5rem;
  right: 0;
  bottom: 0;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.success {
  background: var(--firstColor);
}

.error {
  background: #CD5C5C;
}

.info {
  background: #0083ff;
}
</style>