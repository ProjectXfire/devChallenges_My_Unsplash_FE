import styled from "styled-components";
import { device } from "../variables/screen";

export const Container = styled.main`
  @media ${device.desktop} {
    width: 1000px;
    margin: 0 auto;
  }
`;
