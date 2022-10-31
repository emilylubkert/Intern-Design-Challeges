import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Month() {
  return (
    <Card sx={{ minWidth: "40%"}}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant="subtitle1" color="text.secondary">
          Monthly Forecast
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click for Details</Button>
      </CardActions>
    </Card>
  );
}

export default Month;