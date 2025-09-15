<template>
  <div class="forbidden">
    <h1>🚫 403 Forbidden</h1>
    <p>Maaf, kamu tidak punya izin untuk mengakses halaman ini.</p>
    <router-link to="/" class="back-btn">⬅ Kembali ke Beranda</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.forbidden {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: #f8f9fa;
  color: #2c3e50;
}
h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}
p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.back-btn {
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  background: #2c3e50;
  color: white;
  transition: background 0.3s ease;
}
.back-btn:hover {
  background: #1a252f;
}
</style>
