<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  role: String,
})
</script>

<template>
  <header class="navbar">
    <h2>🎟 Ticket Dashboard {{ props.role }}</h2>
  </header>
</template>

<style>
.navbar {
  background: #2c3e50;
  color: white;
  padding: 10px 20px;
}
</style>
