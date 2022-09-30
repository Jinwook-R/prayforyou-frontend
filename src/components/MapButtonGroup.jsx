import React, { useState } from "react";
import Button from "./Button";
import { StyledButtonWrapper } from "./wrapper";

const PLACE_BUTTON = "battlePlace";
const GUN_BUTTON = "battleGun";
const ROUND_BUTTON = "battleRound";

const MapButtonGroup = ({
  clickedButton,
  handleClickedButton,
  width,
  justifyContent,
  marginRight,
}) => {
  return (
    <StyledButtonWrapper width={width} justifyContent={justifyContent}>
      <Button
        className={PLACE_BUTTON}
        name={PLACE_BUTTON}
        text="포지션별"
        handleOnClick={handleClickedButton}
        style={{
          backgroundColor: clickedButton === PLACE_BUTTON ? "#775ee2" : "#fff",
          color: clickedButton === PLACE_BUTTON ? "#fff" : "black",
          width: "75px",
          marginRight: marginRight ? marginRight : "0px",
        }}
      />
      <Button
        className={GUN_BUTTON}
        name={GUN_BUTTON}
        text="주총별"
        handleOnClick={handleClickedButton}
        style={{
          backgroundColor: clickedButton === GUN_BUTTON ? "#775ee2" : "#fff",
          color: clickedButton === GUN_BUTTON ? "#fff" : "black",
          width: "75px",
          marginRight: marginRight ? marginRight : "0px",
        }}
      />
      <Button
        className={ROUND_BUTTON}
        name={ROUND_BUTTON}
        text="라운드별"
        handleOnClick={handleClickedButton}
        style={{
          backgroundColor: clickedButton === ROUND_BUTTON ? "#775ee2" : "#fff",
          color: clickedButton === ROUND_BUTTON ? "#fff" : "black",
          width: "75px",
        }}
      />
    </StyledButtonWrapper>
  );
};

export default MapButtonGroup;
