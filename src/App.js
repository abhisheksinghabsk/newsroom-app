import "./component/navbar/Navbar.scss";
import React from "react";
import "./App.scss";
import Navbar from "./component/navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Categories from "./Categories";
import SingleNews from "./SingleNews";
import Contact from "./Contact";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/SingleNews" element={<SingleNews/>} />
          <Route path="Contact" element={<Contact/>} />

        </Routes>
      </div>
    );
  }
 
}
export default App;
