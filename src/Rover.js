import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MarsPhotos = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const MarsPhotoContainer = styled.div`
    width:40%;
`

const MarsPhoto = styled.img`
    max-width:100%;
`

const Rover = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=hpzOmBXyZKNNBGuTsh8Vhceb6ldfvOuFscuUOcTm")
        .then(response => {
            console.log(response.data.photos);
            setPhotos(response.data.photos);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <MarsPhotos>
            {photos.map(photo => <MarsPhotoContainer><img src={photo.img_src}/></MarsPhotoContainer>)}
        </MarsPhotos>
    )
}

export default Rover;