import Swal from 'sweetalert2'

export const alertError = (message) => {
  Swal.fire({
    title: "Error",
    icon: 'error',
    text: message
  })
}
export const alertSuccess = (message) => {
  Swal.fire({
    title: "Berhasil",
    icon: 'success',
    text: message
  })
}
