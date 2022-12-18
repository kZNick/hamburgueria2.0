import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: aqua;
  padding: 15px 15%;
  background-color: #f5f5f5;
  .buttons {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 4%;
    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    .Cartdiv {
      display: flex;
      align-items: flex-end;

      width: 36px;
      height: 39px;
      position: relative;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 24px;
        position: absolute;
        color: white;
        font-weight: 900;
        font-size: 14px;
        top: 0;
        right: 0;
        background: #27ae60;
        border-radius: 7px;
      }
    }
  }
  @media (max-width: 950px) {
    display: flex;
    gap: 25px;
    justify-content: center;
    align-items: center;
    padding: 15px 10%;
    width: 100%;
  }
`;

export const InpultSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 365px;
  height: 60px;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  gap: 15px;
  position: relative;

  input {
    width: 100%;
    height: 55px;
    font-weight: 400;
    font-size: 1rem;
    padding-left: 20px;
    border: none;
    outline: none;
    background-color: transparent;
  }
  .SearchButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 53px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: #27ae60;
    font-weight: 500;
    cursor: pointer;
    padding: 0px 20px;
    margin-right: 10px;
    .iconeSeach {
      color: #ffffff;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 950px) {
    background-color: #f5f5f5;
    width: max-content;
    height: max-content;
    gap: 0;
    input {
      width: 0px;
    }
    border: none;
    .SearchButton {
      width: 23px;
      height: 25px;
      border: none;
      border-radius: none;
      background-color: #f5f5f5;
      color: #bdbdbd;
      font-weight: 500;
      font-size: 0.875rem;
      cursor: pointer;
      padding: 0;
      margin-right: 0px;
      .iconeSeach {
        color: #bdbdbd;
      }
    }
    input:focus {
      width: 1350%;
      max-width: 500px;
      height: 60px;
      position: absolute;
      background-color: #ffffff;
      border: 2px solid #333333;
      border-radius: 8px;
      z-index: 10;
      left: -180px;
    }
  }
`;
