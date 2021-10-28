import styled from "styled-components";
import { colors } from "@styles/variables/colors";

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 10px;
  background-color: ${colors.white};
  input {
    background-color: ${colors.white};
    outline: none;
    border: none;
    &::placeholder {
      color: ${colors.lightGrey};
    }
  }
`;
