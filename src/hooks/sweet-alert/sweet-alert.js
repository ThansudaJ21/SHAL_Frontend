import Swal from 'sweetalert2'

export const showAlert = (alertType, title, content) => {
  return Swal.fire({
    title: title,
    text: content,
    padding: '32px 16px',
    showDenyButton: alertType === 'confirm',
    confirmButtonText: 'Confirm',
    confirmButtonColor: '#1f3a89',
    denyButtonText: 'Cancel',
    denyButtonColor: '#dbeafe',
    position: 'center',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    reverseButtons: true,
  })
}
