import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    todos: {}
  },
  mutations: {
    todoCreate(state, todo) {
      Vue.set(state.todos, todo.id, todo)
    },
    todoDelete(state, id) {
      Vue.delete(state.todos, id)
    },
    todoToggle(state, id) {
      state.todos[id].isDone = !state.todos[id].isDone
    }
  },
  actions: {
    todoCreate(context, todo) {
      context.commit('todoCreate', todo)
    },
    todoDelete(context, id) {
      context.commit('todoDelete', id)
    },
    todoToggle(context, id) {
      context.commit('todoToggle', id)
    }
  },
  getters: {
    getTodos: state => Object.keys(state.todos).map((id) => state.todos[id]),
    getTodosDone: (state, getters) => getters.getTodos.filter(todo => todo.isDone),
    getTodosNotDone: (state, getters) => getters.getTodos.filter(todo => !todo.isDone),
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
