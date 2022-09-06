<template>
  <div id="app">
    <header>
      <div class="header">My personal costs</div>
    </header>
    <main>
      <AddPaymantForm @add-payment="addPayment"></AddPaymantForm>
      <PaymantsDisplay :paymentsList='paymentsList'></PaymantsDisplay>
    </main>
  </div>
</template>

<script>

import PaymantsDisplay from './components/PaymantsDisplay.vue';
import AddPaymantForm from './components/AddPaymantForm.vue';

export default {
  name: 'App',
  components: {
    PaymantsDisplay,
    AddPaymantForm
  },
  data() {
    return {
      paymentsList: []
    }
  },
  methods: {
    fetchPaymentsData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        },
      ]
    },
    addPayment(data) {
      this.paymentsList.push(data)
    }
  },
  created() {
    this.paymentsList = this.fetchPaymentsData()
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
