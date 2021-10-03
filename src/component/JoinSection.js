import React from 'react';
import '../css/joinJourney.css';
import { Link } from 'react-router-dom';

export default function Join() {
    return (
        <>
            <div className="container-fluid text-left" style={{paddingBottom: '40px'}}>
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-4">
                    <sup className="fa fa-quote-left quote"></sup><p className="joinHead"> <span className="join_heading">JOIN THE <span className="bg-underline">JOURNEY</span></span></p><span className="fa fa-quote-right quote2"></span>
                    <p className="change animate__animated animate__fadeIn animate__duration-2s">Be the change you want to see.</p>
                    <p className="text-muted bold">NJP is devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat’ and witness the rise of New India under the charismatic leadership of Shri Puri Shankrachrya.</p>
                    </div>
                    <div className="col-6 imageSection">
                        <img className="ml-4 animate__animated animate__fadeInRight" src="https://pbs.twimg.com/media/DrD35qkWoAAzuwg.jpg" width="700px" height="350px"/>
                        <Link to="/join">
                        <button className="mt-5 ml-5 animate__animated animate__fadeInDown animate__delay-1s btn joinVolunteer">JOIN AS<br/> VOLUNTEER</button>
                        </Link>
                        <Link to="/join">
                        <button className="mt-5 ml-5 animate__animated animate__fadeInUp animate__delay-2s btn joinMember">JOIN AS<br/> MEMBER</button>
                        </Link>
                        <button className="mt-5 ml-5 animate__animated animate__fadeInDown animate__delay-3s btn makeDonation">MAKE A<br/> DONATION</button>
                    </div>
                </div>
            </div>
        </>
    );
}