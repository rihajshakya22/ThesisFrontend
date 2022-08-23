import { useFormik } from "formik";
import { useCreateRate, useUpdateRate } from "../../../api/rate/useRate";
import { rateSchema } from "./rateValidationSchema";

export const useRateForm = () => {
  const { mutate } = useCreateRate({});
  const { mutate: updateMutate } = useUpdateRate({});
  const formik = useFormik({
    initialValues: {
      rate: "",
    },
    validationSchema: rateSchema,
    onSubmit: (values, { resetForm }) => {
      handleCreate(values);
      resetForm();
    },
  });

  const handleCreate = (values) => {
    values = { ...values, price: values?.rate };
    mutate(values);
  };

  const handleUpdate = (id) => {
    updateMutate(id);
  };

  return {
    formik,
    handleUpdate,
  };
};
