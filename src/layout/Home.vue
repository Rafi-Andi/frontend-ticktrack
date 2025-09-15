<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <Navbar/>

    <main>
        <router-view></router-view>
    </main>
    <FooterVue />
</template>

<style scoped>
main {
    height: 100vh;
}
</style>