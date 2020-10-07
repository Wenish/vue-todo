<template>
  <ul class="todo" v-bind:id="id">
    <ListTodosItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
// @ is an alias to /src
import ListTodosItem from "@/components/ListTodosItem.vue";

export default {
  name: "ListTodos",
  components: {
    ListTodosItem,
  },
  props: ["id", "todos"],
};
</script>
