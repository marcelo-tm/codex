import { useEffect, useState } from "react";

export function Loading() {
  const [loader, setLoader] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoader((prev) => prev + ".");
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (loader.length === 4) setLoader("");

  return <div>{loader}</div>;
}
