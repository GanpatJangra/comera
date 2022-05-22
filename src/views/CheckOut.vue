<template>
    <div>
<section class="py-20 bg-gray-100">
  <div class="container mx-auto px-4">
    <div class="p-8 lg:p-20 bg-white">
      <h2 class="mb-20 text-5xl font-bold font-heading">Billing address</h2>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full xl:w-2/3 px-4">
          <form action="submitform">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                <div class="mb-10">
                  <label class="font-bold font-heading text-gray-600" for="">First Name *</label>
                  <input v-model="firstname" class="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md required" required type="text">
                </div>
               
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <div>
                  <label class="font-bold font-heading text-gray-600" for="">Last Name *</label>
                  <input v-model="lastname" class="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
                </div>
              </div>
              <div class="w-full mt-10 mb-10 px-4">
                <div class="flex flex-wrap -mx-4">
                  <div class="w-full lg:w-1/2 px-4 mb-10 md:mb-0">
                    <div class="lg:mb-10">
                      <label class="font-bold font-heading text-gray-600" for="">Address 1 *</label>
                      <input v-model="address" class="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
                    </div>
                    <div class="hidden lg:block">
                      <label class="font-bold font-heading text-gray-600" for="">Country</label>
                      <select class="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" name="" id="">
                        <option value="1"></option>
                        <option value="2">India</option>
                        <option value="3">United States</option>
                        <option value="4">Spain</option>
                        <option value="5">Poland</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full lg:w-1/2 px-4">
                    <div class="mb-10">
                      <label class="font-bold font-heading text-gray-600" for="">Address 2</label>
                      <input class="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
                    </div>
                    <div class="mb-10 lg:hidden">
                      <label class="font-bold font-heading text-gray-600" for="">Country</label>
                      <select class="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" name="" id="">
                     <option value="1"></option>
                        <option value="2">India</option>
                        <option value="3">United States</option>
                        <option value="4">Spain</option>
                        <option value="5">Poland</option>
                      </select>
                    </div>
                    <div class="flex flex-wrap -mx-4">
                      <div class="w-full lg:w-3/5 px-4 mb-10 lg:mb-0">
                        <label class="font-bold font-heading text-gray-600" for="">State</label>
                        <select class="block w-full mt-4 py-4 px-8 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" name="" id="">
                            <option value="1"></option>
                        <option value="2">India</option>
                        <option value="3">United States</option>
                        <option value="4">Spain</option>
                        <option value="5">Poland</option>
                        </select>
                      </div>
                      <div class="w-full lg:w-2/5 px-4">
                        <label class="font-bold font-heading text-gray-600" for="">Zip Code</label>
                        <input class="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full mb-8 px-4">
                <label class="flex mb-6 items-center">
                  <input type="checkbox" name="accountType" value="personal">
                  <span class="ml-2 text-sm">Shipping address is the same as my billing address</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" name="accountType" value="personal">
                  <span class="ml-2 text-sm">Save this information for next time</span>
                </label>
              </div>
              <div class="w-full mb-8 px-4">
                <h3 class="mb-4 font-bold font-heading text-gray-600">Payment</h3>
                <label class="flex mb-6 items-center">
                  <input type="radio" name="paymentType" value="" checked="">
                  <span class="ml-2 text-sm">Credit card</span>
                </label>
                <label class="flex mb-6 items-center">
                  <input type="radio" name="paymentType" value="">
                  <span class="ml-2 text-sm">Debit card</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="paymentType" value="">
                  <span class="ml-2 text-sm">PayPal</span>
                </label>
              </div>
              <div class="w-full px-4">
                <div class="flex flex-wrap -mx-4 mb-10">
                  <div class="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
                    <div>
                      <label class="font-bold font-heading text-gray-600" for="">Name on card</label>
                      <input class="block w-full mt-4 mb-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
                      <p class="text-sm text-gray-500">Full name as displayed on card</p>
                    </div>
                  </div>
                  <div class="w-full lg:w-1/2 px-4">
                    <div>
                      <label class="font-bold font-heading text-gray-600" for="">Credit card number</label>
                      <input class="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-4">
                  <div class="w-full md:w-1/2 px-4">
                    <div class="mb-10">
                      <label class="font-bold font-heading text-gray-600" for="">Expiration</label>
                      <input class="block w-full mt-4 mb-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
                    </div>
                  </div>
                  <div class="w-full md:w-1/2 px-4">
                    <div class="mb-10">
                      <label class="font-bold font-heading text-gray-600" for="">CVV</label>
                      <input class="block w-full mt-4 py-4 px-4 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="w-full xl:w-1/3 px-4">
          <div class="mb-12 p-6 lg:p-12 bg-blue-500 rounded-md ">
            <div class="mb-6 pb-8 border-b border-blue-100">
              <h2 class="mb-6 text-3xl font-bold font-heading text-white">Order summary</h2>
              <p class="text-blue-50">Shipping and additional costs are calculated based on values you have entered.</p>
            </div>
            <div class="flex mb-2 justify-between items-center">
              <span class="text-blue-50">Order subtotal</span>
              <span class="text-xl font-bold font-heading text-white">$80.67</span>
            </div>
            <div class="flex mb-2 justify-between items-center">
              <span class="text-blue-50">Shipping</span>
              <span class="text-xl font-bold font-heading text-white">$0.00</span>
            </div>
            <div class="flex mb-5 justify-between items-center">
              <span class="text-blue-50">Tax</span>
              <span class="text-xl font-bold font-heading text-white">$0</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold font-heading text-white">Total</span>
              <span class="text-xl font-bold font-heading text-white">$80.67</span>
            </div>
          </div>
          <div>
            <span class="inline-block mb-4 font-medium">Apply discount code:</span>
            <div class="flex mb-12 flex-wrap lg:flex-nowrap items-center">
              <input class="inline-block mb-4 md:mb-0 mr-4 px-4 py-4 placeholder-gray-800 font-bold font-heading border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" placeholder="SUMMER30X">
              <a class="inline-block mb-4 md:mb-0 px-7 py-4 text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md" href="#">Apply</a>
            </div>
            <button @click.prevent="submitform()" class="block w-full py-4 bg-orange-500 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200" >Go to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div>
      {{this.$store.state }}
    </div>
</section>
    </div>
</template>

<!-- <script>
    export default {
        name: 'checkout',
        data() {
            return {
            firstname:'',
            lastname:'',
            address:''
            }
        },
        methods: {
            submitform(){
                console.log(this.firstname);
                console.log(this.lastname);
                console.log(this.address);
            }
        },
           
    }
</script> -->
<script>
export default {
  props: ["id"],
    mounted() {
      this.$store.dispatch("getProduct", this.id);
    },
  computed:{
       product(){
         return this.$store.state.product
       }
  },
};
</script>
