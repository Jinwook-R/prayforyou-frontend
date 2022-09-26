import axios from "axios";

const getMaps = async (name) => {
  const datas = await axios.get(
    `https://api.pray4you.net/search/user?nickname=${name}`
  );
  return datas.data.data;
};

export default getMaps;
