import styled from "styled-components";

export const ListBugurs = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 100%;
  height: 346px;
  gap: 20px;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  :hover {
    border: 2px solid #27ae60;
  }
  .Imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    width: 300px;
    max-width: 100%;
    height: 150px;
    overflow: hidden;
    img {
      width: 170px;
      height: 177px;
      max-width: 100%;
      object-fit: cover;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 1.125rem;
    padding-left: 15px;
  }
  span {
    font-weight: 400;
    font-size: 0.75rem;
    color: #828282;
    padding-left: 15px;
  }
  .price {
    font-weight: 600;
    font-size: 0.875rem;
    color: #27ae60;
  }
  button {
    width: 106px;
    height: 40px;
    margin-left: 15px;
    background-color: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
  }
`;
