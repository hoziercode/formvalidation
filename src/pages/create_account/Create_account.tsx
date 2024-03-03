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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

type CreateAccountProps = {};

const CreateAccount: React.FC<CreateAccountProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("full name is required"),
      email: Yup.string().email("Invaild email address").required("email is required"),
      password: Yup.string().min(8, "must be at least 8 digits").required("password is required"),
    }),

    onSubmit: (values) => {
      try {
        localStorage.setItem("userName", values.fullName);
        localStorage.setItem("userEmail", values.email);
        localStorage.setItem("user", "true");
        navigate("/", { replace: true });
      } catch (e) {
        console.log(e);
      }
    },
  });

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
      <CreateAccountLeftSection onSubmit={formik.handleSubmit}>
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
        <TextField
          placeholder="Full Name"
          type="text"
          id="name"
          name="fullName"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              color: "red",
            }}
          >
            <CommonText color="red"> {formik.errors.fullName}</CommonText>
          </div>
        ) : null}
        <TextField
          placeholder="Email Address"
          type="email"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              color: "red",
            }}
          >
            <CommonText color="red"> {formik.errors.email}</CommonText>
          </div>
        ) : null}
        <TextField
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              color: "red",
            }}
          >
            <CommonText color="red"> {formik.errors.password}</CommonText>
          </div>
        ) : null}
        <Button type="submit">Create Account</Button>
      </CreateAccountLeftSection>
    </CreateAccountWrapper>
  );
};
export default CreateAccount;
