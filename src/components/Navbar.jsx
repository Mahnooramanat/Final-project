import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material'
import logo from '../images/logo-removebg-preview-removebg-preview (1).png'; // Update path if needed
import ToggleButtons from './Button'; // Ensure the path is correct
import ImageAvatars from './Profile'; // Ensure the path is correct
import '../App.css'; // Correct the path if needed

const Navbar = () => {
  return (
    <AppBar >
     <Navbar /> 
      <Toolbar class="nav">
        <Typography variant="h6" component="div">
             <img className='logo' src={logo} alt='hosh kr khargosh' />
        </Typography>
         {/* <ToggleButtons /> */}
         <ImageAvatars />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar
        // <ToggleButtons />
        {/* <ImageAvatars /> */}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

