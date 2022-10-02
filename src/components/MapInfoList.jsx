import React from "react";
import MapInfoListItem from "./MapInfoListItem";
import { StyledList, StyledListItemWrapper, StyledListItem } from "./wrapper";
const MapInfoList = ({
  data = [],
  width,
  margin,
  outputText,
  clickedButton,
}) => {
  return (
    <StyledList width={width} margin={margin} borderRadius="15px">
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
