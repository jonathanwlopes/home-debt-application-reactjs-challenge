import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 9px;
  display: ${(props) => (props.visible === true ? "block" : "none")};
  padding: 0.5rem;
`;

export const InputGoal = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #53a9ff;
  border-radius: 31px;
  width: 95%;
  height: 35px;
  outline: none;
  padding-left: 1rem;
  color: #53a9ff;
  margin: ${props => props.margin}
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: ${props => props.margin}
`;

export const Title = styled.h3`
  font-size: 19px;
  color: #53a9ff;
`;

export const InputDate = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #53a9ff;
  border-radius: 31px;
  outline: none;
  padding-left: 1rem;
  color: #53a9ff;
  width: 145px;
  height: 35px;
`;
