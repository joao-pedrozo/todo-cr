<template>
  <div :class="$style.wrapper">
    <h1>TODO ITEMS</h1>
    <div :class="$style.todoList">
      <form v-on:submit.prevent="addTodo(todoText)">
        <input type="text" name="todoText" v-model="todoText">
        <button type="submit">Adicionar</button>
      </form>
      <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span 
        :class="{[$style.checked]: todo.checked}"
         v-on:click="onTodoInteraction(todo)"
         >
          {{ todo.task }}
        </span>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'TodoList',

  computed: {
      ...mapGetters([
        'todos'
      ])
  },

  data(){
    return {
      todoText: '',
    }
  },
  
  methods: {
    ...mapActions([
      'addTodo',
      'onTodoInteraction'
    ]),
  }, 
}
</script>

<style module>

.wrapper {
  display: flex;
  flex-direction: column;
  margin: 35px;
}

.checked {
  color: grey;
  text-decoration: line-through;
}

</style>
