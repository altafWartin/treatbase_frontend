import axios from "axios";

let isNavigatingToLogin = false;

// Utility functions
const getToken = async () => {
  // Simulating token retrieval; replace with actual implementation (e.g., localStorage or cookies)
  return localStorage.getItem("token");
};

const removeToken = () => {
  // Remove token from storage
  localStorage.removeItem("token");
};

const clearAllPreferences = () => {
  // Clear all user preferences from storage
  localStorage.clear();
};

const navigateTo = (routeName) => {
  // Simulating navigation; replace with actual implementation (e.g., React Router)
  window.location.href = `/${routeName}`;
};

// Navigation route constants
const navigationStrings = {
  AuthStackNavigatorAuthenticate: "login", // Replace "login" with your actual login route
};

// Axios instance
const AxiosBase = axios.create({
  baseURL: "http://44.202.140.143:5000/", // Replace with your actual base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
AxiosBase.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers["token"] = token;
    }
    console.log("Request Config:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
AxiosBase.interceptors.response.use(
  (response) => {
    console.log("Response Data:", response?.data);
    return response?.data; // Return only the data portion of the response
  },
  async (error) => {
    const { response } = error;
    console.error("Response Error:", response);

    if (response && response.status === 401) {
      if (!isNavigatingToLogin) {
        isNavigatingToLogin = true;
        console.log("Authentication error detected. Redirecting to login...");

        // Clear stored preferences and token
        removeToken();
        clearAllPreferences();

        // Navigate to login after a short delay
        setTimeout(() => {
          navigateTo(navigationStrings.AuthStackNavigatorAuthenticate);
          isNavigatingToLogin = false;
        }, 700);
      }
    }

    return Promise.reject(error);
  }
);

export default AxiosBase;
