import apiClient from '@/services/axios/axios-client.js'

export default {
    /* upload images */
    uploadImage(file) {
        let formData = new FormData()
        formData.append('file', file)
        return apiClient.post('/uploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}