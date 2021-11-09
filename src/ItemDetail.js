import React, { useEffect, useState } from "react";
import "./App.css";
import { useParams, useNavigate } from "react-router-dom";

export const ItemDetail = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItems();
    console.log("Item Detail id : ", id);
  }, []);

  const fetchItems = async () => {
    console.log(id);
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${id}`
    );
    const data = await response.json();
    console.log("Item detail data : ", data.data);
    setItem(data.data);
  };
  return (
    <div>
      {item !== {} && item && (
        <div>
          <h1>{item.id}</h1>
          <img src={item.images.icon} alt={item.name} />
        </div>
      )}
      <button onClick={() => history(-1)}>Go Back</button>
    </div>
  );
};
export default ItemDetail;
