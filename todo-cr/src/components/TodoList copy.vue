<template>
  <div :class="$style.wrapper">
    <h1>TODO ITEMS</h1>
    <div :class="$style.todoList">
      <form v-on:submit.prevent="onSubmit">
        <input type="text" name="todoText">
        <button type="submit">Adicionar</button>
      </form>
      <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span :class="{[$style.checked]: todo.checked}" v-on:click="onTodoCheckInteraction(todo)">
          {{ todo.task }}
        </span>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import { uuid } from 'uuidv4';
export default {
  name: 'TodoList',

  data(){
    return {
      todos:
       [
         { id: uuid(), task: 'Estudar vuejs', checked: true}, 
         { id: uuid(), task: 'Estudar clean code', checked: false}, 
         { id: uuid(), task:'Parar de fazer gambi', checked: true},
       ],
    }
  },
  methods: {
    onTodoCheckInteraction(selectedTodo){
      const findTodo = this.todos.find(todo => todo.id === selectedTodo.id);

      findTodo.checked = !findTodo.checked;
    },
    onSubmit(event){
      const addedTodo = {
        id: uuid(),
        task: event.target.todoText.value,
        checked: false,
      };

      this.todos.push(addedTodo);

      event.target.todoText.value = '';
    }
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
