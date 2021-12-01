import React from "react";
import {Row, Stack, Image} from 'react-bootstrap';

import Logo from "../assets/img/ganaderia_II.jpg"; 
const Profile = () =>{
    return (
        <Row>
        <Stack gap={4} className="align-items-center">
            <Image src = {Logo} width="150px" height="150px" roundedCircle div className="bg-dark border"/>
            <div>Edad:13 meses<br/>
            Sexo: Macho
            </div>

        </Stack>    
        </Row>
    )
};

export default Profile;