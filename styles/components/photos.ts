import { colors } from "@styles/variables/colors";
import { device } from "@styles/variables/screen";
import styled from "styled-components";

export const StyledPhotos = styled.section`
  margin-top: 100px;
  padding: 5px;
  column-count: 1;
  @media ${device.tabletS} {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
  @media ${device.tabletL} {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  @media ${device.desktop} {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
`;

export const StyledPhoto = styled.article`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    div {
      opacity: 0.8;
    }
  }
  img {
    width: 100%;
    height: auto;
    margin: 5px 0;
    border-radius: 10px;
  }
  div {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 5px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${colors.black};
    opacity: 0;
    transition: all 0.5s ease-in-out;
    button {
      max-width: 100px;
      align-self: flex-start;
      justify-self: flex-end;
    }
    p {
      font-size: 0.8rem;
      color: white;
      align-self: flex-end;
      font-weight: bold;
    }
  }
`;
