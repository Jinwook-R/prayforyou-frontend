import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { StyledButtonWrapper } from "../wrapper";
import { useMemo, useState } from "react";

/** CellConfig
 *  @field name : string (컬럼 표시명)
 *  @field key : string (컬럼 indicator)
 *  @field width? : string (as width, 셀 width)
 *  @field align? : string (as start | center | end, cell의 align 속성)
 *  @field renderer : (data : object)=>ReactNode (data를 통해 각 셀을 그리게 될 렌더러)
 *  @field rowStyler : (data : object (rowData),index)=> style object (특정 rowData, index 혹은 전체 row에 대한 스타일 설정)
 */

const Table = ({
  overflow = "auto",
  cellConfigs,
  data,
  bodyStyle,
  headerStyle,
  rowStyler,
  isEnd = true,
  onClickMoreButton,
}) => {
  return (
    <>
      <StyledTable overflow={overflow}>
        <TableHeader style={headerStyle}>
          {(cellConfigs || []).map((cellConfig, index) => (
            <HeaderCell
              key={`${index}`}
              justifyContent={cellConfig?.align || "start"}
              width={cellConfig?.width}
              style={{
                ...cellConfig?.style,
                fontWeight: headerStyle?.fontWeight && "inherit",
                fontSize: headerStyle?.fontSize && "inherit",
                color: headerStyle?.color && "inherit",
                background: headerStyle?.background && "inherit",
              }}
            >
              {cellConfig.name}
            </HeaderCell>
          ))}
        </TableHeader>
        <TableBody style={bodyStyle}>
          {(data || []).map((listItemData, rowIndex) => {
            const inheritStyle = rowStyler
              ? rowStyler(listItemData, rowIndex)
              : undefined;
            return (
              <TableRow
                key={`${rowIndex}`}
                style={
                  rowStyler ? rowStyler(listItemData, rowIndex) : undefined
                }
              >
                {cellConfigs.map((cellConfig, cellIndex) => {
                  return (
                    <RowCell
                      key={`${rowIndex}-${cellIndex}`}
                      justifyContent={cellConfig?.align || "start"}
                      width={cellConfig?.width}
                      style={{
                        ...cellConfig?.style,
                        fontWeight: inheritStyle?.fontWeight && "inherit",
                        fontSize: inheritStyle?.fontSize && "inherit",
                        color: inheritStyle?.color && "inherit",
                        background: inheritStyle?.background && "inherit",
                      }}
                    >
                      {cellConfig?.key
                        ? listItemData[cellConfig.key] || ""
                        : cellConfig.renderer(listItemData)}
                    </RowCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>

      {!isEnd && data.length > 0 && (
        <StyledButtonWrapper
          height={"80px"}
          justifyContent={"center"}
          onClick={onClickMoreButton}
          style={{
            width: "100%",
            marginTop: "20px",
            alignItems: "center",
            background: "#775ee2",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
            cursor: "pointer",
          }}
        >
          더보기
        </StyledButtonWrapper>
      )}
    </>
  );
};

const StyledTable = styled.div`
  overflow-x: ${(props) => props.overflow};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const TableHeader = styled.div`
  height: 40px;
  background: #775ee2;
  align-self: stretch;
  display: flex;
`;

const TableBody = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  > * + * {
    margin-top: 5px;
  }
`;
const HeaderCell = styled.div`
  color: white;
  display: flex;
  background: #775ee2;
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  flex: ${(props) => (props.width ? "none" : 1)};
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: center;
  height: 100%;
`;
const TableRow = styled.div`
  height: 80px;
  display: flex;
  justify-self: stretch;
  align-items: center;
  background: white;
`;
const RowCell = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: normal;
  background: inherit;
  height: 100%;
  flex: ${(props) => (props.width ? "none" : 1)};
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: center;
`;

Table.propTypes = {
  cellConfigs: PropTypes.arrayOf(PropTypes.element), // = CellConfig[]
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
