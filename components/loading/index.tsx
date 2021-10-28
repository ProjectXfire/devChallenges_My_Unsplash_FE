import React from "react";
// Styled components
import {
  StyledLoading,
  StyledLoadingContainer,
} from "@styles/components/loading";

export const Loading = () => {
  return (
    <StyledLoadingContainer>
      <StyledLoading>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledLoading>
    </StyledLoadingContainer>
  );
};
