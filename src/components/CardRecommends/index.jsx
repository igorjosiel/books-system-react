import { Title } from "../Title";
import { Card, BookImage, Button, Description, Subtitle } from "./styles";

function CardRecommends({ title, subtitle, description, image }) {
    return (
        <Card>
            <div>
                <Title fontSize="16px" color="#EB9B00" align="left">{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
            </div>
            <div>
                <BookImage src={image} />
                <Button>Saiba mais</Button>
            </div>
        </Card>
    );
}

export default CardRecommends;