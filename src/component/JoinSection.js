import React from 'react';
import '../css/joinJourney.css';
import Images from './Images';

export default function Join() {
    return (
        <>
            <div className="container-fluid text-left">
                <div className="row">
                    <div className="col-12">
                        <h2 className="join_journey">JOIN THE JOURNEY</h2>
                    </div>
                </div>
                <div className="row mt-5 addRow">
                    <div className="col-7 add">
                        <img src={Images.puri} height="550px"/>
                    </div>
                    <div className="col-5">
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-12">
                                    <h2>JOIN THE JOURNEY</h2>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12">
                                    <p>NJP is devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat’ and witness the rise of New India under the charismatic leadership of Puri Shankracharya.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}