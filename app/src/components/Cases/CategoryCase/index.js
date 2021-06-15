import * as S from "./styles";
import { BiWallet, BiMessageSquareAdd } from "react-icons/bi";

export const CategoryCase = ({ title, category }) => {
  return (
    <S.Container>
      <S.WalletIcon>
        <BiWallet color="#FFF" size="22px" />
      </S.WalletIcon>
      <S.WrapperInfo>
        <S.Title>{title}</S.Title>
        <S.Category>{category}</S.Category>
      </S.WrapperInfo>
      <BiMessageSquareAdd cursor={"pointer"} size={"22px"} color={"#008080"} />
    </S.Container>
  );
};
