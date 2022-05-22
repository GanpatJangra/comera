<template>
  <div>
    
    <section class="relative">
      <nav class="flex justify-between border-b">
      
        <div class="px-12 py-4 flex w-full items-center">
          <a class="flex-shrink-0 text-3xl font-bold font-heading" href="/">
            <img class="h-10 w-full" src="../assets/image/logo/ComEra.png" alt="" width="auto" />
          </a>
          <div class="hidden xl:flex  items-center mx-auto py-2 pl-6 pr-3 bg-white border border-gray-200 rounded-lg">
            <svg class="w-10 h-10 mr-2 pt-2 " width="18" height="18" viewbox="0 0 18 18" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 17.1309L12.5042 11.9551" stroke="black" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path
                d="M7.27524 13.8672C10.8789 13.8672 13.8002 10.945 13.8002 7.34033C13.8002 3.73565 10.8789 0.813477 7.27524 0.813477C3.67159 0.813477 0.750244 3.73565 0.750244 7.34033C0.750244 10.945 3.67159 13.8672 7.27524 13.8672Z"
                stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            <input class="w-full border-0 focus:ring-transparent focus:outline-none py-2" type="text" placeholder="" />
            <button class="h-14 w-[200px] font-semibold  text-xl rounded-xl hover:bg-yellow-400  bg-yellow-500 ">search</button>
            <!-- <select
              class="pl-6 pr-6 border-0 border-l border-gray-100 focus:border-gray-100 focus:ring-transparent focus:outline-none cursor-pointer"
              name="" id="">
              <option>All&nbsp;items</option>
              <option>Collection</option>
              <option>Option</option>
            </select> -->
          </div>
          <div class="hidden xl:flex items-center">
            <a class="mr-10 hover:text-gray-600" href="#">
              <svg width="23" height="20" viewbox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
            <a class="flex items-center hover:text-gray-600" href="#">
              <svg class="mr-3" width="23" height="23" viewbox="0 0 23 23" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                  d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span
                class="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">3</span>
            </a>
          </div>
        </div>
        <a class="hidden xl:flex items-center px-12 border-l font-semibold font-heading hover:text-gray-600" href="#">
          <svg class="mr-3" width="32" height="31" viewbox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span>Sign&nbsp;In</span>
        </a>
        <a class="xl:hidden flex mr-6 items-center text-gray-900" href="#">
          <svg class="mr-2" width="23" height="23" viewbox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span class="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">
            {{ cart }}</span>
        </a>
         <a @click="toggle()" class="xl:hidden flex items-center px-12 border-r" href="#">
      <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15.4688H0V17.7207H18V15.4688Z" fill="black"></path>
        <path d="M11.0226 7.87402H0V10.126H11.0226V7.87402Z" fill="black"></path>
        <path d="M18 0.279297H0V2.53127H18V0.279297Z" fill="black"></path>
      </svg>
    </a>
      </nav>

<!-- mobile navbar  -->
      <div :class="{hidden}" class=" fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div class=" fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a class="mr-auto text-3xl font-bold font-heading" href="/">
              <img class="h-9 w-full" src="../assets/image/logo/ComEra.png" alt="" width="auto" />
            </a>
            <button @click="toggle()">
             <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
</svg>

            </button>
          </div>
          <div class="flex mb-8 justify-between">
            <a class="inline-flex items-center font-semibold font-heading" href="#">
              <svg class="mr-3" width="32" height="31" viewbox="0 0 32 31" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                  d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span>Sign&nbsp;In</span>
            </a>
            <div class="flex items-center">
              <a class="mr-10" href="#">
                <svg width="23" height="20" viewbox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
              <a class="flex items-center" href="#">
                <svg class="mr-3" width="23" height="23" viewbox="0 0 23 23" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span
                  class="inline-block w-6 h-6 text-center bg-gray-100 rounded-full font-semibold font-heading">{{cart}} </span>
              </a>
            </div>
          </div>
          <div class="flex item-center justify-center">
            <input
              class="block mb-10 py-5 px-8 bg-gray-100 rounded-tl-md rounded-bl-md border-transparent focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
              type="search" placeholder="Search" />
<button class="bg-gray-800 h-[64px]  rounded-tr-md rounded-br-md ">
  <svg class="h-10 w-10 text-white "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></button>
          </div>

          <ul class="text-3xl font-bold font-heading">
            <li class="mb-8"><a href="#">Category</a></li>
            <li class="mb-8"><a href="#">Collection</a></li>
            <li class="mb-8"><a href="#">Story</a></li>
            <li><a href="#">Brand</a></li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      hidden:true,
    }
  },
  methods: {
    toggle() {
      this.hidden =!this.hidden;
      console.log(this.hidden);

    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
</style>
