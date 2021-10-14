import React from 'react';
import { Link } from 'react-router-dom';
import '../css/menu.css';

export default function Menu() {
    return (
        <>
            <div className="container-fluid text-left footer-area">
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid text-left">
                            <div className="row">
                                <div className="col-2 ml-5">
                                <Link to="/">
                                        <span className="mt-3 backArrow fa fa-arrow-circle-left fa-2x"></span>
                                    </Link>
                                    <p className="partyHeadingMenu">ABOUT PARTY</p>
                                    <div className="about">
                                        <p>Our Philosophy</p>
                                        <p>Integral Humanism</p>
                                        <p>Development of NJP</p>
                                        <p>Antyodaya</p>
                                    </div>
                                    <hr className=" partition"/>
                                    <p className="mt-3 document">DOCUMENTS</p>
                                    <div className="about">
                                        <p>Goverdhan Peeth</p>
                                        <Link to="/visions" className="link">
                                        <p>Visions</p>
                                        </Link>
                                        <p>Manifesto</p>
                                    </div>
                                    <hr className=" partition"/>
                                    <div className="about">
                                        <p style={{fontWeight: '700'}}>MAIN OFFICE</p>
                                    </div>
                                    <hr className="partition"/>
                                    <div className="about">
                                        <p style={{fontWeight: '700'}}>SOCIAL STREAMS</p>
                                    </div>
                                    <hr className="partition"/>
                                    <p className="mt-3 document">NJP IN PARLIAMENT</p>
                                    <div className="about">
                                        <p>Lok Sabha Members</p>
                                        <p>Cabinet</p>
                                        <p>Member of Legislative Assembly</p>
                                    </div>
                                </div>
                                <div className="col-1"/>
                                <div className="col-2">
                                    <p className="leaderMenu">LEADERSHIP</p>
                                    <div className="about">
                                        <p>Puri Shankaracharya</p>
                                        <p>Adi Shankaracharya</p>
                                        <p>Swami Nischalananda Saraswati</p>
                                        <p>Bharati Krishna Teerthaji</p>
                                    </div>
                                    <hr className="partition"/>
                                    <div className="about">
                                        <p style={{fontWeight: '700'}}>MEMBERS</p>
                                    </div>
                                    <hr className="partition"/>
                                    <div className="about">
                                        <Link className="link" to="/visions">
                                        <p style={{fontWeight: '700'}}>VISION</p>
                                        </Link>
                                    </div>
                                    <hr className="partition"/>
                                    <p className="connectWithUs">Connect With Us</p>
                                    <p className="connect mt-4">
                                        <a><span className="fab fa-facebook fb"></span></a> 
                                        <a><span className="ml-4 fab fa-instagram insta"></span></a>
                                        <a><span className="ml-4 fab fa-twitter twitter"></span></a> 
                                        <a><span className="ml-4 fab fa-youtube youtube"></span></a></p>
                                </div>
                                <div className="col-1"/>
                                <div className="col-2">
                                    <p className="leaderMenu">MEDIA RESOURCES</p>
                                    <div className="about">
                                        <p>Press Release</p>
                                        <p>Speeches</p>
                                        <p>Articles</p>
                                        <p>Debates</p>
                                        <p>Photo Gallery</p>
                                        <p>Video Gallery</p>
                                    </div>
                                    <hr className="partition"/>
                                    <div className="about">
                                        <p style={{fontWeight: '700'}}>UPCOMING EVENTS</p>
                                    </div>
                                    <hr className="partition"/>
                                    <div className="about">
                                        <p style={{fontWeight: '700'}}>e-Library</p>
                                    </div>
                                    <hr className="partition"/>
                                    <button className="btn mt-2 p-2 aboutGurudev">GURUDEV</button>
                                    <button className="btn mt-3 p-2 students">STUDENTS</button>
                                    <button className="btn p-2 njplive">NJP LIVE</button>
                                </div>
                                <div className="col-2 ml-5">
                                    <p className="leaderMenu ml-5">CORE ISSUES</p>
                                    <div className="about ml-5">
                                        <p>Agriculture & Logistics</p>
                                        <p>Education</p>
                                        <p>Energy Efficiency</p>
                                        <p>Environment</p>
                                        <p>Healthcare</p>
                                        <p>Women Centric Issues</p>
                                    </div>
                                    <hr className="partition ml-5"/>
                                    <button className="btn mt-2 p-2 ml-5 joinVolunteerAbout">JOIN AS VOLUNTEER</button>
                                    <button className="btn mt-3 p-2 ml-5 joinMemberAbout">JOIN AS MEMBER</button>
                                    <button className="btn mt-3 p-2 ml-5 makeDonationAbout">MAKE A DONATION</button>
                                    <button className="btn mt-3 p-2 ml-5 aboutnjp">ABOUT NJP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}