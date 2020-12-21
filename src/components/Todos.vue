<template>
  <div class="row nav">
    <ul>
      <button @click="type = 'all'">All</button>
      <button @click="type = 'uncompleted'">UnCompleted</button>
      <button @click="type='completed'">Completed</button>
    </ul>
  </div>
  <div
    v-for="todo in type == 'all' ? todos : (type == 'uncompleted' ? todosUnComplete : todosComplete) "
    :key="todo.id"
    class="card"
  >
    <div class="card-child">
      <div class="row">
        <div class="col-md-10">
          <input type="checkbox" :checked="todo.completed" @click="updateCompleted(todo.id)" />
          <label style="display:block">{{todo.date}}</label>
          <h5 v-show="edit.id!=todo.id || edit.id==null || edit.isActive==false ">{{todo.title}}</h5>
          <!-- <textarea v-if="edit" name="editTodos" id cols="30" rows="10"></textarea> -->
          <textarea
            class="editTodo"
            v-if="edit.isActive && todo.id==edit.id"
            v-model="newTitle"
            @keyup.enter="updateItem({id: todo.id, newTitle: newTitle}), edit.isActive=!edit.isActive"
          />
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary" @click="changeEdit(todo.id)">Edit</button>
          <button class="btn btn-danger" @click="deleteItems(todo.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <input class="markall" type="checkbox" @click="updateAllComplete($event.target.checked)" />
  <label for>Mark all as completed</label>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      listTodos: [],
      type: "all",
      edit: {
        isActive: false,
        id: null,
      },
    };
  },
  computed: {
    ...mapGetters(["todos", "todosComplete", "todosUnComplete"]),
  },
  methods: {
    ...mapMutations(["updateCompleted", "updateAllComplete", "updatedItem"]),
    ...mapActions(["updateItem", "deleteItems"]),

    changeEdit(id) {
      this.edit = {
        isActive: true,
        id,
      };
    },
  },
  mounted() {
    // this.listTodos = this.todos;
  },
};
</script>
<style scoped>
.card {
  background-color: rgb(248, 250, 252);
  width: 100%;
  height: 100%;
  border: 0.5 solid;
  margin: 5% 20px 0px 20px;
  padding: 10px 0 10px 0;
}
.card-child {
  margin: 10px 20px 0px 20px;
}
.card-child input {
  margin-right: 10px;
}
.nav {
  display: flex;
  justify-content: flex-end;
  /* margin: 5% 20px 0px 20px; */
}
.nav button {
  margin: 10px 10px 10px 10px;
  text-decoration: none;
  color: black;
  background-color: white;
  border: none;
  outline: none;
}
.markall {
  margin: 5% 10px 0 80%;
}
.active {
  text-decoration: solid;
}
.editTodo {
  width: 100%;
  display: block;
}
</style>