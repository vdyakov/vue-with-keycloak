import TodoList from '@/components/TodoList/TodoList.vue';
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  components: {
    TodoList
  },
  computed: mapGetters({
    list: 'todo/list',
  }),
  methods: mapActions({
    create: 'todo/create',
    toggle: 'todo/toggle',
    remove: 'todo/remove',
    loadTodoList: 'todo/loadTodoList',
  }),
  async created() {
    this.loadTodoList();
  },
});