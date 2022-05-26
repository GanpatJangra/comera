<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper" :loop="true">
    <swiper-slide v-for="image in images" :key="image">
      <div>
        <img
          class="xl:h-[40rem] xl:w-full lg:px-[10rem] relative"
          :src="image"
          alt="" />

        <h1
          class="absolute top-[5%] right-[15%] xl:text-[2rem] uppercase font-semibold">
          nike air 20 gold
        </h1>
        <button
          class="absolute bottom-[5%] xl:bottom-[20%] right-[15%] bg-black xl:py-5 px-2 py-2 xl:px-10 rounded-full text-white font-bold xl:text-2xl uppercase">
          buy now
        </button>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 1</swiper-slide> -->
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default {
  data() {
    return {
      images: [
        "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/2.png",
        "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/4.png",
        // "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/6.png",
        // "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/8.png",
        "https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/files/10.png",
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
