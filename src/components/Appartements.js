import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const fetchURL = "http://localhost:3001/api/get";
const getItems = () => fetch(fetchURL).then((res) => res.json());

const Appartements = () => {
  const [items, setItems] = useState([]);

  console.log(getItems);
  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  let itemsToRender;
  if (items) {
    console.log(items);
    itemsToRender = items.map((item) => {
      return (
        <div className="appartement" id={item.id}>
          <img src="https://picsum.photos/300/200" alt="" />
          <div>
            <div className="appart__title">
              <h2>{item.appart_title}</h2>
              <FavoriteBorderIcon />
            </div>
            <p>{item.appart_description}</p>
            <p>{item.appart_condition}</p>
            <p>{item.appart_etoile} étoiles </p>
            <p>
              <strong>{item.appart_prix}€</strong> / nuit
            </p>
          </div>
        </div>
      );
    });
  } else {
    itemsToRender = "Loading...";
  }

  return <div>{itemsToRender}</div>;
};

export default Appartements;
