import React from 'react';
import Images from './Images';
import NavBar from './Navbar';
import '../css/latestEvent.css';
import FooterSection from './Footer';

export default function LatestEvents() {
    return (
        <>
            <div className="eventBack">
            <NavBar/>
            <div className="container-fluid mt-5" style={{paddingBottom: '50px'}}>
                <div className="row">
                    <div className="col-6 text-left ml-5">
                        <p className="ml-5 animate__animated animate__flipInY eventHeading">UPCOMING EVENTS</p>
                    <div className="container text-left border ml-5 eventBox">
                            <div className="row">
                                
                                <div className="col-4 mt-3">
                                    <img className="image_event" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjkRbzyuMGBu5FybWhh0O_5kGUJWEdw_YiA&usqp=CAU" width="180px" height="150px"/>
                                </div>
                                <div className="col-8 mt-4">
                                    <h6>Gujarat Chief Minister, after Narendra Modi fail to live up to his legacy</h6>
                                    <p style={{fontSize: '14px'}}>Unlike Modi, who served in the top office for more than 12 years, both Anandiben Patel and Vijay Rupani quit before their terms could end</p>
                                    <p className="text-muted mutedTextIcon"><span className="fa fa-facebook-f fb">  </span><span className="ml-4 fa fa-twitter twitter">  </span><span className="ml-4 fa fa-share-alt share"></span></p>
                                </div>
                                
                            </div>
                            <div className="row mt-3">
                                
                                <div className="col-4 mt-3">
                                    <img className="image_event" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjkRbzyuMGBu5FybWhh0O_5kGUJWEdw_YiA&usqp=CAU" width="180px" height="150px"/>
                                </div>
                                <div className="col-8 mt-4">
                                    <h6>Gujarat Chief Minister, after Narendra Modi fail to live up to his legacy</h6>
                                    <p style={{fontSize: '14px'}}>Unlike Modi, who served in the top office for more than 12 years, both Anandiben Patel and Vijay Rupani quit before their terms could end</p>
                                    <p className="text-muted mutedTextIcon"><span className="fa fa-facebook-f fb">  </span><span className="ml-4 fa fa-twitter twitter">  </span><span className="ml-4 fa fa-share-alt share"></span></p>
                                </div>
                                
                            </div>
                            <div className="row mt-3">
                                <div className="col-4 mt-3">
                                    <img className="image_event" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjkRbzyuMGBu5FybWhh0O_5kGUJWEdw_YiA&usqp=CAU" width="180px" height="150px"/>
                                </div>
                                <div className="col-8 mt-4">
                                    <h6>Gujarat Chief Minister, after Narendra Modi fail to live up to his legacy</h6>
                                    <p style={{fontSize: '14px'}}>Unlike Modi, who served in the top office for more than 12 years, both Anandiben Patel and Vijay Rupani quit before their terms could end</p>
                                    <p className="text-muted mutedTextIcon"><span className="fa fa-facebook-f fb">  </span><span className="ml-4 fa fa-twitter twitter">  </span><span className="ml-4 fa fa-share-alt share"></span></p>
                                </div>
                                
                            </div>
                            <div className="row mt-3">
                                <div className="col-4 mt-3">
                                    <img className="image_event" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjkRbzyuMGBu5FybWhh0O_5kGUJWEdw_YiA&usqp=CAU" width="180px" height="150px"/>
                                </div>
                                <div className="col-8 mt-4">
                                    <h6>Gujarat Chief Minister, after Narendra Modi fail to live up to his legacy</h6>
                                    <p style={{fontSize: '14px'}}>Unlike Modi, who served in the top office for more than 12 years, both Anandiben Patel and Vijay Rupani quit before their terms could end</p>
                                    <p className="text-muted mutedTextIcon"><span className="fa fa-facebook-f fb">  </span><span className="ml-4 fa fa-twitter twitter">  </span><span className="ml-4 fa fa-share-alt share"></span></p>
                                </div>
                                
                            </div>
                            <div className="row mt-3">
                                <div className="col-4 mt-3">
                                    <img className="image_event" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjkRbzyuMGBu5FybWhh0O_5kGUJWEdw_YiA&usqp=CAU" width="180px" height="150px"/>
                                </div>
                                <div className="col-8 mt-4">
                                    <h6>Gujarat Chief Minister, after Narendra Modi fail to live up to his legacy</h6>
                                    <p style={{fontSize: '14px'}}>Unlike Modi, who served in the top office for more than 12 years, both Anandiben Patel and Vijay Rupani quit before their terms could end</p>
                                    <p className="text-muted mutedTextIcon"><span className="fa fa-facebook-f fb">  </span><span className="ml-4 fa fa-twitter twitter">  </span><span className="ml-4 fa fa-share-alt share"></span></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-5 ml-5 ">
                        <div className="container mt-4 text-left">
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-9 ml-4 suggestBox">
                                <img className="mt-3" src={Images.topImage} width="420px" height="260px"/>
                                <img className="mt-3" src="https://pbs.twimg.com/media/D4alQmFWsAE7n7E.jpg" width="420px" height="260px"/>
                                <img className="mt-3" src="https://new-img.patrika.com/upload/images/2016/06/29/Shankracharya-puri-1467181574_835x547.jpg" width="420px" height="260px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 ml-5">
                    <div className="col-11 mt-5 text-left ml-5">
                        <p className="latest">LATEST EVENTS</p>
                        <hr style={{backgroundColor: 'white'}}/>
                    </div>
                </div>
                <div className="row mt-5 ml-5" >
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 ml-5" >
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 ml-5">
                    <div className="col-11 mt-5 text-left ml-5">
                        <p className="latest">PAST EVENTS</p>
                        <hr style={{backgroundColor: 'white'}}/>
                    </div>
                </div>
                <div className="row mt-5 ml-5" >
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 ml-5" >
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ml-5">
                        <div className="container-fluid text-left">
                            <div className="row">
                            <div className="col-11 border boxShow ml-5">
                                <img className="mt-2" src="https://pbs.twimg.com/media/D-UeHyNUYAAMrZ1.jpg" width="280px" height="150px"/>
                                <p className="boxContent mt-2">Puri Shankaracharya ji's 76th Birthday Celebrations, Dhamtari, Chhattisgarh.</p>
                                <p className="text-muted  mutedText mt-3"><span className="fa fa-clock-o"></span> 19 Jun, 2020 <span className="eventLinks"><span className=" ml-5 fa fa-facebook-f fb">  </span><span className="ml-2 fa fa-twitter twitter">  </span><span className="ml-2 fa fa-share-alt share"></span></span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection/>
            </div>
        </>
    );
}