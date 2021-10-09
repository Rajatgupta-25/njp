import React from 'react';
import { Link } from 'react-router-dom';
import '../css/about.css';

export default function Abouts() {
    return (
        <>
            <div className="container-fluid about_back">
                <div className="row">
                    <div className="col-6"/>
                    <div className="col-6 text-left ">
                        <h5 className="about_heading text-center">ABOUT US</h5>
                        <p className="about_content">Around 507 B.C. there descended on the sacred, deeply adorable soil of this holy land a personality extraordinary who by the sheer force of his matchless erudition, enlightened the whole world. He was none other than Acharya Adi Shankara, a very embodiment of Lord Shiva, tenth in the line of Guru traceable back to Sriman Narayana himself. He had dispelled all the dark forces that were hitting hard at the very foundation of Sanatana Dharma and flew the banner of Sanatana Dharma, thus establishing its invulnerability once for all. All this he accomplished solely by his all-too-rare spiritual wisdom, luster and strength, in short, his spiritual process.</p>
                        <Link to="/aboutAdiShankaracharyaJi"><p className="button_padding"><button className="btn readMore">Read more <span className="ml-2 fa fa-angle-double-right"></span></button></p></Link>
                    </div>
                </div>
            </div>
        </>
    );
}