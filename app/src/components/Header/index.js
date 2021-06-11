import * as S from "./styles";
import { BiWallet } from "react-icons/bi";

export const Header = ({currency, value}) => {
  return (
    <S.Container>
      <S.WrapperValue>
        <S.Currency>{currency}</S.Currency>
        <S.Value>{value}</S.Value>
        <BiWallet color={'#FFF'} size={'22px'} cursor={'pointer'}/>
      </S.WrapperValue>
    </S.Container>
  );
};
