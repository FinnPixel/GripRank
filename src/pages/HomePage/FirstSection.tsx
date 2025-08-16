import { Box, Card, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import park01 from "../../assets/images/park01.jpg";
import exercises from "../../assets/images/exercise.jpg";
import community from "../../assets/images/community.jpg";
import articles from "../../assets/images/articles.jpg";

const FirstSection = () => {
  const navigate = useNavigate();

  function onCardClick(page: string) {
    navigate(`/${page}`);
  }

  return (
    <Card
      sx={{
        p: { xs: 2, sm: 4, md: 8 },
        mx: { xs: 4, sm: 16, lg: 16 },
        mt: 8,
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          onClick={() => {
            onCardClick("skill_trees");
          }}
        >
          <Card sx={style.card}>
            <Box
              sx={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${park01})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: "brightness(0.8)",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    filter: "brightness(1)",
                  },
                }}
              />
              <Typography
                fontSize={40}
                fontWeight={500}
                sx={{
                  color: "white",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  position: "relative", // ensures text is on top and unaffected by image hover
                }}
              >
                Parks
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          onClick={() => {
            onCardClick("exercises");
          }}
        >
          <Card sx={style.card}>
            <Box
              sx={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${exercises})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: "brightness(0.8)",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    filter: "brightness(1)",
                  },
                }}
              />
              <Typography
                fontSize={40}
                fontWeight={500}
                sx={{
                  color: "white",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  position: "relative", // ensures text is on top and unaffected by image hover
                }}
              >
                Workouts
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          onClick={() => {
            onCardClick("skill_trees");
          }}
        >
          <Card sx={style.card}>
            <Box
              sx={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${community})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: "brightness(0.8)",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    filter: "brightness(1)",
                  },
                }}
              />
              <Typography
                fontSize={40}
                fontWeight={500}
                sx={{
                  color: "white",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  position: "relative", // ensures text is on top and unaffected by image hover
                }}
              >
                Community
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          onClick={() => {
            onCardClick("skill_trees");
          }}
        >
          <Card sx={style.card}>
            <Box
              sx={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${articles})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: "brightness(0.8)",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    filter: "brightness(1)",
                  },
                }}
              />
              <Typography
                fontSize={40}
                fontWeight={500}
                sx={{
                  color: "white",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  position: "relative", // ensures text is on top and unaffected by image hover
                }}
              >
                News
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

const style = {
  card: {
    borderRadius: 4,
    transition: "box-shadow 0.1s",
    ":hover": {
      boxShadow: "0px 0px 0px 5px",
    },
    "&:hover .img": {
      filter: "brightness(100%)",
    },
    overflow: "hidden",
    backgroundColor: "#454545",
  },
  cardMedia: {
    height: 300,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    filter: `brightness(80%)`,
    transition: "filter 0.2s",
    width: "100%",
  },
  textBox: {
    top: 0,
    left: 0,
    color: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export default FirstSection;
