import React from "react";
import useMobileHook from "./useMobileHook";

function UsingCustHook() {
  const { isMobile } = useMobileHook();
  return <h4> Your are {isMobile ? "in Mobile" : "not in Mobile."}</h4>;
}

export default UsingCustHook;
