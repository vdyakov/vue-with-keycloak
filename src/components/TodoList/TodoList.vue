<template>
  <div>
    <div>
      <todo-form @submit="data => $emit('create', data)"/>

      <ul class="mt-[20px]">
        <todo-item
            v-for="todo in list"
            :key="todo.id"
            :task="todo"
            @toggle="id => $emit('toggle', id)"
            @remove="id => $emit('remove', id)"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./TodoList.ts"></script>