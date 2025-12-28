import CardOne from "../components/CardOne";
import Cardtwo from "../components/Cardtwo";
import CardThree from "../components/CardThree";
import CardSliding from "../components/CardSliding";
import AppleSlider from "../components/AppleSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <CardOne />
      </div>
      <Cardtwo
        img="/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg"
        title="iPhone"
        des="Say hello to the latest generation of iPhone."
        b1="Learn More"
        b2="Shop iPhone"
      />
      <Cardtwo
        img="/hero_airpodspro_3__dn7gz4l22ree_mediumtall_2x.jpg"
        title="AirPods Pro 3"
        des="The world's best in-ear Active Noise Cancellation."
        b1="Learn More"
        b2="Buy"
      />
      {/* card three */}
      <div className="w-full flex justify-center items-stretch flex-col ml-3 mr-3">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-full max-w-full gap-x-5">
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
          <CardThree
            img="https://www.apple.com/v/home/ck/images/promos/ipad/promo_ipad__fioegapg12qi_medium_2x.jpg"
            title="iPad"
            d1="Now with the speed of A16 chip"
            d2="and double the starting storage."
            b1="Learn More"
            b2="Buy"
          />
          <CardThree
            img="https://www.apple.com/v/home/ck/images/promos/apple-gift-card/promo_apple_gift_card__etkqjveoh4uq_medium_2x.jpg"
            logo="iPhone"
            title="Apple Gift Card"
            d1="Let them spend the holiday however they like."
            b1="Learn More"
            b2="Buy"
          />
          <CardThree
            img="https://www.apple.com/v/home/ck/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg"
            logo="https://www.apple.com/v/home/ck/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_medium_2x.png"
            d1="Get up to $180-$670"
            d2="in credit when you trade in"
            d3="iPhone 16 or higher."
            b1="Get your estimate"
            b2="Buy"
          />
          <CardThree
            img="https://www.apple.com/v/home/ck/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium_2x.jpg"
            logo="https://www.apple.com/v/home/ck/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_medium_2x.png"
            d1="Get up to 3% Daily Cash back"
            d2="with every purchase"
            b1="Learn More"
            b2="Apply now"
          />
        </div>
      </div>
      {/* <ContentLayout></ContentLayout> */}
      <CardSliding></CardSliding>

      <AppleSlider></AppleSlider>

      <Footer></Footer>
    </>
  );
}

export default Home;
