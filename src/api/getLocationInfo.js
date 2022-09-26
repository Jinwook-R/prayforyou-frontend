import axios from "axios";

const getLoactionInfo = async (userId) => {
  const datas = await axios.get(
    `https://api.pray4you.net/search/${userId}/place`
  );
  return datas.data.data;
};

export default getLoactionInfo;
