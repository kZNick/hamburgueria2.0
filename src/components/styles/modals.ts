import styled from "styled-components";

export const ModalCarts = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  z-index: 10;
  .Cart {
    width: 500px;
    max-width: 100%;
    height: min-content;
    background-color: #ffffff;
    border-radius: 5px 5px 5px 5px;
    margin-top: 80px;
  }
  .closeModal {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 13px 25px;
    background-color: #27ae60;
    border-radius: 5px 5px 0px 0px;
    h2 {
      font-weight: 700;
      font-size: 1.125rem;
      color: #ffffff;
    }
    button {
      background-color: transparent;
      border: none;
      font-size: 20px;
      color: #828282;
      cursor: pointer;
      :hover {
        color: #ffffff;
      }
    }
  }
  .totalPrice {
    display: flex;
    flex-direction: column;
    margin: 25px;
    padding-top: 15px;
    border-top: 3px solid #e0e0e0;
    gap: 20px;
    div {
      display: flex;
      justify-content: space-between;
      h3 {
        font-weight: 600;
        font-size: 0.875rem;
      }
      span {
        font-weight: 600;
        font-size: 0.875rem;
        color: #828282;
      }
    }
    button {
      width: 454px;
      max-width: 100%;
      height: 60px;
      border: none;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
      background-color: #E0E0E0;
      color: #828282;
      cursor: pointer;
      :hover{
        color: #E0E0E0;
        background-color: #828282;
      }
    }
  }
  .NoCart {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 158px;
    h3 {
      font-weight: 700;
      font-size: 1.125rem;
    }
    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: #828282;
    }
  }
  @media (max-width: 950px){
    .Cart{
      margin-top: 0;
      max-height: 400px;
      overflow-y: scroll;
      margin: 10px 15px;
    }
  }
`;
