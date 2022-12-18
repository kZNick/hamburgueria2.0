import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media (max-width: 950px){
    flex-direction: column;
    padding: 0 5px;
  }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    img {
      width: 240px;
      max-width: 100%;
    }
    .cardInfo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 15px;
      width: 377px;
      height: 95px;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      p{
        font-weight: 400;
        font-size: 0.875rem;
      }
      span {
        font-weight: 600;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        min-width: 60px;
        min-height: 60px;
        height: 60px;
        background-color: rgba(39, 174, 96, 0.1);
        border-radius: 5px;
        img {
          max-width: 100%;
          width: 18px;
          height: 20px;
        }
      }
    }
    @media (max-width: 950px){
      max-width: 100%;
      gap: 15px;
      .marbles{
        display: none;
      }
      max-width: 100%;
  }
`