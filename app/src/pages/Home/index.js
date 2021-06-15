import * as S from "./styles";
import {
  Header,
  ScrollBox,
  SectionBox,
  ModalBox,
  WalletCase,
  GoalCase,
  Button,
} from "../../components";
import dbDebtApplication from "../../mocks/index";
import { CalcAmount } from "../../modules/";
import { useEffect, useState } from "react";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser(dbDebtApplication.getUserById(2));
    }, 300);
  }, []);

  if (!user) {
    return <S.Container>Carregando...</S.Container>;
  }

  return (
    <S.Container>

      <Header currency={user.currency} value={CalcAmount(user.wallet)} />
      <ScrollBox>
      <ModalBox visible={!isVisible}></ModalBox>
        <SectionBox visible={isVisible}>
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
        <SectionBox title={"Metas"} visible={isVisible}>
          {user.goals.map((goal) => (
            <GoalCase
              key={goal._id}
              percent={(goal.amount / goal.value) * 100}
              title={goal.name}
              currency={user.currency}
              value={goal.amount.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
              })}
            ></GoalCase>
          ))}
          {
            <Button
              title={"Nova Meta"}
              onClick={() => {
                isVisible === true ? setVisible(false) : setVisible(true);
              }}
            ></Button>
          }
        </SectionBox>
      </ScrollBox>
    </S.Container>
  );
};
