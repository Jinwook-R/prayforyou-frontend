import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map } from "../../components";
import { Banner, MapButtonGroup, TopBar, MapInfoList } from "../../components";

const PLACE_BUTTON = "battlePlace";
const GUN_BUTTON = "battleGun";
const ROUND_BUTTON = "battleRound";

const BANNER_PROPS = {
  width: "85%",
  height: "100px",
  margin: "16px auto",
};

const Desktop = ({
  location,
  userBattle,
  clickedButton,
  handleClickedButton,
  offset,
  handleOffset,
}) => {
  const banners = useSelector((store) => store.banner);
  const { nickname, userId } = location.state;
  const [sortOrder, setSortOrder] = useState('desc')

  const handleOnClick = (e) => {
    if(e.target.className === sortOrder) return;
    e.target.className.includes('asc') && setSortOrder('asc');
    e.target.className.includes('desc') && setSortOrder('desc');
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          minWidth: "1615px",
          backgroundColor: "#775ee1",
          boxShadow: "0 5px 10px #6852c6 inset",
          paddingTop: "10px",
        }}
      >
        <TopBar
          userId={userId}
          nickname={nickname}
          battle={userBattle}
        ></TopBar>
      </div>
      <div
        style={{
          minWidth: "1615px",
        }}
      >
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            maxWidth: "1500px",
            margin: "0 auto",
            marginTop: "32px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: "40%",
            }}
          >
            <Map battle={userBattle}></Map>
            <Banner
              imgUrl={banners?.data?.typeA}
              {...BANNER_PROPS}
              height="50px"
            />
            <Banner
              imgUrl={banners?.data?.typeA}
              {...BANNER_PROPS}
              height="50px"
            />
          </div>
          <div
            style={{
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: "45%",
              marginLeft: "auto",
            }}
          >
            <MapButtonGroup
              clickedButton={clickedButton}
              handleClickedButton={handleClickedButton}
              width="100%"
              height="35px"
              justifyContent="left"
              marginRight="5px"
            />
            <div
              style={{
                margin: "0 auto",
                width: "100%",
                textAlign: "right",
                marginBottom: "15px",
              }}
            >
              <StyledSortButton
                className="desc"
                onClick={handleOnClick}
                color = {sortOrder === 'desc' ? '#fff' : '#b3b3b3'}
                backgroundColor = {sortOrder === 'desc' ? '#775ee2' : '#808080'}
              >
                높은순
              </StyledSortButton>
              <StyledSortButton
                className="asc"
                onClick={handleOnClick}           
                color = {sortOrder === 'asc' ? '#fff' : '#b3b3b3'}
                backgroundColor = {sortOrder === 'asc' ? '#775ee2' : '#808080'}                
                >
                낮은순
              </StyledSortButton>
            </div>
            <MapInfoList
              data={userBattle[clickedButton].slice().sort((a,b) => {
                if(sortOrder === 'asc'){
                  if(clickedButton === PLACE_BUTTON) {
                    return a['rate'] - b['rate']
                  }
                  
                  if(clickedButton === GUN_BUTTON) {
                    return a['useCount'] - b['useCount']
                  }
                                    
                  if(clickedButton === ROUND_BUTTON) {
                    return a['rate'] - b['rate']
                  }

                }else if(sortOrder === 'desc') {
                  if(clickedButton === PLACE_BUTTON) {
                    return b['rate'] - a['rate']
                  }

                  if(clickedButton === GUN_BUTTON) {
                    return b['useCount'] - a['useCount']
                  }

                  if(clickedButton === ROUND_BUTTON) {
                    return b['rate'] - a['rate']
                  }
                }
              })}
              width="100%"
              outputText={
                (clickedButton === PLACE_BUTTON && ["place", "rate"]) ||
                (clickedButton === GUN_BUTTON && ["type", "useCount"]) ||
                (clickedButton === ROUND_BUTTON && ["round", "rate"])
              }
              offset={offset}
              handleOffset={handleOffset}
            />
            <Banner
              imgUrl={banners?.data?.typeA}
              {...BANNER_PROPS}
              height="50px"
            />
            <Banner
              imgUrl={banners?.data?.typeA}
              {...BANNER_PROPS}
              height="50px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const StyledSortButton = styled.button`
  color: ${(props)=> props.color};
  background-color: ${(props)=> props.backgroundColor};
  border: none;
  width: 75px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  text-align: center;
`;


export default Desktop;
