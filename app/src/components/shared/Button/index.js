import * as S from "./styles";

export const Button = ({ title, ...props }) => {
  return <S.Container {...props}> {title}</S.Container>;
};
