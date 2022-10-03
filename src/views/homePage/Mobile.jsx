import React, { useEffect, useState } from "react";
import { Banner, Title, Search, DropDown } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBanners } from "../../redux/banner/bannerSlice";

const bannerProps = {
  width: "100%",
  height: "100px",
  marginBottom: "16px",
};

const Mobile = () => {
  const banners = useSelector((store) => store.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBanners());
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (value) => {
    setDropDown(value);
  };

  return (
    <div style={{ padding: "0 16px" }}>
      <Banner
        imgUrl={banners?.data?.typeA}
        {...bannerProps}
        height="50px"
        marginBottom="100px"
        marginTop="35px"
      />
      <Title width="210px" />
      <div
        style={{ position: "relative" }}
        onMouseDown={(e) => {
          if (!e.target.className.includes("searchInput")) {
            e.preventDefault();
          }
        }}
      >
        <Search
          dropDown={dropDown}
          handleDropDown={handleDropDown}
          style={{ marginInline: "32px" }}
        />
        {dropDown && (
          <DropDown width="100%" top={48} left={0} marginBottom={"20px"} />
        )}
        {!dropDown && (
          <div
            style={{
              height: "250px",
            }}
          />
        )}
      </div>
      <Banner
        imgUrl={banners?.data?.typeB}
        {...bannerProps}
        marginTop="16px"
        width="90%"
        marginLeft="auto"
        marginRight="auto"
      />
      <Banner
        imgUrl={banners?.data?.typeC}
        {...bannerProps}
        width="90%"
        marginLeft="auto"
        marginRight="auto"
      />
      <Banner imgUrl={banners?.data?.typeA} {...bannerProps} height="50px" />
    </div>
  );
};

export default Mobile;
