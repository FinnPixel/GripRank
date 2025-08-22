import handstand from "./../../assets/images/handstand2.png";
import valley from "./../../assets/images/skill_rank_background.png"
import valley02 from "./../../assets/images/skill_rank_background_02.png"
import { Box, Typography } from "@mui/material";

function TopImage() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "90vh", // Reduced height to better fit small screens
        maxHeight: "940px", // Maximum height limit to prevent too large images on desktop
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${valley02})`, // Ensure the path is correct
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
        px: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${valley02})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(100%)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Box sx={{ flex: "1", position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3" // Smaller variant for small screens
          component="h1"
          sx={{
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.7)", // Smaller shadow for clearer text
            fontSize: { xs: "1.75rem", sm: "3rem" }, // Responsive font size
          }}
        >
          Welcome to Grip Rank
        </Typography>
        <Typography
          variant="subtitle1" // Smaller text size for the subtitle
          component="h2"
          sx={{
            mt: 1, // Reduced margin top for smaller screens
            fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive font size
          }}
        >
          Join the Thriving Calisthenics Community
        </Typography>
      </Box>
    </Box>
  );
}

export default TopImage;
