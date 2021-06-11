import * as S from "./styles";
import { GiStairsGoal } from "react-icons/gi";

export const GoalCase = ({title}) => {
  return (
    <S.Container>
      <S.GoalIcon>
        <GiStairsGoal color="	#f3f7f8" size="26px" />
      </S.GoalIcon>
      <S.WrapperProgress>
          <S.Title>{title}</S.Title>
          <S.ProgressBar></S.ProgressBar>
      </S.WrapperProgress>
    </S.Container>
  );
};
