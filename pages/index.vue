<template>
  <div class="right_section">
    <div class="right_section_navbar">
      <span>No employer account yet?</span>
      <button @click="registerUsers"><font-awesome-icon icon="fas fa-users" /> Register</button>
    </div>

    <div class="right_section_card">
      <div class="right_section_form">
        <form ref="form">
          <p class="form_title">Enter your credentials</p>
          <label class="form_label">Email address</label>
          <input type="email" class="form_input" placeholder="yourname@gmail.com" v-model="login.email" required
            v-debounce:700ms="validateEmail" autocomplete="off">

          <label class="form_label">Password</label>
          <input type="password" class="form_input" placeholder="12345ADBC#@$@$" v-model="login.password" required
            autocomplete="off">
          <br>
          <input type="checkbox"> <span> Keep me signed in </span>
          <br>
          <input type="button" class="form_button" value="LOGIN" @click="authenticate">
        </form>

        <div class="form_links">
          <div class="links">
            <span class="form_text">Not a member? </span>
            <NuxtLink to="/users">
              Sign Up
            </NuxtLink>
          </div>
          <div class="links"><a href="/"> Forgot password?</a></div>
        </div>
        <div v-if="showAlert">
          <Alerts :type-alert="typeAlert" :msg-alert="msgAlert" />

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Backend from '@/services/BackendServices'
import Alerts from '@/components/Alerts/Alerts'
export default {
  layout: 'login',
  components: {
    Alerts
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      token: '',
      name: '',
      typeAlert: '',
      msgAlert: '',
      showAlert: false,
    }
  },
  mounted() {
  },
  methods: {
    validateEmail() {
      const ExpReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      const pattern = new RegExp(ExpReg, 'i')
      if (pattern.test(this.login.email)) {
        return true
      } else {
        this.msgAlert = "Invalid Email."
        this.typeAlert = "error";
        this.showAlert = true;
      }
    },
    authenticate() {
      if (this.login.email && this.login.password) {
        Backend.login(this.login)
          .then((data) => {
            if (data.token !== '') {
              localStorage.setItem('token', data.token);
              localStorage.setItem('userName', data.userName);
              localStorage.setItem('userEmail', data.userEmail);
              this.$router.push('/instruments');
            }
            else {
              this.$router.push('/');
            }
          })
          .catch((error) => {
            this.typeAlert = "error";
            this.showAlert = true;

            if (error.response.data.status === 404 || error.response.data.status === 403) {
              this.msgAlert = "Invalid credentials please try again."
            }
            else {
              this.msgAlert = "Error in the request try again."
            }
          })
          .finally(() => {
            setTimeout(() => {
              this.showAlert = false;
            }, 3000)
          })
      }
      else {
        if (!this.login.email.trim()) this.msgAlert = "Email is required."

        if (!this.login.password.trim()) this.msgAlert = "Password is required."

        if (!this.login.email.trim() && !this.login.password.trim())
          this.msgAlert = "Required fields are empty."

        this.typeAlert = "error";
        this.showAlert = true;

        setTimeout(() => {
          this.showAlert = false;
        }, 3000)
      }
    },
    registerUsers() {
      this.$router.push('/users');
    }
  },
  head: {
    title: 'Login',
  },
}
</script>
<style scoped>
.right_section {
  margin: 0rem auto;
  width: 65vw;
}

.right_section_navbar {
  padding: 1rem 0;
  text-align: right;
}

.right_section_navbar span {
  color: #757575;
  font-style: normal;
}

.right_section_navbar button,
.right_section_navbar span,
.form_button {
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
}

.right_section_navbar button {
  color: #0082eb;
  border: #0082eb 1px solid;
  background: transparent;
  padding: .5rem 2rem;
  border-radius: .2rem;
  margin: 0rem .5rem;
}

.right_section_navbar button:hover {
  color: #fff;
  background: #0082eb;
}

.right_section_card {
  padding: 5rem 2rem;
}

.right_section_form {
  border: 1px solid #0082eb;
  padding: 1rem;
  margin: 2rem auto;
  width: 30em;
  border-radius: .5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.form_title {
  font-weight: 700;
  line-height: 30px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.form_label,
.form_text,
a {
  color: #4A4844;
  font-weight: 500;
  font-size: .8rem;
  line-height: 19px;
}

a {
  color: #0082eb;
  text-decoration: none;
}

.form_button {
  background: #0082eb;
  border: 1px solid #0082eb;
  color: #fff;
  border-radius: .2rem;
  font-size: 1.2rem;
}

.form_button:hover {
  background: #fff;
  color: #0082eb;
}

.form_input,
.form_button {
  padding: .5rem 0rem;
  width: 100%;
  margin: 1rem auto;
  text-align: center;
}

.form_links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

}

.links {
  width: 50%;
  text-align: center;
}

@media (max-width: 991px) {
  .right_section_navbar {
    display: none;
  }

  .right_section {
    margin: 0rem auto;
    width: 100vw;
  }

  .right_section_card {
    padding: 5rem 0rem;
    margin: 0rem 2rem;
  }

  .right_section_form {
    width: 80%;
  }
}
</style>
