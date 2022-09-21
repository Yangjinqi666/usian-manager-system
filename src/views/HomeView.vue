<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TestApi from "../api/test";
export default {
  name: "HomeView",
  components: {
    HelloWorld
  },
  data() {
    return {
      page:1,
      size:1,
      id:100
    }
  },
  created() {
    TestApi.getMemberList(this.page,this.size)
      .then(response => {
        console.log("member=>", response);
      })
      .catch(error => {
        console.log(error);
      });

    TestApi.getSupplierList(this.page,this.size)
      .then(response => {
        console.log("supplier=>", response);
      })
      .catch(error => {
        console.log(error);
      });

      TestApi.findMember(this.id).then(response=>{
        console.log("find=>",response);
      }).catch(error=>{
        console.log(error);
      })
  }
};
</script>
