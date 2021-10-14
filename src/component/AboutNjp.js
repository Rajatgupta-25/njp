import React from 'react';
import NavBar from './Navbar';
import '../css/aboutNjp.css';
import Images from './Images';
import FooterSection from './Footer';

export default function AboutNJP() {
    return (
        <>
            <NavBar/>
            <div className="container-fluid mt-5 pb-5">
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-5 text-left ">
                        <p className="aboutNjpContent">Bharat is not just a nation ,a culture, but it is denoation of sanatan culture, but now since our sanatan culture has been attacked and targeted by all we sanatanis have to rise.
 today no organisationor party is working  towards the betterment of sanatanis, so here  we are, nrasingh jan party. The belief and ideology of the the party is for the dharma, till its last breath.
 Even , when politician  have forgot to take stand, for the dharma, to save the nation in the present scenario, we take stand of hindus. We are crystal clear in our vision of bharat,
 we want to re-establish bharat as per the orignal culture , what it was with the power of vedas and shastras, with the understadning of culture and knoledge of our vidyas, parllley working with the advancement of the latest technology.
 Certainly till this day the glory of our ancestors ios visible in the kinds of work , and knowledge that they have transferred to us.
</p>
                    </div>
                    <div className="col-5 text-left">
                    <div className="bg-image hover-zoom">
  <img src={Images.aboutNjp} className="ml-4 animate__animated animate__backInRight aboutShadow" width="550px" height="290px" />
</div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-1"/>
                    <div className="col-5 mt-5 text-left">
                        <img src="https://businessecon.org/wp-content/uploads/Principles-compass-ORIGINAL.jpg" width="550px" height="550px"/>
                    </div>
                    <div className="col-5 mt-5 text-left">
                        <p className="aboutNjpContent">Being sanatani, and bharatis, it is our right to think about our dharma and nation, from the known history of millions of years, even when we look back to mahabharat, when gita was said being said by
 the supreme lord of all known, lord krishna himself , which was just 5000 years back , when no other group of thoughts existed , since sanatan is only dharma , which existed , and will exisits.

 the word  " sanatan" refers to one which is the only supreme truth, which existed , which is existing , and will continue to exist, there is no start and end to it.

 Nrasingh jan party , believes , in growth of all sects of bharatis , all caste ,creed , gender, or background, we believe , we are first  sanatanis , we have different responsibilities as different varnas in society ,
 but at  the same time we are descendants of krishna . We believe  the society is known from it's ,economic (arthik ) as well as  behavioural humanitarian (mamas) growth, which comes from spiritual( adhyatmic) growth .
 
 we believe , we can follow dharma , and then only we can dominate all the domains, from technology to living scinece, we have explored enough of western thoughts , philosophy and science , which ended in nothing more pathetic ,
 than disaster, now the time has come for rise of sanatanis,  the hindus, we all have sufficient grace of krishna, now the time has come to embrace the thoughts of  dharma  and give our country its older glory back.

 ceratinly , we have been blessed with a young and dynamic working youth force across the country , the party wish to do " SATTA SHODHAN" , by means of political power . We respect all, we work for development of all, through coming back to sanatan and our culture.
 without nrasingh jan party comming to power we can not expect the vesion of the HINDU RASTRA to come true withe the blessing of jagat guru puri sankaracharya we believe , We  are just the vanar shena of lord Ram on earth. 

</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-1"/>
                    <div className="col-5 text-left">
                        <p className="abotNjpContent"> We are here to serve the people , to listen each to their pain  , to make them believe , that politics , honesty and service can go hand in hand with each other, some of our goals are:
   <br/><br/>
   1.  <span className="ml-2">To make India hindu rashtra , to save sanatan culture as well.</span>
   <br/>
   2. <span className="ml-2">To give only 4 math of shankracharya, supreme power and place for sanatan dharma decision making power, and no one else can be called or taken to be shankracharya.</span>
   <br/>
   3. <span className="ml-2">To apply " hindu diety insult law ".</span> 
  <br/>
  4. <span className="ml-2">We wish to  bring vedic eductaion back to school , complete demolition of western and anti national school of thoughts.</span>
  <br/>
  5. <span className="ml-2">Rise of sanatan vidyas , from martail arts ,defence , and warfare, making shatriye dharm mandatory for 3 years for all men and women.</span>
  <br/>
  6. <span className="ml-2">Complete ban on cow slaughter and  cow meat consumption without any conditions  and compromises, strict laws  of cow slaughter with death penalty.</span> 
  <br/>
  7. <span className="ml-2">We believe making villages better than cities , a place of fresh air ,and ample amount of job opportunities.</span> 
  <br/>
  8. <span className="ml-2">For us farmer is our "Ann data " our devta , he should be given full support financialy and mentally through our policies.</span>
  <br/>
  9. <span className="ml-2">Free all temples from government control.</span>
  <br/>
  10. <span className="ml-2">Common education policy for all.</span>
  <br/>
  11. <span className="ml-2">Uniform civil court.</span></p>
                    </div>
                    <div className="col-6 text-left">
            <a href="https://www.facebook.com/NJP4INDIA/" target="sm" className="fa fa-facebook fbSocial2"></a>
<a href="https://twitter.com/NJP4INDIA?s=09" target="sm" className="fa fa-twitter twitterSocial2"></a>
<a href="https://www.instagram.com/invites/contact/?i=1he2z86dlkn77&utm_content=ml5kafs" target="sm" className="fa fa-instagram instaSocial2"></a>

<iframe name="sm" className="mt-4 ml-3 social" src="https://www.facebook.com/NJP4INDIA/" allowTransparency="true" allow="encrypted-media" style={{"height":"540px", "width":"550px"}} title="Iframe Example"></iframe>


                    </div>
                </div>
            </div>
            <FooterSection/>

        </>
    );
}