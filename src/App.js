import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Slider from "../src/components/Slider"
import data from "./data/data.json"
import Offers from  "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HOTAccessoriesMenu from "./components/HOTAccessoriesMenu";
import HOTAccessories from "./components/HOTAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOption from "./components/NavOption"

function App() {
  return ( 
    <Router>
     <PreNavbar/>
     <Navbar />
     <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

     <Slider start={data.banner.start}  />
     <Offers offer ={data.offer} />
     <Heading text = "STAR PRODUCTS" />
     <StarProduct starProduct={data.starProduct} />
     <Heading text = "HOT ACCESSORIES" />
     <HOTAccessoriesMenu />
     < Route exact path="/music">
       <HOTAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
     </Route>

     < Route exact path="/smartDevice">
       <HOTAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
     </Route>

     < Route exact path="/home">
       <HOTAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
     </Route>
    
     < Route exact path="/lifeStyle">
       <HOTAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
     </Route>

     < Route exact path="/mobileAccessories">
       <HOTAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
     </Route>

     <Heading text = "PRODUCT REVIEWS" />
     <ProductReviews  productReviews={data.productReviews} />

     <Heading text = "VIDEOS" />
     <Videos videos={data.videos} />

     <Heading text = "IN THE PRESS" />
     <Banner  banner={data.banner}/>
     <Footer  footer ={data.footer}/>
     </Router>

  
  );
}

export default App;
