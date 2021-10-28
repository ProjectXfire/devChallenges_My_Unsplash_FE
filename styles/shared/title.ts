import styled from "styled-components";

interface TitleProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  weight?: boolean;
  shadowColor?: string;
}

export const Title = styled.h1<TitleProps>`
  font-weight: ${(props) => (props.weight ? "bold" : "normal")};
  font-size: ${(props) => {
    if (props.size === "sm") {
      return "1.5rem";
    }
    if (props.size === "lg") {
      return "3rem";
    }
    return "2rem";
  }};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: 5px 0;
  text-shadow: ${(props) =>
    props.shadowColor ? `1px 0px 4px ${props.shadowColor}` : "none"};
`;
