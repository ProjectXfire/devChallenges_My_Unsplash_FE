import styled, { keyframes, css } from "styled-components";
import { device } from "@styles/variables/screen";
import { colors } from "@styles/variables/colors";

interface HeaderMenu {
  active?: boolean | null;
}

export const StyledHeaderMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 10px;
  z-index: 2;
  background: ${colors.lightGrey2};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.11);
  li:nth-child(1) {
    display: flex;
  }
`;

export const Menu = styled.ul`
  display: none;
  justify-content: space-between;
  @media ${device.tabletS} {
    display: flex;
  }
`;

export const SideMenu = styled.ul`
  display: none;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 509px) {
    display: fixed;
  }
  svg {
    cursor: pointer;
  }
`;

export const SideBar = styled.div<HeaderMenu>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 10px;
  background-color: ${colors.lightGrey};
  z-index: 3;
  transform: translateX(-100%);
  button {
    margin-top: 10px;
  }
  ${(props) => {
    if (props.active !== null && props.active) {
      return animationShow;
    }
    if (props.active !== null && !props.active) {
      return animationHide;
    }
    return "";
  }}
`;

export const BackgroundOnSideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`;

const showSidebar = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100%{
    transform: translateX(0%)
  }
`;
const hideSidebar = keyframes`
  0% {
    transform: translateX(0%)
  }
  100%{
    transform: translateX(-100%)
  }
`;

const animationShow = css`
  animation: ${showSidebar} 1s forwards;
`;

const animationHide = css`
  animation: ${hideSidebar} 1s forwards;
`;
