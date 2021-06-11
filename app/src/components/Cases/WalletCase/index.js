import * as S from "./styles";
import { BiWallet } from "react-icons/bi";

export const WalletCase = ({ bank, category, currency, value }) => {
  return (
    <S.Container>
      <S.WalletIcon>
        <BiWallet color="#FFF" size="22px" />
      </S.WalletIcon>
      <S.WrapperInfo>
        <S.Bank>{bank}</S.Bank>
        <S.Category>{category}</S.Category>
      </S.WrapperInfo>
      <S.WrapperValue>
        <S.Currency>{currency}</S.Currency>
        <S.Value>{value}</S.Value>
      </S.WrapperValue>
    </S.Container>
  );
};
