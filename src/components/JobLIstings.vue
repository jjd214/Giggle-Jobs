<script setup>
import { RouterLink } from 'vue-router'
import { ref, defineProps } from 'vue'
import JobListing from './JobListing.vue'
import JobData from '@/jobs.json'

const jobs = ref(JobData)

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <job-listing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <router-link
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</router-link
    >
  </section>
</template>
