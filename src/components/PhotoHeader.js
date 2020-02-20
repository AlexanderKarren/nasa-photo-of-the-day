import React from 'react'
import { CardHeader } from "reactstrap"
import styled from "styled-components"

const Title = styled.h2 `
    color:white;
`

const PhotoHeader = (props) => {
    return (
        <CardHeader body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}><Title>{props.photo.title}</Title></CardHeader>
    )
}

export default PhotoHeader;

// const cardHeader = {
//     border: "1px solid black",
//     borderBottom: "0",
//     width: "75%",
//     display: "flex",
//     justifyContent: "center"
// }