import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={8}
     justifyContent="center"
     marginTop="20px"
      style={{ height: '100vh' }} // Ensure container takes full viewport height
    >
      <Avatar alt="Remy Sharp" src="/profile.png" 
      sx={{ width: 120, height: 120 }} // Adjust size as needed
      />
    </Stack>
  );
}
