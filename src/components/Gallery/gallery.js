import Header from "../Header/header";
import Footer from "../Footer/footer";
import React from "react";
import galleryfirst from "../../img/galleryfirst.png"
import image1 from "../../img/image1.png"
import image2 from "../../img/image2.png"
import image3 from "../../img/image3.png"
import image4 from "../../img/image4.png"
import "./gallery.css"

function gallery(){
    return(
        <div className="main-part">
            <Header/>
            <div className="logo-line">
            <img src={galleryfirst} alt="default image one"/>
            <p className="main-line">JOIN US WITH OUR BEST MEMORIES</p>
           
            </div>
            
            <h2 className="gallery">Gallery</h2>
        

        <div className="info">
            We have gathered many beautiful moments during our journey. The gallery that you must see in your lifetime
        </div>

        <div className="cover">
        <div className="cover-image">
        <img src={image1} alt="default image one"></img>
        </div>
        <div className="cover-image">

        <img src={image2} alt="default image two"></img>
        </div>
        <div className="cover-image">

        <img src={image3} alt="default image three"></img>
        </div>
        <div className="cover-image">

        <img src={image4} alt="default image four"></img>
        </div>
      </div>
       
        <Footer/>
        </div>
        

    );

}
export default gallery;


{/* <div className="banner">
        <img src={gallery_banner} alt="banner" />
        <p className="gallery-banner-main">JOIN US WITH OUR BEST MOMENTS</p>
        <p className="gallery-banner-sub">Gallery</p>
      </div>
      <div className="about">
        <p className="gallery-heading">
          We have gathered many beautiful moments during our journey. The
          gallery that you must see in your lifetime
        </p>
      </div>
      {/* Gallery images */}
//       <div className="cover">
//         <div className="cover-image">
//         <img src={gallery1} alt="gallery"></img>
//         </div>
//         <div className="cover-image">

//         <img src={gallery2} alt="gallery2"></img>
//         </div>
//         <div className="cover-image">

//         <img src={gallery3} alt="gallery3"></img>
//         </div>
//         <div className="cover-image">

//         <img src={gallery4} alt="gallery4"></img>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
// export default Gallery; */}