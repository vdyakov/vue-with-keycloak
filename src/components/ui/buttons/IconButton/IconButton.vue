<template>
  <button
      class="icon-button"
      @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<style>
@import '../buttons.scss';
</style>