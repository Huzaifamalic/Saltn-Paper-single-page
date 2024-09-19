import React from 'react'
import './App.css'

function Section() {
  return (
    <div>
      
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.tossdown.com/images/ac51af11-090c-49e8-9296-472de72fc5cb.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.tossdown.com/images/cb3c2d22-7957-4c35-a140-367b8464f7a3.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.tossdown.com/images/d47575d1-42d9-43f7-84b2-f11adea5f8eb.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Section 2 */}
      <div className="section-2 bg-dark text-light text-center">
        <h2>
          Welcome to <samp className="samp-text">Salt'n Pepper</samp> <br />
          Restaurants! Our Brands
        </h2>
        <p>
          Please click our brands below for further information, reservations,
          or to order online!
        </p>

        <div className="card-group">
          <div className="card">
            <img
              src="https://static.tossdown.com/site/8a66dd76-03d2-4b71-8d03-cf045f0248a7.webp"
              className="card-img-top rounded"
              alt="..."
              width="250px"
            />
          </div>
          <div className="card bg-dark">
            <img
              src="https://static.tossdown.com/site/9d9cb355-ac8c-404e-a608-c28242343cd1.webp"
              className="card-img-top rounded"
              alt="..."
              width="250px"
            />
          </div>
          <div className="card">
            <img
              src="https://static.tossdown.com/site/f9238d0e-7c34-4139-a081-c57b7713628e.webp"
              className="card-img-top rounded"
              alt="..."
              width="250px"
            />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section-3 container">
        <h2 className="text-center mb-4">
          <span className="section-3-samp">Salt'n Pepper</span> <br />
          Restaurant Franchises
        </h2>
        <p className="text-center mb-4">
          Each of our franchises is individually managed. For further details,
          kindly contact them directly.
        </p>

        <div className="row mb-4">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5 className="section-3-h3">I S L A M A B A D</h5>
            <h4>
              <span className="section-3-samp">Salt'n Pepper</span> Restaurant
            </h4>
            <p>
              Plot# 55, Shabbir Plaza, Blue Area, F-6, Islamabad <br /> Ph:
              051-2604904-6 <br />

              <button className="section-3-btn">Get Directions</button>
            </p>
            
          </div>
          <div className="col-md-6">
            <img
              src="https://images-beta.tossdown.com/site/7aba8915-02ed-46ee-bd96-1063abe072fa.webp"
              alt="Islamabad Restaurant"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center">
            <h5 className="section-3-h3">F A I S A L A B A D</h5>
            <h4>
              <span className="section-3-samp">Salt'n Pepper</span> Restaurant
            </h4>
            <p>
              4-Kohinoor City, Faisalabad <br /> Ph: 041-8711404 <br />
              <button className="section-3-btn">Get Directions</button>
            </p>
            
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src="https://images-beta.tossdown.com/site/11771dbf-36a1-4684-a55e-18af61e0f77c.webp"
              alt="Faisalabad Restaurant"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5 className="section-3-h3">B A H A W A L P U R</h5>
            <h4>
              <span className="section-3-samp">Salt'n Pepper</span> Restaurant
            </h4>
            <p>
              D.C Chowk, opposite Commissioner House, Bahawalpur <br /> Ph:
              062-2740271-2 <br />
              <button className="section-3-btn">Get Directions</button>
            </p>
           
          </div>
          <div className="col-md-6">
            <img
              src="https://images-beta.tossdown.com/site/b2f78afe-11e4-4af5-8aef-cff9c2908614.webp"
              alt="Bahawalpur Restaurant"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section-4 container">
        <span className="sec-text-4">Salt'n Pepper</span>
        <h3 className="text-center mb-4">Express Franchises</h3>

        <div className="row mb-4">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="https://images-beta.tossdown.com/site/5653706f-83e4-42bb-99f9-4a64e9a1101a.webp"
              alt="Emporium Mall"
              className="img-fluid mb-3"
            />
            <p className="sec-p-4">E M P O R I U M M A L L</p>
            <p>
              <span className="sec-samp-4">Salt'n Pepper</span> Express
            </p>
            <p>
              2nd Floor, Food Court Emporium Mall <br /> Ph: 0311-1100947
            </p>
            <button className="section-4-btn">Get Directions</button>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="https://static.tossdown.com/images/2b5877b5-ca49-4161-a30e-752ddce91595.webp"
              alt="Gujranwala"
              className="img-fluid mb-3"
            />
            <p className="sec-p-4">G U J R A N W A L A</p>
            <p>
              <span className="sec-samp-4">Salt'n Pepper</span> Express
            </p>
            <p>
              G.T Road Opp. Pace Gujranwala <br /> Ph: 0311-1100947
            </p>
            <button className="section-4-btn">Get Directions</button>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="https://static.tossdown.com/images/2b5877b5-ca49-4161-a30e-752ddce91595.webp"
              alt="Bahria Town"
              className="img-fluid mb-3"
            />
            <p className="sec-p-4">B A H R I A T O W N</p>
            <p>
              <span className="sec-samp-4">Salt'n Pepper</span> Express
            </p>
            <p>
              Ground Floor, Food Court, Sector C Bahria Town, Lahore <br /> Ph:
              0311-1100947
            </p>
            <button className="section-4-btn">Get Directions</button>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default Section
