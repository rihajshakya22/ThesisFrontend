import { Box, Container, Grid } from "@mui/material";
import React from "react";
import RateTable from "../components/rate/table/RateTable";
import RateToolbar from "../components/rate/table/RateToolbar";

const Rate = () => {
  return (
    <div>
      <Grid container direction="row">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
          }}>
          <Container maxWidth={false}>
            <RateToolbar />
            <Box sx={{ mt: 3 }}>
              <RateTable />
            </Box>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default Rate;
