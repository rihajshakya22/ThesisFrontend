import { Box, Container, Grid } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}>
        <Container maxWidth={false}>
          <Grid container spacing={3}></Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
