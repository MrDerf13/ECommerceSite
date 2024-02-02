import { useEffect, useState, useContext } from "react";
import { getProducts } from "../../../services/ecom";
import CartCard from "../../components/CartCard/CartCard";
import { deleteFromCart } from "../../../services/ecom";
import { RefreshContext } from "../../context/RefreshContextProvider";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const { refresh, setRefresh } = useContext(RefreshContext);

  useEffect(() => {
    getProducts("cart").then((res) => setCartList(res));
  }, [refresh]);

  return (
    <div>
      {cartList &&
        cartList
          .filter((item) => !item.placeholder)
          .map((product) => (
            <CartCard
              obj={product}
              key={product.id}
              handleClick={() => {
                deleteFromCart(product.id);
                setRefresh(!refresh);
              }}
            />
          ))}
    </div>
  );
};

export default Cart;
