import { Box } from "@mui/material";
import wallpaper from "./../../assets/images/calisthenics_at_marienplatz.png";

function Image() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "50vh",
          maxHeight: "640px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${wallpaper})`,
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
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(90%)",
          },
        }}
      >
      </Box>
    </>
  );
}

export default Image;
