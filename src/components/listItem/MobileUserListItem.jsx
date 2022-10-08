import styled from "@emotion/styled";
import { User } from "../common";

const MobileUserListItem = ({
  userName,
  thumbnail,
  rank,
  onClick,
  isDownTarget,
  winCount,
  loseCount,
  killAverage,
  killDeathRate,
  rate,
  ladderPoint,
}) => {
  return (
    <Wrapper style={{ background: isDownTarget ? "#ffebeb" : "white" }}>
      <Row style={{ fontSize: "13px" }}>
        <User
          paddingBetween={"8px"}
          name={userName}
          onClick={onClick}
          thumbnail={thumbnail}
          fontSize={"15px"}
          thumbnailSize={20}
          fontWeight={"bold"}
        />
        <div>{`${rank}위`}</div>
      </Row>

      <Row style={{ marginTop: "16px", fontSize: "13px" }}>
        <div style={{ display: "flex" }}>
          <div>{`${winCount}승/${loseCount}패`}</div>
          {typeof killDeathRate === "number" && (
            <div style={{ marginLeft: "10px" }}>{`KD ${killDeathRate.toFixed(
              1
            )}%`}</div>
          )}
        </div>{" "}
        <div>{`래더 ${ladderPoint}점`}</div>
      </Row>
      <Row style={{ marginTop: "7px", fontSize: "13px" }}>
        {typeof rate === "number" && <div>{`승률 ${rate.toFixed(1)}%`}</div>}
        {typeof killAverage === "number" && (
          <div>{`평균킬 ${killAverage.toFixed(1)}`}</div>
        )}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  padding: 13px 30px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  height: ${(props) => props.height || "auto"};
  align-items: center;
  justify-content: space-between;
`;

export default MobileUserListItem;
