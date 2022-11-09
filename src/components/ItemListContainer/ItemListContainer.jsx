//COMPONENTE QUE DA ORIGEN AL CUERPO DEL CATALOGO.. SE APOYA EN CONTROS COMPONENTES PARA MAQUETAR EL HTML
//CREAMOS UNA CARD POR CADA PRODUCTO DEL MOCKSERVICE

import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItemsFromAPI from "../../mockService/mockService";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getItemsFromAPI().then((stockTakones) => {
      setProductsList(stockTakones);
    });
  }, []);

  return <ItemList productsList={productsList} />;
}

export default ItemListContainer;
