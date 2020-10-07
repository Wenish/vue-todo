<template>
  <div>
    <InputTodoItem />
    <div class="container">
      <!-- Uncompleted tasks -->
      <ListTodos v-bind:id="'todo'" v-bind:todos="getTodosNotDone" />

      <!-- Completed tasks -->
      <ListTodos v-bind:id="'completed'" v-bind:todos="getTodosDone" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InputTodoItem from "@/components/InputTodoItem.vue";
import ListTodos from "@/components/ListTodos.vue";

export default {
  name: "Home",
  components: {
    InputTodoItem,
    ListTodos,
  },
  computed: {
    ...mapGetters(["getTodosDone", "getTodosNotDone"]),
  },
};
</script>
