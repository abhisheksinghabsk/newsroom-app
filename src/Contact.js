import { Link } from "react-router-dom";
import Popularcard from "./component/popularcard";
import Fcard from "./component/fcard";
import Topcard from "./component/topcard";
import Midcard from "./component/midcard";

function Contact() {
  return (
    <div>
      <div className="logo">
        <b>
          <span className="red"> NEWS </span>ROOM{" "}
        </b>{" "}
      </div>
      <div class="navbar">
        <div>
          {/* <a href="#home"> Home </a>  */}
          {/* <a href="#categories"> Categories </a>{" "} */}
          {/* <a href="#singe news"> Single News </a>{" "} */}
          <Link to="/">Home</Link>
          <Link to="/Categories">Categories</Link>
          <Link to="/SingleNews">Single News</Link>
          {/* <a href="#contact"> Contact </a> */}
          <Link to="/Contact">Contact</Link>
          <div class="dropdown">
            <button class="dropbtn" onclick="myFunction()">
              Dropdown <i class="fa fa-caret-down"> </i>{" "}
            </button>
            <div class="dropdown-content" id="myDropdown">
              <a href="#"> Link 1 </a> <a href="#"> Link 2 </a>{" "}
              <a href="#"> Link 3 </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <div className="search">
            <i class="fas fa-search"> </i>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* main */}
      <div className="margin">
        <div className="contact">Contact Us For Any Queries</div>
        <div className="fr">
          <div className="touch">
            <h3>Get in touch</h3>
            <p>
              Labore ipsum ipsum rebum erat amet nonumy, nonumy erat justo sit
              dolor ipsum sed, kasd lorem sit et duo dolore justo lorem stet
              labore, diam dolor et diam dolor eos magna, at vero lorem elitr
            </p>
            <div className="site">
            <p>
              <i class="fas fa-envelope"></i> Email: osizone@gmail.com
            </p>
          </div>
          <div className="site">
            <p>
              <i class="fas fa-phone-alt"></i> Call: 1234567890
            </p>
          </div>
          <div className="site">
            <p>
              <i class="fas fa-globe"></i> URL: www.osizone.com
            </p>
          </div>
          </div>
          <div className="form">
            <form>
              <label>
                <input className="f-name" type="text" name="name" placeholder="Name" />
              </label>
              <input type="email" name="email" placeholder="Email" />
              <br />
              <select name="inquiry" id="contact-select" placeholder="Subject">
                <option value="-">Subject</option>
                <option value="sales">Sales & Marketing</option>
                <option value="creative">Creative Design</option>
                <option value="uiux">UI / UX</option>
              </select>
              <br />
              <textarea
                rows="4"
                cols="40"
                name="comment"
                form="usrform"
                placeholder="Enter text"
              ></textarea>
              <br />
              <button className="send-button"type="submit" id="Send Message">Send Message</button>
                {/* <input type="Submit" value="Send Message" /> */}
              
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="last">
          <div className="room">
            <div className="logos">
              <b>
                <span className="red"> NEWS </span>ROOM{" "}
              </b>{" "}
            </div>{" "}
            <div className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.Repudiandae possimus quia, voluptate magnam harum ipsa
              ratione perferendis laudantium ea sunt.{" "}
            </div>{" "}
            <div className="social-media">
              <div className="mda">
                <i class="fab fa-facebook-f"> </i>{" "}
              </div>{" "}
              <div className="mda">
                <i class="fab fa-twitter"> </i>{" "}
              </div>{" "}
              <div className="mda">
                <i class="fab fa-instagram"> </i>{" "}
              </div>{" "}
              <div className="mda">
                <i class="fab fa-linkedin-in"> </i>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            <div className="cat-2"> Categories </div>{" "}
            <div className="features">
              <div className="politics"> Politics </div>{" "}
              <div className="politics"> Business </div>{" "}
              <div className="politics"> Corporate </div>{" "}
              <div className="politics"> Sports </div>{" "}
              <div className="politics"> Health </div>{" "}
              <div className="politics"> Education </div>{" "}
              <div className="politics"> science </div>{" "}
              <div className="politics"> Technology </div>{" "}
              <div className="politics"> Foods </div>{" "}
              <div className="politics"> Entertainment </div>{" "}
              <div className="politics"> Travel </div>{" "}
              <div className="politics"> Lifestyle </div>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <div className="cat-2"> Tags </div>{" "}
            <div className="features">
              <div className="politics"> Politics </div>{" "}
              <div className="politics"> Business </div>{" "}
              <div className="politics"> Corporate </div>{" "}
              <div className="politics"> Sports </div>{" "}
              <div className="politics"> Health </div>{" "}
              <div className="politics"> Education </div>{" "}
              <div className="politics"> science </div>{" "}
              <div className="politics"> Technology </div>{" "}
              <div className="politics"> Foods </div>{" "}
              <div className="politics"> Entertainment </div>{" "}
              <div className="politics"> Travel </div>{" "}
              <div className="politics"> Lifestyle </div>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            <div className="cat-2"> Quick Links </div>{" "}
            <div className="about">
              <div>
                <i class="fas fa-angle-right"> </i>About{" "}
              </div>{" "}
              <div>
                <i class="fas fa-angle-right"> </i>Advertise{" "}
              </div>{" "}
              <div>
                <i class="fas fa-angle-right"> </i>Privacy & Policy{" "}
              </div>{" "}
              <div>
                <i class="fas fa-angle-right"> </i>Terms & Conditions{" "}
              </div>{" "}
              <div>
                <i class="fas fa-angle-right"> </i>Contact{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="over">
          <b>
            <span className="brown"> ©Your Site Name. </span>{" "}
          </b>{" "}
          All Rights Reserved.Designed by{" "}
          <b>
            <span className="brown"> HTML Codex </span>{" "}
          </b>{" "}
        </div>{" "}
      </footer>{" "}
      {/* last */}
    </div>
  );
}
export default Contact;
