import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBattle } from "../../redux/battle";
import { Map } from "../../components";
import { Banner, MapButtonGroup, TopBar, List } from "../../components";

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
  const disaptch = useDispatch();
  const { nickname, userId } = location.state;
  const banners = useSelector((store) => store.banner);

  useEffect(() => {
    disaptch(searchBattle(userId));
  }, []);

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
        <TopBar nickname={nickname} battle={userBattle}></TopBar>
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
            }}
          >
            <MapButtonGroup
              clickedButton={clickedButton}
              handleClickedButton={handleClickedButton}
              width="90%"
              justifyContent="left"
              marginRight="5px"
            />
            <div
              style={{
                margin: "0 auto",
                width: "90%",
                textAlign: "right",
                marginBottom: "15px",
              }}
            >
              <button
                style={{
                  color: "#fff",
                  backgroundColor: "#775ee2",
                  border: "none",
                  width: "65px",
                  height: "25px",
                  borderRadius: "15px",
                  marginRight: "10px",
                }}
              >
                높은 순
              </button>
              <button
                style={{
                  color: "#b3b3b3",
                  backgroundColor: "#808080",
                  border: "none",
                  width: "65px",
                  height: "25px",
                  width: "65px",
                  borderRadius: "15px",
                }}
              >
                낮은 순
              </button>
            </div>
            <List
              data={userBattle[clickedButton]}
              width="90%"
              outputText={
                (PLACE_BUTTON && ["place", "rate"]) ||
                (GUN_BUTTON && ["type", "useCount"]) ||
                (ROUND_BUTTON && ["round", "rate"])
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

export default Desktop;
