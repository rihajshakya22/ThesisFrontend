import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useRateEditForm } from "../../../hooks/components/brand/form/useRateEditForm";
import RateFormItem from "./items/RateFormItem";

const EditRateForm = ({ open, handleClose, data }) => {
  const { formik } = useRateEditForm(data);
  const buttonStyle = {
    margin: "8px 0",
  };
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Edit Rate</DialogTitle>
      <DialogContent>
        <RateFormItem formik={formik} />
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

export default EditRateForm;
