<script setup>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import { ref } from 'vue'
const role = ref('user')
</script>

<template>
  <div class="app">
    <Navbar :role="role" />
    <div class="dashboard">
      <Sidebar />
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style>
.dashboard {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
