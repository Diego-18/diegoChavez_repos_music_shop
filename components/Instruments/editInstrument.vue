<template>
  <div class="section_form">
    <div class="title">
      <p class="form_title">Update Instrument</p>
      <input type="button" class="cstm_button back_button" value="BACK" @click="back">
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
  props: {
    instrument: [],
  },
  data() {
    return {
      instrument: {
        id: this.$props._id,
        name: this.$props.name,
        price: this.$props.price,
        ranking: this.$props.ranking,
        currency: this.$props.currency,
      },
      typeAlert: '',
      msgAlert: '',
      showAlert: false,
    }
  },
  methods: {
    saveInstrument() {
      Backend.updateInstrument(this.instrument)
        .then((data) => {
          this.instrument.name = "";
          this.instrument.price = "";
          this.instrument.ranking = "";
          this.instrument.currency = "";

          if (data.status === 200) {
            this.$emit('backSection', 'update');
          }
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
    },
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
</style>