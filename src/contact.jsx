import React from "react";
import { ReactDOM } from "react-dom";
import "/src/contact.css"


function ContactPage(){
    return (
        <div id="main-body">
            <div id="header">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind</p>
            </div>
            <div id="form">
                <form>
                    <div id="name">
                        <div id="fname">
                            <label>First Name</label><br/>
                            <input type="text" placeholder="Enter your first name" required/>
                        </div>
                        <div id="lname">
                            <label>Last Name</label><br/>
                            <input type="text" placeholder="Enter your last name" required/>
                        </div>
                    </div>
                    <div id="mail">
                        <label>Email</label><br/>
                        <input type="email" placeholder="yourname@email.com" required/>
                    </div>
                    <div id="textarea">
                        <label>Message</label><br/>
                        <textarea type="text" placeholder="Send me a message and I'll reply you as soon as possible"></textarea>
                    </div>
                    <div id="checkbox">
                        <input type="checkbox" id="inp-checkbox"/>
                        <label>You agree to provide your data to &#123;name&#125;  who may contact you.</label>
                    </div>
                    <input id="button" type="button" value="Send Message" />
                </form>
            </div>

        </div>
    )
}

function Footer() {
    return (
      <footer>
        <div>
          <img
            src="https://internship.zuri.team/static/media/logo.36d2d48a.svg"
            className="footer-div"
            alt="zuri"
          />
        </div>
        <div>
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div>
          <img
            src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1"
            alt="I4G"
            className="footer-img"
            />
        </div>
      </footer>
    );
  }

  function Contact(){
    return(
        <div>
            <ContactPage />
            <Footer />
        </div>
        
    )
  }

export default (ContactPage, Footer, Contact);