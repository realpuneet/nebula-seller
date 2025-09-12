import { axiosInstance } from "../config/axiosInstance.jsx";

export const registerSeller = async () => {
  try {
    const response = await axiosInstance.post("/auth/seller/register");
    if(response){
        return response.data.seller
    }
  } catch (error) {
    console.log("Error while seller registration: ",error);
  }
};
