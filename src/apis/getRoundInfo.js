import axios from "axios";
import DESTINATION_DOMAIN_ADDRESS from "../utils";

const getRoundInfo = async (userId) => {
  const datas = await axios.get(
    `${DESTINATION_DOMAIN_ADDRESS}/${userId}/round`
  );
  return datas.data.data;
};

export default getRoundInfo;
