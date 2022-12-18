import React, { useContext } from "react";
import { UserContext } from "../../contexts/contexUser";
import { ListBugurs } from "../../styles/buguerList";

export const BurguerList = () => {
  const {  createCart,filterSearch }: any = useContext(UserContext);

  return (
    <ul>
      {filterSearch.map((item: any, index: number) => {
        return (
          <ListBugurs key={index}>
            <div className="Imgs">
                <img src={item.img} alt="" />
            </div>
            <h3>{item.name}</h3>
            <span>{item.category}</span>
            <span className="price">{item.price.toLocaleString("pt-br", {style: "currency",currency: "BRL",})}</span>
            <button onClick={()=>{createCart(item.id,item.img,item.name,item.price,item.category)}}>Adicionar</button>
          </ListBugurs>
        );
      })}
    </ul>
  );
};
