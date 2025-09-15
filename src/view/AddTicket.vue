<script setup>
import { UseTicketStore } from '@/stores/ticketStore'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const TicketStore = UseTicketStore()

const {isLoading, error, message} = storeToRefs(TicketStore)
const {storeTicket} = TicketStore
const data = ref({
  title: '',
  description: '',
  priority: ''
})

const handleSubmit = async () => {
  await storeTicket(data.value)
}
</script>

<template>
  <div class="add-ticket-container">
    <div class="ticket-card">
      <h3>Tambah Tiket</h3>
      <p class="subtitle">✍️ Silakan isi form di bawah untuk menambahkan tiket baru.</p>

      <form class="ticket-form" @submit.prevent="handleSubmit()">
        <label for="title">Judul Tiket</label>
        <input v-model="data.title" id="title" type="text" placeholder="Masukkan judul tiket" />

        <label for="description">Deskripsi</label>
        <textarea v-model="data.description" id="description" placeholder="Masukkan deskripsi tiket"></textarea>

        <label for="priority">Prioritas</label>
        <select id="priority" v-model="data.priority">
          <option value="high">🔥 High</option>
          <option value="medium">⚡ Medium</option>
          <option value="low">✅ Low</option>
        </select>

        <button type="submit">Tambah Tiket</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.add-ticket-container {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
}

.ticket-card {
  background: #fff;
  width: 100%;
  max-width: 600px; 
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.ticket-card h3 {
  font-size: 26px;
  margin-bottom: 5px;
  color: #2c3e50;
}

.ticket-card .subtitle {
  font-size: 15px;
  color: #7f8c8d;
  margin-bottom: 25px;
}

.ticket-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  text-align: left;
}

.ticket-form label {
  font-size: 14px;
  font-weight: 600;
  color: #34495e;
}

.ticket-form input,
.ticket-form textarea,
.ticket-form select {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #bdc3c7;
  font-size: 15px;
  transition: all 0.3s ease;
  outline: none;
}

.ticket-form input:focus,
.ticket-form textarea:focus,
.ticket-form select:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.ticket-form textarea {
  min-height: 120px;
  resize: vertical;
}

.ticket-form button {
  background: #3498db;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s ease;
}

.ticket-form button:hover {
  background: #2980b9;
  transform: translateY(-2px);
}
</style>
