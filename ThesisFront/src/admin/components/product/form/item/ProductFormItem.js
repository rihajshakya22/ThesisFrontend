import { InputLabel, TextField, Grid } from "@mui/material";
import axios from "axios";
import React from "react";

const ProductFormItem = ({ formik, setImage, setColor, image }) => {
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        proxy: {
          port: 3000,
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="weight"
            label="Weight"
            id="weight"
            value={formik.values.weight}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.weight && Boolean(formik.errors.weight)}
            helperText={formik.touched.weight && formik.errors.weight}
            autoComplete="current-weight"
          />
        </Grid>
      </Grid>
      <TextField
        margin="normal"
        required
        fullWidth
        name="countInStock"
        label="Quantity"
        id="countInStock"
        onBlur={formik.handleBlur}
        value={formik.values.countInStock}
        onChange={formik.handleChange}
        error={
          formik.touched.countInStock && Boolean(formik.errors.countInStock)
        }
        helperText={formik.touched.countInStock && formik.errors.countInStock}
        autoComplete="current-countInStock"
      />
      <InputLabel id="demo-simple-select-standard-label">
        Image {image && `:${image}`}
      </InputLabel>
      <TextField
        margin="normal"
        required
        fullWidth
        id="image"
        // value={image}
        name="image"
        autoFocus
        type={"file"}
        onChange={uploadFileHandler}
      />

      <TextField
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
        id="description"
        label="Description"
        name="description"
        autoComplete="description"
        onBlur={formik.handleBlur}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
    </div>
  );
};

export default ProductFormItem;
