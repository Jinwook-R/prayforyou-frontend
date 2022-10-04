import PropTypes from "prop-types";
import styled from "@emotion/styled";

import sampleImg from "../../assets/clan_logo_sample_1.png";
import { Text } from "../common";
export const clanListItemMockData = {
  name: "토끼토끼 클랜",
  thumbnail: sampleImg, //img url
  rank: 1,
  winCount: 2124,
  loseCount: 124,
  //rate = winCount / (winCount + loseCount)
  ladderPoint: 1234,
};

const ClanListItem = ({
  name,
  thumbnail,
  rank,
  winCount,
  loseCount,
  ladderPoint,
}) => {
  return (
    <ClanListItemWrapper>
      <ClanListItemCell
        width={"20px"}
        paddingInline={"0px"}
        paddingRight={"24px"}
      >
        <Text fontSize={"20px"} fontWeight={"bold"}>
          {rank}
        </Text>
      </ClanListItemCell>
      <ClanListItemCell paddingInline={"11px"}>
        <img width={40} height={40} src={thumbnail} />
      </ClanListItemCell>
      <ClanListItemCell
        flex={1}
        paddingInline={"11px"}
        flexDirection={"column"}
        alignItems={"start"}
      >
        <Text fontSize={"20px"} height={"29px"} fontWeight={"bold"}>
          {name}
        </Text>
        <Text height={"29px"}>{`${winCount}승/${loseCount}패`}</Text>
      </ClanListItemCell>
      <ClanListItemCell
        style={{
          fontSize: "13px",
          height: "29px",
          color: "#000",
        }}
        paddingInline={"11px"}
        flexDirection={"column"}
      >
        <Text>{`승률 ${(winCount / (winCount + loseCount)).toFixed(2)}%`}</Text>
        <Text>{`래더 ${ladderPoint}점`}</Text>
      </ClanListItemCell>
    </ClanListItemWrapper>
  );
};

const ClanListItemWrapper = styled.div`
  border-radius: 15px;
  background: white;
  padding: 18px 32px;
  
  height: 90px;
  display: flex;
  align-items: center;
`;

const ClanListItemCell = styled.div`
  padding-inline: ${(props) => props.paddingInline || "10px"};
  padding-right: ${(props) => props.paddingRight || "10px"};
  flex: ${(props) => props.flex || "none"};
  width: ${(props) => props.width || "auto"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;

ClanListItem.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string, //img url
  rank: PropTypes.number,
  winCount: PropTypes.number,
  loseCount: PropTypes.number,
  //rank = winCount / (winCount + loseCount)
  ladderPoint: PropTypes.number,
};

export default ClanListItem;
