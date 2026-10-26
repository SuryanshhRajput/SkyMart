import { axiosInstance } from "../../../shared/config/axiosInstance";

export const getProductDataApi = async () => {
  try {
    let res = await axiosInstance.get("/products");
    return res.data.products;
  } catch (error) {
    console.log("error in product api", error.message);
  }
};
