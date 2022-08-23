import { useUpdateRate } from "../../../api/rate/useRate";
import { rateSchema } from "./rateValidationSchema";
import { useFormik } from "formik";

export const useRateEditForm = (data) => {
  const { mutate: updateMutate } = useUpdateRate({});
  const formik = useFormik({
    initialValues: {
      rate: data?.rate,
    },
    enableReinitialize: true,
    validationSchema: rateSchema,
    onSubmit: (values, { resetForm }) => {
      handleUpdate(values);
      resetForm();
    },
  });

  const handleUpdate = (values) => {
    values = { ...values, id: data._id, price: values?.rate };
    updateMutate(values);
  };

  return {
    formik,
    handleUpdate,
  };
};
