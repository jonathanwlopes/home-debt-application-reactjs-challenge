import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Value = styled.h3`
  width: 100%;
  background: #eeeeee 0% 0% no-repeat padding-box;
  border-radius: 9px;
  height: 36px;
  font-size: 19px;
  color: #53a9ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperButton = styled.div`
  margin-top: 0.5rem;
  width: 260px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const KeyboardButton = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #53a9ff;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  margin: 0.7rem 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #696969;
`;

export const RemoveStyle = {
  border: "none",
  cursor: "default",
};
