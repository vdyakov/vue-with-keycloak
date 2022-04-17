<template>
  <li
      class="flex row items-center justify-between w-full py-1 px-4 my-1 rounded border bg-gray-100 text-gray-600"
  >
    <div class="items-center column">
      <input
          class="mx-1"
          type="checkbox"
          :checked="task.isDone === true"
          @input="$emit('toggle', task.id)"
      >
      <span :class="{'line-through': task.isDone === true}">
        {{ task.text }}
      </span>
    </div>
    <div class="items-center row-reverse">
      <span class="px-4 py-2 float-right cursor-pointer" @click="$emit('remove', task.id)">
        <trash-icon/>
      </span>
    </div>
  </li>
</template>

<script lang="ts" src="./TodoItem.ts"></script>