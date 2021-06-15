import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-height: calc(100% - 150px);
  transform: translateY(-20px);
  overflow-y: auto;
`;
