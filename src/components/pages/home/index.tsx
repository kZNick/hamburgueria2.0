import React, { useContext } from "react";
import { UserContext } from "../../contexts/contexUser";
import { Main } from "../../styles/main";
import { Header } from "./header";
import { BurguerList } from "./listBuguer";
import { Loading } from "./loading";
import { ModalCart } from "./modalCart";

export const Home = () => {

  const {modalCart,loading}: any = useContext(UserContext);

  return (
    <>
      {modalCart? (<ModalCart/>): null}
      {loading? (<Loading/>): null}
      <Header />
      <Main>
        <ul>
            <BurguerList/>
        </ul>
      </Main>
    </>
  );
};
