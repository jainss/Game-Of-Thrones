import { Card, styled, Box, Typography } from "@mui/material";
import { useState,  } from "react";


const Image = styled("img")({
  width: "100%",
  height: 300,
});

const Component = styled(Card)`
  width: 200px;
  margin: 10px;
  position: relative;
`;

const Container = styled(Box)`
  position: absolute;
  top: 0;
  color: #fff;
  height: 300px;
  width: 100%;
  background: #000;
  opacity: 0.5;
`;

const Character = ({ value }) => {
  
  const [toggle, setToggle] = useState(false);

  const touggleHover = () => {
    setToggle(!toggle);
  };

  return( 
    value.characterImageFull ?
    <Component onMouseEnter={touggleHover} onMouseLeave={touggleHover}>
      <Image src={value.characterImageFull} alt="image" />
      {toggle ? (
        <Container>
          <Typography>Name: {value.characterName}</Typography>
          <Typography>Actor Name: {value.actorName}</Typography>
          <Typography>House Name: {value.houseName}</Typography>
        </Container>
      ) : (
        ""
      )}
    </Component>
   :""
  );
};

export default Character;
