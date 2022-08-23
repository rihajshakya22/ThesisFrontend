import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useProductForm } from "../../../hooks/components/product/form/useProductForm";
import ProductFormItem from "./item/ProductFormItem";

const ProductForm = ({ open, handleClose }) => {
  const { formik, setImage, colorList, brandList, setColor, color, image } =
    useProductForm();
  const buttonStyle = {
    margin: "8px 0",
  };
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <ProductFormItem
          formik={formik}
          setImage={setImage}
          colorList={colorList}
          brandList={brandList}
          setColor={setColor}
          color={color}
          image={image}
        />
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          id="submitButton"
          color="primary"
          style={buttonStyle}
          disabled={!(formik.isValid && formik.dirty)}
          onClick={() => {
            formik.submitForm();
            handleClose();
          }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductForm;
