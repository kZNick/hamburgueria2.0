import React, { useContext } from "react";
import { HeaderStyled, InpultSearch } from "../../styles/header";
import logoImg from "../../assets/BurguerKenzie.png";
import SearchImg from "../../assets/search.svg";
import CartImg from "../../assets/cart.png";
import ExiteImg from "../../assets/exite.png";
import { UserContext } from "../../contexts/contexUser";
import { useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

export const Header = () => {
  const navigate = useNavigate();

  const { modalCart, setModalCart, listCart, setSearch }: any =
    useContext(UserContext);

  return (
    <HeaderStyled>
      <img src={logoImg} alt="" />
      <div className="buttons">
        <InpultSearch>
          <input
            type="search" className="searchInput" id="searchInput"
            placeholder="Digitar Pesquisa"
            onChange={(evente) => setSearch(evente.target.value)}
          />
          <label htmlFor="searchInput" className="SearchButton">
            <BsSearch className="iconeSeach"/></label>
        </InpultSearch>
        <div className="Cartdiv">
          <button onClick={() => setModalCart(!modalCart)}>
            <img src={CartImg} alt="" />
          </button>
          <span>{listCart.length > 0 ? listCart.length : 0}</span>
        </div>
        <button>
          <img
            src={ExiteImg}
            alt=""
            onClick={() => {
              localStorage.removeItem("HubTokenUser");
              navigate("/Login")
            }}
          />
        </button>
      </div>
    </HeaderStyled>
  );
};
