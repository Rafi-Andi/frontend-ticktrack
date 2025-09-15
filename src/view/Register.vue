<script setup>
import { AuthUserStore } from '@/stores/userAuth'
import { reactive } from 'vue'

const AuthUser = AuthUserStore()

const dataUser = reactive({
    name: "",
    email: "",
    password: ""
})

const {register} = AuthUser
const handleSubmit = async () => {
    await register(dataUser)
}
</script>

<template>
  <main>
    <div class="container">
      <h2>Register</h2>
      <form @submit.prevent="handleSubmit()">
        <div class="input-group">
          <label>Name</label>
          <input v-model="dataUser.name" type="text" placeholder="Masukkan nama " required />
        </div>
        <div class="input-group">
          <label>Email</label>
          <input v-model="dataUser.email" type="email" placeholder="Masukkan email" required />
        </div>
        <div class="input-group">
          <label>Password</label>
          <input v-model="dataUser.password" type="password" placeholder="Masukkan password" required />
        </div>
        <button type="submit">Masuk</button>
      </form>
      <p>Sudah punya akun? <router-link to="login">Login</router-link></p>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #74ebd5, #9face6);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 350px;
  text-align: center;
  animation: fadeIn 0.8s ease;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s;
}

.input-group input:focus {
  border-color: #6a5acd;
}

button {
  width: 100%;
  padding: 12px;
  background: #6a5acd;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #5741d9;
}

p {
  margin-top: 15px;
  font-size: 14px;
}

p a {
  color: #6a5acd;
  text-decoration: none;
  font-weight: 500;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
