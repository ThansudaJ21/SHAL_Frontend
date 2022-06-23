import Swal from 'sweetalert2'

export const showAlert = (alertType, title, content) => {
  return Swal.fire({
    title: title,
    text: content,
    padding: '32px 16px',
    showDenyButton: alertType === 'confirm' || alertType === 'delete',
    confirmButtonText: 'Confirm',
    confirmButtonColor: alertType === 'delete' ? '#e35060' : '#1f3a89',
    denyButtonText: 'Cancel',
    denyButtonColor: alertType === 'delete' ? '#fce7e7' : '#dbeafe',
    position: 'center',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    reverseButtons: true,
  })
}
