import { Box } from "@mui/material";
import MainPage from "../components/dashboard/main-page";

const Dashboard: React.FC = () => {
  return (
    <Box display="flex" gap={4} flexWrap="wrap" height="100%">
      <Box flex={1} minWidth="300px" mt={2}>
        <MainPage />
      </Box>
    </Box>
  );
};

export default Dashboard;
