import React from "react";
import Loading from "../components/loader/Loading";

export default function Designs() {
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
    Designs
    </>
  );
}
