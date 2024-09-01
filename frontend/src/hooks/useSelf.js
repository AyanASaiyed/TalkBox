import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useSelf = () => {
  const [loading, setLoadding] = useState(false);

  const [self, setSelf] = useState([]);

  useEffect(() => {
    const getSelfName = async () => {
      setLoadding(true);

      try {
        const res = await fetch("/api/self");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setSelf(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoadding(false);
      }
    };

    getSelfName();
  }, []);

  return { loading, self };
};

export default useSelf;
