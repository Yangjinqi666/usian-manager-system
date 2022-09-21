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
      page: 1,
      size: 1,
      id: 100,
      test:{
        name:"jack"
      }
    };
  },
  created() {
    this.getMemberList();
    this.getSupplierList();
    this.findMember();
    this.getBanner();
    this.getList();
  },
  methods: {
    getBanner() {
      TestApi.getBanner()
        .then(response => {
          console.log("banner=>", response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getList() {
      TestApi.getList()
        .then(response => {
          console.log("list=>", response);
        })
        .catch(error => {
          console.log(error);
        });
    },

    getMemberList() {
      TestApi.getMemberList(this.page, this.size)
        .then(response => {
          console.log("member=>", response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getSupplierList() {
      TestApi.getSupplierList(this.page, this.size)
        .then(response => {
          console.log("supplier=>", response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    findMember() {
      TestApi.findMember(this.id)
        .then(response => {
          console.log("find=>", response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
