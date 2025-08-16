import { Box, Grid, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "./Image";

export interface IPark {
  id: string;
  title: string;
  image: string;
  address: string;
  google_maps_url: URL;
  coordinates: { x: number; y: number };
}

function Park({ title, image, address, google_maps_url }: IPark) {
  const navigate = useNavigate();

  function onCardClick(page: string) {
    navigate(`/${page}`);
  }

  return (
    <Grid
      item
      xs={12}
      onClick={() => {
        onCardClick("/");
      }}
      marginLeft={2}
      marginRight={2}
    >
      <Grid container>
        <Image image={image} title={title} />
        <Grid item xs={8} sm={3}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography color={"white"} margin={2}>
              {title}
            </Typography>
            <Typography color={"white"} margin={2}>
              {address}
            </Typography>
            <Link
              href={google_maps_url.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </Link>
          </Box>
        </Grid>
        <Grid item sm={3} display={{ xs: "none", sm: "block" }}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography color={"white"} margin={2}>
              lorem ipsum
            </Typography>
            <Typography color={"white"} margin={2}>
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={2} display={{ xs: "none", sm: "block" }}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography color={"white"} margin={2}>
              lorem ipsum
            </Typography>
            <Typography color={"white"} margin={2}>
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Park;
