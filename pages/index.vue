<template>
  <div class="flex-container">
    <div class="left_bar">
      <div class="left_bar_logo">
        <p>Music Shop</p>
      </div>

      <div class="left_bar_description">
        <p>Welcome!</p>
        <p>Sign to start</p>
      </div>
    </div>
    <div class="right_section">
      <div class="right_section_navbar">
        <span>No employer account yet?</span>
        <button>Register</button>
      </div>

      <div class="right_section_card">
        <div class="right_section_form">
          <p class="form_title">Enter your credentials</p>
          <label class="form_label">Email address</label>
          <input type="text" class="form_input" placeholder="yourname@gmail.com">

          <label class="form_label">Password</label>
          <input type="password" class="form_input" placeholder="12345ADBC#@$@$">
          <br>
          <input type="checkbox"> <span> Keep me signed in </span>
          <br>
          <button class="form_button">LOGIN</button>
          <div class="form_links">
            <div class="links">
              <span class="form_text">Not a member? </span>
              <a href="/">Sign Up</a>
            </div>
            <div class="links"><a href="/"> Forgot password?</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'login',
  data() {
    return {
      snackbar: '',
      snackbarText: '',
      valid: false,
      processing: false,
      login: {
        username: '',
        password: '',
      },
      resolution: 0,
      validationRules: {
        username: [(v) => !!v || 'User is required'],
        password: [(v) => !!v || 'Password required'],
      },
    }
  },
  mounted() {
  },
  methods: {

  },
  head: {
    title: 'Login',
  },
}
</script>
<style scope>
@font-face {
  font-family: 'Bernier';
  font-style: normal;
  font-weight: normal;
  src: url('/fonts/Bernier.otf');
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
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

.left_bar_logo p {
  font-family: 'Bernier' !important;
}

.left_bar_description {
  margin: 0 auto;
  font-size: 2rem;
}

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

.right_section_card {
  padding: 5rem 2rem;
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

a {
  color: var(--firstColor);
  text-decoration: none;
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
  .flex-container {
    display: inline-flex;
  }

  .left_bar_description,
  .right_section_navbar {
    display: none;
  }

  .left_bar {
    width: 100%;
    height: 10%;
  }

  .right_section {
    margin: 0rem auto;
    width: 100%;
  }

  .right_section_card {
    padding: 5rem 0rem;
    margin: 0rem 2rem;
  }
}
</style>
