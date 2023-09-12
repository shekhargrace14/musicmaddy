import React from "react";
import HeroBG from "../assets/img1.jpg"
const Hero = () => {
  return (

        <div className="container-fluid">
            <div className="hero">
                <div className="row background d-flex j-center a-center">
                    <img src={HeroBG} alt="heroImage" className="background-image"/>
                </div>
                <div className="row text d-flex j-center a-center">
                    <div className="column" >
                        <h1>Welcome to Shalom Worship</h1>
                        <button>About Us</button> <br/>
                        <button>Login</button> <br/>
                        <button>Sign Up</button> <br/>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Hero;
