import styled, { css } from "styled-components";

interface ButtonProps {
  color?: string;
  bkgColor?: string;
  weight?: boolean;
  shadow?: boolean;
  size?: "sm" | "md" | "lg";
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 15px;
  padding: ${(props) => {
    if (props.size === "sm") {
      return "5px 10px";
    }
    if (props.size === "lg") {
      return "12px 17px";
    }
    return "10px 15px";
  }};
  font-size: ${(props) => {
    if (props.size === "sm") {
      return "0.8rem";
    }
    if (props.size === "lg") {
      return "1.2rem";
    }
    return "1rem";
  }};
  outline: none;
  border: ${(props) =>
    props.bkgColor ? `1px solid ${props.bkgColor}` : "1px solid white"};
  color: ${(props) => (props.bkgColor ? props.bkgColor : "white")};
  background-color: ${(props) => (props.color ? props.color : "black")};
  border-radius: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.weight ? "bold" : "none")};
  transition: all 0.5s ease-in-out;
  box-shadow: ${(props) =>
    props.shadow ? "0px 0px 4px 1px rgba(0, 0, 0, 0.11)" : "none"};
  &:hover {
    border: ${(props) =>
      props.color ? `1px solid ${props.color}` : "1px solid black"};
    color: ${(props) => (props.color ? props.color : "black")};
    background-color: ${(props) => (props.bkgColor ? props.bkgColor : "white")};
  }
`;
