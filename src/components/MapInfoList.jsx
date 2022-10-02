import React from "react";
import MapInfoListItem from "./MapInfoListItem";
import { StyledList, StyledListItemWrapper, StyledListItem } from "./wrapper";
import { useMediaQuery } from "react-responsive";
import { BREAK_POINT } from "../utils/constants";
const MapInfoList = ({
  data = [],
  width,
  margin,
  outputText,
  clickedButton,
}) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAK_POINT})`,
  });
  return (
    <StyledList
      maxHeight={isMobile ? "auto" : "850px"}
      width={width}
      margin={margin}
      borderRadius="15px"
    >
      {data.length &&
        data.map((item, index) => {
          return (
            <MapInfoListItem
              clickedButton={clickedButton}
              key={`${index}`}
              item={item}
              index={index}
              outputText={outputText}
            />
          );
        })}
      {!data.length && (
        <StyledListItemWrapper>
          <StyledListItem textAlign="left">
            <p>결과 없음</p>
          </StyledListItem>
        </StyledListItemWrapper>
      )}
    </StyledList>
  );
};

export default MapInfoList;
