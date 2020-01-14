<!--
* @description 
* @fileName home.vue
* @author Luke
* @date 2020/01/13 20:27:58
* @version V1.0.0
!-->
<template>
  <div>
      home
      <nav-header></nav-header>
      <!-- <NavHeader></NavHeader> -->
      <router-view></router-view>
      <nav-footer></nav-footer>
      <!-- <NavFooter></NavFooter> -->
  </div>
</template>

<script>

import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'

export default {
  name:'nav-home',
  data () {
    return {
    }
  },

  components: {
    NavHeader,
    NavFooter,
  },

  computed: {},

  //mounted: {},

  methods: {}
}

</script>
<style scoped>
</style>