import Header from "../Header/header";
import Footer from "../Footer/footer";
import React from "react";
import mountain from "../../img/mountain.png"
import dance from "../../img/dance.png"

//import { Typography } from "@mui/material";
import "./Event.css"
function Event(){
    return(
        <div className="head-section">
            <Header/>
            <div className="first-phase">
                <img src={mountain} alt="default-imageset1" />
                <p className="text-one">JOIN US WITH OUR BEST MEMORIES</p>
            </div>
            <h3 className="headingone">Past Events</h3>
            <div>
                <p className="text">Farwell Reception in honour of H.E. Mr Kenji Hiramastu,Ambassador of Japan to India
October 14, 2019 , New Delhi</p>
            </div>

            <img src={dance} className="dancing" alt="default imageset2"></img>

            <div>
                <p className="text">Japan Film Festival<br></br>
                September 27 - October 6, 2019, Delhi NCR</p>
            </div>

            <div>
                <p className="text">An Evening with Japanese Sake<br></br>
                  September 4, 2019, Ambassador’s Residence, Embassy of Japan 50-G, Shantipath,
                Chanakyapuri, New Delhi</p>
            </div>

            <div>
                <p className="text">Great Indian Travel Bazaar<br></br>
                                    April 28-30 , 2019, Jaipur Rajasthan</p>
            </div>

            <h3 className="headingone">Recent Events</h3>

            <div>
                <p className="text-two">
                An Evening with Japanese Sake
,September 4, 2022, Ambassador’s Residence, Embassy of Japan 50-G, Shantipath,Chanakyapuri, New Delhi
                </p>
            </div>

            <h3 className="headingone">Forthcoming Events</h3>

            <div >
                <p className="text-two">Japanese Language Group Reading ("Gundoku") Contest Japan Foundation TBD</p>
            </div>

            <Footer/>
             
        </div>


    );
}
export default Event;

