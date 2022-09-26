import styled from "@emotion/styled";
const StyledSearch = styled.input`
  display: block;
  margin: 0 auto;
`;

const Search = () => {
  return <StyledSearch type="text" placeholder="닉네임을 입력하세요"></StyledSearch>;
};

export default Search;
