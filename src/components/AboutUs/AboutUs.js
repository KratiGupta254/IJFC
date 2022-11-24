import Header from "../Header/header";
import Footer from "../Footer/footer";
import React from "react";
import { Typography } from "@mui/material";
import image23 from "../../img/image23.png"
import lic from "../../img/lic.png";
import map from "../../img/map.png";
import boi from "../../img/boi.png";
import happy from "../../img/happy.png";
import music from "../../img/music.png";
import modi from "../../img/modi.png";
//import rec1 from "../../img/rec1.png";
import "./AboutUs.css";

function AboutUs(){
    return(
        <div className="main">
            <Header/>
            <div className="about-banner">
            <img src={image23} alt="about-banner" />                                                                                                                                                                                                                                                                                                                                                                 
            <p className="first-para">
          A common voice for Indians and Japanese which help them articulate
          their issues and concerns and facilitate their integration and
          meaningful participation in the IJFC.
        </p>
        <p className="second-para">
          The India Japan Friendship Center (IJFC) is a registered non-profit
          charitable trust organization formed by people of India and IJFC in
          order to strengthen relations between IJFC and India. One of the main
          objectives of IJFC is to preserve and enhance traditional and cultural
          values and the historical legacy that the people of the two countries
          share.
        </p>
      </div>
      <div className="about-approach">
        <Typography variant="h1">Our Approach</Typography>
        <Typography variant="h3">
          Bringing the spirit of togetherness that has strong cultural links
          between communities forunity, peace and love
        </Typography>
        <Typography variant="h4">
          In the past 3 years, IJFC have had various successful events, such as
          Holi, Christmas, Eid, Easter, Workshops, Seminars, Workshops,
          International Yoga Day, Walk-A-Thon, etc. IJFC also contributed to the
          Prime Minister National Relief & Rehab Fund, and from time to time
          organisedBlood Donation drives and donated food, fruits and biscuits
          to the blind societySt. Christopher’s Home, Gospel Dumb & Deaf Hostel
          and Dilkusha Home.
        </Typography>
      </div>

      <div className="about-members">
        <Typography variant="h1">Missions and Stakeholders</Typography>
        <div className="row">
          <div className="column">
            <img src={lic} alt="Snow" />
          </div>
          <div className="column">
            <img src={map} alt="Forest" />
          </div>
          <div className="column">
            <img src={boi} alt="Mountains" />
          </div>
          <div className="column">
            <img src={happy} alt="Mountains" />
          </div>
        </div>    
</div>
<div>
<div className="column">
            <img src={music} alt="Mountains" />
          </div>
          <div className="column">
            <img src={modi} alt="Mountains" />
          </div> 
</div>

      <Footer/>
        </div>

    );

}
export default AboutUs;