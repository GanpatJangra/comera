import axios from "axios";
import { createStore } from "vuex";

const url = "https://kindly-opposite-wishbone.glitch.me/products/";

export default createStore({

  // state


  state: {
    products: [],
    cart: '0',
    product: null,
    // checkout:null
  },

  // getters


  getters: {

  },

  // mutations


  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    
    SET_PRODUCT: (state, product) => {
      state.product = product;
    },

    SET_CHECKOUT: (state, checkout) => {
      state.checkout = checkout;
    },


    // ADD_TO_CART:(state, {product, quantity}) => {

    //   state.cart.push({ 
    //     product, quantity
    //   })

    // }
  },

  // actions


  actions: {
    getProducts: ({ commit }) => {
      axios.get(url).then((response) => {
        commit("SET_PRODUCTS", response.data);
      });
    },
    getProduct: ({ commit }, productId) => {
      axios.get(`https://kindly-opposite-wishbone.glitch.me/products/${productId}`).then((response) => {
        commit("SET_PRODUCT", response.data);
      })
    },



    // checkout: ({ commit }, productId) => {
    //   axios.get(`http://localhost:3000/products/${productId}`).then((response) => {
    //     commit("SET_CHECKOUT", response.data)
    //   })
    // }

    // addProductToCart: ({ commit }, { product, quantity }) => {
    //   commit('ADD_TO_CART', { product, quantity });
    // }

  },





  modules: {},
});
