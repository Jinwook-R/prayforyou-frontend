import React from "react";
import Button from "./Button";
import ListItem from "./MapInfoListItem";
import { StyledList, StyledListItemWrapper, StyledListItem } from "./wrapper";
const MapInfoList = ({
  data = [],
  width,
  offset,
  handleOffset,
  margin,
  outputText,
}) => {
  return (
    <StyledList width={width} margin={margin} borderRadius="15px">
      {data.length &&
        data.slice(0, offset * 8).map((item, index) => {
          return (
            <ListItem
              key={`${index}`}
              item={item}
              outputText={outputText}
            ></ListItem>
          );
        })}
      {!data.length && (
        <StyledListItemWrapper>
          <StyledListItem textAlign="left">
            <p>결과 없음</p>
          </StyledListItem>
        </StyledListItemWrapper>
      )}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {offset * 8 < data.length && (
          <Button
            onClick={handleOffset}
            text={"더보기"}
            width={"160px"}
            height={"50px"}
            lineHeight={"40px"}
            fontSize={"20px"}
            borderRadius={"25px"}
          />
        )}
      </div>
    </StyledList>
  );
};

// const StyledList = styled.div`
//   width: ${(props) => props.width};
//   margin: ${(props) => props.margin};
//   height: 730px;
//   border-radius: 15px;
//   background-color: #775ee1;
//   overflow: scroll;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

export default MapInfoList;
