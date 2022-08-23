import { useQuery } from "react-query";
import {
  getProduct,
  getProductById,
  getProductByKeyword,
} from "../../api/product";

export const useGetProduct = (keyword) => {
  return useQuery(["product"], () => getProduct(keyword), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductByKeyword = (keyword) => {
  return useQuery(["productByKeyword"], () => getProductByKeyword(keyword), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetProductById = (id) => {
  return useQuery(["productById"], () => getProductById(id), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
