import { Box, Grid } from "@mui/material";
import Character from "./character";
import { useEffect,useState } from "react";
import { getData } from "../server/api";

const Characters = () => {

  const [data,updateData]=useState([]);

  useEffect(()=>{
    getCharaterDetails();
  },[])
  
  const getCharaterDetails=async()=>{
   let response= await getData();
   updateData(response.data);
  }

  return (
    <Box style={{ margin: "10px 35px" }}>
      <Grid container>
        {data.map((value) => (
          <Grid item>
            <Character value={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
