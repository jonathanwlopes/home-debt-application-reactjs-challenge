import * as S from "./styles";

export const SectionBox = ({ title, children, visible }) => {
  return (
    <S.Container visible={visible}>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};
