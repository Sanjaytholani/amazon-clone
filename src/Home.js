import React from "react";
import "./Home.css";
import Product from "./Product";
import { v4 } from "uuid";
import { ToastContainer } from "react-toastify";
function Home() {
  return (
    <div className="home">
      <ToastContainer />
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/Amazon-co-uk-hq/2018/img/Prime/XCM_Manual_1133281_gatewayRedesignAcq_1500x600_Prime_1133280_30free-1x_1534769204-jpg._CB484986347_.jpg"
        alt="lol"
        className="banner__image"
      />
      <div className="home__row">
        <Product
          id={v4()}
          title="Apple iPhone 11 Pro Max (256GB) - Space Grey"
          image="https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY327_FMwebp_QL65_.jpg"
          price={126600}
          rating={5}
        />
        <Product
          id={v4()}
          title="Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/81frwlzRG5L._SL1500_.jpg"
          price={104999}
          rating={4}
        />
        <Product
          id={v4()}
          title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
          image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
          price={54999}
          rating={4}
        />
        <Product
          id={v4()}
          title="Apple iPhone 11 (64GB) - Black"
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
          price={66300}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={v4()}
          title="Apple AirPods Pro"
          image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
          price={22990}
          rating={5}
        />
        <Product
          id={v4()}
          title="Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminium Case with Black Sport Band"
          image="https://images-na.ssl-images-amazon.com/images/I/71wu%2BHMAKBL._SL1500_.jpg"
          price={44999}
          rating={5}
        />
        <Product
          id={v4()}
          title="Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm) - Black, Aluminium Dial, Silicon Straps"
          image="https://images-na.ssl-images-amazon.com/images/I/61uej9efKYL._SL1500_.jpg"
          price={23999}
          rating={4}
        />
        <Product
          id={v4()}
          title="Bose SoundSport Free, True Wireless Earbuds, (Sweatproof Bluetooth Headphones for Workouts and Sports), Black"
          image="https://images-na.ssl-images-amazon.com/images/I/61luNKm3ixL._SL1500_.jpg"
          price={18990}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
