import { Box, Grid } from "@mui/material";
import Character from "./character";
import { useEffect, useState } from "react";
import { fetchData } from "../service/api.js";

const Characters = ({state}) => {
  const [character, UpdateCharacter] = useState([]);

  useEffect(() => {
    getCharacters();
  }, [state]);

  const getCharacters = async () => {
    const response = await fetchData(state);
    UpdateCharacter(response.data);
  };

  return (
    <Box style={{margin:20}}>
      <Grid container spacing={4}>
        {character.map((value) => (
          <Grid item xs={3}>
            <Character value={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
