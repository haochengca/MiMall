<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
import jsonp from 'jsonp'


export default {
  name: 'app',
  data(){
    return{
      data:''
    }

  },
  components: {
    HelloWorld
  },
  mounted(){
    // let url="https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list";
    // let url="http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0"
    // axios.get(url).then(()=>{
    // }
    let url="/activity/servicetime"
    jsonp(url,(err,res)=>{
      let result=res;
      this.data=result;

    })

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
