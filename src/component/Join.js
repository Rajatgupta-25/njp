import React from 'react';
import NavBar from './Navbar';
import '../css/join.css';
import '../plugins/join';
import FooterSection from './Footer';
import Images from './Images';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function JoinNJP() {
    return (
        <>
                <NavBar/>
                <div className="container-fluid text-left">
                    <div className="row">
                        <div className="col-6 ml-4" style={{paddingBottom: '40px'}}>
                            <img src={Images.joinBack} width="750px" height="650px" style={{boxShadow: '4px 4px 10px grey'}} />
                        </div>
                        <div className="col-5 ml-5 border" style={{height: '650px'}}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <p className="form-heading">JOIN THE JOURNEY WITH NJP</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                    <Container>
                <Row>
                    <Col xs={3}>
                        <div className="progressBar mt-5">
                        <ul className="step-1">
        <li className="active">
            <span>1</span>
        </li>
        <li>
            <span>2</span>
        </li>
        <li>
            <span>3</span>
        </li>
    </ul>
    <ul className="step-2" style={{display:'none'}}>
        <li className="active">
            <span>1</span>
        </li>
        <li className="active">
            <span>2</span>
        </li>
        <li>
            <span>3</span>
        </li>
    </ul>
    <ul className="step-3" style={{display:'none'}}>
        <li className="active">
            <span>1</span>
        </li>
        <li className="active">
            <span>2</span>
        </li>
        <li className="active">
            <span>3</span>
        </li>
    </ul>
    </div>
                    </Col>    
                </Row>
                <Row>
                    <Col className="text-center">
                    <Form>
                        <Container className="mt-1">
                                <div id="form1">
                                <Row>
                    <Col xs={6}>
                        <p className="pdetail">Personal Details</p>
                    </Col>
                </Row>
                                <Row className="mt-2">
                                    <Col xs={2} className="mt-1" >
                                    <select class="form-control control" style={{width: '80px'}} aria-label=".form-select-lg example">
  <option selected>Mr.</option>
  <option value="1">Mrs.</option>
  <option value="2">Miss</option>
</select>

                                    </Col>
                                    <Col xs={1}/>
                                    <Col xs={8} className="mt-1">
                    <Form.Group controlId="formBasicName">
    <Form.Control className="control" type="text" placeholder="Name" required/>
  </Form.Group>
  </Col>
</Row>
<Row>
        <Col xs={11} className="mt-4">
        <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" className="control" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
  </Form.Group>
  </Col>
  </Row>
  <Row>
      <Col xs={11} className="mt-4">
      <Form.Group className="mb-3" controlId="formBasicZip">
    <Form.Control type="number" className="control" placeholder="Mobile Number" pattern="[789][0-9]{9}" required/>
  </Form.Group>
      </Col>
  </Row>
  </div>
  <Row id="form2" style={{display:'none'}}>
      <Col xs={12}>
        <Container fluid className="text-left">
            <form>
                <Row>
                <Col xs={6}>
                        <p className="pdetail">Contact Details</p>
                    </Col>
                </Row>
            <Row className="mt-2">
                <Col xs={11}>
                    <input className="form-control control" type="text" pattern="[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}" placeholder="Aadhar Card Number" required/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={3}>
                <label className="mt-3 dob"><h6>Date Of Birth</h6></label>
                </Col>
                <Col xs={8}>
                    <input className="form-control control" type="date" placeholder="Date" required/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={11}>
                    <input className="form-control control" type="text" placeholder="Permanent Address" required/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={11}>
                    <input className="form-control control" type="text" placeholder="Temporary Address" required/>
                </Col>
            </Row>
            </form>
        </Container>
      </Col>
  </Row>
  <Row id="form3" style={{display:'none'}}>
      <Col xs={12}>
        <form>
            <Container fluid className="text-left">
                <form>
                    <Row>
                        <Col xs={6}>
                            <p className="pdetail">Documents</p>
                        </Col>
                    </Row>
                <Row className="mt-2">
                    <Col xs={6}>
                        <h6>Upload Aadhar Card or Driving License or Voter Id Card or Passport</h6>
                    </Col>
                    <Col xs={6}>
                    <input type="file" name="file" id="file" class="inputfile"/>
                    <label for="file"><span className="fa fa-upload upload"> Upload a file</span></label>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={6}>
                        <h6>Upload Pen Card</h6>
                    </Col>
                    <Col xs={6}>
                    <input type="file" name="file" id="file" class="inputfile"/>
                    <label for="file"><span className="fa fa-upload upload"> Upload a file</span></label>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={6}>
                        <h6>Upload Residencial Proof</h6>
                    </Col>
                    <Col xs={6}>
                    <input type="file" name="file" id="file" class="inputfile"/>
                    <label for="file"><span className="fa fa-upload upload"> Upload a file</span></label>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={6}>
                        <h6>Upload Passport Size Photo</h6>
                    </Col>
                    <Col xs={6}>
                    <input type="file" name="file" id="file" class="inputfile"/>
                    <label for="file"><span className="fa fa-upload upload"> Upload a file</span></label>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={12}>
                    <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label=" I certify that above provided information is correct and there is no mistake. I know that all further communication will be done on above provided details." />
  </Form.Group>
                    </Col>
                </Row>
                </form>
            </Container>    
        </form>   
      </Col>
  </Row>
  <Row className="mt-3">
      <Col xs={2}></Col>
      <Col xs={2} id="colPrev1">
      <Button id="prev1" style={{display:'none'}} variant="outline-dark">Prev</Button>
      </Col>
      <Col xs={2} id="colNext1 ml-5">
      <Button type="submit" id="next1" variant="outline-info">Next</Button>
      </Col>
      <Col xs={2} id="colNext2 ml-5">
      <Button type="submit" id="next2" style={{display:'none'}} variant="outline-info">Next</Button>
      </Col>
      <Col xs={2} id="colPrev2 mr-4">
      <Button id="prev2" style={{display:'none'}} variant="outline-dark">Prev</Button>
      </Col>
      <Col xs={2} id="colSubmit">
      <Button type="submit" id="submit" style={{display:'none'}} variant="outline-info">Submit</Button>
      </Col>
  </Row>
  </Container>
</Form>
                    </Col>
                </Row>    
            </Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterSection/>
            
        </>
    );
}