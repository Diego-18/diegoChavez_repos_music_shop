<template>
  <div>
    <div class="navbar">
      <div class="navbar_first_section">
        <Logo />
      </div>
      <div class="navbar_second_section">
        <span class="user_name">{{ nameUser }}</span>
        <img class="user_photo" src="/img/user.png" />
        <button class="cstm_button" @click="logout">LOGOUT</button>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '@/components/Logo/Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {
      nameUser: '',
    }
  },
  mounted() {
    if (localStorage.userName) {
      this.nameUser = localStorage.userName;
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    }
  }
}
</script>
<style scope>
.navbar {
  width: 100vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: inline-flex;
}

.navbar_second_section {
  display: inline-flex;
  justify-content: end;
}

.navbar_first_section {
  width: 20%;
  font-size: 3rem;
  padding: 0rem .5rem;
  color: var(--firstColor);
}

.navbar_second_section {
  width: 90%;
  text-align: right;
}

.user_photo {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  padding: .5rem 2rem;
  margin: 0rem .5rem;
}

.user_name {
  margin: 0;
  padding: 1rem;
}

.navbar_second_section button {
  color: #fff;
  border: var(--firstColor) 1px solid;
  background: var(--firstColor);
  border-radius: .2rem;
  margin: auto .5rem;
  width: 6rem;
  height: 2rem;
}

.search {
  margin: auto 1rem;
  width: 100%;
  text-align: center;
  padding: .5rem 0rem;
}
</style>
