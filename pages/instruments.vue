<template>
  <div>
    <div v-if="sectionList">
      <div class="container">
        <button class="cstm_button" @click="createInstruments">
          <font-awesome-icon icon="fa-solid fa-circle-plus" /> NEW
        </button>
        <br>
        <input type="text" placeholder="Search instruments" class="search" v-model="search" />
      </div>

      <div class="list_instrument" v-if="items.length > 0">
        <div class="card_items" v-for="item in items" :key="item.id" style="margin: .5rem auto;">
          <img class="item_img" src="/img/foto.jpg" />
          <div class="info_item">
            {{ item.name }}

            <p class="price_item">{{ item.price | currency }} {{ item.currency }}</p>
            <p>{{ formatDate(item.createdAt) }}</p>
            <div v-for="(star, index) in item.ranking" :key="index" class="stars">
              <font-awesome-icon icon="fa-solid fa-star" />
            </div>
            <br>
            <button class="btn_delete" @click="deleteItem(item)">
              <font-awesome-icon icon="fa-solid fa-trash-can" /> <br />
              DELETE
            </button>
            <button class="btn_edit" @click="editItem(item)">
              <font-awesome-icon icon="fa-solid fa-file-pen" /> <br />
              EDIT
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="filter_not_results">There are no results.</p>
      </div>

      <div v-if="showAlert">
        <Alerts :type-alert="typeAlert" :msg-alert="msgAlert" />
      </div>
    </div>
    <div v-if="sectionCreate">
      <CreateInstrument @backSection="backSection" />
    </div>

    <div v-if="sectionUpdate">
      <UpdateInstrument @backSection="backSection" :instrument="instrumentSelected" />
    </div>



    <div class="modal_delete" v-if="showModalDeleted">
      <div class="modal_body">
        Are you sure you want to delete the item?
      </div>
      <div class="modal_action">
        <button class="btn_info" @click="showModalDeleted = false">
          <font-awesome-icon icon="fa-solid fa-rectangle-xmark" /> CANCEL
        </button>
        <button class="btn_delete" @click="deleteItemConfirm">
          <font-awesome-icon icon="fa-solid fa-trash-can" /> DELETE
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Backend from '@/services/BackendServices'
import CreateInstrument from '@/components/Instruments/Instrument'
import UpdateInstrument from '@/components/Instruments/editInstrument'
import Alerts from '@/components/Alerts/Alerts'
import moment from 'moment'

export default {
  components: {
    CreateInstrument,
    UpdateInstrument,
    Alerts,
  },
  data() {
    return {
      sectionList: true,
      sectionCreate: false,
      sectionUpdate: false,
      typeAlert: '',
      msgAlert: '',
      showAlert: false,
      listInstruments: [],
      search: '',
      itemSelected: '',
      showModalDeleted: false,
      instrumentSelected: []
    }
  },
  mounted() {
    if (!window.localStorage.getItem('token')) {
      this.$router.push('/');
    }
    this.getInstruments()
  },
  computed: {
    items() {
      return this.listInstruments.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    createInstruments() {
      this.sectionList = false;
      this.sectionCreate = true;
      this.sectionUpdate = false;
    },

    editItem(item) {
      this.instrumentSelected = item;
      this.sectionList = false;
      this.sectionCreate = false;
      this.sectionUpdate = true;
    },

    backSection(status) {
      this.sectionList = true;
      this.sectionUpdate = false;
      this.sectionCreate = false;
      console.log(status)
      if (status === 'update') {
        this.msgAlert = "Product updated sucessfully.";
        this.typeAlert = "success";
        this.showAlert = true;
      }
      else if (status === 'create') {
        this.msgAlert = "Product created sucessfully.";
        this.typeAlert = "success";
        this.showAlert = true;
      }
      this.getInstruments();
    },

    getInstruments() {
      Backend.getInstruments()
        .then((data) => {
          this.listInstruments = data.response
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
      return moment(value).startOf('day').fromNow();
    },

    deleteItem(item) {
      this.showModalDeleted = true
      this.itemSelected = item._id
    },

    deleteItemConfirm() {
      Backend.deleteInstrument(this.itemSelected)
        .then((response) => {

          this.showModalDeleted = false
          if (response.status === 200) {
            this.msgAlert = "Product deleted sucessfully.";
          }

          this.typeAlert = "success";
          this.showAlert = true;
          this.getInstruments()
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
  align-items: flex-start;

}

.card_items {
  width: 12rem;
  background: #fff;
  border: solid 1px #0082eb;
  margin: .5rem;

  border-radius: 1rem;
  font-size: .9rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

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
  margin: .5rem 0rem;
}

.price_item,
.filter_not_results {
  font-weight: bold;
}

.price_item {
  margin: .5rem 0rem;
}

.filter_not_results {
  text-align: center;
}

.modal_delete {
  position: fixed;
  bottom: 0;
  padding: 2rem 1rem;
  border: 1px solid #0082eb;
  color: #fff;
  width: 98vw;
  font-weight: bold;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background: #0082eb;
  margin: 2rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
}

.modal_action {
  margin: 0rem 2rem;
}

@media (max-width: 991px) {
  .card_items {
    width: 80%;
    margin: 0.5rem auto;
  }
}
</style>
