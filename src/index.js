import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from "./components/AboutUs/AboutUs";
import Event from "./components/Event/Event"
import Gallery from "./components/Gallery/gallery"
import ContactUs from "./components/ContactUs/contactus"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routers, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/AboutUs" element={<AboutUs/>} /> 
      <Route path="/Event" element={<Event/>} /> 
      <Route path="/Gallery" element={<Gallery/>} /> 
      <Route path="/ContactUs" element={<ContactUs/>} /> 
 </Routes>
  </Router>
  //<React.StrictMode>
   // </App>
   //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
