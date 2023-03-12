<template>
  <div class="container">
    <div v-if="sectionList">
      <button class="cstm_button" @click="createInstruments">NEW</button>
      <br>
      <input type="search" placeholder="Search instruments" class="search" />
    </div>
    <div v-if="sectionCreate">
      <CreateInstrument @backSection="backSection" />
    </div>
  </div>
</template>
<script>
import Backend from '@/services/BackendServices'
import CreateInstrument from '@/components/Instruments/Instrument'

export default {
  components: {
    CreateInstrument
  },
  data() {
    return {
      sectionList: true,
      sectionCreate: false,
    }
  },
  mounted() {
    if (!window.localStorage.getItem('token')) {
      this.$router.push('/');
    }
  },
  methods: {
    createInstruments() {
      this.sectionList = false;
      this.sectionCreate = true;
    },

    backSection() {
      this.sectionList = true;
      this.sectionCreate = false;
    }
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
</style>
