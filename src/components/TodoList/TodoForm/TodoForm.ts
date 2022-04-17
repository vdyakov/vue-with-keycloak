import InputDefault from '@/components/ui/inputs/InputDefault/InputDefault.vue';
import IconButton from '@/components/ui/buttons/IconButton/IconButton.vue';
import PlusIcon from '@/components/ui/icons/PlusIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoForm',
  components: {
    InputDefault,
    IconButton,
    PlusIcon,
  },
  data: () => ({
    task: '',
  }),
  methods: {
    submitTask: function () {
      this.$emit('submit', this.task);

      this.task = '';
    }
  }
});