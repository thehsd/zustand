import { useEffect, useState } from "react";

function useFetchData(url = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetch(url);
      const response = await result.json();
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { loading, data };
}

export default useFetchData;
