<script setup>
import Hero from '@/components/Hero.vue'
import HomeCard from '@/components/HomeCard.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <hero />
  <home-card />
  <job-listings :limit="3" :showButton="true" />
</template>
