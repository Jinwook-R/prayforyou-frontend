import axios from "axios";

const getBanner = async () => {
  const datas = await axios.get(`https://api.pray4you.net/banner`);
  return datas.data.data;
};

export default getBanner;
