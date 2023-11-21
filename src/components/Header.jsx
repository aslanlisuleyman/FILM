import React, { useState } from "react";
const Header = ({ value, setValue, search,setSearch, setWishList, wishList,data,setData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };
  return (
    <div className="header">
      <nav className="navbar navbar-light bg-light">
        <form className=" form form-inline" onSubmit={(e) => handleSubmit(e)}>
          <input
            className=" mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn  my-2 my-sm-0" type="submit">
            {" "}
            Search
          </button>{" "}
        </form>{" "}
      </nav>
      <button
        className="btn btnn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="fa-solid fa-basket-shopping"></i>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Səbət
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body off">
          {wishList.length !== 0 ? (
            wishList.map((item,index) => {
              return (
                <ul className="ul" key={index}>
                <li className="li" >
                  
                  <img className="card-img-top" src={item.Poster} />
                  {item.Title}  {item.Year}
                </li></ul>
              );
            })
          ) : (
            <h1>Səbətiniz boşdur</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
