import { defineComponent } from 'vue';
import TrashIcon from '@/components/ui/icons/TrashIcon.vue';

export default defineComponent({
  name: 'TodoItem',
  components: {
    TrashIcon,
  },
  props: {
    task: {
      type: Object,
      required: true
    },
  }
});