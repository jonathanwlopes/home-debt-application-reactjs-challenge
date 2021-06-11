import * as S from "./styles";

export const SectionBox = ({ title, children }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};
