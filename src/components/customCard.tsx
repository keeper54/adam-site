import { Card, CardHeader, CardMedia } from "@mui/material";

interface CustomCardProps {
    title: string;
    imgSrc: string;
}

const CustomCard = (props: CustomCardProps) => {
    return (
        <Card  sx={{width: '50%', height: '15vh'}}>
            <CardHeader title={props.title} />
            <CardMedia component="img" image={props.imgSrc} alt={props.title} />
        </Card>
    )
}

export default CustomCard;