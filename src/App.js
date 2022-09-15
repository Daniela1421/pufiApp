import Products from "./components/Products";
import ProductDesingTwo from "./components/ProductDesingTwo";
import rain from "./images/rain.jpg";
import pUmbrella from "./images/pUmbrella.jpg";
import cart from "./images/cart.jpg";
import puff from "./images/puff.jpg";
import nap from "./images/nap.jpg";
import iconNap from "./images/iconNap.jpg";
import iconCart from "./images/iconCart.jpg";
import IconPuff from "./images/iconPuff.jpg";
import Footer from "./components/Footer";
import Hashtag from "./components/Hashtag";
import Newsletter from "./components/Newsletter";
import LandingPage from "./components/LandingPage";

function App() {
  return (
      <div>
        <LandingPage/>
        <Products image={rain} icon={pUmbrella} name={"Pufi RAIN"}/>
        <ProductDesingTwo image={puff} icon={IconPuff} name={"Pufi PUFF"}/>
        <Products image={cart} icon={iconCart} name={"Pufi CART"}/>
        <ProductDesingTwo image={nap} icon={iconNap} name={"Pufi NAP"}/>
        <Hashtag/>
        <Newsletter/>
        <Footer/>
      </div>
  );
}

export default App;
