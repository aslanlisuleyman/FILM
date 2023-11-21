import React, { useState } from "react";
const Header = ({
  value,
  setValue,
  search,
  setSearch,
  setWishList,
  wishList,
  data,
  setData,
}) => {
  const handleSubmit = (e) => {
   
    setSearch(value);
    setValue("");
  };


  const handleDelete = (index) => {
    const updatedWishList = [...wishList];
  updatedWishList.splice(index, 1);
  setWishList(updatedWishList);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
   
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
          <ul className="ul">
            {wishList.length !== 0 ? (
              wishList.map((item, index) => {
                return (
                  <li className="li m-3" key={index}>
                    <img className="card-img-top m-2" src={item.Poster} />
                    {item.Title.slice(0,30)}... {item.Year}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </li>
                );
              })
            ) : (
              <h1>Səbətiniz boşdur</h1>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
