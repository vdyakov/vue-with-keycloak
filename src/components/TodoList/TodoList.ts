import TodoForm from './TodoForm/TodoForm.vue';
import TodoItem from './TodoItem/TodoItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoList',
  components: { TodoForm, TodoItem },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
});