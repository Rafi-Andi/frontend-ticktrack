import { alertError, alertSuccess } from '@/lib/alert'
import router from '@/router'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import Cookies from 'js-cookie'

const url = 'http://api-ticktrack.test/api'

export const AuthUserStore = defineStore('user-auth', () => {
  const isLoading = ref(false)
  const message = ref('')
  const error = ref(false)
  const token = ref(Cookies.get('token') || '')
  const role = ref(Cookies.get('role') || '')

  const register = async (data) => {
    try {
      isLoading.value = true

      const response = await axios.post(`${url}/register`, data)
      console.log(response)
      message.value = response.data.message

      alertSuccess(message.value)
      Cookies.set('token', response.data.data.token)
      Cookies.set('role', response.data.data.user.role)

      token.value = Cookies.get('token')
      role.value = Cookies.get('role')

      router.push('login')
    } catch (error) {
      error.value = true
      message.value = error.response.data.message

      alertError(message.value)
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }
  const login = async (data) => {
    try {
      isLoading.value = true
      console.log(data)

      const response = await axios.post(`${url}/login`, data)
      console.log(response)
      message.value = response.data.message

      alertSuccess(message.value)

      Cookies.set('token', response.data.data.token)
      Cookies.set('role', response.data.data.user.role)

      token.value = Cookies.get('token')
      role.value = Cookies.get('role')

      if (response.status === 200) {
        if (role.value === 'admin') {
          router.push('/admin')
        } else {
          router.push('/user')
        }
      }
    } catch (error) {
      error.value = true
      message.value = error.response.data.message

      alertError(message.value)
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    try {
      const response = await axios.post(`${url}/logout`, '', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      })
      Cookies.remove('token')
      Cookies.remove('role')

      token.value = ''
      role.value = ''
      message.value = response.data.message
      alertSuccess(message.value)
      router.push({ name: 'login' })
    } catch (error) {
      message.value = error.response.data.message
      alertError(message.value)
    }
  }

  return { isLoading, message, error, register, login, logout, role, token }
})
