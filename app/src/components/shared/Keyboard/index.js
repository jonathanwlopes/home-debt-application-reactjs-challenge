import * as S from "./styles";
import { FiDelete } from "react-icons/fi";

export const Keyboard = () => {
  return (
    <S.Container>
      <S.Value>R$ 100,00</S.Value>
      <S.WrapperButton>
        <S.KeyboardButton>1</S.KeyboardButton>
        <S.KeyboardButton>2</S.KeyboardButton>
        <S.KeyboardButton>3</S.KeyboardButton>
        <S.KeyboardButton>4</S.KeyboardButton>
        <S.KeyboardButton>5</S.KeyboardButton>
        <S.KeyboardButton>6</S.KeyboardButton>
        <S.KeyboardButton>7</S.KeyboardButton>
        <S.KeyboardButton>8</S.KeyboardButton>
        <S.KeyboardButton>9</S.KeyboardButton>
        <S.KeyboardButton style={S.RemoveStyle}></S.KeyboardButton>
        <S.KeyboardButton>0</S.KeyboardButton>
        <S.KeyboardButton style={S.RemoveStyle}>
          <FiDelete cursor={"pointer"} size={"1.5rem"} />
        </S.KeyboardButton>
      </S.WrapperButton>
    </S.Container>
  );
};
