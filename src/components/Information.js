import React from 'react';
import styled from "styled-components";
import { CardTitle, CardText} from "reactstrap";

const InformationContent = styled.div `
    display: flex;
    flex-direction: column;
    width:60%;
    padding: 10px;
`

const Information = (props) => {
    return (
            <InformationContent>
                <CardTitle style={{fontWeight: "bold", fontSize: "120%"}}>{props.photo.date}</CardTitle>
                <CardText>{props.photo.explanation}</CardText>
            </InformationContent>
    )
}

export default Information;