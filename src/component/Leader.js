import React, {useState} from 'react';
import Images from './Images';
import '../css/leader.css';
import "animate.css";
import { Link } from 'react-router-dom';

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
                      <a href="https://www.facebook.com/NJP4INDIA/" className="fa fa-facebook-f p-2 icon_link icon_link_fb animate__animated animate__fadeInLeft animate__delay-1s"></a>
                      <br/>
                      <a href="https://twitter.com/NJP4INDIA?s=09" className="fa fa-twitter p-2 mt-3 icon_link icon_link_twitter animate__animated animate__fadeInLeft animate__delay-2s"></a><br/>
                      <a href="https://www.instagram.com/invites/contact/?i=1he2z86dlkn77&utm_content=ml5kafs" className="fa fa-instagram p-2 mt-3 icon_link icon_link_instagram animate__animated animate__fadeInLeft animate__delay-3s"></a><br/>
                      <a className="fa fa-youtube-play p-2 mt-3 icon_link icon_link_youtube animate__animated animate__fadeInLeft animate__delay-4s"></a>
                    </div>
                    <div className="col-9"></div>
                    <div className="col-2 text-right">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-12">
                            <Link to="/join">
                            <button className=" border side_link animate__animated animate__fadeInRight animate__delay-2s"><span className="fa fa-address-card-o fa-2x"></span><br/>Become a<br/> Member</button>
                            </Link>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-12">
                            <Link to="/join">
                            <button className="btn border side_link animate__animated animate__fadeInRight animate__delay-3s" onClick="/join"><span className="fas fa-award fa-2x"></span><br/>Join As<br/> Volunteer</button>
                            </Link>
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