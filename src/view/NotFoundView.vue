<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
    <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <router-link to="/" class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
      >Go Back</router-link
    >
  </section>
</template>
