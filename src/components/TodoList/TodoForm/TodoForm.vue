<template>
  <div class="flex column">
    <input-default
        type="text"
        v-model="task"
        @update:modelValue="task = $event"
        placeholder="Добавьте задачу"
        @submit="submitTask"
    />

    <icon-button class="ml-1" type="button" @click="submitTask">
      <plus-icon/>
    </icon-button>
  </div>
</template>

<script lang="ts" src="./TodoForm.ts"></script>
