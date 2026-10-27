import { axiosInstance } from "../../../shared/config/axiosInstance";

export const addCartApi = async ({ userId, products }) => {
  const response = await axiosInstance.post("/carts/add", {
    userId,
    products,
  });

  return response.data;
};
