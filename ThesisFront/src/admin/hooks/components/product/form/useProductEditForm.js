import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useUpdateProduct } from "../../../api/product/useProductAdmin";
import { productSchema } from "./productValidationSchema";

export const useProductEditForm = (data) => {
  const { mutate } = useUpdateProduct({});
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(data && data?.image);
  }, [data]);

  const formik = useFormik({
    initialValues: {
      name: data && data?.name,
      brand: data && data?.brand?._id,
      description: data && data?.description,
      weight: data && data?.weight,
      countInStock: data && data?.countInStock,
    },
    validationSchema: productSchema,
    enableReinitialize: true,

    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
    },
  });

  const handleCreate = (values) => {
    const formData = {
      ...values,
      image: image,
      id: data?._id,
    };
    mutate(formData);
  };

  return {
    formik,
    setImage,
    image,
  };
};
