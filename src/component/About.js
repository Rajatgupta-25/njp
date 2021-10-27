import React from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css';
import {Container, Row, Col} from 'react-bootstrap';

export default function Abouts() {
    return (
        <>
            <Container fluid className="about_back">
                <Row>
                    <Col xs={6} className="temp"/>
                    <Col xs={6} className="text-left ">
                        <h5 className="about_heading text-center">ABOUT US</h5>
                        <p className="about_content">Bharat is not just a nation ,a culture, but it is denoation of sanatan culture, but now since our sanatan culture has been attacked and targeted by all we sanatanis have to rise.
 today no organisationor party is working  towards the betterment of sanatanis, so here  we are, nrasingh jan party. The belief and ideology of the the party is for the dharma, till its last breath.
 Even , when politician  have forgot to take stand, for the dharma, to save the nation in the present scenario, we take stand of hindus. We are crystal clear in our vision of bharat,
 we want to re-establish bharat as per the orignal culture , what it was with the power of vedas and shastras, with the understadning of culture and knoledge of our vidyas, parllley working with the advancement of the latest technology.
 Certainly till this day the glory of our ancestors ios visible in the kinds of work , and knowledge that they have transferred to us.</p>
                       <Link to="/aboutNjp"><p className="button_padding"><button className="btn readMore">Read more <span className="ml-2 fa fa-angle-double-right"></span></button></p></Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}