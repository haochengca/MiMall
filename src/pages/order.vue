<!--
* @description 
* @fileName home.vue
* @author Luke
* @date 2020/01/13 20:27:58
* @version V1.0.0
!-->
<template>
  <div>
    
      <order-header></order-header>
      <router-view></router-view>
      <nav-footer></nav-footer>
  </div>
</template>

<script>

import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
  name:'order',
  data () {
    return {
    }
  },

  components: {
    OrderHeader,
    NavFooter
  },

  computed: {},

  //mounted: {},

  methods: {}
}

</script>
<style scoped>
</style>