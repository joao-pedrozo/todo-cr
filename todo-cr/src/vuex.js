import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { uuid } from 'uuidv4';

const store = new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        addTodo(state, payload){
            console.log(state);
            const todo = 
            {
                id: uuid(),
                task: payload,
                checked: false,
            };

            state.todos.push(todo);
        },
        onTodoInteraction(state, { id }){
            const selectedTodo = state.todos.find(todo => todo.id === id);

            selectedTodo.checked = !selectedTodo.checked;
        },
    },
    getters: {
        todos: state => state.todos
    },
    actions: {
        addTodo: ({ commit }, payload) => { commit('addTodo', payload) },
        onTodoInteraction: ({ commit }, payload) => { commit('onTodoInteraction', payload) },
    }
});

export { store };