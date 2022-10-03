import React, { useEffect, useState } from "react";
import { Title, Search, DropDown } from "../../components";
import { useDispatch } from "react-redux";
import { fetchAllBanners } from "../../redux/banner/bannerSlice";

const Mobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBanners());
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (value) => {
    setDropDown(value);
  };

  return (
    <div style={{ padding: "32px 16px" }}>
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
    </div>
  );
};

export default Mobile;
