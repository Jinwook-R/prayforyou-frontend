import styled from "@emotion/styled";
const Mobile = () => {
  return (
    <div>
      <div
        style={{
          height: "192px",
          width: "90%",
          margin: "0 auto",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0 19px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>래더</p>
          <p>1976점</p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>승률</p>
          <p>717승 512패 57.9%</p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>랭킹</p>
          <p>1위</p>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <div
            style={{
              backgroundColor: "#676472",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>제 3보급창고 - 2일 전</div>
            <div>-13점</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ backgroundColor: "#efefef" }}>패</div>
            <div style={{ backgroundColor: "#fff" }}>16/11(62.1%)</div>
            <div style={{ backgroundColor: "#fff" }}>토끼토끼 클랜</div>
            <div style={{ backgroundColor: "#fff" }}>#ToRtOiSe</div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#676472",
            display: "flex",
            alignItems: "center",
          }}
        >
          nn
        </div>
      </div>
      <StyledButton>더보기</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  display: block;
  width: 90%;
  margin: 0 auto;
  height: 50px;
  background-color: #775ee2;
  font-weight: bold;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export default Mobile;
