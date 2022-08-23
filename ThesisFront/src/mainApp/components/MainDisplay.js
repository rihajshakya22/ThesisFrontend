import {
  Box,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useGetRate } from "../../admin/hooks/api/rate/useRate";
import { useGetProduct } from "../hooks/api/useProduct";

const MainDisplay = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError, refetch } = useGetProduct(keyword);
  useEffect(() => {
    refetch();
  }, [keyword, refetch]);
  const {
    data: rateData,
    isLoading: rateLoading,
    isError: rateError,
  } = useGetRate();
  const history = useHistory();
  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Something Error....</h1>
      </div>
    );
  }
  return (
    <div>
      <main style={{backgroundColor:"#5048E5"}}>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom>
              Jewelry Management System
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph>
              Todays Gold Rate: Rs.{" "}
              {rateLoading
                ? "Loading..."
                : rateError
                ? "Error"
                : rateData?.rates[0].rate}
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data?.products.length>0?data?.products.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <CardMedia component="img" image={card?.image} alt="random" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card?.name}
                    </Typography>
                    <Typography>{card?.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => history.push(`/products/${card?._id}`)}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )):"No Items"}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default MainDisplay;
