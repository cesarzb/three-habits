import { useEffect, useState } from "react";

const useFetch = (url, options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw Error("Resource could not be fetched");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
