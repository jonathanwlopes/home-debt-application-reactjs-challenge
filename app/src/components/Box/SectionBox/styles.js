import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  max-height: 309px;
  min-height: 230px; 
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #53a9ff69;
  border-radius: 9px;
  margin-bottom: 1rem;
  /* display: flex; */
  display: ${props => props.visible === true ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 900;
  color: #53a9ff;
`;
