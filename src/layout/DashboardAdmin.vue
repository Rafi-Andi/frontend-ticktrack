<template>
  <div class="app">
    <Navbar role="'admin'"/>
    <div class="dashboard">
      <SidebarAdmin />
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import SidebarAdmin from '@/components/SidebarAdmin.vue';
</script>

<style>
.dashboard { display: flex; }
.content { flex: 1; padding: 20px; }
</style>
