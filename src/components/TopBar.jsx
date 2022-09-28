import styled from "@emotion/styled";

const TopBar = ({ nickname, battle }) => {
  const { battleStats } = battle;
  const { kill, death, gameCount, rate, updatedAt } = battleStats;

  return (
    <StyledTopBar>
      <div>{nickname}</div>
      <div>
        <p>A보급 서플라이 리그</p>
        <p>킬뎃 {Math.floor((kill / (kill + death)) * 100)}% </p>
        <p>판킬 {Math.floor(kill / gameCount)} </p>
      </div>
    </StyledTopBar>
  );
};

const StyledTopBar = styled.div`
  background-color: #775ee1;
  color: white;
`;

export default TopBar;
