import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

import Cards from "./components/Cards";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("harry");
  const [wishList, setWishList] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")): []
  );

  

  return (
    <>
      <Header
        value={value}
        setValue={setValue}
        setSearch={setSearch}
        setWishList={setWishList}
        wishList={wishList}
        data={data} setData={setData}
        search={search}
      />
      <Cards search={search} setWishList={setWishList} wishList={wishList} data={data} setData={setData} value={value}  />
    </>
  );
}

export default App;
