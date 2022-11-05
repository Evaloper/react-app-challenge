// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "/src/App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Outlet, Link } from 'react-router-dom';



function ProfilePics() {
  return (
    <div id="profile">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHmu38XXGmsqQ/profile-displayphoto-shrink_200_200/0/1651077574377?e=1669852800&v=beta&t=liqI8fGbKeMOouBQQ84hOgJ5rD49q6szIBI9_0yuhJc"
        id="profile__img"
        alt=""
      />
      <div className="shared__icon">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2958/2958783.png"
          alt="shared icon"
        />
      </div>
      <h4>Gbaje Eva</h4>
      <h4 id="slack">Taddy</h4>
    </div>
  );
}

function LinkSection() {
  return (
    <div className="link__sect">
      <a
        href="https://twitter.com/fabulous_fj"
        id="twitter"
        type="button"
      >
        Twitter Link
      </a>
      <a href="https://training.zuri.team/" id="btn__zuri" type="button">
        Zuri Team
      </a>
      <a
        href="https://books.zuri.team"
        id="books"
        title="this is where you find books about design and coding"
        type="button"
      >
        Zuri Books
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=taddy"
        id="book__python"
        title="Buy for a discounted price"
        type="button"
      >
        Python Books
      </a>
      <a
        href="https://background.zuri.team"
        id="pitch"
        title="Click to check accuracy of your code"
        type="button"
      >
        Background check for coders
      </a>
      <a
        href="https://books.zuri.team/design-rules"
        id="book__design"
        title="Learn basic design rules for free"
        type="button"
      >
        Design Books
      </a>
      <Link
      to={`/contact`}
      // href="/contact"
      title="This link directs you to the contact page"
      id="contact"
      type="button">
        Contact Me
      </Link>
      <div className="last_div">
        <img
          className="slack"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
          alt="slack"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="github"
          className="github"
        />
      </div>
    </div>
  );
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

function Page() {
  return (
    <div id="main">
      <ProfilePics />
      <LinkSection />
      <Footer />
    </div>
  );
}
// ReactDOM.render(<Page />, document.getElementById("root"));


export default (ProfilePics, LinkSection, Footer, Page)
