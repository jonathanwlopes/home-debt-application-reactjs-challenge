import * as S from "./styles";
import { BiHome } from "react-icons/bi";
import { BsCardList } from "react-icons/bs";

export const Footer = () => {
  return (
    <S.Container>
      <BiHome size={"2rem"} color={"#707070"} cursor={"pointer"} />
      <S.HomeIcon></S.HomeIcon>
      <BsCardList size={"2rem"} color={"#707070"} cursor={"pointer"} />
    </S.Container>
  );
};
