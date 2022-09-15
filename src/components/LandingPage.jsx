import 'bootstrap/dist/css/bootstrap.css';
import cart from "../images/landingcart.jpg";
import puff from "../images/landingpuf.jpg";
import rain from "../images/landingrain.jpg";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className='landingPage_container'>
      <Navbar/>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={puff} className="img-fluid  w-100" alt="puff" />
            <div className="textcarousel carousel-caption d-none d-md-block">
              <h2>ESTÁR CÓMODO,<br></br> NUNCA FUE TAN FÁCIL</h2>
              <button className=' btnShop bg-transparent'>SHOP</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={cart} className="img-fluid  w-100" alt="cart" />
            <div className="textcarousel carousel-caption d-none d-md-block">
              <h2>ESTÁR CÓMODO,<br></br> NUNCA FUE TAN FÁCIL</h2>
              <button className=' btnShop bg-transparent'>SHOP</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={rain} className=" img-fluid  w-100" alt="rain" />
            <div className="textcarousel carousel-caption d-none d-md-block">
              <h2>ESTÁR CÓMODO,<br></br> NUNCA FUE TAN FÁCIL</h2>
              <button className=' btnShop bg-transparent'>SHOP</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default LandingPage; 
