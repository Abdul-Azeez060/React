import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function InfoBox({ result }) {
  let IMG_URL =
    "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?q=80&w=2552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let RAINY_URL =
    "https://images.unsplash.com/photo-1589799790421-178330f91cfa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW55fGVufDB8fDB8fHww";
  let HOT_URL =
    "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1610215868058-f9879ac512c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29vbCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="info">
      <h2>Weather information</h2>
      <div className="cardContainer">
        <Card sx={{ width: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              result.humidity > 80
                ? RAINY_URL
                : result.temp > 25
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {result.city}
            </Typography>
            <Typography variant="body2" component="span" color="text.secondary">
              <p>Temp: {result.temp}</p>
              <p>Max Temp: {result.tempMax}</p>
              <p>Min Temp: {result.tempMin}</p>
              <p>Humidity: {result.humidity}</p>
              <p>Feels Like: {result.feelsLike}</p>
              <p>Description: {result.desc}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
