import React from "react";
import { HomeWrapper } from "./home_styles";
import { CommonText, SpanText } from "../../common/text_styles";
import { theme } from "../../theme/theme";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeWrapper>
      <CommonText fontSize="20px" fontWeight="600" color={theme.colors.clay}>
        Home
      </CommonText>
      <CommonText>
        Name: <SpanText></SpanText>
      </CommonText>
      <CommonText>
        Email: <SpanText></SpanText>
      </CommonText>
    </HomeWrapper>
  );
};
export default Home;
