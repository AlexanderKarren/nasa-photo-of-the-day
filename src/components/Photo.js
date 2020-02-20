import React from 'react'

const Photo = (props) => {
    return (
        <div style={PhotoContainer}>
            <div style={cardHeader}>
                <div>
                    <h2>{props.photo.title}</h2>
                </div>
            </div>
            <div style={cardContainer}>
                <img style={image} src={props.photo.url} alt="APOD"/>
                <div style={infoContainer}>
                    <h3>{props.photo.date}</h3>
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

const cardHeader = {
    border: "1px solid black",
    borderBottom: "0",
    width: "75%",
    display: "flex",
    justifyContent: "center"
}

const cardContainer = {
    border: "1px solid black",
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
}

const image = {
    width: "50%",
}

const infoContainer = {
    width: "50%",
    fontSize: "80%",
    padding: "0 10px 0 10px",
}