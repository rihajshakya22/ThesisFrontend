import * as Yup from "yup";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  weight: Yup.string()
    .required("Required")
    .test(
      "Is positive?",
      "ERROR: The number must be greater than 0!",
      (value) => value > 0
    ),
  countInStock: Yup.string()
    .required("Required")
    .test(
      "Is positive?",
      "ERROR: The number must be greater than 0!",
      (value) => value > 0
    ),
});

export { productSchema };
