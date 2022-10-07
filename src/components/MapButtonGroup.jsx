import React, { useState } from "react";
import Button from "./Button";
import { StyledButtonWrapper } from "./wrapper";

const PLACE_BUTTON = "battlePlace";

const MapButtonGroup = ({
  clickedButton,
  width,
  height,
  justifyContent,
  marginRight,
}) => {
  return (
    <StyledButtonWrapper
      width={width}
      justifyContent={justifyContent}
      height={height}
    >
      <Button
        className={PLACE_BUTTON}
        name={PLACE_BUTTON}
        text="포지션별"
        style={{
          backgroundColor: clickedButton === PLACE_BUTTON ? "#775ee2" : "#fff",
          color: clickedButton === PLACE_BUTTON ? "#fff" : "black",
          width: "80px",
          marginRight: marginRight ? marginRight : "0px",
        }}
      />
    </StyledButtonWrapper>
  );
};

export default MapButtonGroup;
