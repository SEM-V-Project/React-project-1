import React from 'react'

import Amlan from "../images/Amlan.jpg"
import Testasset from "../images/Testasset.png"
import "../App.css"
import NavBar from "./Navbar"
import Footer from "./Footer"

export default function Hero() {
    return (
        <>
        <NavBar />

<main>
  {/* <!-- Division 1 --> */}
          <div className="division1 container-fluid text-center ">
              <h4 className=" textFormatting shadow1" style={{paddingTop: "75px", fontSize: "65px"}}>World's Leading Online Resume Builder</h4>
              <h3 style={{color: "white", fontSize: "30px"}} className="shadow1">Join 7,000,000 + Professionals And Build Your Resume Online</h3>
              
              {/* <!-- Slideshow --> */}
              <div id="carouselExampleIndicators" className="carousel slide text-center" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner text-centre">
                  <div className="carousel-item active">
                    <img className="d-block sizing" src={Testasset} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block sizing" src={Testasset} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block sizing" src={Testasset} alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* <!-- Slideshow --> */}

             
              <button type="button" className="btn btn-success btn-lg" id="buildButton">
                    <b>Build </b>     
              </button>
              
          </div>
  {/* <!-- Division 1 --> */}

  {/* <!-- Division 2 --> */}
          <div className="division2 container-fluid text-center" style={{paddingBottom: "100px"}}>
            <h1 className="display-3 fontColor textFormatting" style={{ paddingTop: "30px"}}>How important is a good resume?</h1>
            <h1 className="font-weight-normal" style={{fontSize: "40px", paddingTop: "20px"}}>Your resume is the first impression that you make on your employeer. And as they say , First impression is the last.
              So, to make the first impression a good one, it is imperative that your resume stands out from the crowd first.A good resume Helps you</h1>
              <ul className="font-weight-normal" style={{fontSize: "40px", padding: "5px"}}>
                <li>To grab an interview</li>
                <li>To sell your skills</li>
                <li>To make a good First Impression</li>
                <li>To show your achievements</li>
                <li>To get a good Job</li>
              </ul>
            
          </div>
  {/* <!-- Division 2 -->
  <!-- Division 3 --> */}
  <div className="division3">

            {/* <!-- Section: Team v.1 --> */}
    <section className="team-section text-center my-5">

      {/* <!-- Section heading --> */}
      <h1 style={{ paddingTop:"30px", paddingBottom: "25px", fontSize: "3vw"}} className="display-4 fontColor textFormatting">Meet Our Team</h1>
      {/* <!-- Grid row --> */}
      <div className="row">

        {/* <!-- Grid column --> */}
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle z-depth-1"
              alt="Sample avatar" />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
          <p className="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci sed quia non numquam modi tempora eius.</p>
          <ul className="list-unstyled mb-0">
            {/* <!-- Facebook --> */}
            <a className="p-2 fa-lg fb-ic">
              <i className="fab fa-facebook-f blue-text"> </i>
            </a>
            {/* <!-- Twitter --> */}
            <a className="p-2 fa-lg tw-ic">
              <i className="fab fa-twitter blue-text"> </i>
            </a>
            {/* <!-- Instagram --> */}
            <a className="p-2 fa-lg ins-ic">
              <i className="fab fa-instagram blue-text"> </i>
            </a>
          </ul>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div className="avatar mx-auto">
            <img src={Amlan} className="rounded-circle z-depth-1"
              alt="Sample avatar" />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Amlan Roy</h5>
          <p className="grey-text">I'm Studying IT Engineering in DYPCOE. My Interests include building bots, games, softwares and designing. I plan on becoming a Full Stack Developer.</p>
          <ul className="list-unstyled mb-0">
            {/* <!-- Facebook --> */}
            <a className="p-2 fa-lg fb-ic">
              <i className="fab fa-facebook-f blue-text"> </i>
            </a>
            {/* <!-- Instagram --> */}
            <a className="p-2 fa-lg ins-ic">
              <i className="fab fa-instagram blue-text"> </i>
            </a>
          </ul>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-lg-3 col-md-6 mb-md-0 mb-5">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1"
              alt="Sample avatar" />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Harshit Chari</h5>
          <p className="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim est fugiat nulla id eu laborum.</p>
          <ul className="list-unstyled mb-0">
            {/* <!-- Facebook --> */}
            <a className="p-2 fa-lg fb-ic">
              <i className="fab fa-facebook-f blue-text"> </i>
            </a>
            {/* <!-- Instagram --> */}
            <a className="p-2 fa-lg ins-ic">
              <i className="fab fa-instagram blue-text"> </i>
            </a>
            {/* <!-- Dribbble --> */}
            <a className="p-2 fa-lg ins-ic">
              <i className="fab fa-dribbble blue-text"> </i>
            </a>
          </ul>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-lg-3 col-md-6">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="rounded-circle z-depth-1"
              alt="Sample avatar" />
          </div>
          <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
          <p className="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
            totam officia voluptates perferendis voluptatibus aut.</p>
          <ul className="list-unstyled mb-0">
            {/* <!-- Facebook --> */}
            <a className="p-2 fa-lg fb-ic">
              <i className="fab fa-facebook-f blue-text"> </i>
            </a>
            {/* <!-- Github --> */}
            <a className="p-2 fa-lg ins-ic">
              <i className="fab fa-github blue-text"> </i>
            </a>
          </ul>
        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row --> */}

    </section>

  </div>
  {/* <!-- Section: Team v.1 -->
  <!-- Division 3 --> */}

      </main>
    <Footer />
    </>

    )
}
