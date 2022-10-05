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
  console.log("안녕", thumbnail);
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
      <Row style={{ marginTop: "7px", fontSize: "13px" }}>
        <div>{`${winCount}승/${loseCount}패`}</div>
        {killAverage && <div>{`평균킬 ${killAverage}`}</div>}
      </Row>
      <Row style={{ marginTop: "8px", fontSize: "13px" }}>
        <div style={{ display: "flex" }}>
          <div>{`승률 ${rate}%`}</div>
          {killDeathRate && (
            <div style={{ marginLeft: "10px" }}>{`KD ${killDeathRate}%`}</div>
          )}
        </div>{" "}
        <div>{`래더 ${ladderPoint}점`}</div>
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
