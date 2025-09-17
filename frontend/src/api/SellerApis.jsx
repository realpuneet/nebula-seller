import { axiosInstance } from "../config/axiosInstance.jsx";

export const registerSeller = async (data) => {
  try {
    const response = await axiosInstance.post("/api/auth/seller/register", data);
    console.log(response);
    if(response){
        return response.data.seller
    }
  } catch (error) {
    console.log("Error while seller registration: ",error);
  }
};
