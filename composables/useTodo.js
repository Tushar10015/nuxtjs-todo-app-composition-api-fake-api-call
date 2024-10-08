// composables/useTodo.js
import { ref } from "vue";
import axios from "axios";

// State management for todos using Composition API
export const useTodo = () => {
  const todos = ref([]);

  // Fetch todos from JSONPlaceholder API
  const fetchTodos = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    todos.value = response.data;
  };

  // Add a new todo
  const addTodo = async (title) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false,
      }
    );
    todos.value.push(response.data);
  };

  // Update an existing todo
  const updateTodo = async (todo) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      todo
    );
    const index = todos.value.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      todos.value[index] = response.data;
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return {
    todos,
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
