import { Card, Typography, styled, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

const Image = styled("img")({
  height: 300,
  width: "100%",
  objectFit: "cover",
});

const Character = ({ value }) => {
  return (
    <Card>
      <Tooltip
        title={
          <Box>
            <Typography>Name:{value.firstName}</Typography> 
            <Typography>Title:{value.title}</Typography> 
            <Typography>Family:{value.family}</Typography> 
          </Box>
        }
        arrow
        placement="top"
      >
        <Image src={value.imageUrl} alt="Character Image" />
      </Tooltip>
    </Card>
  );
};

export default Character;
