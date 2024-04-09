import { Box } from "@mui/material";
import MainPage from "../components/dashboard/main-page";

const Dashboard: React.FC = () => {
  return (
    <Box display="flex" gap={4} flexWrap="wrap">
      <Box flex={1} minWidth="300px" mt={0}>
        <MainPage />
      </Box>
    </Box>
  );
};

export default Dashboard;
