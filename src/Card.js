import React  from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";

export const Card = ({background, padding = 20}) => {
    return (
        <Container background={background} padding={padding}>
            <div className="text-only">
                <Text text="Card Title" fontSize={20}/>
                <Text text="Card Subtitle" fontSize={15}/>
            </div>
            <div className="buttons-only">
                <Button size="small" variant="contained">Card Button</Button>
            </div>
        </Container>
    )
}
