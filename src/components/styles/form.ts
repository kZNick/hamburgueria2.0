import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 500px;
  max-width: 100%;
  height: 527px;
  border: 2px solid #f5f5f5;
  border-radius: 5px;
  padding: 25px;
  .comeBack {
    color: #828282;
    font-weight: 500;
    font-size: 14px;
  }
  .HeaderForm {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: 1.125rem;
    }
  }
  .Inpults {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    position: relative;
    .error {
      position: absolute;
      color: #e60000;
      font-weight: 400;
      font-size: 0.75rem;
      left: 15px;
      bottom: -15px;
    }
    label {
      position: absolute;
      font-weight: 400;
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      color: #999999;
      padding: 20px;
    }

    input {
      width: 100%;
      height: 60px;
      border: 2px solid #f5f5f5;
      border-radius: 8px;
      font-weight: 400;
      font-size: 1rem;
      padding-left: 20px;
      background-color: #ffffff;
      :valid ~ label,
      :focus ~ label {
        top: -6px;
        font-size: 0.875rem;
        background-color: #ffffff;
        padding: 3px;
        left: 15px;
      }
    }
    .inputError {
      border: 2px solid #e60000;
    }
  }
  button {
    width: 100%;
    height: 60px;
    font-weight: 600;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    color: #ffffff;
    border: none;
    background-color: #219653;
    border-radius: 8px;
    cursor: pointer;
  }
  .buttonCadastre {
    background-color: #f5f5f5;
    color: #828282;
    :hover {
      transition: 0.5s;
      background-color: #828282;
      color: #e0e0e0;
    }
  }
  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: #999999;
    padding: 0 80px;
  }
  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    background-color: #f5f5f5;
    font-weight: 600;
    font-size: 1rem;
    color: #999999;
  }
`;
