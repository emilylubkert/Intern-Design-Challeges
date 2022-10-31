import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

  
function DayCard({dayAbbrev, temperature}) {
    return (
      <Card sx={{ maxWidth: 200 }} className="day-card" >
        <CardContent>
          <Typography variant="h4" component="div">
            {dayAbbrev}
          </Typography>
          <Typography sx={{ mb: 1.5, textAlign:"center" }} variant="h4" color="text.secondary">
            {temperature}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Click for Details</Button>
        </CardActions>
      </Card>
    );
  }

export default DayCard;