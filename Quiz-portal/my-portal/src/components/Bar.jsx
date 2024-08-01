import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
function CustomFormControl() {
  return (
    <FormControl sx={{ p:-3, width: 700, bgcolor: 'blue', color: 'white', borderRadius: 1 }}>
      <h3>HTML QUIZ</h3>
      <Button variant="contained" color="success" size="small" sx={{ ml: 'auto',mt:-6,width:20,pb:-2 }}>
        Check
      </Button>
    </FormControl>
  );
}
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ py:2,bgcolor: 'lightgray', height: 'auto', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column' }}>
          <CustomFormControl />
        </Box>
      </Container>
    </React.Fragment>
  );
}

