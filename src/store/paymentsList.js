export default {
    state: {
        paymentsList: []
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
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve([
                { date: '20.03.2020', category: 'Food', value: 169, id:1 },
                { date: '21.03.2020', category: 'Navigation', value: 50, id:2 },
                { date: '22.03.2020', category: 'Sport', value: 450, id:3 },
                { date: '23.03.2020', category: 'Entertaiment', value: 969, id:4 },
                { date: '24.03.2020', category: 'Education', value: 1500, id:5 },
                { date: '25.03.2020', category: 'Food', value: 200, id:6 },
                { date: '20.03.2020', category: 'Food', value: 169, id:7 },
                { date: '21.03.2020', category: 'Navigation', value: 50, id:8 },
                { date: '22.03.2020', category: 'Sport', value: 450, id:9 },
                { date: '23.03.2020', category: 'Entertaiment', value: 969, id:10 },
                { date: '24.03.2020', category: 'Education', value: 1500, id:11 },
                { date: '25.03.2020', category: 'Food', value: 200, id:12 },
                { date: '20.03.2020', category: 'Food', value: 169, id:13 },
                { date: '21.03.2020', category: 'Navigation', value: 50, id:14 },
                { date: '22.03.2020', category: 'Sport', value: 450, id:15 },
                { date: '23.03.2020', category: 'Entertaiment', value: 969, id:16 },
                { date: '24.03.2020', category: 'Education', value: 1500, id:17 },
                { date: '25.03.2020', category: 'Food', value: 200, id:18 }
              ]
              )
            }, 1000)
          }).then(res => {
            commit('SET_PAYMENTS_LIST', res)
          })
        }
      }
}