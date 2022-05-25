import axios from 'axios'
import { useRouter } from 'vue-router'
import { showAlert } from '../hooks/sweet-alert/sweet-alert'

const router = useRouter()

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  headers: {
    Accept: 'application/json'
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === 'Network Error') {
      showAlert('error', 'พบปัญหาในการเชื่อมต่อ', 'โปรดลองใหม่อีกครั้ง').then(
        () => {
          router.go(0)
        }
      )
    } else if (error.code === 'ECONNABORTED') {
      showAlert(
        'error',
        'พบปัญหาในการเชื่อมต่อล่าช้า',
        'โปรดลองใหม่อีกครั้ง'
      ).then(() => {
        router.go(0)
      })
    } else {
      showAlert('error', 'เกิดข้อผิดพลาด', 'ไม่สามารถโหลดข้อมูลได้').then(
        () => {
          router.go(-1)
        }
      )
    }
  }
)

export default apiClient
