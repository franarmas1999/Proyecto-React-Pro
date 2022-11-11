//COMPONENTE ITEM
import React, { useState} from "react";
import Button from "../Button/Button";
import { FaHeart } from "react-icons/fa";
import "./item.css";

function Item({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  return (
    <div className="card">
      <button onClick={handleFavorite} className={classButtonFavorite}>
        <FaHeart></FaHeart>
      </button>
      <div className="card-img">
        <img src={product.img} alt="Zapato Foto" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.model}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Button>COMPRAR</Button>
    </div>
  );
}

export default Item;
