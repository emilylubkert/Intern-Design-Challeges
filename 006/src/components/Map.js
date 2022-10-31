import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Map() {
  return (
    <Card sx={{ maxWidth: "40%" }}>
      <CardMedia
        component="img"
        // height="140"
        image="./map.png"
        alt="map"
      />
    </Card>
  );
}

export default Map;
