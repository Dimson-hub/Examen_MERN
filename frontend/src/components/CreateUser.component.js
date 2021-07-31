import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

export default class CreateUser extends Component{

    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangedob = this.onChangedob.bind(this);
        this.onChangeNews = this.onChangeNews.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoto = this.onChangePhoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
      
        this.state ={
            username: '',
            gender:'',
            dob: new Date(),
            news: false,
            email:'',
            photo:'',
            users:[],
        };
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeGender(e){
        this.setState({
            gender: e.target.value
        });
    }
    onChangedob(date){
        this.setState({
            dob: date
        });
    }
    onChangeNews(e){
        this.setState({
            news: e.target.checked 
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePhoto(e){
        this.setState({
            photo: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
            gender: this.state.gender,
            dob: this.state.dob,
            news: this.state.news,
            email: this.state.email,
            photo: this.state.photo
        }
        console.log(user);
        axios.post('http://localhost:5000/users/Add/',user)
        .then(res => console.log(res.data))
        this.setState({
            username: '',
            gender:'',
            dob: new Date(),
            news: false,
            email:'',
            photo:'',
           
        });
    }
    onClick = nr => () => {
        this.setState({
          gender: nr
        });
      };
   
      render(){
      
        return(
            
           <div>
               <div class="card shadow mb-4" style = {{margin:"auto", width:"40%"}}>
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold " style={{ color: "#343A40" }}>Create a new user</h6>
          </div>
          <div className="card-body">
          <form style = {{margin:"auto", width:"90%"}} onSubmit={this.onSubmit}>
                    <div className="form-group ">
                      <label>Username</label>
                      <input type="text" className="form-control" 
                      placeholder="Username" 
                      value={this.state.username} 
                      onChange={this.onChangeUsername}/>
                      
                    </div>

                    <div className="form-group ">
                      <label>Gender</label><br />
                      <div className="form-check-inline" style= {{border:"0.1rem solid", borderColor:"#ced4da", borderRadius: "4px", padding:"5px", width:"49%", margin: "auto", marginRight:"1%"}}>
                        <input type="radio"  
                        onClick={this.onClick("male")} 
                        value="male"
                        checked={this.state.gender === "male" ? true : false} 
                        onChange={this.onChangeGender}
                        />
                        <label className="form-check-label" >
                            Male
                        </label>
                        
                    </div>

                    <div className="form-check-inline" style= {{border:"0.1rem solid", borderColor:"#ced4da", borderRadius: "4px", padding:"5px", width:"49%",margin: "auto",marginLeft:"1%"}}>
                        <input type="radio" 
                        onClick={this.onClick("female")} 
                        value="female"
                        checked={this.state.gender === "female" ? true : false} 
                        onChange={this.onChangeGender} />
                       
                        <label className="form-check-label" >
                            Female
                        </label>
                    </div>
                    </div>
                    
                  
                    <div className="form-group">
                        <label>Date of birth</label><br />
                        <DatePicker 
                            selected={this.state.dob}
                            onChange={this.onChangedob}
                        />
                    </div>

                    

                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                    </div>

                    <div className="form-group">
                      <label>Url of photo</label>
                      <input type="text" className="form-control" placeholder="Url of Photo" value={this.state.photo} onChange={this.onChangePhoto}/>
                    </div>

                    <div className="form-check form-switch">
                        <input id="news" 
                        className="form-check-input" type="checkbox"   
                        onChange={this.onChangeNews}
                        value={this.onChangeNews}
                        />
                        <label className="form-check-label" >Accepte news </label>
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary"  value="Create User" style= {{margin:"auto", width:"100%", marginTop: "10px"}}/>
                    </div>
               </form>
          </div>
          </div>
               
           </div>

        );
    }

}