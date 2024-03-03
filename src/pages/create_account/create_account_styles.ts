import styled from "styled-components";
import { theme } from "../../theme/theme";

export const CreateAccountWrapper = styled.section`
  width: 100%;
  max-width: 1500px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const CreateAccountRightSection = styled.div`
  width: 47%;
  height: 100vh;
  position: relative;
  z-index: -2;
  & > :nth-child(1) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -3;
  }
`;

export const RightSectionOnContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 12rem;
`;

export const LogoContainer = styled.img`
  position: absolute;
  z-index: 20;
  top: 5%;
  left: 5%;
`;

export const CreateAccountLeftSection = styled.div`
  width: 53%;
  height: 100vh;
  background: ${theme.colors.primary};
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :nth-child(1) {
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  & .button_container {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;
  }

  & > :nth-child(5) {
    margin-top: 3rem;
  }
`;

export const AuthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.backgroundColor};
  border: none;
  padding: 5px 15px;
  gap: 10px;
  border-radius: 8px;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const TextField = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border-bottom: 1px solid ${theme.colors.darkGrey};
  border-right: 0;
  border-left: 0;
  border-top: 0;
  background: transparent;

  &:focus {
    border-bottom: 1px solid green;
  }

  &:active {
    border-bottom: 1px solid green;
  }

  &::placeholder {
    color: ${theme.colors.textGrey};
  }
`;

export const Button = styled.button`
  width: 60%;
  border: 0;
  margin-top: 2rem;
  height: 40px;
  background: ${theme.colors.buttonColor};
  border-radius: 10px;
  color: white;
`;
