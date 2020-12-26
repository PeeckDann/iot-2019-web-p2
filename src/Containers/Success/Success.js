import {Link} from "react-router-dom";
import {Container, Image, Heading, Message, Goback} from "./Success.styled.js";
import SuccessImage from "../Icons/SuccessImage.svg";

function Success() {
    return (
        <Container>
            <Image src={SuccessImage}/>
            <Heading>Success!</Heading>
            <Message>Your order was sent to processing! Check your email box for further information.</Message>
            <Link to='/catalog'>
                <Goback>Go back to Catalog</Goback>
            </Link>
        </Container>
    );
}

export default Success;