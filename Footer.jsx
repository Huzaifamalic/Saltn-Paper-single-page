import React from 'react'
import './App.css'

function Footer() {
  return (
    <div>

<div className="Footer container">
      <div className="row">
        {/* Logo and Description */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <img 
            src="https://static.tossdown.com/images/da52b9b3-ba03-4d41-bc8f-ac9e7d6a598b.webp" 
            alt="Salt'n Pepper Logo" 
            className="img-fluid" 
          />
          <p>
            The Salt’n Pepper Restaurants are an example of gracious dining, 
            outstanding service, extraordinary classic and contemporary cuisine. 
            The restaurants have become the ultimate dining destinations in Lahore. 
            From family occasions to business dinners and moments of the heart, 
            this place is where unforgettable memories are made.

            <br /><br />
            <a href="#">Terms & conditions</a> &nbsp; &nbsp; 
            <a href="#">Privacy policy</a>
          </p>
        </div>

        {/* Site Links */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h5>Site Links</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Publications</a></li>
            <li><a href="#">Get a Franchise</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h5>Contact Us</h5>
          <h4>Head Office Address</h4>
          <p>
            23-Usman Block, New Garden Town,<br />
            Lahore, Pakistan
          </p>
          <h4>Head Office Number</h4>
          <p>
            +92 42 358 509 31<br />
            +92 42 358 509 30
          </p>
          <h5>Email Address</h5>
          <p>snpfood@brain.net.pk</p>
          <h5>Free Delivery Number</h5>
          <p>
            +92 42 111 100 678<br />
            +92 03 111 444 610
          </p>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Footer
