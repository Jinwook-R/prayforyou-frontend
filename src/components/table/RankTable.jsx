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
 */

const RankTable = ({ cellConfigs, data, pageUnit = 8 }) => {
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
      <Table>
        <TableHeader>
          {(cellConfigs || []).map((cellConfig, index) => (
            <HeaderCell
              key={`${index}`}
              justifyContent={cellConfig?.align || "start"}
              width={cellConfig?.width || "auto"}
            >
              {cellConfig.name}
            </HeaderCell>
          ))}
        </TableHeader>
        <TableBody>
          {(slicedData || []).map((listItemData, rowIndex) => {
            return (
              <TableRow key={`${rowIndex}`}>
                {cellConfigs.map((cellConfig, cellIndex) => {
                  return (
                    <RowCell
                      key={`${rowIndex}-${cellIndex}`}
                      justifyContent={cellConfig?.align || "start"}
                      width={cellConfig?.width || "auto"}
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
      </Table>

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

const Table = styled.div`
  overflow-x: auto;
`;

const TableHeader = styled.div`
  height: 40px;
  width: fit-content;
  background: #775ee2;
  display: flex;
`;

const TableBody = styled.div`
  width: fit-content;
  > * + * {
    margin-top: 5px;
  }
`;
const HeaderCell = styled.div`
  color: white;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  flex: ${(props) => (props.width ? "none" : 1)};
  width: ${(props) => props.width || "auto"};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: center;
  height: 100%;
`;
const TableRow = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
`;
const RowCell = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: normal;
  flex: ${(props) => (props.width ? "none" : 1)};
  width: ${(props) => props.width || "auto"};
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: center;
`;

RankTable.propTypes = {
  cellConfigs: PropTypes.arrayOf(PropTypes.element), // = CellConfig[]
  data: PropTypes.arrayOf(PropTypes.object),
};

export default RankTable;
