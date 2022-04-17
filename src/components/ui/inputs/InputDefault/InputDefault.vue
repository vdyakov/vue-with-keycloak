<template>
  <input
      class="default-input"
      :type="type"
      v-model="task"
      :placeholder="placeholder"
      @keyup.enter="$emit('submit')"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputDefault',
  emits: ['update:modelValue'],
  computed: {
    task: {
      get: function() {
        return this.modelValue;
      },
      set: function(text: string) {
        this.$emit('update:modelValue', text);
      }
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
  },
});
</script>

<style lang="scss">
@import '../inputs.scss';
</style>