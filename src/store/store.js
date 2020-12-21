import { createStore } from "vuex";

const storeData = {
    state: {
        todos: [{
                id: 1,
                title: "This is 1",
                date: "10-10-2020",
                completed: false,
            },
            { id: 2, title: "This is 2", date: "10-10-2020", completed: true },
            { id: 3, title: "This is 3", date: "10-10-2020", completed: false },
        ],
    },
    getters: {
        todos: (state) => state.todos,
        todosComplete: (state) => {
            const data = state.todos.filter((item) => item.completed);
            return data;
        },
        todosUnComplete: (state) => {
            const data = state.todos.filter((item) => !item.completed);
            return data;
        },
    },
    mutations: {
        updateCompleted(state, id) {
            state.todos = state.todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            });
        },
        addNewItem(state, newItem) {
            // console.log(newItem, "newITem");
            state.todos.unshift(newItem);
        },
        updateAllComplete(state, value = null) {
            state.todos = state.todos.map((item) => ({
                ...item,
                completed: value,
            }));
        },

        updateItemTodos(state, data) {
            console.log(data.id);
            console.log(data.newTitle);
            state.todos = state.todos.map((item) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        title: data.newTitle,
                    };
                    // ...item,
                }
                return item;
            });
            console.log(state.todos);
        },
        deleteItemTodo(state, id) {
            console.log(id);
            const index = state.todos.findIndex((item) => item.id == id);
            console.log(index);
            state.todos.splice(index, 1);
        },
    },
    actions: {
        addItemTodo({ commit }, addItem) {
            // console.log(addItem, "addIem");
            const datetime = Date();
            const newItem = {
                id: Math.floor(Math.random() * 100),
                title: addItem,
                completed: false,
                date: datetime,
            };
            commit("addNewItem", newItem);
        },
        updateItem({ commit }, data) {
            // console.log(data.isActive, "newTitle");
            // data.isActive = !data.isActive;
            commit("updateItemTodos", data);
        },
        deleteItems({ commit }, id) {
            commit("deleteItemTodo", id);
        },
    },
};

const store = createStore(storeData);
export default store;