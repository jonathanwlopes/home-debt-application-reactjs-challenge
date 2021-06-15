import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.7rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const GoalIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-image: linear-gradient(137deg, #ff5353, #de5959);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(10deg, #ff6347, #ffa07a);
  }
`;

export const WrapperProgress = styled.div`
  margin-left: 1rem;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #707070;
  font-weight: 700;
  text-align: left;
  margin-bottom: 0.3rem;
`;

export const ProgressBarBox = styled.div`
  width: 90%;
`;

export const ProgressBar = styled.div`
  width: ${(props) => props.percent}%;
  max-width: 100%;
  border: 1px solid #53a9ff;
  border-radius: 6px;
  background: transparent linear-gradient(90deg, #53a9ff 0%, #328de8 100%) 0% 0%
    no-repeat padding-box;
  height: 11px;
`;
export const WrapperValue = styled.div``;

export const Currency = styled.h3`
  color: #53a9ff;
  font-size: 14px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 0.3rem;
`;

export const Value = styled.h3`
  color: #53a9ff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
