import { MatchListItem } from "../listItem";
import styled from "@emotion/styled";

const MatchRecordList = ({ matches }) => {
  return (
    <DesktopContainer>
      {(matches || []).map((match) => (
        <MatchListItem matchRecordMockData={match} />
      ))}
    </DesktopContainer>
  );
};

const DesktopContainer = styled.div`
  overflow: auto;
  > * + * {
    margin-top: 10px;
  }
`;

export default MatchRecordList;
