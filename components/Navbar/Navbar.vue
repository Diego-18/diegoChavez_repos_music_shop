<template>
  <div>
    <div class="navbar">
      <div class="navbar_first_section">
        <Logo />
      </div>
      <div class="navbar_second_section">
        <img class="user_photo" src="/img/user.png" @click="openDrop" />
      </div>
    </div>
    <div class="drop_user" v-if="drop">
      <img class="user_photo" src="/img/user.png" />
      <p class="user_name">{{ nameUser }}</p>
      <p class="user_name">{{ emailUser }}</p>
      <button class="cstm_button" @click="logout">LOGOUT</button>
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
      emailUser: '',
      drop: false,
    }
  },
  mounted() {
    if (localStorage.userName) {
      this.nameUser = localStorage.userName;
    }

    if (localStorage.userEmail) {
      this.emailUser = localStorage.userEmail;
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/');
    },
    openDrop() {
      this.drop = !this.drop;
    }
  }
}
</script>
<style scope>
.navbar {
  width: 100vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: inline-flex;
  position: relative;
  z-index: 0;
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

.drop_user {
  position: absolute;
  z-index: 10000;
  width: 20%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  right: 0%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  font-size: 1rem;
}

/* .search {
  margin: auto 1rem;
  width: 100%;
  text-align: center;
  padding: .5rem 0rem;
} */
</style>
