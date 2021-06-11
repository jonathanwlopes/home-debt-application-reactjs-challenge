import * as S from "./styles";
import {
  Header,
  ScrollBox,
  SectionBox,
  WalletCase,
  GoalCase,
} from "../../components";
import dbDebtApplication from "../../mocks/index";
import { CalcAmount } from "../../modules/";

export const Home = () => {
  const user = dbDebtApplication.getUserById(2);

  return (
    <S.Container>
      <Header currency={user.currency} value={CalcAmount(user._id)} />
      <ScrollBox>
        <SectionBox>
          {user.wallet.map((wallet) => (
            <WalletCase
              key={wallet._id}
              bank={wallet.bank}
              category={wallet.type}
              currency={user.currency}
              value={wallet.amount.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            />
          ))}
        </SectionBox>
        <SectionBox title={"Metas"}>
          <GoalCase title={'Reserva'}>
          </GoalCase>
        </SectionBox>
      </ScrollBox>
      <S.Footer />
    </S.Container>
  );
};
