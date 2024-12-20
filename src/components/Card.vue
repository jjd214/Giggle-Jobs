<script setup>
import { defineProps } from 'vue'

defineProps({
  backgroundColor: {
    default: 'bg-gray-100',
  },
})
</script>

<template>
  <div class="bg-gray-100 p-6 rounded-lg shadow-md" :class="backgroundColor">
    <slot> </slot>
  </div>
</template>
