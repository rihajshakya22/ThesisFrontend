import axios from "axios";
import { axiosInstance } from "../../axiosInterceptor";

export const getProduct = async (keyword = "") => {
  const { data } = await axios.get(`/api/products?keyword=${keyword}`);
  return data;
};

export const getProductByKeyword = async (keyword) => {
  const { data } = await axios.get(`/api/products?keyword:${keyword}`);
  return data;
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`/api/products/${id}`);
  return response;
};
