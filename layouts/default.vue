<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
@font-face {
  font-family: 'Bernier';
  font-style: normal;
  font-weight: normal;
  src: url('/fonts/Bernier.otf');
}

* {
  font-family: 'Open Sans', sans-serif;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
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

.cstm_button {
  color: #fff;
  border: var(--firstColor) 1px solid;
  background: var(--firstColor);
  border-radius: .2rem;
  margin: auto .5rem;
  width: 6rem;
  height: 2rem;
}

.cstm_button:hover {
  color: var(--firstColor);
  background: #fff;
}

.form_title {
  font-weight: 700;
  line-height: 30px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.form_label,
.form_text {
  color: #4A4844;
  font-weight: 500;
  font-size: .8rem;
  line-height: 19px;
}

.form_input {
  padding: .5rem 0rem;
  width: 50%;
  margin: 1rem auto;
  text-align: center;
  display: block;
}

.btn_delete,
.btn_edit,
.btn_info {
  width: 4rem;
  margin: .3rem;
  padding: .5rem;
  border-radius: .3rem;
  color: #fff;
}

.btn_delete {
  background: #ff4040;
  border: 1px solid #ff4040;
}

.btn_info {
  background: #04537D;
  border: 1px solid #04537D;
}

.btn_edit {
  background: #0082eb;
  border: 1px solid #0082eb;
}

.btn_delete:hover,
.btn_edit:hover,
.btn_info:hover {
  background: #fff;
}

.btn_delete:hover {
  color: #ff4040;
}

.btn_edit:hover {
  color: #0082eb;
}

.btn_info:hover {
  color: #04537D;
}
</style>
