import React, {useState} from 'react';
import Images from './Images';
import '../css/leader.css';
import "animate.css";

export default function Leaders() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};
  
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-1 mt-5">
                      <p className="fa fa-facebook-f p-2 icon_link icon_link_fb animate__animated animate__fadeInLeft animate__delay-1s"></p>
                      <br/>
                      <p className="fa fa-twitter p-2 mt-2 icon_link icon_link_twitter animate__animated animate__fadeInLeft animate__delay-2s"></p><br/>
                      <p className="fa fa-instagram p-2 mt-2 icon_link icon_link_instagram animate__animated animate__fadeInLeft animate__delay-3s"></p><br/>
                      <p className="fa fa-youtube-play p-2 mt-2 icon_link icon_link_youtube animate__animated animate__fadeInLeft animate__delay-4s"></p>
                    </div>
                    {/* <div className="col-3 mt-4">
                        <img className="leader_image" src={Images.leader} alt="Party Leader"/>
                    </div> */}
                    {/* <div className="col-6 mt-5 text-right">
                    <div className="ml-4 mt-4"> 
                          <h5 className="message_leader">Leader's<br/> Message</h5>
                        </div>
                    </div> */}
                    <div className="col-9"></div>
                    <div className="col-2 text-right">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-12">
                            <button className="btn border side_link animate__animated animate__fadeInRight animate__delay-2s"><span className="fa fa-address-card-o fa-2x"></span><br/>Become a<br/> Member</button>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-12">
                            <button className="btn border side_link animate__animated animate__fadeInRight animate__delay-3s"><span className="fas fa-award fa-2x"></span><br/>Join As<br/> Volunteer</button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 mt-4">
                            <button className="btn border side_link animate__animated animate__fadeInRight animate__delay-4s"><span className="fas fa-money-bill-alt fa-2x"></span><br/>Donation</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
}