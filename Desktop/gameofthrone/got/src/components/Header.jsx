import {AppBar, Toolbar, styled} from '@mui/material'
import Logo from '../images/logo.jpg'

const Navbar = styled(AppBar)
`
background:#000;
`;

const Header = ()=>{
  return (
    <Navbar position="static">
        <Toolbar>
            <img src={Logo} alt="logo" style={{width:250}} />
        </Toolbar>
    </Navbar>
  );
}
export default Header;