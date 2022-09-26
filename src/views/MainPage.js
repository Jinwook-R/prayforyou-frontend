import Header from "../components/Header";
import styled from "@emotion/styled";
import Search from "../components/Search";

const StyledMainPage = styled.div`
  width: 350px;
  background-color: orange;
  margin: 0 auto;
  text-align: center;
`;

const MainPage = () => {
  return (
    <div>
      <StyledMainPage>
        <Header />
        <Search />
      </StyledMainPage>
    </div>
  );
};

export default MainPage;
