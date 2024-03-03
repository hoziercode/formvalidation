import React from "react";
import {
  AuthButton,
  Button,
  CreateAccountLeftSection,
  CreateAccountRightSection,
  CreateAccountWrapper,
  LogoContainer,
  RightSectionOnContainer,
  TextField,
} from "./create_account_styles";
import { AppImages } from "../../common/config/app_images";
import { CommonText } from "../../common/text_styles";
import { AppIcons } from "../../common/config/app_icons";
import { theme } from "../../theme/theme";

type CreateAccountProps = {};

const CreateAccount: React.FC<CreateAccountProps> = () => {
  return (
    <CreateAccountWrapper>
      <CreateAccountRightSection>
        <img src={AppImages.createAccountBg} alt="img" />
        <RightSectionOnContainer>
          <CommonText color="white" fontSize="34px" fontWeight="400">
            Find 3D Objects, Mock ups and Illustrations here
          </CommonText>
        </RightSectionOnContainer>
        <LogoContainer src={AppIcons.formLogo} alt="logo" />
      </CreateAccountRightSection>
      <CreateAccountLeftSection>
        <CommonText color={theme.colors.textGrey}>English(UK)</CommonText>
        <CommonText fontSize="36px" fontWeight="600">
          Create Account
        </CommonText>
        <div className="button_container">
          <AuthButton>
            <img src={AppIcons.google} alt="icon" />
            <CommonText color={theme.colors.darkGrey}>
              Sign up with google
            </CommonText>
          </AuthButton>
          <AuthButton>
            <img src={AppIcons.faceBook} alt="icon" />
            <CommonText color={theme.colors.darkGrey}>
              Sign up with facebook
            </CommonText>
          </AuthButton>
        </div>
        <CommonText
          color={theme.colors.textGrey}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          - OR -
        </CommonText>
        <TextField placeholder="Full Name"/>
        <TextField placeholder="Email Address"/>
        <TextField placeholder="Password"/>
        <Button>Create Account</Button>
      </CreateAccountLeftSection>
    </CreateAccountWrapper>
  );
};
export default CreateAccount;
