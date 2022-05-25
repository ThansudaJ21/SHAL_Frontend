import Swal from 'sweetalert2'

export const showAlert = (alertType, title, content, html) => {
  return Swal.fire({
    title: title,
    text: content,
    html: html,
    imageUrl:
      alertType === 'confirm'
        ? confirmImage
        : alertType === 'success'
        ? successImage
        : alertType === 'delete'
        ? deleteImage
        : errorImage,
    imageAlt: 'alert-image',
    showDenyButton: alertType === 'confirm' || alertType === 'delete',
    confirmButtonText: 'ยืนยัน',
    denyButtonText: 'ยกเลิก',
    denyButtonColor: '#FDCECB',
    customClass: {
      popup:
        alertType === 'confirm'
          ? 'swal2-confirm-border'
          : alertType === 'success'
          ? 'swal2-success-border'
          : 'swal2-error-border',
      confirmButton:
        alertType === 'confirm'
          ? 'swal2-confirm-button'
          : alertType === 'delete'
          ? 'swal2-error-button'
          : alertType === 'success'
          ? 'swal2-success-button'
          : 'swal2-error-button'
    },
    position: 'top',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    reverseButtons: true,
    timer: alertType === 'success' && 2000
  })
}
