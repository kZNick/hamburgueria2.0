import React, { useContext } from "react";
import { UserContext } from "../../contexts/contexUser";
import { ModalCarts } from "../../styles/modals";
import { CartList } from "./cartslist";

export const ModalCart = ()=>{

    const {modalCart,setModalCart,listCart,addingTotalCart,setListCart}: any = useContext(UserContext);

    return(
        <ModalCarts>
            <div className="Cart">
                <section className="closeModal">
                    <h2>Carrinho de compras</h2>
                    <button onClick={()=>setModalCart(!modalCart)} >x</button>
                </section>
                <section className="produtsCart">
                {listCart.length >0? (<CartList/>):(<div className="NoCart">
                        <h3>Sua sacola está vazia</h3>
                        <span>Adicione itens</span>
                    </div>)}
                </section>
                {listCart.length >0? (
                <section className="totalPrice">
                    <div>
                        <h3>Total</h3>
                        <span>{addingTotalCart.toLocaleString("pt-br", {style: "currency",currency: "BRL",})}</span>
                    </div>
                    <button onClick={()=>setListCart([])}>Remover todos</button>
                </section>)
                : null}
            </div>
        </ModalCarts>
    )
}