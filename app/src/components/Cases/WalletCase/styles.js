import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.7rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const WalletIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-image: linear-gradient(114deg, #53a9ff, #328de8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(10deg, #00ffff, #53a9ff69);
  }
`;

export const WrapperInfo = styled.div`
  margin-left: 1rem;
  flex: 1;
`;

export const Bank = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: #707070;
  text-align: left;
`;

export const Category = styled.h3`
  font-size: 14px;
  color: #707070;
  text-align: left;
`;

export const WrapperValue = styled.div``;

export const Currency = styled.h3`
  color: #53a9ff;
  font-size: 14px;
  font-weight: 900;
  text-align: center;
`;

export const Value = styled.h3`
  color: #53a9ff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
