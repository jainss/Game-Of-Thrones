import {AppBar, Toolbar, styled, Box,InputBase } from '@mui/material';
import Logo from '../image/logo.png';
import SearchIcon from '@mui/icons-material/Search';

const Image= styled('img')`
   width:8%;
   heigh:300px;
`;

const Navbar=styled(AppBar) `
background: #000;
padding: 10px;
`;

const StyledComponent = styled(Box)`
    background-color: rgba(255, 255, 255, 0.15);
    margin-left: 10px;
    border-radius: 5px;
    position: relative;
`;

const InputBox = styled(InputBase)`
    color: inherit;
    margin: 0 50px;
`;

const StyledIcon = styled(SearchIcon)`
    position: absolute;
    margin-left: 10px;
    top: 3px;
`;



const Header = ({NewState}) =>{
    
    const changeOnSearch=(e)=>{
        NewState(e.target.value);
        console.log(e.target.value)
    }

    return (
        <Navbar position='static'>
           <Toolbar>
              <Image src={Logo} alt="Logo" />
              <StyledComponent>
                <InputBox placeholder='Search By Name' onChange={(e)=>changeOnSearch(e)}/>
                <StyledIcon>
                    <SearchIcon />
                </StyledIcon>
              </StyledComponent>
           </Toolbar>
        </Navbar>
    );
}

export default Header;