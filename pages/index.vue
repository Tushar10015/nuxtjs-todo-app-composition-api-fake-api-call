<template>
  <div class="container mx-auto p-5">
    <h1 class="text-2xl font-bold mb-5">Nuxt 3 To-Do App Composition API</h1>

    <!-- Add a new todo -->
    <form @submit.prevent="addNewTodo" class="mb-5">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add a new task"
        class="border border-gray-300 p-2 rounded-lg w-full"
      />
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
      >
        Add
      </button>
    </form>

    <!-- Display todos -->
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex justify-between items-center mb-3"
      >
        <div>
          <span :class="{ 'line-through': todo.completed }">{{
            todo.title
          }}</span>
        </div>
        <div>
          <button
            @click="toggleComplete(todo)"
            class="bg-yellow-500 text-white p-2 rounded-lg"
          >
            {{ todo.completed ? "Unmark" : "Mark" }} Complete
          </button>
          <button
            @click="deleteTodo(todo.id)"
            class="bg-red-500 text-white p-2 rounded-lg ml-2"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>

    <!-- Message if no todos -->
    <p v-if="todos.length === 0">No todos available. Please add some tasks.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodo } from "@/composables/useTodo";

// Use the state management composable
const { todos, fetchTodos, addTodo, updateTodo, deleteTodo } = useTodo();
const newTodo = ref("");

// Fetch todos when the component is mounted
onMounted(() => {
  fetchTodos();
});

// Add a new todo
const addNewTodo = () => {
  if (newTodo.value.trim()) {
    addTodo(newTodo.value);
    newTodo.value = ""; // Clear input field after adding todo
  }
};

// Toggle todo completion
const toggleComplete = (todo) => {
  todo.completed = !todo.completed;
  updateTodo(todo);
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
