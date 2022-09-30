import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    products: [
        { name: "Banana Skin", price: 20 },
        { name: "Shiny Star", price: 30 },
        { name: "Green Shell", price: 10 },
        { name: "Red shell", price: 20 }
    ]
  },
  getters: {
    saleProduct: state => {
        var sale = state.products.map(product => {
            return {
                name: `** ${product.name} **`,
                price: product.price / 2,
            }
        })

        return sale
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
          product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      // db communication
      setTimeout(function(){
        context.commit('reducePrice', payload)
      }, 2000)
    }
  },
  modules: {
  }
})
