import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px -12px 6px #00000012;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const HomeIcon = styled.div`
width: 56px;
height: 56px;
background-image: linear-gradient(15deg, #803075, #49206e);
border-radius: 50%;
position: absolute;
transform: translateY(-20px);
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
&:hover{background-image: linear-gradient(15deg, #803075, #b249b2)};
`