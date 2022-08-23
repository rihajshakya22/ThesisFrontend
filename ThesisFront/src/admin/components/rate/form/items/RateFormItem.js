import { Grid, TextField } from "@mui/material";
import React from "react";

const RateFormItem = ({ formik }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="rate"
            label="Rate"
            name="rate"
            autoComplete="name"
            value={formik.values.rate}
            onChange={formik.handleChange}
            error={formik.touched.rate && Boolean(formik.errors.rate)}
            helperText={formik.touched.rate && formik.errors.rate}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RateFormItem;
