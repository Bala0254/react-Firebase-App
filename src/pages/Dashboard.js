import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <h3>Welcome Back, Admin!</h3>
            <p>Here's what's happening with your app today.</p>
        </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
