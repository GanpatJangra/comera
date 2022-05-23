<template>
  <div class="bg-yellow-50 h-screen w-full flex items-center justify-center ">
    <div>
   <img class="mx-auto h-[10rem] " src="../assets/image/icons8-thank-you.svg" alt="">
      <button class="my-10 mx-auto">
        <router-link class="bg-yellow-500 py-2 px-8 rounded-xl font-semibold " to="/"
          >Go back to home page</router-link
        >
      </button>

      <h1 class="text-center font-semibold ">Your order has been placed</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "thank You",
};
</script>

<style scoped></style>
