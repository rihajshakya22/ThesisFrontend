import { useFormik } from "formik";
import { useState } from "react";
import {
  useDeleteProduct,
  usePostProduct,
} from "../../../api/product/useProductAdmin";
import { productSchema } from "./productValidationSchema";

export const useProductForm = () => {
  const { mutate } = usePostProduct({});
  const { mutate: deleteMutate } = useDeleteProduct({});
  const [image, setImage] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      weight: "",
      countInStock: "",
    },
    validationSchema: productSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
    },
  });

  const handleCreate = (values) => {
    const formData = {
      ...values,
      image: image,
    };
    mutate(formData);
  };

  const handleDelete = (id) => {
    deleteMutate(id);
  };

  return {
    formik,
    setImage,
    handleDelete,
    image,
  };
};
