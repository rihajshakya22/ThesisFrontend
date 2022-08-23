import React from "react";
import InventoryIcon from "@mui/icons-material/Inventory";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
const TotalOrderItem = ({ countOrder }) => {
  const history = useHistory();
  return (
    <div>
      <Paper elevation={24}>
        <Card>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: "space-between" }}>
              <Grid item>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="overline">
                  TOTAL ORDERS
                </Typography>
                <Typography color="textPrimary" variant="h4">
                  {countOrder ? countOrder : <CircularProgress />}
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={() => history.push("/admin/orders")}>
                  <Avatar
                    sx={{
                      backgroundColor: "success.main",
                      height: 56,
                      width: 56,
                    }}>
                    <InventoryIcon />
                  </Avatar>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};

export default TotalOrderItem;
