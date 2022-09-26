import axios from "axios";
import DESTINATION_DOMAIN_ADDRESS from "DESTINATION_DOMAIN_ADDRESS";

const getLoactionInfo = async (userId) => {
  const datas = await axios.get(
    `${DESTINATION_DOMAIN_ADDRESS}/${userId}/place`
  );
  return datas.data.data;
};

export default getLoactionInfo;
