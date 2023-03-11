<template>
  <div class="right_section">
    <div class="right_section_navbar">
      <button @click="back()">
      <i class="fas fa-arrow-alt-circle-left"></i>
      </button>
    </div>
    <div class="right_section_card">
      <div class="right_section_form">
        <form ref="form">
          <p class="form_title">Register User</p>
          <label class="form_label">Name</label>
          <input type="text" class="form_input" placeholder="Peter Perez" required v-model="user.name" autocomplete="off">

          <label class="form_label">Email address</label>
          <input type="email" class="form_input" placeholder="yourname@gmail.com" required
            v-debounce:700ms="validateEmail" v-model="user.email" autocomplete="off">

          <label class="form_label">Password</label>
          <input type="password" class="form_input" placeholder="12345ADBC#@$@$" required v-model="user.password"
            autocomplete="off">

          <label class="form_label">Confirm Password</label>
          <input type="password" class="form_input" placeholder="12345ADBC#@$@$" required v-model="user.confirmPassword"
            autocomplete="off">
          <br>

          <input type="button" class="form_button" value="SAVE" @click="saveUser">
        </form>

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
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      token: '',

      typeAlert: '',
      msgAlert: '',
      showAlert: false,
    }
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    validateEmail() {
      const ExpReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      const pattern = new RegExp(ExpReg, 'i')
      if (pattern.test(this.user.email)) {
        return true
      } else {
        this.msgAlert = "Invalid Email."
        this.typeAlert = "error";
        this.showAlert = true;
      }
    },
    saveUser() {
      if (this.user.email && this.user.password && this.user.name && this.user.confirmPassword) {
        if (this.user.password === this.user.confirmPassword) {
          Backend.createUser(this.user)
            .then((data) => {
              if (data.status === 200) {
                this.msgAlert = "User created sucessfully.";
              }
              if (data.status === 202) {
                this.msgAlert = "User already registered.";
              }

              this.typeAlert = "success";
              this.showAlert = true;
            })
            .catch((error) => {
              this.typeAlert = "error";
              this.showAlert = true;

              this.msgAlert = "Error in the request try again."

            })
            .finally(() => {
              setTimeout(() => {
                this.showAlert = false;
              }, 3000)
            })
        }
        else {
          this.msgAlert = "The passwords do not match."

          this.typeAlert = "error";
          this.showAlert = true;

          setTimeout(() => {
            this.showAlert = false;
          }, 3000)
        }
      }
      else {
        if (!this.user.name.trim()) this.msgAlert = "Name is required."
        if (!this.user.email.trim()) this.msgAlert = "Email is required."

        if (!this.user.password.trim()) this.msgAlert = "Password is required."

        if (!this.user.email.trim() && !this.user.password.trim())
          this.msgAlert = "Required fields are empty."

        this.typeAlert = "error";
        this.showAlert = true;

        setTimeout(() => {
          this.showAlert = false;
        }, 3000)
      }
    },
  }
}

</script>

<style scoped>
.right_section_card {
  padding: 5rem 2rem;
}

.right_section_navbar {
  padding: 1rem 0;
  text-align: right;

}

.right_section_navbar button,
.form_button {
  font-weight: 500;
  font-size: 1rem;
  line-height: 22px;
}

.right_section_navbar button {
  color: var(--firstColor);
  border: var(--firstColor) 1px solid;
  background: transparent;
  padding: .5rem 2rem;
  border-radius: .2rem;
  margin: 0rem .5rem;
}

.right_section_navbar button:hover {
  color: #fff;
  background: var(--firstColor);
}

.right_section_form {
  border: 1px solid var(--firstColor);
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

.form_button {
  background: var(--firstColor);
  border: 1px solid var(--firstColor);
  color: #fff;
  border-radius: .2rem;
  font-size: 1.2rem;
}

.form_input,
.form_button {
  padding: .5rem 0rem;
  width: 100%;
  margin: 1rem auto;
  text-align: center;
}
</style>
