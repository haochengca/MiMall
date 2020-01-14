<!--
* @description 
* @fileName cart.vue
* @author Luke
* @date 2020/01/13 22:10:32
* @version V1.0.0
!-->
<template>
  <div>
    <order-header></order-header>
      cart
      <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
  
  name:'cart',
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