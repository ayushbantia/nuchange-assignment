import React, { useState } from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  const _JSON =  
      [ 
      { 
      "name":"Potato", 
      "id":1, 
      "price":30, 
      "available":1, 
      "vendor":"Himachal Pvt Ltd", 
      "category":"Vegetables" 
      }, 
      { 
      "name":"Banana", 
      "id":2, 
      "price":50, 
      "available":1, 
      "category":"Fruits",
      "vendor": "Organic farms"

      }, 
      { 
      "name":"Drumsticks", 
      "id":3, 
      "price":20, 
      "available":0, 
      "category":"Vegetables", 
      "vendor":"Mallikarjuna farms"
      }, 
      { 
      "name":"Orange", 
      "id":4, 
      "price":25, 
      "available":1, 
      "vendor":"Nagpur farms", 
      "category":"Fruits" 
      } 
    ]

  const [filtering, setFiltering] = useState(null)
  const handleFilterSearch = (e) => {
    e.preventDefault()
    const filter = e.target.value
    _JSON.forEach(element => {
      if (filter == element["category"]) {
        console.log(filter)
        setFiltering(filter)
      }
      else if (filter == undefined) {
        setFiltering(null)
        
      }
    });
    }

  const product_images = [
    {
      "image":"https://c.ndtvimg.com/p5qg74v8_potato_625x300_01_August_18.jpg"
    },
    {
      "image":"https://media.istockphoto.com/photos/banana-picture-id1184345169?k=6&m=1184345169&s=612x612&w=0&h=I159iiNId_-XwGsoZlpi9WyeACv8kpg-EmyB5X2oo30="
    },
    {
      "image":"https://images-na.ssl-images-amazon.com/images/I/61hN7aGV7XL._SL1500_.jpg"
    },
    {
      "image":"https://images-na.ssl-images-amazon.com/images/I/81wGPbvAV1L._SX355_.jpg"
    }
  ]

  return (
    <div className="home">
      <div className="home__leftColumn">
        <h4>FILTERS</h4>
        <div className="home__categoryLinks">
          <input type="checkbox" name="fruits" value="Fruits" onChange={handleFilterSearch} />
          <label name="fruits">Fruits</label>
        </div>
        <div className="home__categoryLinks"> 
          <input type="checkbox" name="vegetables" value="Vegetables" onChange={handleFilterSearch} />
          <label name="vegetables">Vegetables</label>
        </div>
        <div className="home__categoryLinks">
          {/* <input type="checkbox" name="reset" value="reset" onChange={handleFilterSearch} />
          <label name="reset">Reset</label> */}
          <a href="#" onClick={handleFilterSearch}>Reset</a>
        </div>
      </div>

      <div className="home__container">
        {/* <div className="home__productFilter">
          <label>Search: </label>
          <input type="text" onChange={handleFilterSearch} />
        </div> */}
        <img
          className="home__bannerImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        
        <div className="home__row">
          {console.log("Filtering:" ,filtering)}
          { filtering === null ? 
            _JSON.map(element => {
              // console.log(element)
              var id = element["id"]
              id = id - 1
              console.log(id)
              return <Product
                id={element["id"]}
                title={element["name"]}
                image={product_images[id]["image"]}
                price={element["price"]}
                rating={4}
                stock={element["available"]}
              />
              
            }) : 
            _JSON.map(element => {
              if (element["category"] == filtering) {
              console.log(element)
                var id = element["id"]
                id = id - 1
                return <Product
                  id={element["id"]}
                  title={element["name"]}
                  image={product_images[id]["image"]}
                  price={element["price"]}
                  rating={4}
                  stock={element["available"]}
                  />
                }
            })
          }

          {/* <Product
            id={JSON[0]["id"]}
            title={JSON[0]["name"]}
            image="https://c.ndtvimg.com/p5qg74v8_potato_625x300_01_August_18.jpg"
            price={JSON[0]["price"]}
            rating={4}
            stock={JSON[0]["available"]}
          />
          <Product
            id={JSON[2]["id"]}
            title={JSON[2]["name"]}
            image="https://images-na.ssl-images-amazon.com/images/I/61hN7aGV7XL._SL1500_.jpg"
            price={JSON[2]["price"]}
            stock={JSON[2]["available"]}
            rating={3}
          />
          <Product
            id={JSON[1]["id"]}
            title={JSON[1]["name"]}
            image="https://media.istockphoto.com/photos/banana-picture-id1184345169?k=6&m=1184345169&s=612x612&w=0&h=I159iiNId_-XwGsoZlpi9WyeACv8kpg-EmyB5X2oo30="
            price={JSON[1]["price"]}
            stock={JSON[1]["available"]}
            rating={3}
          />
          <Product
            id={JSON[3]["id"]}
            title={JSON[3]["name"]}
            image="https://images-na.ssl-images-amazon.com/images/I/81wGPbvAV1L._SX355_.jpg"
            price={JSON[3]["price"]}
            stock={JSON[3]["available"]}
            rating={4}
          /> */}
        </div>
        {/* <div className="home__row">
        </div> */}
        {/* <div className="home__row">
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
        </div> */}
      </div>
    </div>
  );
}

export default Home;
