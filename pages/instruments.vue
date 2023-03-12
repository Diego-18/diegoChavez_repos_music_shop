<template>
  <div>
    <div v-if="sectionList">
      <div class="container">
        <button class="cstm_button" @click="createInstruments">NEW</button>
        <br>
        <input type="search" placeholder="Search instruments" class="search" />
      </div>

      <div class="list_instrument">
        <div class="card_items" v-for="item in listInstruments" :key="item.id">
          <img class="item_img" src="/img/foto.jpg" />
          <div class="info_item">
            {{ item.name }}

            <p class="price_item">{{ item.price | currency }} {{ item.currency }}</p>
            <p>{{ formatDate(createdAt) }}</p>
            <div v-for="(star, index) in item.ranking" :key="index" class="stars">
              <i class="fas fa-star"></i>
            </div>

          </div>

        </div>
      </div>
    </div>
    <div v-if="sectionCreate">
      <CreateInstrument @backSection="backSection" />
    </div>

    <div v-if="showAlert">
      <Alerts :type-alert="typeAlert" :msg-alert="msgAlert" />
    </div>
  </div>
</template>
<script>
import Backend from '@/services/BackendServices'
import CreateInstrument from '@/components/Instruments/Instrument'
import Alerts from '@/components/Alerts/Alerts'
import moment from 'moment'

export default {
  components: {
    CreateInstrument,
    Alerts,
  },
  data() {
    return {
      sectionList: true,
      sectionCreate: false,
      typeAlert: '',
      msgAlert: '',
      showAlert: false,
      listInstruments: []
    }
  },
  mounted() {
    if (!window.localStorage.getItem('token')) {
      this.$router.push('/');
    }
    this.getInstruments()
  },
  methods: {
    createInstruments() {
      this.sectionList = false;
      this.sectionCreate = true;
    },

    backSection() {
      this.sectionList = true;
      this.sectionCreate = false;
    },

    getInstruments() {
      Backend.getInstruments()
        .then((data) => {
          this.listInstruments = data.response
          console.log(data)
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
    formatDate(value) {
      return moment(value).calendar()
    },
  },
}
</script>

<style scope>
.container {
  width: 80%;
  margin: 2rem auto;
  background: #fff;
  padding: 1rem;
  border-radius: .5rem;
  border: 1px solid var(--firstColor);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.search {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  padding: .5rem 0rem;
}

.cstm_button {
  right: 0;
  margin: 1rem;
}

.list_instrument {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
}

.card_items {
  width: 12rem;
  background: #fff;
  border: solid 1px;
  margin: 1rem auto;
  align-items: center;
  border-radius: 1rem;
}

.item_img {
  width: 100%;
  border-radius: 1rem;
}

.info_item {
  padding: 1rem;
}

.fa-star {
  color: #F8A33C;
}

.stars {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
}

.price_item {
  font-weight: bold;
}
</style>
