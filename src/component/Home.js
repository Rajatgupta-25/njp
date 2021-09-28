import React from 'react';
import Leaders from './Leader';
import Navbar from './Navbar';
import BackgroundSlider from 'react-background-slider';
import Images from './Images';
import Highlights from './Highlight';
import Map from './Map';
import Abouts from './About';
import Join from './JoinSection';

export default function Home(){
    return (
        <>
            <BackgroundSlider  images={[Images.image1, Images.image2, Images.image3, Images.image4]} duration={8} transition={2} />
            <Navbar/>
            <Leaders/>
            <Highlights/>
            <Map/>
            <Abouts/>
            <Join/>
        </>
    );
}