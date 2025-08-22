import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import logo from "./../assets/images/logo_calisthenics_munich_website_1.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = (direction: string) => {
    navigate(`/${direction}`);
  };

  const quickLinks = [
    { title: "Home", link: "" },
    { title: "About", link: "about" },
    { title: "Skill Trees", link: "skill_trees" },
    { title: "Community", link: "nopage" },
  ];

  const connects = [
    { title: "Facebook", link: "" },
    { title: "Instagram", link: "" },
    { title: "Youtube", link: "" },
  ];

  return (
    <Paper
      sx={{
        width: { xs: "100%", sm: "100vw" },
        backgroundColor: "white",
        paddingTop: 20,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          display: "flex",
          mb: 2,
          flexDirection: "column",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-center", sm: "flex-start" },
                marginBottom: 10,
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "flex" },
                  flexDirection: "row",
                }}
              >
                {
                  /*
                  <Box
                  component="img"
                  sx={{
                    width: "35px",
                    height: "35px",
                    display: { xs: "", sm: "block" },
                    filter: "brightness(100%)",
                    marginRight: 2,
                  }}
                  alt="logo"
                  src={undefined}
                />
                  */
                }
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "25px",
                    fontWeight: "600",
                    fontFamily: "Montserrat",
                    letterSpacing: "1px",
                    textDecoration: "none",
                    cursor: "default",
                    color: "black",
                    marginBottom: 2,
                  }}
                >
                  Grip Rank
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  cursor: "default",
                  color: "black",
                }}
              >
                © 2024 Grip Rank
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  cursor: "default",
                  color: "black",
                }}
              >
                Uniting the calisthenics community.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-center", sm: "flex-start" },
                marginBottom: 10,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  cursor: "default",
                  color: "black",
                  marginBottom: 2,
                }}
              >
                Quick Links
              </Typography>

              {quickLinks.map((quickLink) => {
                return (
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      letterSpacing: "1px",
                      textDecoration: "none",
                      cursor: "default",
                      color: "black",
                      marginBottom: 2,
                    }}
                    onClick={() => handleClick(quickLink.link)}
                  >
                    {quickLink.title}
                  </Typography>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-center", sm: "flex-start" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  cursor: "default",
                  color: "black",
                  marginBottom: 2,
                }}
              >
                Connect
              </Typography>
              {connects.map((connect) => {
                return (
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      fontFamily: "Montserrat",
                      letterSpacing: "1px",
                      textDecoration: "none",
                      cursor: "default",
                      color: "black",
                      marginBottom: 2,
                    }}
                  >
                    {connect.title}
                  </Typography>
                );
              })}
            </Box>
          </Grid>
        </Grid>
        <Typography variant="caption" color="black">
          Grip Rank © 2025
        </Typography>
      </Container>
    </Paper>
  );
}

export default Footer;
