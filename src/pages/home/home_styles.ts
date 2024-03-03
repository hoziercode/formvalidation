import styled from "styled-components";
import { theme } from "../../theme/theme";

export const HomeWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoutButton = styled.button`
  width: 200px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  background: ${theme.colors.buttonColor};
  color: white;
  margin-top: 20px;
  cursor: pointer;
`;
