import React from "react";
import {Row, Stack, Image} from 'react-bootstrap';
import Logo from "../assets/img/2_vaquitas.jpg";
import {SiHappycow} from 'react-icons/si';
import {GoLocation} from 'react-icons/go';


const ResultItem = () =>{
    return (
        <Row>
            <Stack gap={4} direction = "horizontal">
                <Image src = {Logo} width="60px" height="60px" roundedCircle div className="bg-light border"/>
                <div>
                <Stack gap={3} direction = "horizontal">
                    <SiHappycow /> Id: VLL-01
                    </Stack>    
                    <Stack gap={3} direction = "horizontal">
                    <GoLocation /> Villa de Leyva
                    </Stack>
                </div>

            </Stack>
        </Row>
    )
};

export default ResultItem;