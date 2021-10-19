import React, {useState} from 'react';
import NavBar from './Navbar';
import '../css/join.css';
import '../plugins/join';
import FooterSection from './Footer';
import Images from './Images';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function JoinNJP() {

    const [formdata, setFormdata] = useState({});

    const handleForm = (e) => {
        
        e.preventDefault();
        postData(formdata);
        
    };

    const postData = (data) => {
        axios.post(`https://www.njpbharat.org/njpbharat/public/api/users`, data).then(
            (response)=>{
                console.log(response);
                Swal.fire({  
                    title: 'Congratulations!',  
                    text: 'You send your request successfully! We will get back to you soon.',
                    icon: 'success'
                  });       
            }, (error)=>{
                
                Swal.fire({  
                    title: 'Congratulations!',  
                    text: 'You send your request successfully! We will get back to you soon.',
                    icon: 'error'
                  });
            }
        );
    };

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
                                    
                                    <Col xs={11} className="mt-1">
                    <Form.Group controlId="formBasicName">
    <Form.Control className="control" name="name" type="text" placeholder="Name" required onChange={(e)=>{
        setFormdata({...formdata, name: e.target.value});
    }} />
  </Form.Group>
  </Col>
</Row>
<Row>
        <Col xs={11} className="mt-4">
        <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" className="control" name="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onChange={(e)=>{
        setFormdata({...formdata, email: e.target.value});
    }}/>
  </Form.Group>
  </Col>
  </Row>
  <Row>
      <Col xs={11} className="mt-4">
      <Form.Group className="mb-3" controlId="formBasicZip">
    <Form.Control type="number" className="control" name="mobile" placeholder="Mobile Number" pattern="[789][0-9]{9}" required onChange={(e)=>{
        setFormdata({...formdata, mobile: e.target.value});
    }}/>
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
                    <input className="form-control control" name="aadhar_no" type="text" maxlength="14" pattern="[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}" placeholder="Aadhar Card Number" required onChange={(e)=>{
        setFormdata({...formdata, aadhar_no: e.target.value});
    }}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={5}>
                <input type="text" className="form-control control" name="pincode" pattern="[0-9]{6}" placeholder="Pin Code" maxlength="6" onChange={(e)=>{
        setFormdata({...formdata, pincode: e.target.value});
    }}/>
                </Col>
                <Col xs={6}>
                    <input className="form-control control" type="text" name="constituency" placeholder="Constituency" required onChange={(e)=>{
        setFormdata({...formdata, constituency: e.target.value});
    }}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={5}>
                <select name="state" id="state" size="1" onChange="makeSubmenu(this.value)" class="form form-control control" onChange={(e)=>{
        setFormdata({...formdata, state: e.target.value});
    }}>
                        <option value="" disabled selected>State</option>
<option value="AndhraPradesh">Andhra Pradesh</option>
<option value="ArunachalPradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Delhi">Delhi</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="HimachalPradesh">Himachal Pradesh</option>
<option value="JammuAndKashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="MadhyaPradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="TamilNadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="UttarPradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="WestBengal">West Bengal</option>
</select>
                </Col>
                <Col xs={6}>
                <input type="text" placeholder="District" className="form-control control" name="district" onChange={(e)=>{
        setFormdata({...formdata, district: e.target.value});
    }}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={11}>
                    <input className="form-control control" type="text" name="permanent_address" placeholder="Permanent Address" required onChange={(e)=>{
        setFormdata({...formdata, permanent_address: e.target.value});
    }}/>
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
                        <h6>Upload Aadhar Card/Driving License/Voter Id Card/Passport</h6>
                    </Col>
                    <Col xs={6}>
                    <input type="file" name="gov_id_photo" id="file" class="inputfile" onChange={(e)=>{
        setFormdata({...formdata, gov_id_photo: e.target.value});
    }}/>
                    <label for="file"><span className="fa fa-upload upload"> Upload a file</span></label>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={6}>
                        <h6>Passport Size Photo</h6>
                    </Col>
                    <Col xs={6}>
                    <input type="file" name="photo" id="file" class="inputfile" onChange={(e)=>{
        setFormdata({...formdata, photo: e.target.value});
    }}/>
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
      <Button id="next1" variant="outline-info">Next</Button>
      </Col>
      <Col xs={2} id="colNext2 ml-5">
      <Button id="next2" style={{display:'none'}} variant="outline-info">Next</Button>
      </Col>
      <Col xs={2} id="colPrev2 mr-4">
      <Button id="prev2" style={{display:'none'}} variant="outline-dark">Prev</Button>
      </Col>
      <Col xs={2} id="colSubmit">
      <Button type="submit" id="submit" onClick={(e) => {
          handleForm(e);

      }} style={{display:'none'}} variant="outline-info">Submit</Button>
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