import React, { Suspense } from "react";
const OtherComponent = React.lazy(() => import("./OtherComponent"));

export default function ReactLazy() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
