import React from 'react'
import PhotoHeader from "./PhotoHeader";
import Information from "./Information";
import { Card } from "reactstrap";
import styled from "styled-components";

const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PhotoContents = styled.div `
    display:flex;
`

const APOD = styled.img`
    width:40%;
`

const cardStyle = {
    width: "75%",
    backgroundColor: "#696969",
    color: "white",
}

const PhotoCard = (props) => {
    return (
        <Container>
            <Card style={cardStyle}>
                <PhotoHeader photo={props.photo}/>
                <PhotoContents>
                    <APOD src={props.photo.url} alt="APOD"/>
                    <Information photo={props.photo}/>
                </PhotoContents>
            </Card>
        </Container>
    )
}

export default PhotoCard;

// const container = {
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
// }

// const cardContainer = {
//     border: "1px solid black",
//     width: "75%",
//     display: "flex",
//     justifyContent: "space-between",
// }

// const image = {
//     width: "50%",
// }

// const infoContainer = {
//     width: "50%",
//     fontSize: "80%",
//     padding: "0 10px 0 10px",
// }