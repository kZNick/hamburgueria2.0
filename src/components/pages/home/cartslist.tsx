import React, { useContext } from "react";
import { listCartType } from "../../@types/types";
import { UserContext } from "../../contexts/contexUser";
import { Cart, InfoCart } from "../../styles/cart";
import laystall from "../../assets/lixo.png";
export const CartList = () => {
  const { listCart, addBurguer, removeBurguer,removeCart }: any = useContext(UserContext);

  return (
    <Cart>
      {listCart.map((item: listCartType, index: number) => {
        return (
          <li key={index}>
            <InfoCart>
              <div className="imgs">
                <img src={item.img} alt="" />
              </div>
              <div className="info">
                <h3>{item.name}</h3>
                <div className="counter">
                  <button onClick={() => removeBurguer(item)}>-</button>
                  <span>{item.counter}</span>
                  <button onClick={() => addBurguer(item.id)}>+</button>
                </div>
              </div>
            </InfoCart>
            <button onClick={()=>removeCart(item)}>
              <img src={laystall} alt="" />
            </button>
          </li>
        );
      })}
    </Cart>
  );
};
