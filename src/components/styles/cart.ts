import styled from "styled-components";

export const Cart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 35px;
  margin-bottom: 2px solid #e0e0e0;
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
  }
`;

export const InfoCart = styled.div`
  display: flex;
  .lerft{
    display: flex;
    width: 100%;
  }
  .imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82.26px;
    max-width: 100%;
    height: 80px;
    background-color: #e0e0e0;
    border-radius: 5px;
    img {
      width: 100%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    h3 {
      font-weight: 700;
      font-size: 1.125rem;
    }
    .counter {
      display: flex;
      align-items: center;
      width: 106px;
      height: 34px;
      background-color: #e0e0e0;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 0.75rem;
        width: 46px;
        height: 32px;
        background-color: white;
      }
      button {
        width: 30.44px;
        height: 34px;
        font-weight: 400;
        font-size: 1.375rem;
        color: #eb5757;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
