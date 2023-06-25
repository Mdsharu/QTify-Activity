import "../components/Card.css";
import Card_img from "../assets/Qtify_Card.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CardBody() {
    return (
        <div className="Card_Content">
            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        // height="140"
                        image={Card_img}
                        alt="Bollywood Hits"
                        className="Each_Card"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="Typo1">
                            100M Follows
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            New Bollywood
                        </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    </div>
    )
}

export default CardBody;