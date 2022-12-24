import { data } from "../database/db";
import { Box, Grid } from "@mui/material";
import Character from "./character";

const Characters = () => {
  return (
    <Box style={{ margin: "10px 35px" }}>
      <Grid container>
        {data.characters.map((value) => (
          <Grid item>
            <Character value={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
