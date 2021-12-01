import React from "react";
import {Row, Col, Tab, ListGroup} from 'react-bootstrap';
import ResultItem from './ResultItem';
import Profile from "./profile";

//Se crea la división en la página que se muestra a través de una lista que se trae 
//desde React-Bootstrap

const ResultList = () =>{
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
            <Col sm={4}>
            <ListGroup>
                <ListGroup.Item action href="#link1">
                <ResultItem />
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                <ResultItem />
                </ListGroup.Item>
            </ListGroup>
            </Col>   
            <Col sm={8}>
            <Tab.Content>
                <Tab.Pane eventKey="#link1">
                <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                <Profile />
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    )
};

export default ResultList;