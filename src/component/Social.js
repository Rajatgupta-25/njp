import React from 'react';
import '../css/socialStream.css';

export default function SocialStream() {
    return (
        <>
            <div className="container-fluid socialBack">
                <div className="row mt-5">
                <div className="col-4 mt-5 text-left">

<section className=" ml-4">
<div className="social-buttons">
  
    <a href="https://en.wikipedia.org/wiki/Adi_Shankara" target="tew"><button class= "btn eventButton">Events</button></a>
    <a href="https://en.wikipedia.org/wiki/Adi_Shankara" target="tew"><button class= "btn debateButton">Debates</button></a>
    
    </div>

<iframe name= "tew" src="https://www.ndtv.com/india-news/amarinder-singh-tweets-after-meeting-amit-shah-urged-him-to-resolve-farmer-crisis-with-repeal-of-laws-2558156#pfrom=home-ndtv_topscroll" style={{"height":"552px", "width":"450px"}} title="Iframe Example"></iframe>
</section>
</div>                        
<div className="col-4 mt-5">
<section className = "for">

<iframe  src="https://en.wikipedia.org/wiki/Adi_Shankara" width="440" height="255"></iframe>
</section>
<section className="who mt-3">

<iframe width="440" height="315" src="https://www.youtube.com/embed/Iimyx-eAuSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
</div>

<div className="col-4 mt-5 text-left">
            <section className = "if">
            <a href="https://en.wikipedia.org/wiki/Adi_Shankara" target="sm" className="fa fa-facebook fbSocial"></a>
<a href="https://en.wikipedia.org/wiki/Adi_Shankara" target="sm" className="fa fa-twitter twitterSocial"></a>
<a href="https://en.wikipedia.org/wiki/Adi_Shankara" target="sm" className="fa fa-instagram instaSocial"></a>

<iframe name="sm" className="social" src="https://www.ndtv.com/india-news/amarinder-singh-tweets-after-meeting-amit-shah-urged-him-to-resolve-farmer-crisis-with-repeal-of-laws-2558156#pfrom=home-ndtv_topscroll" style={{"height":"580px", "width":"450px"}} title="Iframe Example"></iframe>


</section>
</div>
</div>
</div>
        </>
    );
}