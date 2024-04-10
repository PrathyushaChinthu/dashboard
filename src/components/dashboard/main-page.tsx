import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { top100Films } from "./top100films";

const bullet = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const MainPage = () => {
  return (
    <Box flex={1}>
      <Box display="flex" flexWrap="wrap" justifyContent={"space-around"}>
        <Typography variant="h4" my={2} fontWeight="600" color="black">
          Dashboard
        </Typography>
        <Stack
          spacing={2}
          sx={{ width: "200px", borderRadius: "100px", minWidth: "200px" }}
        >
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
        </Stack>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        gap={6}
        mt={2}
      >
        <Card
          sx={{
            flex: "1",
            bgcolor: "#281678",
            color: "white",
            borderRadius: "30px",
            px: "1rem",
            minWidth: "240px",
            maxWidth: "240px",
            pl: "2rem",
          }}
        >
          <CardContent>
            <Typography variant="body1">Name</Typography>
            <Typography variant="h5">Arya Wijaya</Typography>
            <Typography variant="h6">
              {bullet}
              {bullet}
              {bullet}
              {bullet} {bullet}
              {bullet}
              {bullet}
              {bullet} {bullet}
              {bullet}
              {bullet}
              {bullet} 2600
            </Typography>
            <Typography variant="body1">Balance</Typography>
            <Typography variant="h6">
              RP{bullet} 10{bullet}500{bullet}000
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            flex: "1",
            bgcolor: "#8ce8fa",
            color: "white",
            borderRadius: "30px",
            px: "1rem",
            minWidth: "240px",
            maxWidth: "240px",
            pl: "2rem",
          }}
        >
          <CardContent>
            <Typography variant="body1">Name</Typography>
            <Typography variant="h5">Arya Wijaya</Typography>
            <Typography variant="h6">
              {bullet}
              {bullet}
              {bullet}
              {bullet} {bullet}
              {bullet}
              {bullet}
              {bullet} {bullet}
              {bullet}
              {bullet}
              {bullet} 2600
            </Typography>
            <Typography variant="body1">Balance</Typography>
            <Typography variant="h6">
              RP{bullet} 2{bullet}400{bullet}000
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default MainPage;
