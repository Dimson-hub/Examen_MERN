import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';
import car from '../profile3.png'

export default class DetailsUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id:'',
            username: '',
            gender: '',
            dob: new Date(),
            news: true,
            email: '',
            photo: ''

        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/users/' + this.props.match.params.id)
            .then(response => {

                if (response.data.lenght !== 0) {

                    this.setState({

                        username: response.data.username,
                        gender: response.data.gender,
                        dob: new Date(response.data.dob),
                        news: response.data.news,
                        email: response.data.email,
                        photo: response.data.photo
                    })
                }
            })
            .catch(err => { console.log(err) })
    }

    render() {
        
        return (



            // ######## style ###########





            <div>
                <div className="pt-5">
                <div className="container">
                <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">

                    <div className=" pt-16 rounded-top " style={{ backgroundImage: `url(${car})` , backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',maxWidth:"100%",height:"100px" }}>
                        
                    </div>
                    <div className="d-flex align-items-end justify-content-between bg-white px-4  pt-2 pb-4 rounded-bottom shadow-sm ">
                        <div className="d-flex align-items-center">
                            <div className="mr-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                                <img src={this.state.photo} className="avatar-xl rounded-circle border-width-4 border-white" alt="photoh" />
                                
                        </div>
                                <div className="lh-1">
                                    <h2 className="mb-0" style={{ color: "#343A40" }}>{this.state.username}
                  <a href="#!" class="text-decoration-none" data-toggle="tooltip" data-placement="top" title="" data-original-title="Beginner">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
                                                <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
                                                <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
                                            </svg>
                                        </a>
                                    </h2>
                                    <p className=" mb-0 d-block" style={{ color: "#343A40" }}>{this.state.email}</p>
                                </div>
                            </div>
                            <div>
                                <a href={"/edit/" + this.props.match.params.id} className="btn btn-primary btn-sm d-none d-md-block" style={{ backgroundColor: "#343A40",borderColor: "#343A40", display: "none", color: "#fff"}}>Account
                Setting</a>
                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>



                <div className="pt-5">
                <div className="container">
                <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <div className="bg-white rounded-bottom shadow-sm ">
                    

                    <div className="card-header py-4"  style={{ backgroundColor: "#fff"}}>
            <h1 className="m-0 font-weight-bold " style={{ color: "#343A40" , fontSize:"30px"}}>Details user</h1>
          </div>
          <div className="card-body">
          
          <p style = {{fontSize:"20px",lineHeight:"1.5rem", fontWeight: "400"}}>Username: {this.state.username}</p>
                    <p style = {{fontSize:"20px",lineHeight:"1.5rem"}}>Email: {this.state.email}</p>
                    <p style = {{fontSize:"20px",lineHeight:"1.5rem"}}>Gander: {this.state.gender}</p>
                    <p style = {{fontSize:"20px",lineHeight:"1.5rem"}}>News: {this.state.news === true ? "true" : "false"}</p>
          </div>
                </div>
                </div>
                </div>
                </div>
                </div>
             
            </div>

        );
    }

}