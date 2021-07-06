/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { get } from "../utils/apiRequest";

const useGet = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  let getData = async () => {
    try {
      setLoading(true);
      let { data, status } = await get(url, {});
      if (status === 200) {
        setLoading(false);
        setData(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, loading, error };
};

export default useGet;
