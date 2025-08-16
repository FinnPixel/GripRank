import { Card, Grid } from "@mui/material";
import Park, { IPark } from "./Park";
interface IFirstSection {
  displayedParks: IPark[];
}

const FirstSection = ({ displayedParks }: IFirstSection) => {
  return (
    <Card
      sx={{
        p: { xs: 0, sm: 4 },
        pb: { xs: 2, sm: 4 },
        mx: { xs: 4, lg: 16 },
        mt: 4,
        borderRadius: 4,
        backgroundColor: "#222222",
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={2}>
        {displayedParks.length > 0 ? (
          displayedParks.map((park: IPark) => {
            return (
              <Park
                id={park.id}
                title={park.title}
                image={park.image}
                address={park.address}
                google_maps_url={park.google_maps_url}
                coordinates={park.coordinates}
              />
            );
          })
        ) : (
          <></>
        )}
      </Grid>
    </Card>
  );
};

export default FirstSection;
