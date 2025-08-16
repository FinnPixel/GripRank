import { Box, Card, CardMedia, Dialog, Grid, Typography } from "@mui/material";
import { useState } from "react";

interface IImage {
  image: string;
  title: string;
}

function Image({ image, title }: IImage) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={4}>
      <Card onClick={handleOpen}>
        <Box position={"relative"}>
          {image ? (
            <CardMedia
              className="img"
              sx={{
                height: 300,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              image={image}
              title={title}
            />
          ) : (
            <>
              <CardMedia
                sx={{
                  height: 300,
                  backgroundColor: "gray",
                  alignContent: "center",
                }}
              >
                <Typography>No image available</Typography>
              </CardMedia>
            </>
          )}
        </Box>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        fullWidth
        maxWidth="md"
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            display: "block",
          }}
          alt={title}
          src={image}
        />
      </Dialog>
    </Grid>
  );
}

export default Image;
