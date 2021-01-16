import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__bannerImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="3543"
            title="Rich Dad Poor Dad: What the Rich Teach their Kids About Money"
            image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
            price={5.99}
            rating={4}
          />
          <Product
            id="3544"
            title="Gone Girl - A thriller by Gillian Flynn"
            image="https://images-na.ssl-images-amazon.com/images/I/41aEQgTFPoL._SX304_BO1,204,203,200_.jpg"
            price={3.49}
            rating={3}
          />
          <Product
            id="3554"
            title="Martian | 20th Century Studios"
            image="https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg"
            price={50.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3545"
            title="Nike Kicks Lounge Omotesando Announces Air Max Day 2018 Dip-Dye Workshop"
            image="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F03%2Fnike-kicks-lounge-omotesando-dip-dye-air-max-workshop-1.jpg?q=75w=800cbr=1fit=max"
            price={4399.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3546"
            title="Zara Men | Jackets - WATER-REPELLENT TRAVELLER JACKET"
            image="https://static.zara.net/photos///2020/S/0/2/p/2753/454/401/2/w/500/2753454401_6_1_1.jpg?ts=1595231213516"
            price={44.99}
            rating={5}
          />
          <Product
            id="3548"
            title="Zara Women | Jackets - FAUX LEATHER BIKER JACKET"
            image="https://i.pinimg.com/originals/aa/fc/67/aafc67e003f1af58833329ce284ddb7d.jpg"
            price={75.49}
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
