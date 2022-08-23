import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useRateForm } from "../../../hooks/components/brand/form/useRateForm";
import RateFormItem from "./items/RateFormItem";

const RateForm = ({ open, handleClose }) => {
  const { formik } = useRateForm();
  const buttonStyle = {
    margin: "8px 0",
  };
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <DialogTitle>Add Rate</DialogTitle>
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

export default RateForm;
