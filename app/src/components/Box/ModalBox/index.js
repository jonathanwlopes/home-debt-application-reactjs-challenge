import * as S from "./styles";
import { CategoryCase, Keyboard, Button } from "../../../components";

export const ModalBox = ({ visible }) => {
  return (
    <S.Container visible={visible}>
      <CategoryCase title={'Categoria'} category={'Imobiliária'}/>
      <S.InputGoal placeholder={'Nome da Meta'} margin={'0.5rem 0rem'}/>
      <S.WrapperInput margin={'0.5rem 0rem'}>
        <S.Title>Final da Meta</S.Title>
        <S.InputDate type={'date'} />
      </S.WrapperInput>
    <Keyboard />
    <Button title={'Criar Meta'}></Button>
    </S.Container>
  );
};
