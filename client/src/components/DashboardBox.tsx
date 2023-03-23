import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "0.25rem",
  boxShadow: "0 0.2rem 0.15rem 0 rgba(0, 0, 0, .3)",
}));

export default DashboardBox;
