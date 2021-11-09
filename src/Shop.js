import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

export const Shop = () => {
  const [items, setItems] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      "https://fortnite-api.com/v2/cosmetics/br/new"
    );
    const data = await response.json();

    console.log(data);
    setItems(data.data.items);
  };
  const goBackHandle = () => {
    history(-1);
  };
  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item) => {
        return (
          <Link to={`/shop/${item.id}`} key={item.id}>
            <h3 key={item.id}>{item.name}</h3>
          </Link>
        );
      })}
      <button onClick={goBackHandle}>Go Back</button>
    </div>
  );
};

export default Shop;
