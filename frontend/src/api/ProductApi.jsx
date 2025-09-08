import { axiosInstance } from "../config/axiosInstance";

export const fetchProductDetail = async(id) => {
    try {
        let response = await axiosInstance.get(`/products/product-detail/${id}`);

        if (response) {
            // return response.data.product;
        console.log(response);
        return response.data.product
        }

    } catch (error) {
        console.log("Error in product details", error);
        
    }
}