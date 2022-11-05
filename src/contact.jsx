import React from "react";
import { ReactDOM } from "react-dom";
import "/src/contact.css"

function Contact(){
    return (
        <div id="contact">
            <div id="header">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind</p>
            </div>
            <div id="main">
                <form>
                    <div id="name">
                        <div id="fname">
                            <label>First Name</label><br/>
                            <input placeholder="Enter your first name" />
                        </div>
                        <div id="lname">
                            <label>Last Name</label><br/>
                            <input placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div id="mail">
                        <label>Email</label><br/>
                        <input placeholder="yourname@email.com"/>
                    </div>
                    <div id="textarea">
                        <label>Message</label><br/>
                        <textarea placeholder="Send me a message and I'll reply you as soon as possible"></textarea>
                    </div>
                    <div id="checkbox">
                        <input type="checkbox"/>
                        <label>You agree to provide your data to {'name'} who may contact you.</label>
                    </div>
                    <input id="button" type="button" value="Submit" />
                </form>

            </div>

        </div>
    )
}

export default Contact;