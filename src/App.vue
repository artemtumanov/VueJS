<template>
  <div id="app">
    <header>
      <div class="header">My personal costs = {{ totalCost }}</div>
    </header>
    <main>
      <AddPaymantForm @add-payment="addPayment" :categoryList="categoryList">
      </AddPaymantForm>
      <PaymantsDisplay :paymentsList='paymentsList'>
      </PaymantsDisplay>
      <PaginationList></PaginationList>
    </main>
  </div>
</template>

<script>

import PaymantsDisplay from './components/PaymantsDisplay.vue';
import AddPaymantForm from './components/AddPaymantForm.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import PaginationList from './components/PaginationList.vue';

export default {
  name: 'App',
  components: {
    PaymantsDisplay,
    AddPaymantForm,
    PaginationList
  },
  computed: {
    ...mapGetters(['paymentsList', 'categoryList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment(data) {
      this.ADD_PAYMENT_DATA(data)
    }
  },
  created() {
    this.fetchCategoryData();
    this.fetchData();
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.header {
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
  font-size: 30px;
}

main {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
