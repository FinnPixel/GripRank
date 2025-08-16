import { Box, Typography } from "@mui/material";

function FirstSection() {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4, md: 8 },
        mx: { xs: 4, sm: 16, lg: 32 },
        mb: 4,
      }}
    >
      <Box>
        <Typography
          sx={{ mt: 2, mb: 4, color: "black" }}
          fontSize={"60px"}
          fontWeight={500}
        >
          About Us
        </Typography>
      </Box>
      <Box sx={{ color: "black" }}>
        <Typography fontSize={"22px"}>
          Our mission: "Uniting fitness enthusiasts to create a vibrant and
          dynamic hub for calisthenics in Munich."
        </Typography>
        <br></br>
        <Typography align="justify" fontSize={"18px"}>
          With Munich's calisthenics scene still in its infancy, there lies a
          golden opportunity to join a movement that's ready to soar to new
          heights. We are committed to building a robust calisthenics community
          right here in Munich, turning our city into a buzzing hub for
          enthusiasts and professionals alike.
        </Typography>
        <br></br>
        <Typography align="justify" fontSize={"18px"}>
          Our goal is to provide a platform for growth, learning, and
          connection, empowering each member to reach their full potential
          through innovative training and collective support. Whether you are
          stepping into the world of calisthenics for the first time or are
          looking to refine your skills among peers, Calisthenics Munich is your
          gateway to becoming part of something bigger. Together, we can elevate
          Munich to become synonymous with world-class calisthenics, creating a
          legacy of strength, agility, and community spirit.
        </Typography>
      </Box>
    </Box>
  );
}

export default FirstSection;
