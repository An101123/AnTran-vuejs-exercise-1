<template>
  <input
    class="add-item"
    type="text"
    placeholder="Add item"
    v-model="addItem"
    @keyup.enter="addItemTodo(addItem), (addItem='')"
  />
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addItemTodo"]),
  },
};
</script>
<style >
.add-item {
  background-color: rgb(248, 250, 252);
  width: 100%;
  height: 100%;
  border: 0.5 solid;
  margin: 5% 20px 20px 20px;
  padding: 10px 0 10px 10px;
  border: none;
  border-width: 0;
  box-shadow: none;
}
</style>