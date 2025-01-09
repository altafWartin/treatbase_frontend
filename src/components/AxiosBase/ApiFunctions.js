// ApiFunctions

import AxiosBase from "./AxiosBase";

// Example usage
const fetchData = async () => {
    try {
      const data = await AxiosBase.get("/your-endpoint");
      console.log("API Data:", data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  
  // Call the fetchData function to test
  fetchData();
  