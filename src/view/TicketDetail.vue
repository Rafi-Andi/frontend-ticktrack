<script setup>
import { formatDate } from '@/lib/formatDate'
import router from '@/router'
import { UseTicketStore } from '@/stores/ticketStore'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const TicketStore = UseTicketStore()
const { isLoading, message, ticket, replies } = storeToRefs(TicketStore)
const { showTicket, storeTicketReply } = TicketStore

const route = useRoute()
const code = route.params.code
onMounted(async () => {
  await showTicket(code)
})

const data = ref({
  content: '',
  status: ''
})

const handleSubmit = async () => {
  await storeTicketReply(code, data.value)
  data.value.content = ''
}
</script>

<template>
  <div class="ticket-detail-container">
    <div class="ticket-card">
      <h3>Detail Tiket</h3>
      <div class="ticket-info">
        <p><strong>Kode:</strong>{{ ticket?.code }}</p>
        <p><strong>Judul:</strong> {{ ticket?.title }}</p>
        <p><strong>Deskripsi:</strong>{{ ticket?.description }}</p>
        <p>
          <strong>Status:</strong>
          <span class="status" :class="ticket?.status?.toLowerCase()">{{ ticket?.status }}</span>
        </p>
        <p>
          <strong>Prioritas:</strong>
          <span class="priority" :class="ticket?.priority">{{ ticket?.priority }}</span>
        </p>
        <p><strong>Dibuat:</strong> {{ formatDate(ticket?.created_at) }}</p>
        <p><strong>Update Terakhir:</strong> {{ formatDate(ticket?.updated_at) }}</p>
        <p v-if="ticket?.completed_at">
          <strong>Selesai:</strong> {{ formatDate(ticket?.completed_at) }}
        </p>
      </div>
    </div>

    <div class="replies-card">
      <h4>Balasan</h4>
      <div class="replies-list">
        <div
          v-for="reply in replies"
          :class="reply.name === ticket.user.name ? 'user' : 'admin'"
          class="reply user-1"
        >
          <span class="author"> {{ reply.name }}:</span>
          <p>{{ reply.content }}</p>
        </div>
      </div>
    </div>

    <form class="reply-form" @submit.prevent="handleSubmit()">
      <textarea v-model="data.content" placeholder="Tulis balasan..." rows="3"></textarea>
      <button type="submit">Kirim</button>
    </form>
  </div>
</template>

<style scoped>
.reply-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.reply-form textarea {
  resize: none;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-family: inherit;
  font-size: 14px;
}

.reply-form button {
  align-self: flex-end;
  padding: 8px 16px;
  border: none;
  background: #1abc9c;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.reply-form button:hover {
  background: #16a085;
}
.ticket-detail-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 15px;
  font-family: 'Inter', sans-serif;
  color: #2c3e50;
}

.ticket-card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
}

.ticket-card h3 {
  margin-bottom: 20px;
  font-size: 22px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.ticket-info p {
  margin: 8px 0;
  font-size: 15px;
}

.status {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
}
.status.resolved {
  background: #2ecc7022;
  color: #27ae60;
}

.status.open {
  background: #e74c3c22;
  color: #e74c3c;
}

.priority {
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
}
.priority.high {
  color: #e74c3c;
  background: #e74c3c22;
}
.priority.low {
  color: #27ae60;
  background: #2ecc7022;
}

.priority.medium {
  color: #f39c12;
  background: #f39c1222;
}

.replies-card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.replies-card h4 {
  margin-bottom: 16px;
  font-size: 18px;
  border-bottom: 1px solid #eee;
  padding-bottom: 6px;
}

.replies-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.reply {
  padding: 12px;
  border-radius: 10px;
  background: #f8f9fa;
  font-size: 14px;
}

.reply .author {
  font-weight: 600;
  color: #34495e;
  display: block;
  margin-bottom: 4px;
}

.reply.admin {
  background: #ecf5ff;
  align-self: flex-start;
}
.reply.user {
  background: #fef5e7;
  align-self: flex-end;
}
</style>
