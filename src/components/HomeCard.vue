<script setup>
import Card from '@/components/Card.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card backgroundColor="bg-gray-100">
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mt-2 mb-4">Browse our Giggle jobs and start your career today</p>
          <router-link
            to="/jobs"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </router-link>
        </Card>
        <Card backgroundColor="bg-green-100">
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">List your job to find the perfect developer for the role</p>
          <router-link
            to="/jobs/create"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Add Job
          </router-link>
        </Card>
      </div>
    </div>
  </section>
</template>
