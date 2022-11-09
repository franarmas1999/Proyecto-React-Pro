//COMPONENTE DONDE MAPEAMOS UN ARRAY PARA GENERAR UNO NUEVO CON PROPS DETERMINADAS.. Y LO RENDERIZAMOS CON AYUDA DEL COMPONENTE ITEM

import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <FlexWrapper>
      {props.productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;
