import Fcard from "../fcard";
import Midcard from "../midcard";
import Popularcard from "../popularcard";
import Topcard from "../topcard";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="logo">
        <b>
          <span className="red"> NEWS </span>ROOM{" "}
        </b>{" "}
      </div>
      <div class="navbar">
        <div>
          {/* <a href="#home"> Home </a> 
          <a href="#categories"> Categories </a>{" "} */}
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
      <div className="three">
        <Topcard three={require("../../assets/news-100x100-2.jpg")} />{" "}
        <Topcard three={require("../../assets/news-100x100-1.jpg")} />{" "}
        <Topcard three={require("../../assets/news-100x100-4.jpg")} />{" "}
      </div>
      <div className="main">
        <div className="display">
          <div className="dolors">
            <img src={require("../../assets/news-700x435-2.jpg")} alt="img" />
            <div className="img-head">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis,
              tempora!
            </div>{" "}
          </div>{" "}
          <div className="five">
            <div className="Categories">
              <div className="cat"> Categories </div>{" "}
              <div className=" view"> View All </div>{" "}
            </div>{" "}
            <div className="cat_bx">
              <img src={require("../../assets/cat-500x80-1.jpg")} alt="img" />
              <div className="categories-box"> Business </div>{" "}
            </div>{" "}
            <div className="cat_bx">
              <img src={require("../../assets/cat-500x80-2.jpg")} alt="img" />
              <div className="categories-box"> Technology </div>{" "}
            </div>{" "}
            <div className="cat_bx">
              <img src={require("../../assets/cat-500x80-3.jpg")} alt="img" />
              <div className="categories-box"> Entertenment </div>{" "}
            </div>{" "}
            <div className="cat_bx">
              <img src={require("../../assets/cat-500x80-4.jpg")} alt="img" />
              <div className="categories-box"> Sports </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="Featured">
        <div className="cat"> Featured </div>{" "}
        <div className=" view"> View All </div>{" "}
      </div>
      <div className="sanctus">
        <Fcard
          sanctus="Sanctus amet sit lorem ipsum"
          imgs_8={require("../../assets/news-300x300-4.jpg")}
        />{" "}
        <Fcard
          sanctus="Sanctus amet sit lorem ipsum"
          imgs_8={require("../../assets/news-300x300-2.jpg")}
        />{" "}
        <Fcard
          sanctus="Sanctus amet sit lorem ipsum"
          imgs_8={require("../../assets/news-300x300-1.jpg")}
        />{" "}
        <Fcard
          sanctus="Sanctus amet sit lorem ipsum"
          imgs_8={require("../../assets/news-300x300-3.jpg")}
        />{" "}
      </div>
      <div className="item">
        <div className="busi">
          <div className="business">
            <div className="cat"> Businesss </div>{" "}
          </div>{" "}
          <div className="option">
            <Midcard mimg={require("../../assets/news-500x280-2.jpg")} />{" "}
            <Midcard mimg={require("../../assets/news-500x280-1.jpg")} />{" "}
          </div>{" "}
        </div>
        <div>
          <div className="Technology">
            <div className="cat"> Technology </div>{" "}
          </div>{" "}
          <div className="option">
            <Midcard mimg={require("../../assets/news-500x280-4.jpg")} />
            <Midcard mimg={require("../../assets/news-500x280-5.jpg")} />{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="item">
        <div className="busi">
          <div className="business">
            <div className="cat"> Entertainment </div>{" "}
          </div>{" "}
          <div className="option">
            <Midcard mimg={require("../../assets/news-500x280-3.jpg")} />
            <Midcard mimg={require("../../assets/news-500x280-6.jpg")} />{" "}
          </div>{" "}
        </div>
        <div>
          <div className="Technology">
            <div className="cat"> Sports </div>{" "}
          </div>{" "}
          <div className="option">
            <Midcard mimg={require("../../assets/news-500x280-2.jpg")} />
            <Midcard mimg={require("../../assets/news-500x280-3.jpg")} />{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="menu">
        <div>
          <div className="Technology">
            <div className="cat"> Popular </div>{" "}
          </div>{" "}
          <div className="option">
            <Popularcard pimg={require("../../assets/news-500x280-2.jpg")} />
            <Popularcard pimg={require("../../assets/news-500x280-3.jpg")} />
          </div>
          <div className="four">
            <div className="e">
              <div className="img1">
                <img
                  src={require("../../assets/news-100x100-2.jpg")}
                  alt="img"
                />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="e">
              <div className="img2">
                <img src={require("../../assets/news-100x100-3.jpg")} alt="" />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="e">
              <div className="img3">
                <img
                  src={require("../../assets/news-100x100-4.jpg")}
                  alt="img"
                />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="e">
              <div className="img4">
                <img src={require("../../assets/news-100x100-1.jpg")} alt="" />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="Latest">
            <div className="cat"> Latest </div>{" "}
            <div className=" view"> View All </div>{" "}
          </div>
          <div className="option">
            <Popularcard pimg={require("../../assets/news-300x300-2.jpg")} />
            <Popularcard pimg={require("../../assets/news-300x300-4.jpg")} />
          </div>{" "}
          <div className="four">
            <div className="e">
              <div className="img1">
                <img
                  src={require("../../assets/news-100x100-2.jpg")}
                  alt="img"
                />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="e">
              <div className="img2">
                <img src={require("../../assets/news-100x100-5.jpg")} alt="" />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="e">
              <div className="img3">
                <img
                  src={require("../../assets/news-100x100-4.jpg")}
                  alt="img"
                />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="e">
              <div className="img4">
                <img src={require("../../assets/news-100x100-1.jpg")} alt="" />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* sdfghj */}
        <div>
          <div className="Technology">
            <div className="cat"> Follow Us </div>{" "}
          </div>{" "}
          <div className="media">
            <div className="facebook">
              <i class="fab fa-facebook-f"> </i> 12,345 Fans{" "}
            </div>{" "}
            <div className="twiter">
              <i class="fab fa-twitter"> </i> 12,345 Followers{" "}
            </div>{" "}
            <div className="linkdin">
              <i class="fab fa-linkedin-in"> </i> 12,345 Connects{" "}
            </div>{" "}
            <div className="instagram">
              <i class="fab fa-instagram"> </i> 12,345 Followers{" "}
            </div>{" "}
            <div className="youtube">
              <i class="fab fa-youtube"> </i> 12,345 Subscribers{" "}
            </div>{" "}
            <div className="vimeo">
              <i class="fab fa-vimeo-v"> </i> 12,345 Followers{" "}
            </div>{" "}
          </div>{" "}
          <div className="Technology">
            <div className="cat"> Newsletter </div>{" "}
          </div>{" "}
          <div className="sign">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Ex
            necessitatibus nostrum alias amet tempore.Neque.{" "}
            <div className="up">
              <input type="text" placeholder="Your Email" />
              <div className="sign-up"> Sign Up </div>{" "}
            </div>{" "}
            <div className="sit"> Sit eirmod nonumy kasd eirmod </div>{" "}
          </div>{" "}
          <div className="img-280">
            <img src={require("../../assets/news-500x280-4.jpg")} alt="" />
          </div>
          <div className="Technology">
            <div className="cat"> Tranding </div>{" "}
          </div>
          <div className="six">
            <div className="b">
              <div className="img1">
                <img
                  src={require("../../assets/news-100x100-2.jpg")}
                  alt="img"
                />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="b">
              <div className="img2">
                <img src={require("../../assets/news-100x100-3.jpg")} alt="" />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="b">
              <div className="img3">
                <img
                  src={require("../../assets/news-100x100-4.jpg")}
                  alt="img"
                />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="b">
              <div className="img4">
                <img src={require("../../assets/news-100x100-1.jpg")} alt="" />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
            <div className="b">
              <div className="img3">
                <img
                  src={require("../../assets/news-100x100-5.jpg")}
                  alt="img"
                />
              </div>{" "}
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="Technology">
            <div className="cat"> Tag </div>{" "}
          </div>{" "}
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
      </div>{" "}
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
    </div>
  );
}

export default Navbar;
