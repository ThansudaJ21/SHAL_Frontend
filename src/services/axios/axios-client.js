import axios from "axios";
import { useRouter } from "vue-router";
import { showAlert } from "../../hooks/sweet-alert/sweet-alert";

const router = useRouter();

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.message === "Network Error") {
      showAlert("error", "Network Error", "Please try again").then(() => {
        router.go(0);
      });
    } else {
      showAlert(
        "error",
        "Cannot connect database",
        "Sorry, the server is currently unavailable."
      ).then(() => {
        router.go(-1);
      });
    }
  }
);

export default apiClient;
