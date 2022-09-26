import axios from "axios";
import DESTINATION_DOMAIN_ADDRESS from "../utils";

const getMaps = async () => {
  const datas = await axios.get(
    `${DESTINATION_DOMAIN_ADDRESS}/battle/positions`
  );
  return datas.data.data;
};

export default getMaps;
