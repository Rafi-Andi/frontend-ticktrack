<script setup>
import { formatDate } from '@/lib/formatDate'
import { UseTicketStore } from '@/stores/ticketStore'
import { storeToRefs } from 'pinia'
import { capitalize, onMounted, ref } from 'vue'

const ticketStore = UseTicketStore()

const { isLoading, message, error, tickets } = storeToRefs(ticketStore)
const { getTicketAll } = ticketStore

const linkTo = ref('/tickets/')
onMounted(async () => {
  await getTicketAll()
})


</script>

<template>
  <div class="tickets-page">
    <h3>🎟 Daftar Tiket</h3>
    <p class="subtitle">👋 Halaman ini untuk menampilkan semua tiket yang ada.</p>

    <div class="ticket-list">
      <div v-for="ticket in tickets" class="ticket-card">
        <div class="ticket-header">
          <span class="ticket-code">{{ ticket.ticket.code }}</span>
          <span class="status" :class="ticket.ticket.status.toLowerCase()">{{ ticket.ticket.status }}</span>
        </div>
        <h4 class="ticket-title">{{ ticket.ticket.title }}</h4>
        <p class="ticket-desc">{{ ticket.ticket.description }}</p>
        <div class="ticket-footer">
          <span class="date">{{ formatDate(ticket.ticket.created_at) }}</span>
          <span class="priority" :class="ticket.ticket.priority"> {{ ticket.ticket.priority }} </span>
        </div>
        <router-link :to="{name: 'tickets-detail', params: {code: ticket.ticket.code}}" class="detail-btn">Lihat Detail</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tickets-page {
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  color: #2c3e50;
}

h3 {
  font-size: 24px;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.ticket-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.ticket-card {
  background: #fff;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.ticket-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
}

.ticket-code {
  font-weight: bold;
  color: #34495e;
}

.status {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
}
.status.open {
  background: #e74c3c22;
  color: #e74c3c;
}
.status.resolved {
  background: #2ecc7122;
  color: #27ae60;
}

.ticket-title {
  font-size: 18px;
  margin: 8px 0;
  color: #2c3e50;
}

.ticket-desc {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 15px;
}

.ticket-footer {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 15px;
}

.priority {
  font-weight: bold;
}
.priority.high {
  color: #e74c3c;
}
.priority.medium {
  color: #f39c12;
}
.priority.low {
  color: #27ae60;
}

.date {
  color: #95a5a6;
}

.detail-btn {
  display: inline-block;
  text-decoration: none;
  background: #3498db;
  color: #fff;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  transition: background 0.3s ease;
}

.detail-btn:hover {
  background: #2980b9;
}
</style>
