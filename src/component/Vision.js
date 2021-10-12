import React from 'react';
import NavBar from './Navbar';
import '../css/vision.css';
import FooterSection from './Footer';

export default function Visions() {
    
    return (
        <>
            <NavBar/>
          <div className="container-fluid text-left" style={{paddingBottom: '40px'}}>
                <div className="row backColor">
                    <div className="col-3 ml-5 mt-5">
                        <p className="head mt-5 animate__animated animate__fadeInLeft">Our Visions</p>
                        <p className="mt-3 text-muted">We envision a world where democracy and freedom prevail, with dignity for
all. Especially focus on making Hindu Rastra , Gow Seva , given right to
Hindus , awareness of our Dharma , Values of our Dharmik granths and
Shastra etc.</p>
                    </div>    
                    <div className="col-4 mt-5 ml-5">
                    <p className="ml-5 mt-4 visionTopText animate__animated animate__fadeInDown ">Dharam ki jai ho, Adharm ka naash ho</p>
<p className="ml-5 visionTopText animate__animated animate__fadeInDown">Praniyo mein sadbhavna ho, Vishav ka kalyan ho</p>
<p className="ml-5 visionTopText animate__animated animate__fadeInDown animate__delay-1s">Gau mata ki jai, Sanatan dharm ki jai</p>
<p className="ml-5 visionTopText animate__animated animate__fadeInDown animate__delay-1s">Gange mata ki jai, Gaytri mata ki jai</p>
<p className="ml-5 visionTopText animate__animated animate__fadeInDown animate__delay-2s">Apne apne guru maharaj ki jai, Mata pita ki jai</p>
<p className="ml-5 visionTopText animate__animated animate__fadeInDown animate__delay-2s">Jai jai veer bajrange, Har har mahadev</p>
                    </div>
                    <div className="col-4 ml-4 back"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p className="mission animate__animated animate__backInUp animate__delay-1s">MISSION</p>
                        <p className="text-muted">We work in partnership around the world to strengthen and safeguard
<br/>democratic institutions, processes, norms and values to secure a better
quality of life for all.</p>
                    </div>
                </div>
                <div className="row mt-5 " >
                <div className="col-1"/>
                <div className="col-4 mt-3">
                    <img className="value" src="https://cdn.labmanager.com/assets/articleNo/8607/iImg/20210/7d28be18-ce77-44a1-89e2-1d0dfd981e8c-nov18-2016-mt-corevalues-640x360.jpg" width="470px" height="450px"/>
                </div>
                <div className="col-6 mt-4">
                    <p>NJP believes there is no single democratic model, but that certain core values
are essential to all democracies, including-</p>
                    <p><b style={{color: 'steelblue'}}>Acountability: </b> Leaders are responsive to the public interest and
people are able to hold their leaders responsible for their conduct
through institutionalized checks and balances including regular,
inclusive elections that are competitive and credibly reflect popular
will.</p>
                    <p><b style={{color: 'steelblue'}}>Transperency: </b> Political activity is open and subject to public
oversight.</p>
                    <p><b style={{color: 'steelblue'}}>Equity: </b> All people are treated justly and in accordance with their
diverse conditions.</p>
                    <p><b style={{color: 'steelblue'}}>Inclusion: </b> Diverse voices and views are sought, respected and
incorporated.</p>
                    <p><b style={{color: 'steelblue'}}>Pluralism: </b> Free, open, and peaceful competition of ideas is universally
embraced.</p>
                    <p><b style={{color: 'steelblue'}}>Civic Participation: </b>  People are able to exercise their political and
civic rights and responsibilities freely, and do so actively and
respectfully.</p>
                    <p><b style={{color: 'steelblue'}}>Rule of Law: </b> Laws promulgated by duly elected representatives are
consistent with universal human rights principles, adjudicated
independently and enforced equally.</p>
                </div>
                </div>  
          </div>  
          <FooterSection/>
        </>
    );
}