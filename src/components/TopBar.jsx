import styled from "@emotion/styled";

const TopBar = ({ nickname, battle }) => {
  console.log(battle);

  const { userType, battleGun, battlePlace, battleRound, battleStats } = battle;
  const { kill, death, gameCount, rate, updatedAt } = battleStats;

  console.log(battleGun, battlePlace, battleRound, battleStats);
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
  background-color: #6f42c1;
  color: white;
`;

export default TopBar;
