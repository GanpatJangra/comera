import axios from "axios";
import { createStore } from "vuex";

const url = "https://kindly-opposite-wishbone.glitch.me/products/";

export default createStore({

  // state
  state: {
    products: [],
    cart: '0',
    product: null,
    // loading: false,
    // checkout:null
  },

  // getters
  getters: {
  },


  // mutations
  mutations: {
    // multiple products
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },

    // single product
    SET_PRODUCT: (state, product) => {
      state.product = product;
    },

    // SET_CHECKOUT: (state, checkout) => {
    //   state.checkout = checkout;
    // },


    // ADD_TO_CART:(state, {product, quantity}) => {

    //   state.cart.push({ 
    //     product, quantity
    //   })

    // }
  },

  // actions


  actions: {
    getProducts: async ({ commit }) => {
      try {
        await axios.get(url).then((response) => {
          commit("SET_PRODUCTS", response.data);
        });

      } catch (error) {
        // console.log(error);
         console.log("something went wrong")
      }

    },


    getProduct: async ({ commit }, productId) => {
      try {
        await axios.get(`https://kindly-opposite-wishbone.glitch.me/products/${productId}`).then((response) => {
          commit("SET_PRODUCT", response.data);
        })
        
      } catch (error) {
        console.log(error);
        
      }
    },


    savaUser: async ({ commit }, user) => {
      try {
        console.log(user.name, user.email, user.password);
        await axios.post('https://kindly-opposite-wishbone.glitch.me/users/', {
          // user
          name: user.name,
          email: user.email,
          password: user.password,
        }).then((response) => {
          response.data
          console.log(response.data);
          // console.log(response);
        })
        
      } catch (error) {
        console.log(error);
        
      }
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
