import styled from "@emotion/styled";
import { User } from "../common";

const MobileClanListItem = ({
  clanName,
  thumbnail,
  isDownTarget,
  leagueType,
  winCount,
  loseCount,
  ladderPoint,
}) => {
  return (
    <Wrapper style={{ background: isDownTarget ? "#ffebeb" : "white" }}>
      <Row style={{ fontSize: "13px" }}>
        <User
          paddingBetween={"8px"}
          name={clanName}
          thumbnailSize={20}
          thumbnail={thumbnail}
          fontSize={"15px"}
          fontWeight={"bold"}
        />
        <div>{`${leagueType === "first" ? 1 : 2}부리그`}</div>
      </Row>
      <Row
        style={{ marginTop: "7px", fontSize: "13px" }}
      >{`${winCount}승/${loseCount}패`}</Row>
      <Row style={{ marginTop: "8px", fontSize: "13px" }}>
        <div>{`승률 ${(winCount / (winCount + loseCount)).toFixed(1)}%`}</div>{" "}
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

export default MobileClanListItem;
