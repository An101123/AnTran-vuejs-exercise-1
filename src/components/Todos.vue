<template>
  <div class="row nav">
    <b-nav>
      <button @click="type = 'all'">
        <b-nav-item>All</b-nav-item>
      </button>
      <button @click="type = 'uncompleted'">
        <b-nav-item>UnCompleted</b-nav-item>
      </button>
      <button @click="type='completed'">
        <b-nav-item>Completed</b-nav-item>
      </button>
    </b-nav>
  </div>
  <div v-for="todo in listTodos" :key="todo.id" class="card">
    <div class="card-child">
      <input type="checkbox" :checked="todo.completed" @click="updateCompleted(todo.id)" />
      <label>{{todo.date}}</label>
      <h5>{{todo.title}}</h5>
    </div>
  </div>
  <input class="markall" type="checkbox" @click="updateAllComplete($event.target.checked)" />
  <label for>Mark all as completed</label>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      listTodos: [],
      type: "all",
    };
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    ...mapMutations(["updateCompleted", "updateAllComplete"]),
    filterTodos(type) {
      switch (type) {
        case "uncompleted":
          this.listTodos = this.todos.filter((todo) => !todo.completed);
          break;
        case "completed":
          this.listTodos = this.todos.filter((todo) => todo.completed);
          console.log("completed");
          break;
        default:
          this.listTodos = this.$store.state.todos;
      }
    },
  },
  watch: {
    type: {
      handler(val) {
        this.filterTodos(val);
      },
    },
    todos: {
      handler(val) {
        this.listTodos = val;
      },
    },
  },
  mounted() {
    this.listTodos = this.todos;
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
</style>