import React from 'react';
import NavBar from './Navbar';
import '../css/adiAbout.css';
import FooterSection from './Footer';

export default function AdiShankaracharya() {
    return (
        <>
            <div className="adiBack">
                <NavBar/>
                <div className="container-fluid contentAboutAdi text-left" style={{paddingBottom: '40px'}}>
                    <div className="row">
                        <div className="col-5 ml-5">
                            <p style={{marginLeft: '70px'}}><span style={{fontSize: '35px'}}>A</span>round 507 B.C. there descended on the sacred, deeply adorable soil of this <i>holy land</i> a personality extraordinary who by the sheer force of his <b>matchless erudition</b>, <b>enlightened the whole world</b>. He was none other than <b><i>Acharya Adi Shankara</i></b>, a very embodiment of <b>Lord Shiva</b>, tenth in the line of Guru traceable back to <b>Sriman Narayana</b> himself. He had dispelled all the dark forces that were hitting hard at the very foundation of <b><i>Sanatana Dharma</i></b> and flew the banner of Sanatana Dharma, thus establishing its invulnerability once for all. All this he accomplished solely by his all-too-rare spiritual wisdom, luster and strength, in short, his spiritual process.</p>
                        </div>
                        <div className="col-5 mt-5 ml-5">
                            <p className="leftHeading ml-5"><i>"The world, like a dream full of attachments and aversions seems reel until the awaking."</i></p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-5 ml-5">
                            <img style={{marginLeft: '70px'}} src="https://3.bp.blogspot.com/-Nv8NYFZuYas/WtlIqslE0cI/AAAAAAAAUTg/8EZFbr6_K50bthomcrmdqOGySExP9x9RACEwYBhgL/w1200-h630-p-k-no-nu/adi-shankara.jpg" width="500px" height="380px"/>
                        </div>
                        <div className="col-5 ml-5">
                            <p>His holiness <b>Adi Shankaracharya</b> was born in <b><i>Kaladi villege of Kerala</i></b>. His father’s name was <b>Shivaguru</b> and mother’s name was <b>Sati Aryamba</b>. He was a <i>Nambudaripad Brahmin</i> by cast. He was born on <b>Yudhisthir Sambat 2631 in 507 B.C. on Vaishakha Sukla Panchami on Sunday</b>. His thread ceremony took place at the age of 5 years. Taking his mother’s blessings, he left home to take a life of Sanyasa, initiated by Shree Govindapadacharya on the auspicious day in the <i>Kartik month on Devothana Ekadashi</i>. From the age of 5 to 8 years, <b>Acharya Shankara</b> learnt the <b><i>Vedas, Vedanga, Dharma Shastra, Purana, Itihasa and Budhagama etc</i></b>. According to Sanatana Dharma and Shiva Purana, Hindus call Adi Shankaracharya as reincarnation of <b>Lord Shiva</b>. According to Adi Shankaracharya philosophy all the four Peeth’s Acharya are known as Shankaracharya.</p>
                            <p>Acharya Shankara within a short span of sixteen years re-established Sanatana Dharma after overcoming not only Budhism and other directionless religions. His holy body left in demise at the age of <b>32 years</b> in the year <b>2663 says 475 B.C. on the holy day of Kartika Poornima</b>.</p>
                        </div>
                    </div>
                </div>
                <FooterSection/>
            </div>
        </>
    );
}