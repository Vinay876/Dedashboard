import React from "react";

import Loading from "../components/loader/Loading";

export default function WrongUrl() {

  const [Load, setLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
       {Load && <Loading />}
    <h1>404</h1>s
    </>
  );
}
