import * as Yup from "yup";

const rateSchema = Yup.object().shape({
  rate: Yup.string().required("Required"),
});

export { rateSchema };
