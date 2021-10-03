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
                            <img className="memberImage" src={Images.vijaynderSingh} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mr. Chaudhary Vijender Singh Verma</h6>
                            <p className="imageContent text-muted">Former Governor of <b>Punjab, Himachal Pradesh, Haryana and Chandigarh</b> </p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.dineshKumarGupta} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mr. Dinesh Kumar Gupta</h6>
                            <p className="imageContent text-muted">General Secratary of <b>Delhi</b></p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.rajniPareshar} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mrs. Rajni Pareshar</h6>
                            <p className="imageContent text-muted">Minister Of <b>Uttar Pradesh</b></p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3 ml-4 mt-5">
                            <img className="memberImage" src={Images.vinodUpadhyay} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mr. Vinod Upadhyay</h6>
                            <p className="imageContent text-muted">Vice President of <b>Uttar Pradesh</b> </p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.abhishekBhatt} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mr. Abhishek Kumar Bhatt</h6>
                            <p className="imageContent text-muted">Co-Organization Secratary of <b>Uttarakhand</b></p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.vishalKrishna} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Bhagwatacharya Vishal Krishna Sharma</h6>
                            <p className="imageContent text-muted">Vice President of <b>Uttar Pradesh</b> </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3 ml-4 mt-5">
                            <img className="memberImage" src={Images.ashwiniKumarSharma} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mr. Ashwini Kumar Sharma</h6>
                            <p className="imageContent text-muted">Vice President of <b>Uttar Pradesh</b> </p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.deepakSharma} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mr. Deepak Sharma</h6>
                            <p className="imageContent text-muted">Co-Organization Secratary of <b>Uttarakhand</b></p>
                        </div>
                        <div className="col-1"/>
                        <div className="col-3 mt-5">
                            <img className="memberImage" src={Images.hireshSingh} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mr. Hiresh Singh</h6>
                            <p className="imageContent text-muted">Vice President of <b>Uttar Pradesh</b> </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3 ml-4 mt-5">
                            <img className="memberImage" src={Images.varunShaurya} width="220px" height="200px"/>
                            <h6 className="ml-2 mt-3">Mr. Varun Shaurya</h6>
                            <p className="imageContent text-muted">General Secratary Organization </p>
                        </div>
                        
                    </div>
                </div>
                <FooterSection/>
            </div>
            
        </>
    );
}