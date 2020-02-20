import React from 'react'

const Photo = (props) => {
    return (
        <div style={PhotoContainer}>
            <div style={cardContainer}>
                <div>
                    <h2>{props.photo.title}</h2>
                </div>
            </div>
            <div style={cardContainer}>
                <div style={imageContainer}><img style={image} src={props.photo.url} alt="APOD"/></div>
                <div style={infoContainer}>
                    <p>{props.photo.explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default Photo;

const PhotoContainer = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

const cardContainer = {
    border: "1px solid black",
    width: "75%",
    display: "flex",
}

const imageContainer = {
    width: "45%",
}

const image = {
    maxWidth: "100%",
}

const infoContainer = {
    width: "55%",
}