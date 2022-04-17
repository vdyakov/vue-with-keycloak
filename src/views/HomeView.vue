<template>
  <div class="container mx-auto py-10">
    <todo-list
        :list="list"
        @create="create"
        @toggle="toggle"
        @remove="remove"
    />
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
