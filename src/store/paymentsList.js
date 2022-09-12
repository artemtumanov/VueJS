const API_DATA = {
  page1: [ 
           { date: '21.03.2020', category: 'Food', value: 169 },
           { date: '22.03.2020', category: 'Transport', value: 360 },
           { date: '23.03.2020', category: 'Education', value: 500 } 
  ],
  page2: [
           { date: '24.03.2020', category: 'Food', value: 233 },
           { date: '25.03.2020', category: 'Transport', value: 242 },
           { date: '26.03.2020', category: 'Entertainment', value: 532 }
  ],
  page3: [
           { date: '27.03.2020', category: 'Food', value: 199 },
           { date: '28.03.2020', category: 'Transport', value: 344 },
           { date: '29.03.2020', category: 'Sport', value: 322 }
  ]
}

export default {
    state: {
        paymentsList: [],
        paymentsListByPages: {}
      },
      getters: {
        paymentsList: (state) => state.paymentsList,
        totalCost: ({paymentsList}) => paymentsList.reduce((total, { value }) => +total + +value, 0)
      },
      mutations: {
        SET_PAYMENTS_LIST (state, paymentsList) {
          state.paymentsList = paymentsList
        },
        ADD_PAYMENT_DATA (state, payment) {
          state.paymentsList.push(payment)
        }
      },
      actions: {
        fetchData({ commit }) {
          setTimeout(() => {
            const initialPaymentsList = API_DATA.page1
            commit('SET_PAYMENTS_LIST', initialPaymentsList)
          }, 1000)
        }
      }
}