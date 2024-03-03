import styled from "styled-components";
interface TextProbs {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontFamily?: any;
  textDecoration?: any;
}
export const Heading1 = styled.h1<TextProbs>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-family: "Inter", sans-serif;
  line-height: ${(props) => props.lineHeight};
`;

export const Heading2 = styled.h2<TextProbs>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-family: ${(probs) => probs.fontFamily || "Inter"};
`;

export const Heading3 = styled.h3<TextProbs>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "1.25rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-family: ${(probs) => probs.fontFamily || "Inter"};
`;

export const Heading4 = styled.h4<TextProbs>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "1.1rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-family: ${(probs) => probs.fontFamily || "Inter"};
`;

export const CommonText = styled.p<TextProbs>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "regular"};
  line-height: ${(props) => props.lineHeight};
  font-family: ${(probs) => probs.fontFamily || "Inter"};
  text-decoration: ${(probs) => probs.textDecoration};
`;

export const SpanText = styled.span<TextProbs>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-family: ${(probs) => probs.fontFamily || "Inter"};
  line-height: ${(props) => props.lineHeight};
`;

export const Heading6 = styled.h6<TextProbs>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "0.875rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-family: ${(probs) => probs.fontFamily || "Inter"};
`;
