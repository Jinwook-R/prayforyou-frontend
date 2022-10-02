import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { StyledButtonWrapper } from "../wrapper";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/** CellConfig
 *  @field name : string (컬럼 표시명)
 *  @field key : string (컬럼 indicator)
 *  @field width? : string (as width, 셀 width)
 *  @field align? : string (as start | center | end, cell의 align 속성)
 *  @field renderer : (data : object)=>ReactNode (data를 통해 각 셀을 그리게 될 렌더러)
 *  @field rowStyler : (data : object (rowData),index)=> style object (특정 rowData, index 혹은 전체 row에 대한 스타일 설정)
 */

const Table = ({
  cellConfigs,
  data,
  pageUnit = 8,
  bodyStyle,
  headerStyle,
  rowStyler,
}) => {
  const [pageCount, setPageCount] = useState(0);
  const isEnd = useMemo(() => {
    return (pageCount + 1) * pageUnit > data.length;
  }, [pageUnit, data, pageCount]);

  const slicedData = useMemo(() => {
    const sliceCount = (pageCount + 1) * pageUnit;
    const parsed = data.length < sliceCount ? data.length : sliceCount;
    return (data || []).slice(0, parsed);
  }, [data, pageCount, pageUnit]);

  const moreButtonHandler = () => {
    setPageCount((prevState) => prevState + 1);
  };

  return (
    <>
      <StyledTable>
        <TableHeader style={headerStyle}>
          {(cellConfigs || []).map((cellConfig, index) => (
            <HeaderCell
              key={`${index}`}
              justifyContent={cellConfig?.align || "start"}
              width={cellConfig?.width}
              style={cellConfig?.style}
            >
              {cellConfig.name}
            </HeaderCell>
          ))}
        </TableHeader>
        <TableBody style={bodyStyle}>
          {(slicedData || []).map((listItemData, rowIndex) => {
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
                      style={cellConfig?.style}
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

      {!isEnd && (
        <StyledButtonWrapper
          height={"80px"}
          justifyContent={"center"}
          onClick={moreButtonHandler}
          style={{
            width: "100%",
            marginTop: "20px",
            alignItems: "center",
            background: "#775ee2",
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
          }}
        >
          더보기
        </StyledButtonWrapper>
      )}
    </>
  );
};

const StyledTable = styled.div`
  overflow-x: auto;
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
  font-size: 20px;
  font-weight: bold;
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
  background: white;
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