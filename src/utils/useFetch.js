import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const rawData = await fetch(url);
      const data = await rawData.json();
      setData(data)
    })();
  }, []);
  return data;
}

export default useFetch;
