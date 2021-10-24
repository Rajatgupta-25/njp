import React from 'react';
import '../css/member.css';
import FooterSection from './Footer';
import Images from './Images';
import NavBar from './Navbar';

export default function Members() {
    return (
        <>
            <div className="memberBack">
                <NavBar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-7 mt-4">
                        <sup className="fa fa-quote-left topquote"></sup><p className="ml-5 topMemberQuote">Real Development and prosperity of both India and World is possible through Sanskrit only.</p><span className="fa fa-quote-right topquote2"></span>
                        </div>
                        <div className="col-4 mt-5">
                            <img className="memberTopImage" src="https://www.hindujagruti.org/hindi/news/out/images/1401896622_Swami_Nishchalanand.jpg" width="350px" height="320px"/>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row mt-5">
                    <div className="col-3 ml-4 mt-5">
                            <img className="memberImage" src={Images.ashwiniKumarSharma} width="240px" height="220px"/>
                            <h6 className="ml-2 mt-3">आश्विनी कुमार शर्मा</h6>
                            <p className="imageContent text-muted">संस्थाप/ राष्ट्रीय अध्यक्ष,नृसिंह जन पार्टी </p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.vishalKrishna} width="240px" height="220px"/>
                            <h6 className="ml-2 mt-3">आचार्य विशाल कृष्ण शर्मा </h6>
                            <p className="imageContent text-muted">राष्ट्रीय उपाध्यक्ष, नृसिंह जन पार्टी </p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.ramPandey} width="240px" height="220px"/>
                            <h6 className="ml-2 mt-3">डॉ. श्री राम पांडेय </h6>
                            <p className="imageContent text-muted"> राष्ट्रीय उपाध्यक्ष, नृसिंह जन पार्टी</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                    <div className="col-3 ml-4 mt-5">
                            <img className="memberImage" src={Images.varunShaurya} width="240px" height="220px"/>
                            <h6 className="ml-2 mt-3">वरुण शौर्य</h6>
                            <p className="imageContent text-muted">राष्ट्रीय महामंत्री संगठन </p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.abhishekBhatt} width="240px" height="220px"/>
                            <h6 className="ml-2 mt-3">अभिषेक भट्ट </h6>
                            <p className="imageContent text-muted">राष्ट्रीय सह महामंत्री संगठन</p>
                        </div>
                        
                    </div>
                    
                </div>
                <FooterSection/>
            </div>
            
        </>
    );
}