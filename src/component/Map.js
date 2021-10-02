import React from 'react';
import '../css/map.css';
import Images from './Images';

export default function Map() {
    return (
        <>
            <div className="container-fluid map-back mt-5" >
                <div className="row text-left " >
                    <div className="col-6 mt-1 backContent">
                        <div className="container content">
                            <div className="row">
                                <div className="col-12">
                                    <p className="upName">UTTAR<br/> PRADESH</p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="col-4 ml-2">
                                    <p className="districtName">District</p>
                                    <p className="numberDistrict">75</p>
                                </div>
                                <div className="'col-4">
                                    <p className="districtName">Total Seats</p>
                                    <p className="numberDistrict">403</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6  backMap mt-1">
                        <img className="ml-5" src={Images.map} width="650px" height="620px" alt="map" />
                    </div>
                </div>
            </div>
            
        </>
    );
}
