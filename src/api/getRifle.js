import axios from "axios";
import DESTINATION_DOMAIN_ADDRESS from "../utils";

const getRifleInfo = async (userId) => {
  const datas = await axios.get(`${DESTINATION_DOMAIN_ADDRESS}/${userId}/gun`);
  return datas.data.data;
};

export default getRifleInfo;
