import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import CardOne from "./components/CardOne";
import Button from "./components/Button";
import Cardtwo from "./components/Cardtwo";
import ButtonWhite from "./components/ButtonWhite";
import CardThree from "./components/CardThree";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <CardOne />
      </div>
      <Cardtwo
        img="/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg"
        logo="iPhone"
        d1="Say hello to the latest generation of iPhone."
        b1="Learn More"
        b2="Shop iPhone"
      />
      <Cardtwo
      img="public/hero_airpodspro_3__dn7gz4l22ree_mediumtall_2x.jpg"
        title="AirPods Pro 3"
        des="The world's best in-ear Active Noise Cancellation."
        b1="Learn More"
        b2="Buy"
      />

      <div className="flex pl-5 pr-5 gap-x-5 ">
        <CardThree
          img="https://www.apple.com/v/home/ck/images/promos/ipad-air/promo_ipad_air_avail__6i02t7nujr62_medium_2x.jpg"
        logo="https://www.apple.com/v/home/ck/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_medium_2x.png"
        d1="Now supercharge by the M3 chip."
        b1="Learn More"
        b2="Buy"
        />
        <CardThree
        
          img="https://www.apple.com/v/home/ck/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_medium_2x.jpg"
        logo="https://www.apple.com/v/home/ck/images/logos/apple-watch-series-11/promo_logo_apple_watch_series_11__d9br21pxygya_medium_2x.png"
        d1="The ultimate way to watch your health."
        b1="Learn More"
        b2="Buy"
        
        />
      </div>
      <div className="flex pl-5 pr-5 gap-x-5 ">
        <CardThree
          img="https://www.apple.com/v/home/ck/images/promos/ipad/promo_ipad__fioegapg12qi_medium_2x.jpg"
        logo="iPhone"
        d1="Say hello to the latest generation of iPhone."
        b1="Learn More"
        b2="Shop iPhone"
        />
        <CardThree
          img="https://www.apple.com/v/home/ck/images/promos/apple-gift-card/promo_apple_gift_card__etkqjveoh4uq_medium_2x.jpg"
        logo="iPhone"
        d1="Say hello to the latest generation of iPhone."
        b1="Learn More"
        b2="Shop iPhone"
        />
      </div>
      <div className="flex pl-5 pr-5 gap-x-5 ">
        <CardThree
          img="https://www.apple.com/v/home/ck/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg"
        logo="https://www.apple.com/v/home/ck/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_medium_2x.png"
        d1="Say hello to the latest generation of iPhone."
        b1="Learn More"
        b2="Shop iPhone"
        />
        <CardThree
          img="https://www.apple.com/v/home/ck/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium_2x.jpg"
        logo="https://www.apple.com/v/home/ck/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_medium_2x.png"
        d1="Say hello to the latest generation of iPhone."
        b1="Learn More"
        b2="Shop iPhone"
        />
      </div>
    </>
  );
}

export default App;
