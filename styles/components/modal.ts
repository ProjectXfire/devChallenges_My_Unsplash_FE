import { colors } from "@styles/variables/colors";
import { device } from "@styles/variables/screen";
import styled from "styled-components";

interface ModalProps {
  active?: boolean | null;
}

export const StyledModal = styled.div<ModalProps>`
  position: fixed;
  top: 150px;
  left: 5%;
  right: 5%;
  background-color: ${colors.white};
  z-index: 3;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.11);
  padding: 10px;
  transform: translateY(calc(-100% - 150px));
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.active
      ? "transform: translateY(0);"
      : "transform: translateY(calc(-100% - 150px));"}
  @media ${device.tabletL} {
    left: 20%;
    right: 20%;
  }
  @media ${device.desktop} {
    left: 30%;
    right: 30%;
  }
`;

export const ModalGroup = styled.form`
  width: 100%;
  min-width: 250px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  label {
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 5px;
  }
  input {
    outline: none;
    padding: 10px 15px;
    border: 1px solid ${colors.darkGrey};
    border-radius: 10px;
    &::placeholder {
      color: ${colors.darkGrey};
    }
    &:focus {
      border: 1px solid ${colors.black};
    }
  }
  span {
    margin-left: 10px;
    margin-top: 5px;
    color: ${colors.red};
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const GroupActions = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
`;
