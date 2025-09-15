import { alertError, alertSuccess } from '@/lib/alert'
import axios from 'axios'
import Cookies from 'js-cookie'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const url = 'http://api-ticktrack.test/api'

export const UseTicketStore = defineStore('ticket-store', () => {
  const isLoading = ref(false)
  const message = ref('')
  const isError = ref(false)
  const tickets = ref([])
  const ticket = ref({})
  const replies = ref([])
  const status = ref('')

  const getTicketAll = async () => {
    try {
      isLoading.value = true

      const response = await axios.get(`${url}/ticket`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      tickets.value = response.data.data
      message.value = response.data.message

      console.log(response.data)
    } catch (error) {
      isError.value = true
      message.value = error.response.data.message
      console.log(error)
      alertError(error.response.data.message)
    } finally {
      isLoading.value = false
    }
  }

  const showTicket = async (id) => {
    try {
      const response = await axios.get(`${url}/ticket/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })

      console.log(response.data)

      message.value = response.data.message
      ticket.value = response.data.data.ticket
      replies.value = response.data.data.ticket_replies
      status.value = response.data.data.ticket.status
      console.log(replies.value)
      console.log(ticket.value.ticket)
      console.log(response.data.data.ticket.status)
    } catch (error) {
      isError.value = true
      message.value = error.response.data.message
      console.log(error)
      alertError(error.response.data.message)
    } finally {
      isLoading.value = false
    }
  }

  const storeTicketReply = async (param, data) => {
    try {
      isLoading.value = true
      const response = await axios.post(`${url}/ticket/${param}`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      message.value = response.data.message
      replies.value.push(JSON.parse(JSON.stringify(response.data.data)))
      status.value = response.data.data.status

      console.log(status.value)
    } catch (error) {
      isError.value = true
      message.value = error.response.data.message
      console.log(error)
      alertError(message.value)
    } finally {
      isLoading.value = false
    }
  }

  const storeTicket = async (data) => {
    try {
      isLoading.value = true
      const response = await axios.post(`${url}/ticket`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })

      message.value = response.data.message
      alertSuccess(message.value)
    } catch (error) {
      isError.value = true
      message.value = error.response.data.message
      console.log(error)
      alertError(message.value)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    message,
    isError,
    getTicketAll,
    tickets,
    ticket,
    showTicket,
    replies,
    storeTicketReply,
    storeTicket,
    status
  }
})
