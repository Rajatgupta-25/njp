import React, {Component} from 'react';
import Carousel from 'react-spring-3d-carousel';
import Images from './Images';
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import '../css/highlight.css';

export default class Highlights extends Component {
    slides = [
        {
            key: uuidv4(),
            content: (
                <div className="card" style={{width: '650px', height: '420px'}}>
                        <div className="card-body">
                            <div className="container-fluid text-left">
                                <div className="row">
                                    <div className="col-5">
                                        <img className="cardImage" src={Images.highlight1} width="220px" height="180px" alt="Highlight1"/>
                                    </div>
                                    <div className="col-7 text-left">
                                        <h5 className="highlightHeading">Puri Jagannath Temple reopens for all devotees.</h5>
                                        <p className="mt-4">The Jagannath Temple in Odisha’s Puri has reopened for all devotees from today. The temple had been closed for the public since April 24 due to COVID-induced restrictions and lockdown.</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-12">
                                        <p>The Jagannath Temple in Odisha’s Puri has reopened for all devotees from today. The temple had been closed for the public since April 24 due to COVID-induced restrictions and lockdown. Though the temple had reopened on August 12 in the first phase, only family members of the servitors were allowed inside the shrine. Now with the reopening, the temple authorities have laid specific guidelines in the wake of coronavirus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )
        },
        {
            key: uuidv4(),
            content: (
                <div className="card" style={{width: '650px', height: '420px'}}>
                        <div className="card-body">
                            <div className="container-fluid text-center">
                                <div className="row">
                                    <div className="col-12">
                                        <img className="cardImage" src={Images.highlight2} width="560px" height="160px" alt="Highlight2"/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 ">
                                        <h5 className="highlightHeading">Puri Jagannath Temple reopens for all devotees.</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p>The Jagannath Temple in Odisha’s Puri has reopened for all devotees from today. The temple had been closed for the public since April 24 due to COVID-induced restrictions and lockdown. Though the temple had reopened on August 12 in the first phase, only family members of the servitors were allowed inside the shrine. Now with the reopening, the temple authorities have laid specific guidelines in the wake of coronavirus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )
        },
        {
            key: uuidv4(),
            content: (
                <div className="card" style={{width: '650px', height: '420px'}}>
                        <div className="card-body">
                            <div className="container-fluid text-left">
                                <div className="row">
                                    <div className="col-6">
                                        <img className="cardImage" src={Images.highlight3} width="280px" height="260px" alt="Highlight3"/>
                                    </div>
                                    <div className="col-6 mt-5">
                                    <p>The Jagannath Temple in Odisha’s Puri has reopened for all devotees from today. The temple had been closed for the public since April 24 due to COVID-induced restrictions and lockdown. </p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 text-center">
                                        <h5 className="highlightHeading">Puri Jagannath Temple reopens for all devotees.</h5>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )
        },
        {
            key: uuidv4(),
            content: (
                <div className="card" style={{width: '650px', height: '420px'}}>
                        <div className="card-body">
                            <div className="container-fluid text-left">
                                <div className="row">
                                    <div className="col-6">
                                        <img className="cardImage" src={Images.highlight4} width="280px" height="380px" alt="Highlight4"/>
                                    </div>
                                    <div className="col-6 mt-4">
                                    <h5 className="highlightHeading">Puri Jagannath Temple reopens for all devotees.</h5>
                                    <p>The Jagannath Temple in Odisha’s Puri has reopened for all devotees from today. The temple had been closed for the public since April 24 due to COVID-induced restrictions and lockdown. Though the temple had reopened on August 12 in the first phase, only family members of the servitors were allowed inside the shrine. Now with the reopening, the temple authorities have laid specific guidelines in the wake of coronavirus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )
        },
        {
            key: uuidv4(),
            content: (
                <div className="card" style={{width: '650px', height: '420px'}}>
                        <div className="card-body">
                            <div className="container-fluid text-center">
                                <div className="row">
                                    <div className="col-12">
                                        <img className="cardImage" src={Images.highlight5} width="560px" height="160px" alt="Highlight5"/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 ">
                                        <h5 className="highlightHeading">Puri Jagannath Temple reopens for all devotees.</h5>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12">
                                        <p>The Jagannath Temple in Odisha’s Puri has reopened for all devotees from today. The temple had been closed for the public since April 24 due to COVID-induced restrictions and lockdown. Though the temple had reopened on August 12 in the first phase, only family members of the servitors were allowed inside the shrine. Now with the reopening, the temple authorities have laid specific guidelines in the wake of coronavirus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
      });
    
      onChangeInput = (e) => {
        this.setState({
          [e.target.name]: parseInt(e.target.value, 10) || 0
        });
      };
    
      state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle,
        autoplay: true,
        autoplaySpeed: 1
      };
    
      render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
        };
    
        return (
          <div style={{paddingTop: "35%", paddingBottom: "20%", width: "90%", height: "17rem", margin: "0 4.5rem" }}>
            <Carousel
              slides={this.slides}
              goToSlide={this.state.goToSlide}
              offsetRadius={this.state.offsetRadius}
              showNavigation={this.state.showNavigation}
              animationConfig={this.state.config}
              autoPlay={true}
              interval={this.state.autoplaySpeed}
              infiniteLoop={true}
              dynamicHeight={true}
              ref={(slider) => (this.slider = slider)}
              {...settings}
            ></Carousel>
          </div>
        );
      }
      
}