import { Box, Typography, Grid, Paper } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Header */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome to the Admin Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center">
              <PeopleOutlineIcon fontSize="large" sx={{ color: "#3f51b5" }} />
              <Box ml={2}>
                <Typography variant="subtitle2">Total Users</Typography>
                <Typography variant="h6">1,245</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center">
              <ReceiptOutlinedIcon fontSize="large" sx={{ color: "#009688" }} />
              <Box ml={2}>
                <Typography variant="subtitle2">Invoices</Typography>
                <Typography variant="h6">328</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center">
              <AccountBalanceWalletOutlinedIcon fontSize="large" sx={{ color: "#ff9800" }} />
              <Box ml={2}>
                <Typography variant="subtitle2">Revenue</Typography>
                <Typography variant="h6">LKR 890K</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center">
              <ShowChartIcon fontSize="large" sx={{ color: "#e91e63" }} />
              <Box ml={2}>
                <Typography variant="subtitle2">Growth</Typography>
                <Typography variant="h6">+14%</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Chart Placeholder */}
      <Box mt={5}>
        <Paper elevation={3} sx={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="subtitle1" color="textSecondary">
           
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
