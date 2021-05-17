import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Profile.css";

  class Profile extends Component {
    state =  {
        fullName:"Tlijani Aymen",
        bio:"AYMEN TLIJANI GOMYCODE student . PHOTOGRAPH . ",
        proffesion : "Photograph",
        imgSrc: "image.jpg"
      };
  render() {
    return (
      <div className="card" >
      <img src={this.state.imgSrc} alt="aymen" style={{  textAlign:"center", height: "20%",width:"20%"}}/>
      
        <h5 className="card-title" style={{ textAlign:"center"}}>{this.state.fullName}</h5>
        <h2 className="card-title" style={{ textAlign:"center"}}>{this.state.bio}</h2>
        <h4 className="card-title" style={{ textAlign:"center"}}>{this.state.proffesion}</h4>
      
    </div>
    );
  }
}
 
export default Profile;