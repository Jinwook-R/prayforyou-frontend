import axios from "axios";
import DESTINATION_DOMAIN_ADDRESS from "../utils";

const getMaps = async (name) => {
  const datas = await axios.get(
    `${DESTINATION_DOMAIN_ADDRESS}/search/user?nickname=${name}`
  );
  return datas.data.data;
};

export default getMaps;
