//DOC QUE DESCRIBE UN PRODUCTO DEL CATALOGO EN PARTICULAR, UNA SOLA CARD DE UN PRODUCTO DEL STOCK

import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSingleItemFromAPI().then((stockTakones) => {
      setProduct(stockTakones);
    });
  }, []);

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.img} alt="Zapato Foto" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.model}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
