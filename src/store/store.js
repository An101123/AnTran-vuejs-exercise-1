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
    getters: {},
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
            state.todos.push(newItem);
        },
        updateAllComplete(state, value = null) {
            state.todos = state.todos.map((item) => ({
                ...item,
                completed: value,
            }));
        },
    },
    actions: {
        addItemTodo({ commit }, addItem) {
            const datetime = Date();
            const newItem = {
                id: Math.floor(Math.random() * 100),
                title: addItem,
                completed: false,
                date: datetime,
            };
            commit("addNewItem", newItem);
        },
    },
};

const store = createStore(storeData);
export default store;