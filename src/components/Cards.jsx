import React, { useEffect, useState } from "react";
import axios from "axios";
function Cards({ value, search, setWishList, wishList, data, setData }) {
  const addToWishList = (item) => {
    setWishList([...wishList, item]);
    localStorage.setItem("wishlist", JSON.stringify([...wishList, item]));
  };
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=ab890a37`)
      .then((res) => {
        setData(res.data.Search);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [search]);
  return (
    <div className="cards">
      {data ? (
        data.map((item) => (
          <div key={item.imdbID} className="card">
            <img className="card-img-top" src={item.Poster} />
            <div className="card-body">
              <h4 className="card-title">{item.Title}</h4>
              <p className="card-text">{item.Year}</p>
              <a onClick={()=>{
                addToWishList(item)
              }} className="btn ">
                <i className="fa-solid fa-heart"></i>
              </a>
            </div>
          </div>
        ))
      ) : (
        <h1>Data yoxdur</h1>
      )}
    </div>
  );
}

export default Cards;
