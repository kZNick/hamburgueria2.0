import React from "react";
import { Card } from "../../styles/login";
import logo from "../../assets/Mask Group.png"
import shoppingBag from "../../assets/shopping-bag.png"
import marbles from "../../assets/bolinhas.png"

export const CartLogin = () => {
  return (
    <Card>
      <img src={logo} alt="" />
      <div className="cardInfo">
        <div>
          <img src={shoppingBag} alt="" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes.
        </p>
      </div>
      <img src={marbles} alt="" className="marbles"/>
    </Card>
  );
};
