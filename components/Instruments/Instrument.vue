<template>
  <div class="section_form">
    <div class="title">
      <p class="form_title">
        <font-awesome-icon icon="fa-solid fa-guitar" /> Register Instrument
      </p>
      <button class="cstm_button back_button" @click="back">
        <font-awesome-icon icon="fa-solid fa-circle-left" /> BACK
      </button>
    </div>

    <div>

      <form>
        <input type="text" v-model="instrument.name" placeholder="*Name" required autocomplete="off" class="form_input" />

        <input type="number" v-model="instrument.price" placeholder="*Price" required autocomplete="off"
          class="form_input" />

        <select v-model="instrument.currency" class="form_input" placeholder="*Currency">
          <option value="">Select a currency</option>
          <option value="COP">COP</option>
          <option value="USD">USD</option>
        </select>

        <input type="number" max="5" v-model="instrument.ranking" placeholder="*Ranking" required autocomplete="off"
          class="form_input" />

        <input type="button" class="cstm_button" @click="saveInstrument" value="SAVE">
      </form>
    </div>

    <div v-if="showAlert">
      <Alerts :type-alert="typeAlert" :msg-alert="msgAlert" />
    </div>
  </div>
</template>

<script>
import Backend from '@/services/BackendServices'
import Alerts from '@/components/Alerts/Alerts'

export default {
  components: {
    Alerts
  },
  data() {
    return {
      instrument: {
        name: "",
        price: "",
        ranking: "",
        currency: "",
      },
      typeAlert: '',
      msgAlert: '',
      showAlert: false,
    }
  },
  methods: {
    // Register Istruments
    saveInstrument() {
      Backend.createInstrument(this.instrument)
        .then((data) => {
          this.instrument.name = "";
          this.instrument.price = "";
          this.instrument.ranking = "";
          this.instrument.currency = "";

          if (data.status === 200) {
            this.$emit('backSection', 'create');
          }
        })
        .catch((error) => {
          console.log(error);
          this.typeAlert = "error";
          this.showAlert = true;

          this.msgAlert = "Error in the request try again."
        })
        .finally(() => {
          setTimeout(() => {
            this.showAlert = false;
          }, 3000)
        })
    },
    // Back page
    back() {
      this.$emit('backSection');
    }
  }
}
</script>

<style scoped>
.section_form {
  width: 60%;
  background: #fff;
  padding: 1rem;
  border-radius: .5rem;
  border: 1px solid var(--firstColor);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 3rem auto;
}

.title {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
}

p {
  float: left;
}

.back_button {
  position: relative;
  float: right;
}

@media (max-width: 991px) {
  .section_form {
    width: 80%;
    padding: .5rem;
  }

  .title p {
    padding: 1rem 0rem;
  }
}
</style>