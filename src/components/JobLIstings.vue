<script setup>
import { RouterLink } from 'vue-router'
import { reactive, defineProps, onMounted } from 'vue'
import JobListing from './JobListing.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios'

const state = reactive({
  jobs: [],
  isLoading: true,
})

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/jobs')
    state.jobs = response.data
  } catch (error) {
    console.log('Error fetching jobs', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <!-- Show loading spinner if its true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <job-listing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
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
