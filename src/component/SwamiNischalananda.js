import React from 'react';
import FooterSection from './Footer';
import NavBar from './Navbar';

export default function AboutSwami() {
    return (
        <>
            <NavBar/>
            <div className="container-fluid mt-3" style={{paddingBottom: '40px'}}>
                <div className="row">
                    <div className="col-6">
                        <img className="ml-2 animate__animated animate__zoomIn" src="https://vedicmathsindia.org/wp-content/uploads/2018/06/shankaracharaya-narendra-modi.jpg" style={{boxShadow: '4px 4px 10px grey'}} width="650px" height="460px"/>
                    </div>
                    <div className="col-6  text-left">
                        <p><b>Bhagavatpada Adi Shankaracharya</b> established the <b>Govardhana Peetha at Jagannath Puri</b> on the <b>Kartika Shukla Panchami of Yudhishtira Saka Samvat 2651 or 486 BC</b>. The Puri Peeth is related to <i>Rig Veda</i>. Its main preaching theme or Mahavakya is <b>प्रज्ञानं ब्रम्ह</b>. There’s an unbroken chain of Shankaracharyas from 2489 years. One hundred and forty four Shankaracharyas have already graced the Peeth already. The Peeth of eastern direction at Puri is now graced by <b>Jagadguru Shankaracharya Nischalananda Saraswati-ji Maharaj</b> as its <i>145th Sankaracharya</i>. He was appointed to this Peeth as its <b>head</b> by the <b>Shankaracharya Swami Niranjanadeva Tirtha Maharaj</b> on <i>9th February 1992</i> (Vikram Samvat 2048).</p>
                        <p>The current Shankaracharya of Puri Peeth, Swami Sri Nischalananda Saraswati-ji Maharaj was born on 30th June 1943 in a village called Haripur Bakshi Tol in the Madhubani district of Bihar. His father was Pandit Sri Lalvamshi Jha and his mother was Smt Gita Devi. His father was a high-ranking scholar of Sanskrit in the Mithila tradition and was a court vidwan of the then king of Mithila (Darbhanga Kingdom). The Swami’s previous name was Nilambar, given by his elder brother Pandit Sridev Jha. In his childhood Nilambar was bestowed with amazing character and was very studious and intelligent as well. His early education took place in his village Kaluahi and Loha and in Delhi later. At age 17, he left his home and started in pursuit of his life journey. In one of the seminars involving all the branches of Vedas, Dharma Samrat (emperor of dharma), Karpatri-ji Maharaj and the then Shankaracharya of Jyotish Peeth Swami Sri Krishnabodhashram-ji Maharaj were present.</p>
                        
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 ml-5 text-left">
                    <p>On this occasion, he accepted in his mind the venerable Karpatri-ji Maharaj as his spiritual master. He was given the name Dhruvachaitanya by Swami Sri Naradanand Saraswati of Naimisharanya. He studied the Vedas and various branches related to Vedas very seriously at various places like Kashi, Vrindavan, Naimisharanya, Badrikashram, Rishikesh, Haridwar, Puri, Sringeri etc. Dhruvachaitanya fought hard against atrocities on cows considered a symbol of faith among Hindus while participating actively in Dharma Samrat Karpatriji Maharaj’s agitation for cow protection. He was kept in the Tihar jail from 9th November 1966 for 52 days for advocating cow protection. He accepted the sanyasa order from the lotus palms of Swami Sri Karpatriji Maharaj on Vaisakha Krishna Ekadashi of Samvat 2031, 18th April 1974 in Haridwar. Swami Sri Karpatriji Maharaj initiated him into the sanyasa order under the new name Nischalananda Saraswati. From 1976 to 1981, he scrupulously studied the works of Prasthanatrayi, Panchadasi, Vedanta Paribhasha, Nyaya Mimamsa, Tantra and Advaita Siddhi from his Gurudev. From 1982 to 1987, he studied Khandanakhanda Khadya and the Yajur Veda with special emphasis from the then Shankaracharya of Puri Peetha Swami Sri Niranjanadev Tirtha ji Maharaj. He spent five Chaturmasas with him. Impressed by Swami Sri Nischalananda Saraswati-ji’s talents, brilliance, dedication towards sanatana dharma and utmost faith in his gurus, Shankaracharya Swami Sri Niranjanadev Tirtha ji Maharaj anointed him the 145th Shankaracharya of the Govardhana Peetha at Puri.</p>
                    </div>
                    <div className="col-5 ml-3">
                        <img src="https://govardhanpeeth.org/images/2019/03/06/quote-08_english.jpg" width="590px" height="350px"/>
                    </div>
                </div>
            </div>
            <FooterSection/>
        </>
    );
}