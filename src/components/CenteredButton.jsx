import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CenteredButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <MuiButton
        variant="contained"
        color="success"
        onClick={handleClick}
      >
        Start
      </MuiButton>
    </Box>
  );
};

export default CenteredButton;
