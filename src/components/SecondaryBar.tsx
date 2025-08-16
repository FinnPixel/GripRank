import { AppBar, Autocomplete, Box, TextField, Toolbar } from "@mui/material";
import { IPark } from "../pages/SkillTrees/Park";

interface ISecondaryBar {
  onHandleEnter: Function;
  displayedParks: IPark[];
}

function SecondaryBar({ onHandleEnter, displayedParks }: ISecondaryBar) {
  return (
    <AppBar
      position="sticky"
      color="secondary"
      sx={{ top: 64, zIndex: 1100, backgroundColor: "black" }} // top = 0 makes the top bar "disappear", could also be cool
    >
      <Toolbar>
        <Box
          margin={2}
          sx={{
            backgroundColor: "lightgray",
            borderRadius: 4,
            height: "50px",
            width: "100%",
            marginLeft: { xs: 0, sm: 15, md: 30 },
            marginRight: { xs: 0, sm: 15, md: 30 },
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            boxSizing: "border-box",
          }}
        >
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            filterSelectedOptions
            open={false}
            options={displayedParks.map((park: IPark) => park.title)}
            onInputChange={(_: any, value: string) => {
              onHandleEnter(value);
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "100%",
                borderRadius: "10px",
                "& fieldset": {
                  border: "none",
                },
                "& input": {
                  height: "100%", // ensures the actual input matches the parent's height
                },
              },
              width: "100%",
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="Search input"
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    height: "100%",
                  },
                  paddingLeft: 1,
                  paddingRight: 1,
                }}
              />
            )}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default SecondaryBar;
