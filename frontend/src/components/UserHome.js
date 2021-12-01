import React from "react";
import {Container, Row, Col, Stack, Image } from 'react-bootstrap';

import Logo from "../assets/img/Recurso_3.png"; 
import SearchBar from './SearchBar';

const Home = () =>{
    var example = localStorage.getItem("example");
    return(
        <Container>
            <Row>
                <Col>
                    <Stack gap={2} className="align-items-center">
                    <Image src={Logo} width="200px" height="200px" />
                    <SearchBar />
                    <h1>{example}</h1>
                    </Stack>
                </Col>
            </Row>


        </Container>

    )
};

export default Home;