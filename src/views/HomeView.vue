/* eslint-disable prettier/prettier */
<template>
  <div>
  <slider-bar></slider-bar>

    <section class="py-20 bg-gray-100">
      <div class="container px-4 mx-auto">
        <h2 class="mb-16 text-4xl font-bold md:mb-24 md:text-5xl font-heading">Discover our products</h2>
        <div class="flex flex-wrap mb-24 -mx-3 py-2">
          <div v-for="product in products" :key="product.id" class="w-full  mb-6 md:w-1/2 lg:w-1/4 lg:mb-0 ">
            <router-link :to="{name:'product', params:{id:product.id}}" class="w-full p-6 ">
              <span
                class="px-2 py-1 text-xs font-bold text-red-500  border-2 border-red-500 rounded-full font-heading"
                >-15%</span
              >
              <a class="block px-6 mt-6 mb-2" >
                <img class="object-contain w-full h-56 mx-auto mb-5" :src="product.image" alt="" />
                <h3 class="mb-2 text-xl font-bold font-heading">
                  {{ product.name }}
                </h3>
                <p class="text-lg font-bold text-blue-500 font-heading">
                  <span>$29.89</span>
                  <span class="text-xs font-semibold text-gray-500 line-through ml-2 font-heading">$33.69</span>
                </p>
              </a>
              <a
                class="flex items-center justify-center w-12 h-12 ml-auto mr-2 border rounded-lg hover:border-gray-500"
               
              >
                <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" width="2" height="12" fill="#161616"></rect>
                  <rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect>
                </svg>
              </a>
                  </router-link>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import mapState from "vuex";

import SliderBar from "../components/SliderBar.vue"

export default {
  name: "ProductCom",
  components:{
SliderBar
  },
  // methods: {
  //   addToCart(){
  //     this.$store.dispatch('addProductToCart',{
  //       product: this.product,
  //       quantity: 1
  //     })
  //   }
  // },

  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      // eslint-disable-next-line no-undef
      return this.$store.state.products;
    },
  },
};
</script>
