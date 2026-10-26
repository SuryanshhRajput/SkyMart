import { useQuery } from "@tanstack/react-query";
import { getProductDataApi } from "../api/productApi";

export const useProductApi = () => {
  let { data, isPending } = useQuery({
    queryKey: ["products"],

    queryFn: getProductDataApi,

    staleTime: 5000,
  });
  return {
    data,
    isPending,
  };
};
