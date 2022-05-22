<template>
<div>
  <header-bar></header-bar>
    <router-view />

</div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
export default {
  name: 'app',
  components:{
HeaderBar
  },
}
</script>
