import React from "react";
import ResponsiveDrawer from "./components/responsive-drawer";
import Dashboard from "./pages/dashboard";
import Box from "@mui/material/Box";
const App = () => {
  return (
    <>
      <Box display="flex" gap={4} height="100vh">
        <Box>
          <ResponsiveDrawer />
        </Box>
        <Box flex={1}>
          <Dashboard />
        </Box>
      </Box>
    </>
  );
};
export default App;
