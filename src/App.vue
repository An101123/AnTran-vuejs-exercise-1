<template>
  <div class="container">
    <add-item />

    <todos />
  </div>
  <!-- <router-view /> -->
</template>
<script>
import AddItem from "./components/AddItem.vue";
import Todos from "./components/Todos.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  components: {
    Todos,
    AddItem,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
*:focus {
  outline: none;
}
</style>
