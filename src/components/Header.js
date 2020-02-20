import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const HeaderContainer = styled.div`
    border-bottom:1px solid lightgray;
    margin-bottom:50px;
    background-color:#F5F5F5;
    padding:10px;
`

const Form = styled.form`
    margin: 0 5px 0 px;
`

const Header = (props) => {
    const [date, setDate] = useState("");

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=hpzOmBXyZKNNBGuTsh8Vhceb6ldfvOuFscuUOcTm").then(response => {
            props.setPhoto(response.data);
        })
        .catch(error => {
          console.log("no good – ", error);
        })
      },[]);

    const handleChange = (event) => {
        event.preventDefault();
        setDate(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=hpzOmBXyZKNNBGuTsh8Vhceb6ldfvOuFscuUOcTm&date=${date}`).then(response => {
            props.setPhoto(response.data);
        })
    }

    return (
        <HeaderContainer>
            <h1>NASA's Astronomy Picture of the Day</h1>
            <div>
                <Link style={linkStyle} to="/">APOD</Link> | <Link style={linkStyle} to="/rover">Rover Photos</Link>
            </div>
            <Form>
                <input type="date" onChange={handleChange}></input>
                <Button onClick={handleSubmit}>Go</Button>
            </Form>
        </HeaderContainer>
    )
}

const linkStyle = {
    color: "inherit",
    textDecoration: "none",
}

export default Header;