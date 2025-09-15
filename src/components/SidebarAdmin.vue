<script setup>
import { AuthUserStore } from '@/stores/userAuth';

const AuthStore = AuthUserStore()
const {logout} = AuthStore

const handleLogout = async () => {
  await logout()
}
</script> 

<template>
  <aside class="sidebar">
    <ul>
      <li><router-link :to="{ name: 'tickets-admin' }">📑 Semua Tiket</router-link></li>
      <li><router-link :to="{ name: 'profile-admin' }">👤 Profil</router-link></li>
      <li class="logout-btn" @click="logout">🚪 Logout</li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh;
  background: linear-gradient(180deg, #2c3e50, #34495e);
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #f1c40f;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin: 15px 0;
}

.sidebar a {
  display: block;
  text-decoration: none;
  color: #ecf0f1;
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.sidebar a:hover {
  background: #1abc9c;
  color: #fff;
  transform: translateX(5px);
}

.sidebar a.router-link-exact-active {
  background: #16a085;
  font-weight: bold;
}

.logout-btn {
  /* background: #ff1900; */
  border: 2px solid red;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
}

.logout-btn:hover {
  background: #c0392b;
  transform: translateX(5px);
}
</style>
