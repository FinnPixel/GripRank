import { Box, Typography } from "@mui/material";

function NoPage() {
  return (
    <Box
      height="calc(100vh - 64px)"
      alignContent={"center"}
      sx={{ backgroundColor: "black" }}
    >
      <Typography sx={{ color: "white", fontSize: "20px" }}>
        Stay tuned! This page is coming soon.
      </Typography>
    </Box>
  );
}

export default NoPage;
