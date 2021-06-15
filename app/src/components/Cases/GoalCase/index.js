import * as S from "./styles";
import { GiStairsGoal } from "react-icons/gi";

export const GoalCase = ({ title, currency, value, percent }) => {
  return (
    <S.Container>
      <S.GoalIcon>
        <GiStairsGoal color="	#f3f7f8" size="26px" />
      </S.GoalIcon>
      <S.WrapperProgress>
        <S.Title>{title}</S.Title>
        <S.ProgressBarBox>
        <S.ProgressBar percent={percent}></S.ProgressBar>
        </S.ProgressBarBox>
      </S.WrapperProgress>
      <S.WrapperValue>
        <S.Currency>{currency}</S.Currency>
        <S.Value>{value}</S.Value>
      </S.WrapperValue>
    </S.Container>
  );
};
