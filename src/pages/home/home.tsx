import React, { useEffect, useState } from "react";
import { HomeWrapper, LogoutButton } from "./home_styles";
import { CommonText, SpanText } from "../../common/text_styles";
import { theme } from "../../theme/theme";
import { useNavigate } from "react-router-dom";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<any>();
  const [userName, setUserName] = useState<any>();

  const logOutUser = () => {
    localStorage.setItem("userName", "");
    localStorage.setItem("userEmail", "");
    localStorage.setItem("user", "");
    navigate("/create_account", { replace: true });
  };

  useEffect(() => {
    const redirectBackToCreateAccountPage = () => {
      const user = localStorage.getItem("user");
      try {
        if (!user || user === "") {
          navigate("/create_account", { replace: true });
        }
      } catch (e) {
        console.log(e);
      }
    };
    redirectBackToCreateAccountPage();
  }, [navigate]);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");

    const checkUser = () => {
      if (name || name !== "" || (email !== "" && email)) {
        setUserEmail(email);
        setUserName(name);
      }
    };

    checkUser();
  }, []);

  return (
    <HomeWrapper>
      <CommonText fontSize="20px" fontWeight="600" color={theme.colors.clay}>
        Home
      </CommonText>
      <CommonText>
        Name: <SpanText>{userName}</SpanText>
      </CommonText>
      <CommonText>
        Email: <SpanText>{userEmail}</SpanText>
      </CommonText>
      <LogoutButton onClick={logOutUser}>Logout</LogoutButton>
    </HomeWrapper>
  );
};
export default Home;
