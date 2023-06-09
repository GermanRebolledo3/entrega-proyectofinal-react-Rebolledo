import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getItems, getItemsByCategory } from "../../services/firestore";
import React, { useState, useEffect } from "react";
import Item from "../Item";
import Flex from "../Flex/Flex";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(categoryid).then((respuesta) =>
        setProducts(respuesta)
      );
    }
  }, [categoryid]);

  if (products.length === 0) {
    return <Flex><Loader/></Flex>
  }

  return (
    <Flex>
      {products.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          category={producto.category}
          stock={producto.stock}
          img={producto.img}
        />
      ))}
    </Flex>
  );
}

export default ItemListContainer;